import React from 'react'

function Contact() {
  return (
    <div className="container">
      <h2 className=' mt-3 md:mb-0 mb-6 text-center font-bold text-xl md:text-3xl'>Our Contact</h2>

      <div className='md:mb-0 mb-14 flex justify-center items-center flex-row-reverse gap-10 md:py-0 py-5 px-3 md:px-5 '>
        <form action="https://formspree.io/f/myyrqodk" method='post' className='md:border-2 md:border-primary flex flex-col gap-3 w-full md:w-1/2 md:p-10'>
          <input type="text" name='userName' placeholder='Enter Your Name' autoComplete='off' required className=' border-2 border-gray-500 h-10 outline-none focus:border-secondary' />
          <input type="email" name='email' placeholder='Enter Your Email' autoComplete='off' required className=' border-2 border-gray-500 h-10 outline-none focus:border-secondary' />
          <textarea name="message" id="" placeholder='Type Your Message' autoComplete='off' required className=' border-2 border-gray-500 h-44 min-h-10 outline-none focus:border-secondary'></textarea>
          <input type="submit" value="Send" className='w-fit px-6 py-2 rounded-md bg-secondary text-white font-poppins font-medium hover:animate-pulse hover:cursor-pointer hover:font-bold  transition-all' />
        </form>

        <div className='hidden md:block w-[550px]'>
          <img src="./images/contact.jpg" alt="" />
        </div>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.500966550911!2d85.31167773604534!3d27.70058153593867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ab1edbcaa3%3A0xdc1822063c54a057!2sTundikhel!5e0!3m2!1sen!2snp!4v1717650955081!5m2!1sen!2snp" className='shadow-md h-[300px] md:h-[450px]' width="100%" loading="lazy" ></iframe>


    </div>
  )
}

export default Contact