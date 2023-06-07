import SignUP from "./components/singUpIn/SingUp"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DataProvider } from "./context/CrudContext"
import SingIn from "./components/singUpIn/SingIn"
import Home from "./components/Pages/Home"
import TopicksBeginner from "./components/Pages/myenglish/beginners/TopicksBeginner"
import Pronouns from "./components/Pages/myenglish/beginners/topics/Pronouns"
import VerbsList from "./components/Pages/myenglish/beginners/topics/VerbsList"
import Prepositions from "./components/Pages/myenglish/beginners/topics/Prepositions"
import UbicationTest from "./components/Pages/tests/alltests/UbicationTest"
import GameAhorcado from "./components/Pages/Games/GameAhorcado"


function App() {

  return (
    <DataProvider>

      <div>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<SignUP />} />
            <Route path="/singin" element={<SingIn />} />
            <Route path="/home" element={<Home />} />

          //Lessons
            <Route path="/beginners" element={<TopicksBeginner />} />


          //beginners Lessons
            <Route path="/pronouns" element={<Pronouns />} />
            <Route path="/verbs-one" element={<VerbsList />} />
            <Route path="prepositions" element={<Prepositions />} />


            //Tests
            <Route path="UbicationTest" element={<UbicationTest />} />


            //games
            <Route path="game1" element={<GameAhorcado />} />

          </Routes>
        </BrowserRouter>


      </div>
    </DataProvider>
  )
}

export default App
