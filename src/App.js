import './App.css';
import React from 'react'; 
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import { MyProfessionalProfile } from './Pages/MyProfessionalProfile';
import { MyJewerlydesign } from './Pages/MyJewerlyDesign';
import { Myfamily } from './Pages/MyFamily';
import { Myfancyworld } from './Pages/MyFancyWorld'
import { Mymusic } from './Pages/MyMusic';
import { Mygarlley } from './Pages/Mygarlley';
import { makeStyles } from '@material-ui/core/styles';
import bg from './Images/sophia_gray_wihitebackground.jpg' ;
//import bg from './sophia_gray.jpg' ;
//something new
import meworking from './Images/me_working2.png';
import workingonit from './Images/workingonit.gif';
const images = [
	meworking,
	workingonit,
	workingonit,
	workingonit,
	workingonit
];

function App() {
  const [currentpage,setcurrentpage] = React.useState("/");
  const [ithimage,setithimage] = React.useState(0);
  return <>
  <Router >
	<Switch>
	  <Route exact path="/">
		<Mygarlley 
		  items={images} 
		  currentpage={currentpage}
		  setcurrentpage={setcurrentpage}
		  ithimage={ithimage}
		  setithimage={setithimage}
		/>
	  </Route>
	  <Route path="/My_Professional_Profile">
		<MyProfessionalProfile
		  currentpage={currentpage}
		  setcurrentpage={setcurrentpage}
		  Mygarlley={Mygarlley}
		  images={images} 
		  ithimage={ithimage}
		  setithimage={setithimage}
		/>
	  </Route>
	  <Route path="/My_Jewerly_design">
		<MyJewerlydesign
		  currentpage={currentpage}
		  setcurrentpage={setcurrentpage}
		/>
	  </Route>
	  <Route path="/My_music">
		<Mymusic
		  currentpage={currentpage}
		  setcurrentpage={setcurrentpage}
		/>
	  </Route>
	  <Route path="/My_family">
		<Myfamily
		  currentpage={currentpage}
		  setcurrentpage={setcurrentpage}
		/>
	  </Route>
	  <Route path="/My_fancy_world">
		<Myfancyworld
		  currentpage={currentpage}
		  setcurrentpage={setcurrentpage}
		/>
	  </Route>
	  <Route path="/Caiprofile">
		<Caiprofile />
	  </Route>	
	  <Route path="/Rouprofile">
		<Rouprofile />
	  </Route>	
	  <Route path="/Naoprofile">
		<Naoprofile />
	  </Route>	
	  <Route path="/Feiprofile">
		<Feiprofile />
	  </Route>	
	  <Route path="/Laodaprofile">
		<Laodaprofile />
	  </Route>	
	  <Route path="/Laosanprofile">
		<Laosanprofile />
	  </Route>			  
	</Switch>
  </Router>
  </>
}



function Caiprofile(){
	return <>
	</>
}

function Rouprofile(){
	return <>
	</>
}

function Naoprofile() {
	return <>
	</>
}

function Feiprofile() {
	return <>
	</>
}

function Laodaprofile(){
	return <>
	</>
}
function Laosanprofile(){
	return <>
	</>
}
export default App;