// imports
import TimesDropdown from "../components/TimesDropdown";

export default function TimesList() {

  const timeOptions = [
    {id: 1, time: "10 minutes"},
    {id: 2, time: "30 minutes"},
    {id: 3, time: "45 minutes"},
    {id: 4, time: "1 hour"},
    {id: 5, time: "1 hour +"},
    {id: 6, time: "2 hours +"}
  ]

  const handleSelect = (selectedOption) => {
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div>
      <TimesDropdown times={timeOptions} onSelect={handleSelect} />
    </div>
  );
}