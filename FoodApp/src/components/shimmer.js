const Shimmer = () => {
  return (
    <div className='flex flex-wrap gap-5'>
      {Array(10)
        .fill('')
        .map((el, idx) => (
          <div key={idx}>
            <div className='m-5 p-5 w-[200] h-[200] bg-gray-200 shadow-md rounded'></div>
            <div className='m-5 p-1 w-[150] h-0 bg-gray-200'></div>
            <div className='m-5 p-1 w-[100] h-0 bg-gray-200'></div>

          </div>
        ))}
    </div>
  );
};
export default Shimmer;
