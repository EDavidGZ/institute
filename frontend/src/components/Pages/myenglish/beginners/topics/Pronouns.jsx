import React from 'react'
import toBe from './img/toBe.png'
import persons from './img/Persons.png'
import object from './img/object.png'
import am from './img/am.jpeg'
import './pronoun.css'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/joy/Button';



const Pronouns = () => {
  const navigate = useNavigate();
  const redirectPronouns = () => {
    navigate("/beginners")
  }

  return (
    <div className='container-pronouns'>

      <div className='content-be'>
        <h1 className='title-be'>Verb to Be</h1>
        <div className='tobe'>
          <div className='note'>
            <p>Verb to Be. It's the verb "Ser o Estar" in Spanish.</p>
            <p>It / Eso</p>
            <p>They / Ellos-Ellas</p>
            <p>We / Nosotros-Nosotras</p>
            <p>Example with contractions: </p>
            <div style={{ margin: "1rem" }}>

              <p>I am / I'm</p>
              <p>You are/ You're</p>
              <p>He is/He's</p>
              <p>She is/ She's</p>
              <p>It is/It's</p>
              <p>They are/ They're</p>
              <p>We are/ We're</p>
            </div>
          </div>
          <img className='img1' src={am} alt="to be" />
        </div>


        <div className='tobe'>
          <div className='note1'>
            <h2>Sentences</h2>
            <h3>pronoun + verb to be + complement</h3>
            <p>example:</p>
            <div style={{ margin: "1rem" }}>

              <p >He is running / El esta corriendo</p>
              <p >She is eating / Ella esta comiendo</p>
              <p >I am cooking / Yo estoy cocinando</p>
              <p >We are swimming / Notros estamos nadando</p>
              <p >You are singing / Tu estas cantando</p>
              <p >They are walking / Elos estan caminando</p>
            </div>
          </div>
          <div className='note2'>
            <p >Remember</p>
            <p>Siempre que utilices el verbo "To Be" en una oracion, si lo que esta a continuacion es un verbo este debera estar en infinitivo."Verb + ing"</p>
            <p>Ejemplo:</p>
            <p className='bad'>He is run / El esta correr</p>
            <p className='good'>He is running / El esta corriendo</p>
          </div>

        </div>

        <div className='tobe'>

          <div className='note1'>
            <h2>Negative sentences</h2>
            <h3>pronoun + verb to be + not + complement</h3>
            <p>example:</p>
            <div style={{ margin: "1rem" }}>

              <p >He is not running / El no esta corriendo</p>
              <p >She is not eating / Ella no esta comiendo</p>
              <p >I am not cooking / Yo no estoy cocinando</p>
              <p >We are not swimming / Notros no estamos nadando</p>
              <p >You are not singing / Tu no estas cantando</p>
              <p >They are not walking / Elos no estan caminando</p>
            </div>
          </div>
          <div className='note'>
            <p>Example with contractions: </p>
            <div style={{ margin: "1rem" }}>

              <p></p>
              <p>He isn't/ He is not</p>
              <p>You aren't/ You are not</p>
              <p>Or</p>
              <p>He's not/ He is not</p>
              <p>You're not/ You are not</p>
              <p>I'm not/ I am not</p><br />
              <p className='good'>He isn't running</p>
              <p>Or</p>
              <p className='good'>He's not running</p>
            </div>
          </div>


        </div>


        <div className='tobe'>

          <div className='note1'>
            <h2>Questions with verb to Be</h2>
            <h3>verb to be + pronoun + complement</h3>
            <p>example:</p>
            <div style={{ margin: "1rem" }}>

              <p >Is he running?/ El esta corriendo?______ Answer: Yes, He is/Si, el esta </p>
              <p >Is she eating? / Ella esta comiendo? ______ Answer: Yes, she is/ Si, ella esta</p>
              <p >Am I cooking? / Yo estoy cocinando?______ Answer: Yes, You are/ Si, tu estas</p>
              <p >Are we swimming? / Notros estamos nadando? ______ Answer: No, we aren't/ No, no estamos</p>
              <p >Are you singing? / Tu estas cantando?______ Answer: Yes, I am singing/ Si, estoy canatando</p>
              <p >Are They walking? / Ellos  estan caminando? ______ Answer: No, they aren't walking/ No, ellos no estan caminando</p>
            </div>
          </div>
        </div>






        <h1 className='title-be'>Object pronouns</h1>

        <img className='img' src={persons} alt="pronouns" />

        <div className=' tobe'>
          <div className='note1'>
            <p className='p1'>Objet pronouns go at after the verb</p>
            <p className='p2'>Los pronombres de objeto van despues del verbo</p>
            <p className='p1'>Examples:</p>
            <div style={{ margin: "1rem" }}>

              <p >He works with them/ El trabaja con ellos</p>
              <p >We run with you/ Nosotros corremos contigo</p>
              <p >You call me/Llamame</p>
              <p >She cooks with him/Ella cocina con el</p>
              <p >They're playing with me/ Ellos estan jugando conmigo</p>
            </div>

          </div>

          <div className='note2'>
            <p >Remember</p>
            <p>Los sujetos en tercera persona como "He" - "She" - "It", en una oracion en presente simple deberan llevar una "S" al final del verbo</p>
            <p>Example:</p>
            <p className='good'>She cooks with him/Ella cocina con el</p>
          </div>

        </div>
        {/* <img className='img1' src={object} alt="to be" />

// </div> */}

        <div className="botonredirect">

          <Button

            color="neutral"
            onClick={redirectPronouns}
            size="lg"
            variant="solid"
          >Topics</Button>
        </div>
      </div>

    </div>
  )
}

export default Pronouns