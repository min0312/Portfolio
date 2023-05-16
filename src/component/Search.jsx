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
    <div className='lg:w-[25vw] md:w-[30vw] sm:w-[80vw] pr-[3vw]'>
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
            className='border-[#F5F0F6] rounded-lg pl-[1vw] pt-[0.5vw] pb-[0.5vw] border-[1px] m-[1vw] group
            hover:border-[#E2C044] hover:text-[#E2C044] focus:border-none focus:text-[#000000] focus:bg-[#E2C044]'>
            <p className=''>{item.title}</p>
            <p className='mt-[0.1vw] mb-[0.3vw] text-sm flex gap-5'>
              {item.date}
              <div className='flex gap-2'>
                {item.role.map((roleitem) => (
                  <p className='text-sm' key={roleitem}>{roleitem}</p>
                ))}
              </div>
            </p>
            <div className='flex gap-1'>
              {item.used.map((usedItem) => (
                <p className='text-xs border-[0.5px] border-[#F5F0F6] rounded-md p-[2px] group-hover:border-[#E2C044]' key={usedItem}>{usedItem}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
