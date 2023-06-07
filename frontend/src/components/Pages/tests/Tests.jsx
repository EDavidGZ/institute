import React from 'react'
import "../pagination.css"
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';



const Tests = ({ test }) => {

  const navigate = useNavigate();

  const redirect = (topic) => {

    if(topic == "UbicationTest"){
      navigate("/UbicationTest")
    }
    
  }
  return (
    <div className={test}>
      <h2 className='text-icT'>Tests</h2>

      <div className='test1'>
        <Button
          className='large'
          color="danger"
          onClick={() => redirect("UbicationTest")}
          size="lg"
          variant="solid"
          >Ubication test</Button>
      </div>

      <div className='test2'>
        <Button
          className='large'
          color="info"
          onClick={function () { }}
          size="lg"
          variant="solid"
          >To practice</Button>
      </div>

      <div className='test3'>
        <Button
          className='large'
          color="success"
          onClick={function () { }}
          size="lg"
          variant="solid"
        >Assessment</Button>
      </div>
    </div>
  )
}

export default Tests