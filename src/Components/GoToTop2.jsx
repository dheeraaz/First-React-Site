import React, { useRef, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

function GoToTop() {
  const btnRef = useRef(null);


  useEffect(() => {
    function handleScrollBtnVisibility() {
      if (window.scrollY > 120) {
        btnRef.current?.classList.remove('hidden');
      } else {
        btnRef.current?.classList.add('hidden');
      }
    }

    //this will add scroll eventlistener and its corresponding function to window
    window.addEventListener('scroll', handleScrollBtnVisibility);

    //this will remove scroll eventlistener when a component is removed
    return () => {
      window.removeEventListener('scroll', handleScrollBtnVisibility);
    };
  }, []);
  // since this useEffect has empty array as dependency, it will only execute when a component is mounted

  function goToTopFunction() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button
      onClick={goToTopFunction}
      ref={btnRef}
      className='hidden group fixed z-50 top-[85%] right-[3%]'
    >
      <div className='bg-secondary rounded-full p-4'>
        <FaArrowUp className='font-medium text-lg transition-all group-hover:-translate-y-1' />
      </div>
    </button>
  );
}

export default GoToTop;
