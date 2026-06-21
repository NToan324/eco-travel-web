import { Checkbox } from "@/components/ui/checkbox";

interface OffsetCheckboxProps {
  checked: boolean | string;
  offsetAmount: number;
  formatVND: (amount: number) => string;
  onChange: (checked: boolean | string) => void;
}

const OffsetCheckbox = ({
  checked,
  offsetAmount,
  formatVND,
  onChange,
}: OffsetCheckboxProps) => {
  return (
    <label className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors">
      <Checkbox
        checked={checked === true || checked === "true"}
        onCheckedChange={(val) => onChange(val)}
      />
      <span className="text-sm text-gray-700">
        Vâng, tôi muốn bù đắp lượng khí thải carbon của chuyến đi <br /> (+{" "}
        {formatVND(offsetAmount)})
      </span>
    </label>
  );
};

export default OffsetCheckbox;
