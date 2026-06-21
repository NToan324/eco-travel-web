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
    <div className="relative flex flex-1 flex-col items-center justify-center bg-white h-150 rounded-xl overflow-hidden">
      <WaterDrops active={isWatering} />

      <div
        ref={treeRef}
        className="transform scale-175 transition-transform duration-500 my-4"
      >
        <TreeIllustration stage={stage} isWatering={isWatering} />
      </div>
    </div>
  );
};

export default TreeContainer;
