import * as React from 'react';
import { CrudContext } from '../../context/CrudContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import "./home.css"
import Button from '@mui/joy/Button';
import Swal from 'sweetalert2'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { GrTest } from 'react-icons/gr'
import { SiReadthedocs } from 'react-icons/si'
import { FaUsers } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import { GrLogout } from 'react-icons/gr'
import Tests from './tests/Tests';
import Games from './Games/Games';
import MyEnglish from './myenglish/MyEnglish';
import Users from './users/Users';
import Teachers from './teachers/Teachers'





const Home = () => {
  const value = useContext(CrudContext)
  const [dataMine, setDataMine] = value.dataMine
  const [userFullName, setUserFullName] = value.userFullName
  const [userEmail, setUserEmail] = value.userEmail
  const [userId, setUserId] = value.userId
  const [users, setUsers] = value.users
  const [intia, setIntia] = useState()

  const [games, setGames] = useState("no-show")
  const [teach, setTeach] = useState("no-show")
  const [us, setUs] = useState("no-show")
  const [test, setTest] = useState("no-show")
  const [myE, setMyE] = useState("myenglish")

  const navigate = useNavigate();


  const goTo = (goto) => {
    if (goto == "teachers") {

      setTeach("teachers")
      setUs("no-show")
      setMyE("no-show")
      setGames("no-show")
      setTest("no-show")

    }

    if (goto == "users") {

      setTeach("no-show")
      setUs("users")
      setMyE("no-show")
      setGames("no-show")
      setTest("no-show")

    }

    if (goto == "myenglish") {

      setTeach("no-show")
      setUs("no-show")
      setMyE("myenglish")
      setGames("no-show")
      setTest("no-show")

    }

    if (goto == "games") {

      setTeach("no-show")
      setUs("no-show")
      setMyE("no-show")
      setGames("games")
      setTest("no-show")



    }


    if (goto == "test") {
      setTeach("no-show")
      setUs("no-show")
      setMyE("no-show")
      setGames("no-show")
      setTest("tests")
    }



  }





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
      setIntia(dataMine["fullname"].slice(0, 1))
      setUserId(dataMine["id"])
      setUserEmail(dataMine["email"])
    } else {
      console.log("no hay datos")
    }
  }

  const logout = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sure'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/singin")
        localStorage.clear();
        location.reload();
      }
    })

  }





  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    devDatos()
  }, [dataMine])



  return (
    <div className='homeContainer'>
      <div className='boxC1'></div>

      <div className='boxC2'>
        <div className='box1'>
          <div className='avatar'>
            <Avatar sx={{ bgcolor: deepPurple[300] }}>{intia}</Avatar>
            <p className='userName'>  {userFullName}</p>
          </div>
          {/* <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Options</DialogTitle>
            <List sx={{ pt: 0 }}>
      
                <ListItem disableGutters>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Log out" />
                  </ListItemButton>
                </ListItem>
            

            
            </List>
          </Dialog> */}
          <div>

          </div>

          <div className='list'>
            <Button
              color="info"
              disabled={false}
              onClick={() => goTo("test")}
              size="lg"
              variant="soft"
            >
              <GrTest className='iconsDash' /><p className='textDash'>Tests</p>
            </Button>
            <Button
              color="neutral"
              disabled={false}
              onClick={() => goTo("myenglish")}
              size="lg"
              variant="soft"
            >
              <SiReadthedocs className='iconsDash' /><p className='textDash'>MyEnglish</p>
            </Button>
            <Button
              color="danger"
              disabled={false}
              onClick={() => goTo("users")}
              size="lg"
              variant="soft"
            >
              <FaUsers className='iconsDash' /><p className='textDash'>Users</p>
            </Button>
            {/* <Button
              color="success"
              disabled={false}
              onClick={() => goTo("teachers")}
              size="lg"
              variant="soft"
            >
              <GiTeacher className='iconsDash' /><p className='textDash'>Teachers</p>
            </Button> */}
            <Button
              color="warning"
              disabled={false}
              onClick={logout}
              size="lg"
              variant="soft"
            >
              <GrLogout className='iconsDash' /><p className='textDash'>Log out</p>
            </Button>
          </div>

        </div>

        <div className='box2'>
          <Tests test={test} />
          <MyEnglish myE={myE} />
          <Users us={us} users={users} />
          {/* <Teachers teach={teach} /> */}
          <Games games={games} />
        </div>
      </div>
    </div>
  )
}

export default Home