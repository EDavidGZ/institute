import { useContext, useEffect } from 'react';
import './sing.css'
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import { CrudContext } from '../../context/CrudContext';
import { useNavigate } from 'react-router-dom';
import { GiSlicedBread } from "react-icons/gi"
import { Link } from "react-router-dom"





const FormLogin = () => {
    const value = useContext(CrudContext)
    const [email, setEmail] = value.email
    const [password, setPassword] = value.password
    const [loginEmail] = value.loginEmail
    const [loginPass] = value.loginPass
    const UserSingIn = value.UserSingIn
    const SaveLocal = value.SaveLocal

    const navigate = useNavigate();


    const redirect = () => {
        if (loginEmail == email && loginPass == password) {
            SaveLocal()
            navigate("/home")
        } else {
            navigate("/singin")

        }
    }

    // console.log(loginEmail)

    useEffect(() => {
        redirect()
    }, [loginEmail])

    return (
        <div>
            <p className='position-logo'>
                <GiSlicedBread className='logo' />
            </p>

            <form action="" id='singin' method='get' className='formContend' onSubmit={UserSingIn}>
                <h1 className='title'>Login</h1>
                <p className='link'>Create an account to continue</p>

                <Input
                    type="email"
                    name="email"
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='email'
                    color="neutral"
                    size="md"
                    variant="soft"
                /><br />
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

                <p className='link'><Link to={"/"}>Forgot password?</Link></p>
                <p className='link'><Link to={"/"}>Sing Up!</Link></p>
                <Button
                    className='button-action'
                    type="submit"
                    value="Login"
                    color="neutral"
                    size="md"
                    variant="solid"
                >Log in</Button>
            </form>
        </div>
    )

}

export default FormLogin