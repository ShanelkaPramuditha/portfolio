import BeatLoader from 'react-spinners/BeatLoader';

function Spinner() {
  return (
    <div className='bg-white dark:bg-gray-900 content-center h-full'>
      <div className='sweet-loading flex justify-center h-full'>
        <BeatLoader
          color='#2563EB'
          size={40}
          loading={true}
        />
      </div>
    </div>
  );
}

export default Spinner;
