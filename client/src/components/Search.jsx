// imoprts
import { useState } from 'react';

export default function Search({ handleSearch }) {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="SEARCH"
      />
      <button onClick={handleSearch} className='search-tools-button'>SEARCH</button>
    </div>
  );
};
