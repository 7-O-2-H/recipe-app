// imports
import { useState } from "react";
import TimesDropdown from "../components/TimesDropdown";
import { useRouter } from "next/router";
export default function TimesList() {

  const router = useRouter();
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
    localStorage.setItem('maxTime', 0);
    setSelectedOption('');
    router.push('/browse');
  };

  const handleSelect = (selectedOption) => {
    localStorage.setItem('maxTime', selectedOption);
    router.push('/browse');
  };

  return (
    <div>
      <TimesDropdown times={timeOptions} selectOption={selectedOption} onSelect={handleSelect} />
      <button onClick={handleClear}>CLEAR</button>
    </div>
  );
}