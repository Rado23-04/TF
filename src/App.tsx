import Nav from "./assets/components/Nav"
import Register from "./page/Register"
import Sign from "./page/Sign"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
       <Router>
        <Nav/>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path='/save' element = {<Sign/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
