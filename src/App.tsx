import Nav from "./assets/components/Nav"
import { ProtectedRoute } from "./assets/components/ProtectedRoute/ProtectedRoute";
import Task from "./assets/components/Task";
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
                <Route element={<ProtectedRoute />}>
                    <Route path='/task' element = {<Task/>}/>
                    <Route path='/save' element = {<Sign/>}/>
                </Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
