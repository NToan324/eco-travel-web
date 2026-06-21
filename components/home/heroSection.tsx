import Badge from "@/components/home/badge";
import Banner from "@/components/home/banner";
import { LuBuilding2 } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div>
      <Banner />
      <div className="space-y-4">
        <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold text-gray-800 mt-4 uppercase leading-14 md:leading-20">
          Nuôi cây ảo Trồng cây thật
        </h1>
        <p>
          Hành động nhỏ, tác động lớn. Tham gia thử thách nuôi cây ảo ngay hôm
          nay để trực tiếp đóng góp một cây thật cho các dự án phủ xanh Việt
          Nam.
        </p>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <Badge />
        <Badge
          icon={<LuBuilding2 />}
          value="15:20"
          description="Công ty đã đóng góp"
        />
      </div>
    </div>
  );
};

export default HeroSection;
