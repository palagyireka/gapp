import { useState } from 'react';

interface SwitcherTwoProps {
  label_left: string;
  label_right: string;
  checked: boolean;
}

const SwitcherTwo: React.FC<SwitcherTwoProps> = ({
  label_left,
  label_right,
  checked,
}) => {
  const [enabled, setEnabled] = useState(checked);

  return (
    <div x-data="{ switcherToggle: false }">
      <div className="pr-3 text-lg">{label_left}</div>
      <label
        htmlFor="toggle2"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            id="toggle2"
            type="checkbox"
            className="sr-only"
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
          <div className="h-5 w-14 rounded-full bg-meta-9 shadow-inner dark:bg-[#5A616B]"></div>
          <div
            className={`dot absolute left-0 -top-1 h-7 w-7 rounded-full bg-white shadow-switch-1 transition ${
              enabled && '!right-0 !translate-x-full !bg-primary dark:!bg-white'
            }`}
          ></div>
        </div>
        <div className="pl-3 text-lg">{label_right}</div>
      </label>
    </div>
  );
};

export default SwitcherTwo;
