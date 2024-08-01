export default function TagsDropdown({ tags, selectedOption, onSelect, clear }) {  

  console.log(selectedOption);
  
  // template
  return (
    <div className="search-and-btn">
      <select className="browse-drop" onChange={(e) => onSelect(e.target.value)} value={selectedOption}>
        <option value="">TAGS</option>
        {tags.map((tag) => (
          <option key={tag.id} value={tag.tag}>            
              {tag.tag}
          </option>
        ))}
      </select>
      <button onClick={clear} className="search-tools-button" >CLEAR</button>
    </div>
  );
}