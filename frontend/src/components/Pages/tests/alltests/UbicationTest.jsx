import React, { useState } from 'react'
import './tests.css'
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Button from '@mui/joy/Button';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';



const UbicationTest = () => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate("/home")
    }

    const questions = [
        { ask: "1.- I'm ____ a book", opt1: "read", opt2: "reading", opt3: "reads", right: "reading", resp: "I'm reading a book" },
        { ask: "2.- She ____ been _____ at the mall", opt1: "has, shop", opt2: "have, shop", opt3: "has, shopping", right: "has, shopping", resp: "She has been shopping at the mall" },
        { ask: "3.- can you borrow me ____ pencil?", opt1: "that", opt2: "these", opt3: "those", right: "that", resp: "Can you borrow me that pencil?" },
        { ask: "4.- This car is ____", opt1: "me", opt2: "my", opt3: "mine", right: "mine", resp: "This car is mine" },
        { ask: "5.- I always have ____ milk in my coffee", opt1: "few", opt2: "little", opt3: "bit", right: "little", resp: " I always have little milk in my coffee" },
        { ask: "6.- They have ____ books on their table", opt1: "little", opt2: "few", opt3: "bit", right: "few", resp: "They have few books on their table." },
    ]
    const rightAnswers = questions.map(answers => answers.right)
    console.log("these are the answer : ", rightAnswers)


    const [score, setScore] = useState(0)
    console.log(score)
    
    const [arrAnswers, setArrAnswers] = useState([])
    const [arrWrong, setArrarrWrong] = useState([])

    const [answer, setAnswer] = useState("answer")
    const [answerTwo, setAnswerTow] = useState("no-show")

    const [ans, setAns] = useState()

    console.log(arrAnswers.length)
    console.log(arrWrong)

    const comparative = (a, b) => {
        a == b && arrAnswers.includes(a) == false ? setArrAnswers([...arrAnswers, a]) : setArrarrWrong([...arrWrong, a])
    }



    const plus = () => {

        setScore(arrAnswers.length)
        Swal.fire({
            title: 'Youre score is: ' + arrAnswers.length + "/30",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    const sumar = (n) => {
        n += 1
    }

    return (
        <div className='test-body'>
            <h1>Ubication test</h1>
            <form action="" className='test-answer'>

                {score == 0 ?
                    questions.map(value => (
                        <div key={value.ask}>



                            <div className={answer}>
                                <h2 >{value.ask}</h2>
                                <RadioGroup defaultValue="medium" name="radio-buttons-group">
                                    <Radio
                                        color="danger"
                                        orientation="horizontal"
                                        size="md"
                                        variant="outlined"
                                        label={value.opt1}
                                        value={value.opt1}
                                        onChange={e => comparative(e.target.value, value.right)}
                                    />
                                    <Radio
                                        color="danger"
                                        orientation="horizontal"
                                        size="md"
                                        variant="outlined"
                                        label={value.opt2}
                                        value={value.opt2}
                                        onChange={e => comparative(e.target.value, value.right)}
                                    />
                                    <Radio
                                        color="danger"
                                        orientation="horizontal"
                                        size="md"
                                        variant="outlined"
                                        label={value.opt3}
                                        value={value.opt3}
                                        onChange={e => comparative(e.target.value, value.right)}
                                    />
                                </RadioGroup>
                            </div>
                            <div className={answerTwo}>
                                <Radio
                                    label="I'm reading a book"
                                    defaultChecked
                                    color="success"
                                />
                            </div>

                        </div>


                    ))
                    :

                    questions.map((value, index) => (

                        <div key={value.ask}>



                            <div className={arrAnswers.includes(rightAnswers[index]) ? "ok" : "wrong"}>
                                <h2 onBlur={sumar(index)}>{value.ask}</h2>
                                <RadioGroup defaultValue="medium" name="radio-buttons-group">
                                    <Radio
                                        color="danger"
                                        orientation="horizontal"
                                        size="md"
                                        variant="outlined"
                                        label={value.opt1}
                                        value={value.opt1}
                                    />
                                    <Radio
                                        color="danger"
                                        orientation="horizontal"
                                        size="md"
                                        variant="outlined"
                                        label={value.opt2}
                                        value={value.opt2}
                                    />
                                    <Radio
                                        color="danger"
                                        orientation="horizontal"
                                        size="md"
                                        variant="outlined"
                                        label={value.opt3}
                                        value={value.opt3}
                                    />
                                </RadioGroup>
                            </div>
                            <div className={arrAnswers.includes(rightAnswers[index]) ? "no-show" : "show-answer"}>
                                <Radio
                                    label={value.resp}
                                    defaultChecked
                                    color="success"
                                />
                            </div>

                        </div>

                    ))

                }


            </form>
            <div style={{margin:"3rem", marginLeft: "5rem"}}>
                <div className={score == 0 ? "" : "no-show"}>
                    <Button
                        color="success"
                        onClick={plus}
                        size="lg"
                        variant="solid"
                    >enviar</Button>
                </div>
                <div className={score == 0 ? "no-show" : ""}>
                    <Button
                        color="danger"
                        onClick={redirect}
                        size="lg"
                        variant="solid"
                    >Home</Button>
                </div>

            </div>
        </div>
    )
}

export default UbicationTest