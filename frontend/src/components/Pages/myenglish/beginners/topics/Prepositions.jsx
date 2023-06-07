import React from 'react'
import houseParts from './img/houseParts.jpeg'


const Prepositions = () => {

  const prepo = [
    { at: "at point/ en el punto ", in: "in closed space / en espacio cerrado", on: "on the surface / en la superficie"},
    { at: "at the corner/ en la esquina", in: "in the garden / en el jardin", on: "on the wall / en la pared"},
    { at: "at the bus stop / en la parada de autobus ", in: "in London / en Londres", on: "on the celling / en el techo"},
    { at: "at the door / en la puerta ", in: "in France / en Francia", on: "on the door / sobre la puerta"},
    { at: "at the top of the page / en la parte superior de la pagina ", in: "in a box / en una caja", on: "on the cover / en la portada"},
    { at: "at the end of the road  / en el final del camino ", in: "in my pocket / en mi bolsillo ", on: "on the floor / en el piso"},
    { at: "at the entrance / en la entrada ", in: "in my wallet / en mi cartera ", on: "on the carpet / en la alfombra"},
    { at: "at the crossroads / en el cruce de caminos ", in: "in a building / en el edificio ", on: "on the menu / en el menu"},
    { at: "at the front desk / en el escritorio de enfrente  ", in: "in a car / en el carro ", on: "on a bus / en el bus"},
  ]

  return (
    <div className='container-verb '>
      <div className='content-be'>

        <h1 className='title-b'>Prepositions In - On - At</h1>
        <h3>A preposition is a word or group of words used before a noun, pronoun, or noun phrase to show direction, time, place or location.</h3>
        <p>Una preposición es una palabra o grupo de palabras que se usan antes de un sustantivo, pronombre o frase nominal para mostrar dirección, tiempo, lugar o ubicación.</p>
       <div  className='note-prepositions'>
        <h3>In / En "Dentro"</h3>
        <h3>On / En "Sobre-encima"</h3>
        <h3>At / En "Lugar Especifico"</h3>
       </div>
       
        <h2 className='title-b'>Examples use parts of the house</h2><br />
        <img className='img5' src={houseParts} alt="to be" />

        <div  className='note-prepositions1'>
          <h2>Examples:</h2>
        <h3>He's in the house / El esta en la casa. "Sujeto se encuentra dentro de la casa" </h3>
        <h3>She's on the roof / Ella esta en el techo "Sujeto esta sobre el techo"</h3>
        <h3>I'm at the park / Yo estoy en el parque. "Indica un lugar especifico"</h3>
       </div>

        <div  className='note-prepositions1'>
        <h3> - They are in the dining room, on the chairs, at the table</h3>
        <h3> - Ellos estan en el en el comedor, en las sillas, en la mesa</h3>
        <p> - Ellos se encuentran dentro del comedor, ellos esatn sobre las sillas, las sillas estan en la mesa</p>
       </div><br />
       
       <h3>More examples</h3>

       <table className="table-verbs">
          <thead className='barraUp-2'>
            <tr >
              <th className="col-verb">at</th>
              <th className="col-verb">in</th>
              <th className="col-verb">on</th>
            </tr>
          </thead>
          <tbody className='tbody2'>
            {prepo.map((value) => (
              <tr key={value.in}>
                <td className='textTable2'>{value.at}</td>
                <td className='textTable2'>{value.in}</td>
                <td className='textTable2'>{value.on}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    </div>
  )
}

export default Prepositions