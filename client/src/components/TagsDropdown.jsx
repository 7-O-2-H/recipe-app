// imports
import Link from "next/link";

export default function TagsDropdown({ tags, selectedOption, onSelect }) {
  
  // template
  return (
    <div className="tags-dropdown">
      <select onChange={(e) => onSelect(e.target.value)} value={selectedOption}>
        <option value="">TAGS</option>
        {tags.map((tag) => (
          <option key={tag.id} value={tag.tag}>
            <Link href={`/tags/${tag.id}`}>
              {tag.tag}
            </Link>
          </option>
        ))}
      </select>   
    </div>
  );
}