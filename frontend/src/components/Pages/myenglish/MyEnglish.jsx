import React from 'react'
import "../pagination.css"
import { FaWpbeginner } from 'react-icons/fa'
import { BsBookHalf } from 'react-icons/bs'
import { GiCoronation } from 'react-icons/gi'
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';



const MyEnglish = ({ myE }) => {
  const navigate = useNavigate();


  const redirectTopicks = () => {
    navigate("/beginners")
  }

  return (
    <div className={myE}>
      <h2 className='text-icT'>Hi, Welcome Back</h2>
      <h2 className='text-icT'>Lessons</h2> <br />
      <a href="https://meet.google.com/hib-teyb-axe" className='aredic'>
        <Button
          className='large'
          color="success"
          size="lg"
          variant="solid"
        >Classroom</Button>
      </a>

      <div className='studyEnglish'>
        <div
          className='beginer'
          onClick={() => redirectTopicks()}
        >
          <FaWpbeginner className='icnos' />
          <p className='text-ic'>Beginners</p>
        </div>
        <div className='inter'>
          <BsBookHalf className='icnos' />
          <p className='text-ic'>Medium</p>

        </div>
        <div className='advan'>
          <GiCoronation className='icnos' />
          <p className='text-ic'>Advanced</p>

        </div>
        <div></div>
      </div>
    </div>
  )
}

export default MyEnglish