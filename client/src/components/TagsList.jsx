// imports
import { useState } from "react";
import { useAppData } from "../hooks/useAppData";
import TagsDropdown from "../components/TagsDropdown";

export default function TagsList({ handleSelectTag }) {

  // selected option state dec
  const [selectedOption, setSelectedOption] = useState('');

  // retreive all tags
  const { allTags } = useAppData();
  
  const handleClear = () => {
    setSelectedOption('');
    handleSelectTag('');
  };


  return (
    <div>
      <TagsDropdown
        tags={allTags}
        selectedOption={selectedOption}
        onSelect={(value) => {
          setSelectedOption(value);
          handleSelectTag(value);
          }}
          clear={handleClear}
        />
    </div>
  );
}