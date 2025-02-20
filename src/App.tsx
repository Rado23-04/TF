import Nav from "./assets/components/Nav"
import { ProtectedRoute } from "./assets/components/ProtectedRoute/ProtectedRoute";
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
                <Route element={<ProtectedRoute />}></Route>
                <Route path='/save' element = {<Sign/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
