// imoprts
import { useState } from 'react';

export default function Search({ handleSearch }) {

  const [searchQuery, setSearchQuery] = useState('');

  const handleClear = () => {
    setSearchQuery('');
    handleSearch('');
  };

  return (
    <div className="search-and-btn">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="SEARCH"
      />
      <button onClick={() => handleSearch(searchQuery)} className='search-tools-button'>SEARCH</button>
      {/* <button onClick={handleClear} className='search-tools-button'>CLEAR</button> */}
    </div>
  );
};
