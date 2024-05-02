// imports
import { useState } from "react";
import TimesDropdown from "../components/TimesDropdown";
import { useSortingData } from "../hooks/useSortingData";


export default function TimesList() {

  // selected option state dec
  const [selectedOption, setSelectedOption] = useState('');

  const timeOptions = [
    {id: 1, timeOption: "10 minutes or less", time: 11},
    {id: 2, timeOption: "30 minutes or less", time: 31},
    {id: 3, timeOption: "45 minutes minutes or less", time: 46},
    {id: 4, timeOption: "1 hour or less", time: 61},
    {id: 5, timeOption: "2 hours or less", time: 121},
    {id: 6, timeOption: "Over 2 houses", time: 120}
  ];

  const handleSelect = (selectedOption) => {
    // console.log('Selected Option:', selectedOption);
    localStorage.setItem('maxTime', selectedOption);
    useSortingData();

  };

  return (
    <div>
      <TimesDropdown times={timeOptions} selectOption={selectedOption} onSelect={handleSelect} />
    </div>
  );
}