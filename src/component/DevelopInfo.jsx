import Data from '../data/Develop.json';

const DevelopInfo = ({ selectedItem }) => {
  if (!selectedItem) {
    const latestItem = Data.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
    selectedItem = latestItem;
  }

  const handleLinkClick = (link) => {
    window.open(link);
  }

  return (
    <div className='lg:w-[55vw] md:w-[50vw] sm:w-[80vw]'>
      <div className='flex justify-between items-center pb-[2vh] flex-col md:flex-row md:pt-0 pt-[2vh]'>
        <h2 className='text-3xl'>{selectedItem.title}</h2>
        <div className='flex gap-5'>
          {selectedItem.link.map((item) => (
            <button className='border-2 border-[#F5F0F6] p-[0.3vw] rounded-md hover:border-[#E2C044] hover:text-[#E2C044] mt-[1vh] md:mt-0' 
            key={item} onClick={() => handleLinkClick(item)}>
              {item.includes('https://github.com/') ? 'GitHub' :
                item.includes('https://www.notion.so/') ? 'Notion' :
                'Link'}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p>기간: {selectedItem.date}</p>
        <div className='flex gap-1 pt-[0.5vh]'>역할: 
          {selectedItem.role.map((item) => (
            <p key={item} className='whitespace-nowrap'>
              {item} / 
            </p>
          ))}
        </div>
        <div className='flex gap-1 pt-[0.5vh] flex-wrap'>사용 툴: 
          {selectedItem.used.map((item) => (
            <p key={item} className='whitespace-nowrap'>
              {item} / 
            </p>
          ))}
        </div>
        <p className='pt-[0.5vh]'>업체: {selectedItem.ent}</p>
      </div>
      <div className='mt-[3vh] h-[58vh] overflow-auto'>
        <div className='pb-[3vh]'>
          <h3 className='text-xl'>About This Project</h3>
          <hr/>
          <p className='flex gap-1 pt-[1vh]'> 요구사항: {selectedItem.needs[0]}</p>
          {selectedItem.needs.slice(1).map((item) => (
            <li className='ml-5 text-sm' key={item}>
              {item}
            </li>
          ))}
          <p className='pt-[0.5vh]'>목적: {selectedItem.todo}</p>
          <p className='pt-[0.5vh]'>소스 데이터: {selectedItem.sourcedata}</p>
        </div>
        <div>
          <h3 className='text-xl'>What I Did</h3>
          <hr />
          {selectedItem.front && (
            <>
              <p className='pt-[1vh]'>Front-End</p>
              {selectedItem.front.map((item) => (
                <li className='ml-5 text-sm' key={item}>
                  {item}
                </li>
              ))}
            </>
          )}
          {selectedItem.back && (
            <>
              <p className='pt-[1vh]'>Back-End</p>
              {selectedItem.back.map((item) => (
                <li className='ml-5 text-sm' key={item}>
                  {item}
                </li>
              ))}
            </>
          )}
          {selectedItem.db && (
            <>
              <p className='pt-[1vh]'>Database</p>
              {selectedItem.db.map((item) => (
                <li className='ml-5 text-sm' key={item}>
                  {item}
                </li>
              ))}
            </>
          )}
          {selectedItem.analyst && (
            <>
              <p className='pt-[1vh]'>Data Analysis</p>
              {selectedItem.analyst.map((item) => (
                <li className='ml-5 text-sm' key={item}>
                  {item}
                </li>
              ))}
            </>
          )}
          {selectedItem.design && (
            <>
              <p className='pt-[1vh]'>Design</p>
              {selectedItem.design.map((item) => (
                <li className='ml-5 text-sm' key={item}>
                  {item}
                </li>
              ))}
            </>
          )}
        </div>
      </div>
    </div>  
  );
};

export default DevelopInfo;