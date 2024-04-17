// imports
import { useState } from "react";
import TimesDropdown from "../components/TimesDropdown";

export default function TimesList() {

  // selected option state dec
  const [selectedOption, setSelectedOption] = useState('');

  const timeOptions = [
    {id: 1, timeOption: "10 minutes", time: 11},
    {id: 2, timeOption: "30 minutes", time: 31},
    {id: 3, timeOption: "45 minutes", time: 46},
    {id: 4, timeOption: "1 hour", time: 61},
    {id: 5, timeOption: "2 hours", time: 121},
  ];

  const handleSelect = (selectedOption) => {
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div>
      <TimesDropdown times={timeOptions} selectOption={selectedOption} onSelect={handleSelect} />
    </div>
  );
}