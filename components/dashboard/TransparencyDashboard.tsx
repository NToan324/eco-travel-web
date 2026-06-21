"use client";

import DocItem from "./DocItem";
import {
  IconPin,
  IconDoc,
  IconReceipt,
  IconPermit,
  IconCertificate,
  IconAudit,
  IconNGO,
  IconImpact,
  IconDashboard,
} from "./icon";
import TrustItem from "./TrustItem";
import ForestMap from "./ForestMap";
import BarChart from "./BarChart";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function TransparencyDashboard() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#f4f9f6] px-4 py-14 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-2xl mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-[#1B4332] leading-tight">
          Minh bạch tuyệt đối chống greenwashing.
        </h1>
        <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
          Mọi hành động ảo đều kết nối với dữ liệu rừng thực, báo cáo tài chính,
          tài liệu hỗ trợ và bằng chứng xác minh độc lập.
        </p>
      </div>

      <div className="w-full max-w-4xl space-y-5">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-[1.4] bg-white rounded-2xl shadow-sm p-5">
            <div className="flex items-center gap-2 text-[#1B4332] font-bold mb-4">
              <IconPin />
              <span>Bản đồ GPS Rừng Thực</span>
            </div>
            <ForestMap />
          </div>

          <div className="flex justify-between items-start gap-2 flex-col flex-1 bg-[#1B4332] rounded-2xl shadow-sm p-6 text-white">
            <h2 className="text-lg font-bold mb-4">Phân tích Thời gian Thực</h2>

            <div className="space-y-2 text-sm w-full">
              <div className="flex justify-between">
                <span className="text-white/70">Đóng góp du khách:</span>
                <span className="font-semibold">128.400.000 VNĐ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Quỹ đối ứng công ty:</span>
                <span className="font-semibold">128.400.000 VNĐ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Cây tài trợ / đã trồng:</span>
                <span className="font-semibold">4.280 / 2.914</span>
              </div>
            </div>
            <div className="w-full">
              <BarChart />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Tài liệu Hỗ trợ
            </h2>

            <div className="space-y-2.5">
              <DocItem
                icon={<IconDoc />}
                title="Hóa đơn điện tử"
                subtitle="Sổ cái công khai hàng tháng"
              />
              <DocItem
                icon={<IconReceipt />}
                title="Biên lai mua cây"
                subtitle="Khớp với lô trồng cây"
              />
              <DocItem
                icon={<IconPermit />}
                title="Giấy phép lâm nghiệp"
                subtitle="Phê duyệt phục hồi của Chính phủ"
              />
            </div>
          </div>

          <div className="flex-[1.6] bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Trung tâm Tin cậy & Chứng nhận
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <TrustItem
                icon={<IconCertificate />}
                title="Chứng chỉ bù carbon"
                subtitle="Cấp theo lô đã xác minh"
              />
              <TrustItem
                icon={<IconAudit />}
                title="Kiểm toán bên thứ ba"
                subtitle="Đánh giá môi trường độc lập"
              />
              <TrustItem
                icon={<IconNGO />}
                title="Báo cáo giám sát NGO"
                subtitle="Bằng chứng sinh tồn & bảo dưỡng"
              />
              <TrustItem
                icon={<IconImpact />}
                title="Đánh giá tác động"
                subtitle="Báo cáo bền vững hàng năm"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl shadow-sm px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm font-bold text-gray-900 leading-relaxed max-w-lg">
            Tiến trình ảo, bằng chứng công khai và phục hồi rừng ngập mặn thực
            sự — tất cả kết nối trong một tài khoản du khách.
          </p>

          <Button
            className="flex h-12 items-center gap-2 bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-sm font-bold py-3 px-5 rounded-xl transition-colors whitespace-nowrap shrink-0"
            onClick={() => router.push("/transparency")}
          >
            Mở Bảng điều khiển
            <IconDashboard />
          </Button>
        </div>
      </div>
    </div>
  );
}
