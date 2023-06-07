import axios from 'axios'
import React, { useState, useEffect, createContext } from 'react'


export const CrudContext = createContext();


export const DataProvider = (props) => {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [email, setEamil] = useState("")
    const [fullname, setFullname] = useState("")
    const [password, setPassword] = useState("")
    const [state, setState] = useState()
    const [loginEmail, setLoginEmail] = useState()
    const [loginPass, setLoginPass] = useState()
    const [userData, setUserData] = useState()
    const [dataMine, setDataMine] = useState()
    const [showComp, setShowComp] = useState()

    const [userFullName, setUserFullName] = useState()
    const [userEmail, setUserEmail] = useState()
    const [userId, setUserId] = useState()



    //Get users
    const consultarUsuarios = async () => {
       await axios.get(`http://localhost:3000/user`)
            .then(res => {
                setUsers(res.data)
            })
    }

    const UserSingIn = async (e) => {
        e.preventDefault()
        await axios.get(`http://localhost:3000/user/login/${email}/${password}`)
        .then(res => {
            if (res.status == 200){
                console.log(res)
                setUserData(res.data[0])
                setLoginEmail(res.data[0].email)
                setLoginPass(res.data[0].password)
                // console.log(email, password)

            }
        })

        localStorage.setItem("email", email);   
        localStorage.setItem("password", password);   
     }

    //post users
    const CreateUser = async (e) => {
       await e.preventDefault()
        axios.post(`http://localhost:3000/user/create`, { email, fullname, password })
            .then(res => {
                setState(res.status)
            })
    }
    
    
    // save in local
    
    const SaveLocal = () => {
        localStorage.setItem("UserData", JSON.stringify(userData))
        
    }

// useeffects
    useEffect(() => {
        consultarUsuarios();
    }, [])
    // useEffect(() => {
    //     SaveLocal();
    // }, [userData])
//Values 

const value = {
    users: [users, setUsers],
    user: [user, setUser], 
    email: [email, setEamil],
    fullname: [fullname, setFullname],
    password: [password, setPassword],
    state: [state, setState],
    loginEmail: [loginEmail],
    loginPass: [loginPass],
    userData: [userData, setUserData],
    dataMine: [dataMine, setDataMine],
    userFullName: [userFullName, setUserFullName],
    userEmail: [userEmail, setUserEmail],
    userId: [userId, setUserId],
    consultarUsuarios: consultarUsuarios,
    CreateUser: CreateUser,
    UserSingIn: UserSingIn,
    SaveLocal: SaveLocal,
    showComp: [showComp, setShowComp],

}

    return (
        <CrudContext.Provider value={value}>
            {props.children}
        </CrudContext.Provider>
        // <div>
        //     <ul>
        //         {users.map(user => <li key={user.id}>{user.role}</li>)}
        //     </ul>
        //     <div>
    )
}

