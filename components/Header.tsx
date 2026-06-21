import Link from "next/link";
import { Button } from "./ui/button";
import { TbLocation } from "react-icons/tb";

export default function Header() {
  return (
    <header className="w-full text-black py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-semibold">Eco Travel</h1>
        <nav className="font-semibold flex justify-center items-center gap-6">
          <Link href="/" className="ml-4 hover:underline">
            Trang chủ
          </Link>
          <Link href="/transparency" className="ml-4 hover:underline">
            Minh bạch
          </Link>
          <Link href="/campaign" className="ml-4 hover:underline">
            Chiến dịch
          </Link>
          <Link href="/impact" className="ml-4 hover:underline">
            Tác động
          </Link>
          <Link href="/about" className="ml-4 hover:underline">
            Về chúng tôi
          </Link>
        </nav>
        <Button variant="default" className="w-32 h-10">
          Liên hệ
          <TbLocation />
        </Button>
      </div>
    </header>
  );
}
