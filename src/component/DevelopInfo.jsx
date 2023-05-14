import Data from '../data/Develop.json';

const DevelopInfo = ({ selectedItem }) => {
  if (!selectedItem) {
    const latestItem = Data.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
    selectedItem = latestItem;
  }

  return (
    <div className='bg-red-400D'>
      <h2>{selectedItem.title}</h2>
      <p>{selectedItem.date}</p>
      <p>{selectedItem.description}</p>
    </div>
  );
};

export default DevelopInfo;