import React from 'react'
import "../pagination.css"
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';
import {GrGamepad} from 'react-icons/gr'






const Games = ({games}) => {
  const navigate = useNavigate();
  
  
  const redirect = () => {
    navigate("/game1")
  }
  return (
    <div className={games}>
      <div className='studyEnglish'>
      <div
          className='game1'
          onClick={() => redirect()}
        >
          <GrGamepad className='icnos-game' />
        </div>
      </div>
    </div>
  )
}

export default Games