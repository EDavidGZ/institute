import React from 'react'
import './pronoun.css'
import "../../../pagination.css"
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';




const VerbsList = () => {
  const navigate = useNavigate();
  const redirectPronouns = () => {
    navigate("/beginners")
  }

  const irregular = [
    { verbo: "barrer", verb: "sweep", ing: "sweeping", past: 'swept', parti: "swept" },
    { verbo: "beber", verb: "drink", ing: "drinking", past: 'drank', parti: "drunk" },
    { verbo: "montar", verb: "ride", ing: "riding", past: 'rode', parti: "ridden" },
    { verbo: "caer", verb: "fall", ing: "falling", past: 'fell', parti: "fallen" },
    { verbo: "cantar", verb: "sing", ing: "singing", past: 'sang', parti: "sung" },
    { verbo: "colocar", verb: "set", ing: "setting", past: 'set', parti: "set" },
    { verbo: "comer", verb: "eat", ing: "eating", past: 'ate', parti: "eaten" },
    { verbo: "comprar", verb: "buy", ing: "buying", past: 'bought', parti: "bought" },
    { verbo: "conocer(gente)", verb: "meet", ing: "meeting", past: 'met', parti: "met" },
    { verbo: "conocer, saber", verb: "know", ing: "knowing", past: 'knew', parti: "known" },

  ]

  const verbs = [
    { verbo: "jugar", verb: "play", ing: "playing", past: 'played', parti: "played" },
    { verbo: "abrir", verb: "open", ing: "opening", past: 'opened', parti: "opened" },
    { verbo: "aceptar", verb: "accept", ing: "accepting", past: 'accepted', parti: "accepted" },
    { verbo: "amar", verb: "love", ing: "loving", past: 'loved', parti: "loved" },
    { verbo: "aprender", verb: "learn", ing: "learning", past: 'learned', parti: "learned" },
    { verbo: "apresurarse", verb: "hurry", ing: "hurrying", past: 'hurried', parti: "hurried" },
    { verbo: "atreverse", verb: "dare", ing: "daring", past: 'dared', parti: "dared" },
    { verbo: "ayudar", verb: "help", ing: "helping", past: 'helped', parti: "helped" },
    { verbo: "bailar", verb: "dance", ing: "dancing", past: 'danced', parti: "danced" },
    { verbo: "borrar", verb: "arese", ing: "erasing", past: 'erased', parti: "erased" },
    { verbo: "cambiar", verb: "change", ing: "changing", past: 'changed', parti: "changed" },
    { verbo: "caminar", verb: "walk", ing: "walking", past: 'walked', parti: "walked" },
    { verbo: "cerrar", verb: "close", ing: "closing", past: 'closed', parti: "closed" },
    { verbo: "cocinar", verb: "cook", ing: "cooking", past: 'cooked', parti: "cooked" },
    { verbo: "considerar", verb: "consider", ing: "considering", past: 'considered', parti: "considered" },
    { verbo: "contar", verb: "count", ing: "counting", past: 'counted', parti: "counted" },
    { verbo: "contestar", verb: "answer", ing: "answering", past: 'answered', parti: "answered" },
    { verbo: "desear", verb: "wish", ing: "wishing", past: 'wished', parti: "wished" },
    { verbo: "empezar", verb: "start", ing: "starting", past: 'started', parti: "started" },
    { verbo: "empujar", verb: "push", ing: "pushing", past: 'pushed', parti: "pushed" },
    { verbo: "entregar", verb: "deliver", ing: "delivering", past: 'delivered', parti: "delivered" },
    { verbo: "escuchar", verb: "listen", ing: "listening", past: 'lisened', parti: "lisened" },
    { verbo: "esperar(esperanza)", verb: "expect", ing: "expecting", past: 'expected', parti: "expected" },
    { verbo: "esperar(lugar)", verb: "wait", ing: "waiting", past: 'waited', parti: "waited" },
    { verbo: "estudiar", verb: "study", ing: "studying", past: 'studied', parti: "studied" },
    { verbo: "extrañar", verb: "miss", ing: "missing", past: 'missed', parti: "missed" },
    { verbo: "fumar", verb: "smoke", ing: "smoking", past: 'smoked', parti: "smoked" },
    { verbo: "gozar", verb: "enjoy", ing: "enjoying", past: 'enjoyed', parti: "enjoyed" },
    { verbo: "gustar", verb: "like", ing: "liking", past: 'liked', parti: "liked" },
    { verbo: "hablar", verb: "talke", ing: "talking", past: 'talked', parti: "talked" },
  ]
  return (
    <div className='container-verb '>
      <div className='content-be'>
        <h1 className='title-b'>Regular Verbs</h1>
        <table className="table-verbs">
          <thead className='barraUp-2'>
            <tr >
              <th className="col-verb">Verbo</th>
              <th className="col-verb">present verb</th>
              <th className="col-verb">verb + ing or gerund</th>
              <th className="col-verb">past verb</th>
              <th className="col-verb">past participle</th>
            </tr>
          </thead>
          <tbody className='tbody2'>
            {verbs.map((value) => (
              <tr key={value.verbo}>
                <td className='textTable2'>{value.verbo}</td>
                <td className='textTable2'>{value.verb}</td>
                <td className='textTable2'>{value.ing}</td>
                <td className='textTable2'>{value.past}</td>
                <td className='textTable2'>{value.parti}</td>
                {/* <td className='textTable'>{value.email}</td>
                <td className='pay'>Payment</td>
                <td className='textTable'>Beginner</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='content-be'>
        <h1 className='title-b'>Irregular Verbs</h1>
        <table className="table-verbs">
          <thead className='barraUp-2'>
            <tr >
              <th className="col-verb">Verbo</th>
              <th className="col-verb">present verb</th>
              <th className="col-verb">verb + ing or gerund</th>
              <th className="col-verb">past verb</th>
              <th className="col-verb">past participle</th>
            </tr>
          </thead>
          <tbody className='tbody2'>
            {irregular.map((value) => (
              <tr key={value.verbo}>
                <td className='textTable2'>{value.verbo}</td>
                <td className='textTable2'>{value.verb}</td>
                <td className='textTable2'>{value.ing}</td>
                <td className='textTable2'>{value.past}</td>
                <td className='textTable2'>{value.parti}</td>
                {/* <td className='textTable'>{value.email}</td>
                <td className='pay'>Payment</td>
                <td className='textTable'>Beginner</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="botonredirect">

        <Button

          color="neutral"
          onClick={redirectPronouns}
          size="lg"
          variant="solid"
        >Topics</Button>
      </div>

    </div>
  )
}

export default VerbsList