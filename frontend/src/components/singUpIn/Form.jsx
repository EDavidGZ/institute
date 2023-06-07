import './sing.css'
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import { CrudContext } from '../../context/CrudContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import { GiSlicedBread } from "react-icons/gi"



const Form = () => {
    const value = useContext(CrudContext)
    const [fullname, setFullname] = value.fullname
    const [email, setEamil] = value.email
    const [password, setPassword] = value.password
    const [state, setState] = value.state
    const CreateUser = value.CreateUser

    const navigate = useNavigate();

    const redirect = () => {
        if (state == 200) {
            navigate("/singin")
        } else {
            navigate("/")

        }
    }

    const errorCreate = () => {
        alert("llenar todos los campos")
    }

    useEffect(() => {
        redirect()
    }, [state])



    return (
        <div>
            <p className='position-logo'>
                <GiSlicedBread className='logo' />
            </p>


            <form action="" id='singup' method='post' onSubmit={CreateUser} className='formContend'>
                <h1 className='title'>Create an account</h1>
                <p className='link'>Already have account? <Link to={"/singin"}>Log in</Link></p>

                <Input
                    className='inputs'
                    type="email"
                    name="email"
                    id='outlined-basic'
                    value={email}
                    onChange={e => setEamil(e.target.value)}
                    placeholder='Email'
                    size="md"
                    variant="soft"
                /> <br />
                <Input
                    className='inputs'
                    type="text"
                    name="fullname"
                    id='fullname'
                    value={fullname}
                    onChange={e => setFullname(e.target.value)}
                    placeholder='Full name'
                    color="neutral"
                    size="md"
                    variant="soft"
                /> <br />
                <Input
                    type="password"
                    name="password"
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='password'
                    color="neutral"
                    size="md"
                    variant="soft"
                /> <br />

                <p className='terminos'>
                    By registering, you accept our Conditions, the Privacy Policy and the Cookies Policy
                    <Checkbox
                        color="warning"
                        label=""
                        size="sm"
                        variant="plain"
                    />  </p>
                {fullname.length > 0 && email.length > 5 && password.length > 3 ?
                    <Button
                        className='button-action'
                        type="submit"
                        value="Login"
                        color="neutral"
                        size="md"
                        variant="solid"  
                        >
                        singup
                    </Button>
                    : <Button
                        className='button-action'
                        type="button"
                        onClick={errorCreate}
                        color="neutral"
                        size="md"
                        variant="solid"
                    >singup</Button>
                }
            </form>
        </div>

    )
}

export default Form