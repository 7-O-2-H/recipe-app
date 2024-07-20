// imoprts
import { useState } from 'react';
import { useRouter } from 'next/router';

function Search() {

  const router = useRouter();

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Perform search action here
    // You can send the query to your backend server or search locally
    localStorage.setItem('query', query);
    router.push('/browse');
    // onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="SEARCH"
      />
      <button onClick={handleSearch} className='search-tools-button'>SEARCH</button>
    </div>
  );
}

export default Search;
