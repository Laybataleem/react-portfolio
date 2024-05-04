
import { Link } from "react-router-dom"
import "../App.css"



export default function NavBar(){


    return(
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", padding: "10px 20px" }}>
  <div style={{ display: "flex", alignItems: "center", }}>
  <Link  to="/">   <h1 style={{ marginLeft: 10, fontSize: 24, color: "black", fontSize: 20,fontWeight:'bold', }}>Portfolio</h1>
  </Link>
  </div>
  <div style={{ display: "flex", alignItems: "center" }}>
    <Link to="/about" style={{ textDecoration: "none", color: "black", fontSize: 20,fontWeight:'bold', marginRight: 20 }}>About Me </Link>
    <Link to="/Project" style={{ textDecoration: "none", color: "black", fontSize: 20,fontWeight:'bold', marginRight: 20 }}>Projects</Link>
    <Link to="/Skill" style={{ textDecoration: "none", color: "black", fontSize: 20,fontWeight:'bold', marginRight: 20 }}>Skills </Link>
    <a href="#" style={{ textDecoration: "none", color: "black", fontSize: 20,fontWeight:'bold',marginRight: 20 }}>Contact</a>
  </div>
</div>
    )
}