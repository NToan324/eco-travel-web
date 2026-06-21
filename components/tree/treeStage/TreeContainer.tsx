import TreeIllustration from "./TreeIllustration";
import { TreeStage } from "./types";
import WaterDrops from "./WaterDrops";

interface TreeContainerProps {
  stage: TreeStage;
  isWatering: boolean;
  treeRef: React.RefObject<HTMLDivElement | null>;
}

const TreeContainer = ({ stage, isWatering, treeRef }: TreeContainerProps) => {
  return (
    <div className="relative flex flex-1 w-full flex-col items-center justify-center bg-white h-80 sm:h-96 md:h-[32rem] lg:h-150 rounded-xl overflow-hidden">
      <WaterDrops active={isWatering} />

      <div
        ref={treeRef}
        className="transform scale-100 sm:scale-125 md:scale-150 lg:scale-175 transition-transform duration-500 my-4"
      >
        <TreeIllustration stage={stage} isWatering={isWatering} />
      </div>
    </div>
  );
};

export default TreeContainer;
