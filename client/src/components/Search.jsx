// imoprts
import { useState } from 'react';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Perform search action here
    // You can send the query to your backend server or search locally
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="SEARCH"
      />
      <button onClick={handleSearch}>SEARCH</button>
    </div>
  );
}

export default Search;
