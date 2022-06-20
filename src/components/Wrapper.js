const Wrapper = ({ children }) => {
  return (
    <div className='min-h-screen w-full grid grid-rows-[min-content_1fr] bg-neutral-white'>
      {children}
    </div>
  );
};

export default Wrapper;
