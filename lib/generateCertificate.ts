import QRCode from "qrcode";

export type CertificateData = {
  userName: string;
  ecoTitle: string;
  achievementText: string;
  co2Kg: number;
  destination: string;
  shareUrl: string;
};

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function drawLeaf(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number,
  color: string,
) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, size);
  ctx.bezierCurveTo(size, size, size, -size * 0.6, 0, -size);
  ctx.bezierCurveTo(-size, -size * 0.6, -size, size, 0, size);
  ctx.fill();
  ctx.restore();
}

async function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Renders a shareable "green certificate" PNG to a data URL.
 * Portrait 1080x1350 — friendly for both feed and story aspect ratios.
 */
export async function generateCertificateImage(
  data: CertificateData,
): Promise<string> {
  const W = 1080;
  const H = 1350;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");

  // --- background ---
  const bgGrad = ctx.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, "#0F2B22");
  bgGrad.addColorStop(1, "#1F4D3A");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // ambient leaf texture
  ctx.globalAlpha = 0.08;
  const leafSeeds = [
    [120, 140, 34],
    [940, 90, 26],
    [60, 1180, 30],
    [1000, 1240, 22],
    [880, 560, 40],
    [150, 760, 28],
  ];
  leafSeeds.forEach(([x, y, s]) => drawLeaf(ctx, x, y, s, "#FFFFFF"));
  ctx.globalAlpha = 1;

  // --- card panel ---
  const pad = 64;
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.25)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 18;
  ctx.fillStyle = "#FBF8F2";
  roundRect(ctx, pad, pad, W - pad * 2, H - pad * 2, 40);
  ctx.fill();
  ctx.restore();

  const innerX = pad + 56;
  const innerW = W - pad * 2 - 112;
  let cursorY = pad + 96;

  // eyebrow badge (leaf in amber ring)
  ctx.beginPath();
  ctx.arc(W / 2, cursorY, 34, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(217,164,65,0.15)";
  ctx.fill();
  drawLeaf(ctx, W / 2, cursorY + 6, 18, "#1F4D3A");
  cursorY += 78;

  // eyebrow text
  ctx.fillStyle = "#D9A441";
  ctx.font = "700 26px Georgia, serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.save();
  ctx.letterSpacing = "4px";
  ctx.fillText("CHỨNG NHẬN HÀNH TRÌNH XANH", W / 2, cursorY);
  ctx.restore();
  cursorY += 66;

  // user name
  ctx.fillStyle = "#1B231E";
  ctx.font = "700 56px Georgia, serif";
  ctx.fillText(data.userName, W / 2, cursorY);
  cursorY += 50;

  // eco title pill
  const pillLabel = data.ecoTitle;
  ctx.font = "600 26px Arial, sans-serif";
  const pillTextWidth = ctx.measureText(pillLabel).width;
  const pillW = pillTextWidth + 64;
  const pillH = 52;
  roundRect(ctx, W / 2 - pillW / 2, cursorY, pillW, pillH, pillH / 2);
  ctx.fillStyle = "rgba(31,77,58,0.10)";
  ctx.fill();
  ctx.fillStyle = "#1F4D3A";
  ctx.textBaseline = "middle";
  ctx.fillText(pillLabel, W / 2, cursorY + pillH / 2 + 1);
  ctx.textBaseline = "alphabetic";
  cursorY += pillH + 64;

  // hairline divider
  ctx.strokeStyle = "#D8E3DA";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(innerX, cursorY);
  ctx.lineTo(innerX + innerW, cursorY);
  ctx.stroke();
  ctx.setLineDash([]);
  cursorY += 70;

  // achievement quote
  ctx.fillStyle = "#1B231E";
  ctx.font = "600 40px Georgia, serif";
  const lines = wrapText(ctx, `“${data.achievementText}”`, innerW - 40);
  lines.forEach((line) => {
    ctx.fillText(line, W / 2, cursorY);
    cursorY += 54;
  });
  cursorY += 30;

  // stat row: big CO2 number
  ctx.font = "700 88px 'IBM Plex Mono', Menlo, monospace";
  ctx.fillStyle = "#1F4D3A";
  ctx.fillText(`${data.co2Kg} kg`, W / 2, cursorY);
  cursorY += 38;
  ctx.font = "500 26px Arial, sans-serif";
  ctx.fillStyle = "#6B7A70";
  ctx.fillText("CO₂ đã được trung hòa", W / 2, cursorY);
  cursorY += 56;

  ctx.font = "400 24px Arial, sans-serif";
  ctx.fillStyle = "#6B7A70";
  ctx.fillText(`Hành trình đến ${data.destination}`, W / 2, cursorY);

  // --- footer: QR code + site label ---
  const qrSize = 168;
  const qrDataUrl = await QRCode.toDataURL(data.shareUrl, {
    margin: 0,
    width: qrSize,
    color: { dark: "#1B231E", light: "#FBF8F2" },
  });
  const qrImg = await loadImage(qrDataUrl);

  const footerY = H - pad - 56 - qrSize;
  const qrX = W / 2 - qrSize / 2;

  ctx.fillStyle = "#EAF3EC";
  roundRect(ctx, qrX - 16, footerY - 16, qrSize + 32, qrSize + 32, 20);
  ctx.fill();
  ctx.drawImage(qrImg, qrX, footerY, qrSize, qrSize);

  ctx.font = "500 24px Arial, sans-serif";
  ctx.fillStyle = "#6B7A70";
  ctx.fillText(
    "Quét mã để xem hành trình xanh của bạn",
    W / 2,
    footerY + qrSize + 50,
  );

  ctx.font = "700 24px Arial, sans-serif";
  ctx.fillStyle = "#1F4D3A";
  ctx.fillText("ecotrip.vn", W / 2, footerY + qrSize + 84);

  return canvas.toDataURL("image/png");
}

export async function dataUrlToFile(
  dataUrl: string,
  filename: string,
): Promise<File> {
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  return new File([blob], filename, { type: blob.type });
}
