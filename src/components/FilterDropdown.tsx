import { ChangeEvent } from "react";

type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const FilterDropdown = ({ label, options, value, onChange }: Props) => {
  return (
    <div className="filterDropdown">
      <label htmlFor={label}>{label}</label>
      <select onChange={onChange} value={value} id={label}>
        <option value="" disabled>
          -select {label.toLowerCase()}-
        </option>
        <option value="all">All</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option.at(0)?.toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
