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
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl'>{selectedItem.title}</h2>
        <div className='flex gap-5'>
          {selectedItem.link.map((item) => (
            <p className='border-2 border-[#F5F0F6] p-[0.3vw] rounded-md' key={item}
            onClick={() => handleLinkClick(item)}>
              {item.includes('https://github.com/') ? 'GitHub' :
                item.includes('https://www.notion.so/') ? 'Notion' :
                'Link'}
            </p>
          ))}
        </div>
      </div>
      <div>
        <p>기간: {selectedItem.date}</p>
        <p className='flex gap-1'>역할: 
          {selectedItem.role.map((item) => (
            <p key={item}>
              {item} / 
            </p>
          ))}
        </p>
        <p className='flex gap-1'>사용 툴: 
          {selectedItem.used.map((item) => (
            <p key={item}>
              {item} / 
            </p>
          ))}
        </p>
        <p>업체: {selectedItem.ent}</p>
      </div>
      <div>
        <h3>About This Project</h3>
        <hr/>
        <p className='flex gap-1'> 요구사항: {selectedItem.needs[0]}</p>
        {selectedItem.needs.slice(1).map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
        <p>목적: {selectedItem.todo}</p>
        <p>소스 데이터: {selectedItem.sourcedata}</p>
      </div>
      <div>
        <h3>What I Did</h3>
        <hr/>
        {/* <p className='flex gap-1'> 요구사항: {selectedItem.needs[0]}</p>
        {selectedItem.needs.slice(1).map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
        <p>목적: {selectedItem.todo}</p>
        <p>소스 데이터: {selectedItem.sourcedata}</p> */}
      </div>
    </div>  
  );
};

export default DevelopInfo;