import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { CrudContext } from '../../../../context/CrudContext';
import './bginner.css'
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';




const TopicksBeginner = () => {
  const value = useContext(CrudContext)
  const [dataMine, setDataMine] = value.dataMine

  const navigate = useNavigate();

  const redirect = (topic) => {

    if (topic == "home") {
      navigate("/home")
    }

    if (topic == "pronouns") {
      navigate("/pronouns")
    }

    if (topic == "verbs-one") {
      navigate("/verbs-one")
    }
    if (topic == "Prepositions") {
      navigate("/prepositions")
    }
  }

  const [userFullName, setUserFullName] = value.userFullName


  const getData = () => {
    const local = localStorage.getItem('UserData');

    if (local !== null) {
      setDataMine(JSON.parse(local))
    } else {
      console.log('La clave no existe en el localStorage');
    }
  }



  const devDatos = () => {
    if (dataMine != undefined) {
      setUserFullName(dataMine["fullname"])
    } else {
      console.log("no hay datos")
    }
  }


  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    devDatos()
  }, [dataMine])
  return (
    <div className='beginners-cont'>
      <div className='content-welcome'>
        <img src="/boy.png" alt="" />

        <h1 className='begTitle'>It's good to see you again {userFullName}</h1>
      </div>

      <div className='lessons-list'>

        <div style={{ marginBottom: "2rem" }}>
          <Button
            color="neutral"
            onClick={() => redirect("home")}
            size="lg"
            variant="solid"
          >Home</Button>

        </div>

        <div className='topic1'>
          <Button
            color="danger"
            onClick={() => redirect("pronouns")}
            size="lg"
            variant="solid"
          >Personal Pronouns - Verb to Be</Button>
        </div>

        <div className='topic2'>
          <Button
            color="info"
            onClick={() => redirect("verbs-one")}
            size="lg"
            variant="solid"
          >List of verbs</Button>
        </div>

        <div className='topic3'>
          <Button
            color="success"
            onClick={() => redirect("Prepositions")}
            size="lg"
            variant="solid"
          >Prepositions</Button>
        </div>
        <div className='topic4'>
          <Button
            color="primary"
            onClick={function () { }}
            size="lg"
            variant="solid"
          >Assessment</Button>
        </div>
        <div className='topic5'>
          <Button
            color="warning"
            onClick={function () { }}
            size="lg"
            variant="solid"
          >Assessment</Button>
        </div>
        <div className='topic6'>
          <Button
            color="neutral"
            onClick={function () { }}
            size="lg"
            variant="solid"
          >Assessment</Button>
        </div>
        <div className='topic1'>
          <Button
            color="danger"
            onClick={function () { }}
            size="lg"
            variant="solid"
          >Ubication test</Button>
        </div>

        <div className='topic2'>
          <Button
            color="info"
            onClick={function () { }}
            size="lg"
            variant="solid"
          >To practice</Button>
        </div>

        <div className='topic3'>
          <Button
            color="success"
            onClick={function () { }}
            size="lg"
            variant="solid"
          >Assessment</Button>
        </div>

      </div>

    </div>
  )
}

export default TopicksBeginner