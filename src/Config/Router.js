import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "../Screen/MainScreen";
import AboutScreen from "../Screen/AboutScreen";
import ProjectScreen from "../Screen/ProjectScreen";
import SkillScreen from "../Screen/SkillScreen";





function Routers(){

    return( 

<BrowserRouter>
<Routes>

     <Route path="/" element={<MainScreen/>}/>
    <Route path="/about" element={<AboutScreen/>}/>
    <Route path="/Project" element={<ProjectScreen/>}/>
    <Route path="/Skill" element={<SkillScreen/>}/>
 
        
     
</Routes>
</BrowserRouter>


    )
}

export default Routers