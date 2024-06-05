import{useState,useRef} from 'react';
import emailjs from '@emailjs/browser';
import{motion} from 'framer-motion';
import styles from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import React from 'react'
import { send } from 'vite';

const Contact = () => {
  const fromRef = useRef();
  const [from, setForm ]=useState({
    name:'',
    email:'',
    message:''
  });
  const [loading, setLoading] = useState(false);
  const handlChange = (e) => {
    const{ name, value} = e.target;
    setForm({
      ...from,
      [name]:value
    })
  }
  const handlSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // emailjs send(
    // ){
    //   from_name:from.name,
    //   to_name:'Ashish',
    //   from_email:from.email,
    //   to_email:'aashishmalviya4724@gmail.co',
    //   message:from.message
    // },
    // .then(()=>{
    //   setLoading(false);
    //   alert('Thank you. I will get back to you as soon as possible.');
    //   setForm({
    //     name:'',
    //     email:'',
    //     message:''
    //   })
    // },(error)=>{
    //   setLoading(false);
    //   console.log(error);
    //   alert('Something went wrong')
    // })

  }
  return (
    <div
     className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
<motion.div variants={slideIn("left", "tween", 0.2, 1)}
className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
<p className={styles.sectionSubText}> Get in touch</p>
<h3 className= {styles.sectionHeadText}>Contact.</h3>
<form ref={fromRef}
    onSubmit={handlSubmit}
    className='mt-12 flex flex-col gap-8'
>
  <label className='flex flex-col '>
    <span className='text-white font-medium mb-4'>Your Name</span>
    <input 
    type='text'
    name='name'
    value={from.name}
    onChange={handlChange}  
    placeholder='What is your name?'
    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
    />
  </label>
  <label className='flex flex-col '>
    <span className='text-white font-medium mb-4'>Your Email</span>
    <input 
    type='email'
    name='email'
    value={from.email}
    onChange={handlChange}  
    placeholder='What is your Email ?'
    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
    />
  </label>
  <label className='flex flex-col '>
    <span className='text-white font-medium mb-4'>Your Message</span>
    <textarea
    rows={7}
    name='message'
    value={from.message}
    onChange={handlChange}  
    placeholder='What do you want to say?'
    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
    />
  </label>
  <button
  type='submit'
  className='bg-teritary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
  >

  </button>
</form>
</motion.div>

<motion.div 
variants={slideIn("right", "tween", 0.2, 1)}  className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
<EarthCanvas/>


</motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");