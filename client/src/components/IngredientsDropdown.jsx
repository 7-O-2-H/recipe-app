export default function IngredientsDropdown({ ingredients, selectedOption, onSelect, clear }) {
  
  // template
  return (
    <div >
      <select className="browse-drop" onChange={(e) => onSelect(e.target.value)} value={selectedOption}>
        <option value="">INGREDIENTS</option>
        {ingredients.map((ingredient) => (
          <option key={ingredient.id} value={ingredient.ingredient}>
            {ingredient.ingredient}
          </option>
        ))}
      </select>   
      <button onClick={clear} className="search-tools-button" >CLEAR</button>
    </div>
  );
}