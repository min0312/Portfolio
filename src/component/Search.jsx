import { useEffect, useState } from 'react';
import Data from '../data/Develop.json';

const Search = ({ onResultSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const latestResults = Data.sort((a, b) => new Date(b.date) - new Date(a.date));
    setResults(latestResults);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);
    if (!query) {
      setResults(Data);
      return;
    }
    const filteredResults = Data.filter((item) =>
      ['title', 'date', 'role', 'used'].some(
        (key) =>
          item[key].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
    setResults(filteredResults);
  };  

  return (
    <div className='w-[25vw] pr-[3vw]'>
      <div>
        <h3>Search</h3>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleSearch}
          className='bg-transparent mt-[2vh] mb-[2vh] focus:outline-none border-[#F5F0F6] border-[1px] rounded-lg w-[100%] pl-[1vw] pt-[5px] pb-[5px]'
        />
      </div>
      <div className='border-[#F5F0F6] border-[1px] rounded-lg h-[70vh]'>
        {results.map((item) => (
          <div key={item.id} onClick={() => onResultSelect(item)}
            className='border-[#F5F0F6] rounded-lg pl-[1vw] pt-[0.5vw] pb-[0.5vw] border-[1px] m-[1vw]'>
            <p className=''>{item.title}</p>
            <p className='mt-[0.2vw] mb-[0.2vw] text-sm'>{item.date}{item.role}</p>
            <p className='text-sm'>{item.used}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
