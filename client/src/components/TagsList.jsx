// imports
import { useState } from "react";
import { useAppData } from "../hooks/useAppData";
import TagsDropdown from "../components/TagsDropdown";
import { useRouter } from "next/router";

export default function TagsList() {

  const router = useRouter();

  // selected option state dec
  const [selectedOption, setSelectedOption] = useState('');

  // retreive all tags
  const { allTags } = useAppData();
  
  const handleClear = () => {
    localStorage.setItem('tag', '');
    router.push('/browse');
  };

  const handleSelect = (selectedOption) => {
    localStorage.setItem('tag', selectedOption);
    router.push('/browse');
  };

  return (
    <div>
      <TagsDropdown tags={allTags} selectOption={selectedOption} onSelect={handleSelect} clear={handleClear} />
    </div>
  );
}