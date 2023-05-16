import { useEffect, useState } from 'react';
import { RxTriangleDown, RxTriangleRight } from 'react-icons/rx';
import { useMediaQuery } from 'react-responsive';

const Search = ({ onResultSelect, data }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isFolded, setIsFolded] = useState(true);

  useEffect(() => {
    const latestResults = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    setResults(latestResults);
  }, [data]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);
    if (!query) {
      setResults(data);
      return;
    }
    const filteredResults = data.filter((item) =>
      ['title', 'date', 'role', 'used'].some(
        (key) =>
          item[key].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
    setResults(filteredResults);
  };

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  const toggleFold = () => {
    setIsFolded(!isFolded);
  };

  return (
    <div className='lg:w-[25vw] md:w-[30vw] sm:w-[80vw] pr-[3vw]'>
      <div>
        <div className='flex justify-between'>
          <h3>Search</h3>
          <p className=''>({results.length})</p>
        </div>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleSearch}
          className='bg-transparent mt-[1.5vh] mb-[1.5vh] focus:outline-none border-[#F5F0F6] border-[1px] rounded-lg w-[100%] pl-[1vw] pt-[5px] pb-[5px]'
        />
      </div>
      {isTabletOrMobile ? (
        <div>
          <button
            className='focus:outline-none flex items-center'
            onClick={toggleFold}
          >
            {isFolded ? <RxTriangleRight /> : <RxTriangleDown />}
            {isFolded ? 'Show List' : 'Hide List'}
          </button>
          {!isFolded && (
            <div className='border-[#F5F0F6] border-[1px] rounded-lg md:h-[70vh] h-[30vh] flex-col flex overflow-auto p-[1vw] gap-3'>
              {results.map((item) => (
                <div key={item.id} onClick={() => onResultSelect(item)}
                  className='border-[#F5F0F6] rounded-lg pl-[1vw] pr-[1vw] pt-[0.5vw] pb-[0.5vw] border-[1px] lg:w-[100%] sm:w-[70vw] group 
                  hover:border-[#E2C044] hover:text-[#E2C044] focus:border-none focus:text-[#000000] focus:bg-[#E2C044]'>
                  <p className='text-sm md:text-base'>{item.title}</p>
                  <div className='mt-[0.1vw] mb-[0.3vw] text-xs md:text-sm flex flex-wrap justify-between'>
                    <p className='flex-nowrap'>{item.date}</p>
                    <div className='flex whitespace-nowrap'>
                      {item.role.map((roleitem) => (
                        <p className='text-xs md:text-sm whitespace-nowrap pr-[5px]' key={roleitem}>{roleitem}</p>
                      ))}
                    </div>
                  </div>
                  <div className='flex gap-1 flex-wrap'>
                    {item.used.map((usedItem) => (
                      <p className='text-[9px] md:text-xs border-[0.5px] border-[#F5F0F6] rounded-md p-[2px] group-hover:border-[#E2C044] flex-nowrap' key={usedItem}>{usedItem}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ):
      <div className='border-[#F5F0F6] border-[1px] rounded-lg md:h-[70vh] h-[30vh] flex-col flex overflow-auto p-[1vw] gap-3'>
        {results.map((item) => (
          <div key={item.id} onClick={() => onResultSelect(item)}
            className='border-[#F5F0F6] rounded-lg pl-[1vw] pr-[1vw] pt-[0.5vw] pb-[0.5vw] border-[1px] lg:w-[100%] sm:w-[70vw] group 
            hover:border-[#E2C044] hover:text-[#E2C044] focus:border-none focus:text-[#000000] focus:bg-[#E2C044]'>
            <p className='text-sm md:text-base'>{item.title}</p>
            <div className='mt-[0.1vw] mb-[0.3vw] text-xs md:text-sm flex flex-wrap justify-between'>
              <p className='flex-nowrap'>{item.date}</p>
              <div className='flex whitespace-nowrap'>
                {item.role.map((roleitem) => (
                  <p className='text-xs md:text-sm whitespace-nowrap pr-[5px]' key={roleitem}>{roleitem}</p>
                ))}
              </div>
            </div>
            <div className='flex gap-1 flex-wrap'>
              {item.used.map((usedItem) => (
                <p className='text-[9px] md:text-xs border-[0.5px] border-[#F5F0F6] rounded-md p-[2px] group-hover:border-[#E2C044] flex-nowrap' key={usedItem}>{usedItem}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
              }
    </div>
  );
};

export default Search;
