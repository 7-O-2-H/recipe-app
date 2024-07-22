// imports
import { useState } from "react";
import TimesDropdown from "../components/TimesDropdown";

export default function TimesList({ handleSelectTime }) {

  // selected option state dec
  const [selectedOption, setSelectedOption] = useState('');

  const timeOptions = [
    {id: 1, timeOption: "10 minutes or less", time: 11},
    {id: 2, timeOption: "30 minutes or less", time: 31},
    {id: 3, timeOption: "45 minutes minutes or less", time: 46},
    {id: 4, timeOption: "1 hour or less", time: 61},
    {id: 5, timeOption: "2 hours or less", time: 121},
  ];

  const handleClear = () => {
    setSelectedOption('');
    handleSelectTime('');
  };


  return (
    <div>
      <TimesDropdown
        times={timeOptions} 
        selectedOption={selectedOption}
        onSelect={(value) => {
          setSelectedOption(value);
          handleSelectTime(value);
        }} 
        clear={handleClear}
      />
    </div>
  );
};