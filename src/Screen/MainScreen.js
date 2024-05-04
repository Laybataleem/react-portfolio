
import Handshake from '@mui/icons-material/WavingHand';
import "../App.css"
import { Link } from 'react-router-dom';
import NavBar from '../Component/NavBar';



export default function MainScreen() {


  return (

    <div>
<NavBar/>


<div style={{ display:"flex"}} >
<div style={{ height:"25%",width:"35%",marginLeft:'5em'}}>
  <p style={{ margin: "1.5em", fontWeight:"bolder", fontSize:30}}> Hii <Handshake style={{color:"yellow"}}/>  ,I am Charles ,Frontened Developer </p> 
  <p style={{ margin: "2em"}}> I design and develop experinces that make peoples live simpler through Web and Mobile apps .I work with figma ,HTML5, CSS3 ,Javascript,React,ReactNative,and Flutter. </p>
</div>

  

<div style={{ height: "30%", width: "50%", marginLeft:"20em" }}>
  <div className="setimage"></div>
</div>

    </div>
    <div style={{ display:"flex", marginLeft:"3.5em", marginBottom:'25em'}}>
  <button style={{fontWeight:"Bold",fontSize:15 ,backgroundColor:"white",padding:'1em',margin:"1em"}}>HIRE ME </button>
  <button style={{fontWeight:"Bold",fontSize:15 ,backgroundColor:"black",color:'white',padding:'1em',margin:"1em"}}>SEE MY PROJECTS </button>
</div>

































    </div>
   
  )
}

