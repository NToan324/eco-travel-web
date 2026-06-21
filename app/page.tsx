import Badge from "@/components/home/badge";
import Banner from "@/components/home/banner";
import { LuBuilding2 } from "react-icons/lu";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto py-6">
      <main>
        {/* Banner */}
        <div className="">
          <Banner />
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-800 mt-4 uppercase leading-20">
              Nuôi cây ảo Trồng cây thật
            </h1>
            <p>
              Hành động nhỏ, tác động lớn. Tham gia thử thách nuôi cây ảo ngay
              hôm nay để trực tiếp đóng góp một cây thật cho các dự án phủ xanh
              Việt Nam.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <Badge />
            <Badge
              icon={<LuBuilding2 />}
              value={"1:1"}
              description="Company match"
            />
          </div>
        </div>
        {/* Payment */}
        <div className=""></div>
      </main>
    </div>
  );
}
