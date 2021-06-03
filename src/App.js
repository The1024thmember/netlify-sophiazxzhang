import './App.css';
import React from 'react'; 
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { MyArrowleft, MyArrowright } from './Arrow';
import { MyProfessionalProfile } from './MyProfessionalProfile.js';
import { MyJewerlydesign } from './MyJewerlyDesign.js';
import { Myfamily } from './MyFamily.js';
import { Myfancyworld } from './MyFancyWorld.js'
import { Mymusic } from './MyMusic.js';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import bg from './sophia_gray.jpg' ;
import rouwalk from './rou_walk.gif';
import caiwalk from './cai_walk.gif';
import laodawalk from './laodawalk.gif';
import laosanwalk from './laosanwalk.gif';
import naowalk from './naowalk.gif';
import feiwalk from './feiwalk2.gif';
const images = [
	{original: 'https://picsum.photos/id/1018/1000/600/'},
	{original: 'https://picsum.photos/id/1015/1000/600/'},
	{original: 'https://picsum.photos/id/1019/1000/600/'},
	{orginal: ''},
	{orginal: ''}
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Mygarlley({items,currentpage,setcurrentpage,ithimage,setithimage}){
  const titles = ["My Professional Profile","My Jewerly design","My music","My family","My fancy world"];
  const [onfoucslink, setonfoucslink] = React.useState(false);
  const mylink=["/My_Professional_Profile","/My_Jewerly_design","/My_music","/My_family","/My_fancy_world"];
  const classes = useStyles();
  const windowheight=window.innerHeight+'px';
  const windowwidth=window.innerWidth+'px';
  const arrowrightclick=()=>{
					if(items.length-1>ithimage){setithimage(ithimage+1)}
					else{setithimage(0)}
  };
  const arrowleftclick=()=>{
					if(ithimage>0){setithimage(ithimage-1)}
					else{setithimage(items.length-1)}
				};
  const displayHeight='360px';
  const [caiprompt,setcaiprompt] = React.useState(false);
  React.useEffect(()=>{
	 const timer = setInterval(() => setcaiprompt(false), 3000); 
	 return () => clearInterval(timer);
  },[caiprompt])
  console.log('currentpage: '+currentpage);
  if (currentpage==="/My_Professional_Profile") {
		return <Redirect to="/My_Professional_Profile" />
  } else if (currentpage==="/My_Jewerly_design") {
		return <Redirect to="/My_Jewerly_design" />
  } else if (currentpage==="/My_music"){
		return <Redirect to="/My_music" />
  } else if (currentpage==="/My_family") {
		return <Redirect to="/My_family" />
  } else if (currentpage==="/My_fancy_world") {
		return <Redirect to="/My_fancy_world" />
  } else if (currentpage==="/Caiprofile"){
	  return <Redirect to="/Caiprofile" />
  } else if (currentpage==="/Rouprofile"){
	  return <Redirect to="/Rouprofile" />
  } else if (currentpage==="/Naoprofile"){
	  return <Redirect to="/Naoprofile" />
  } else if (currentpage==="/Feiprofile"){
	  return <Redirect to="/Feiprofile" />
  }else if (currentpage==="/Laodaprofile"){
	  return <Redirect to="/Laodaprofile" />
  }else if (currentpage==="/Laosanprofile"){
	  return <Redirect to="/Laosanprofile" />
  }
  return <>
	<div style={{backgroundImage:`url(${bg})`, height:`${windowheight}`,width:`${windowwidth}`}}>
		<div className="Walk" >
			<div className="Cai">
				<div style={{position:'relative', top:'-70%',width: '30px',height: '50px',display:'inline-block',background:'red'}}>
					<span style={caiprompt? {display:'block',position:'relative',top:'0%'} : {display:'none'}}>Hi there!</span>
				</div>
				<img src={caiwalk}
				alt="caiwalk"
				style={{width: '120px',height: '250px'}}
				onMouseEnter={()=>{setcaiprompt(true);}}
				/>
			</div>
			<div className="Rou" >
				<div style={{position:'relative', top:'-50%',width: '30px',height: '50px',display:'inline-block',background:'red'}}>
					<span style={caiprompt? {display:'block',position:'relative',top:'0%'} : {display:'none'}}>Hi there!</span>
				</div>
				<img src={rouwalk}
				alt="rouwalk"
				style={{width: '130px',height: '250px'}}
				onMouseEnter={()=>{setcaiprompt(true);}}				
				/>
			</div>
			<div className="Nao" >
				<div style={{position:'relative', top:'-20%', width: '30px',height: '30px',background:'red'}}>
					<span style={caiprompt? {display:'block'} : {display:'none'}}>Hi there!</span>
				</div>
				<img src={naowalk}
				alt="naowalk"
				style={{width: '60px',height: '30px'}}
				onMouseEnter={()=>{setcaiprompt(true);}}
				/>
			</div>
			<div className="Fei" >
				<div style={{position:'relative', top:'-20%', width: '30px',height: '30px',background:'red'}}>
					<span style={caiprompt? {display:'block'} : {display:'none'}}>Hi there!</span>
				</div>
				<img src={feiwalk}
				alt="feiwalk"
				style={{width: '58px',height: '27px'}}
				onMouseEnter={()=>{setcaiprompt(true);}}				
				/>
			</div>
			<div className="Laoda" >
				<div style={{position:'relative', top:'-20%',width: '30px',height: '30px',background:'red'}}>
					<span style={caiprompt? {display:'block'} : {display:'none'}}>Hi there!</span>
				</div>
				<img src={laodawalk}
				alt="laodawalk"
				style={{width: '50px',height: '25px'}}
				onMouseEnter={()=>{setcaiprompt(true);}}				
				/>
			</div>
			<div className="Laosan" >
				<div style={{position:'relative', top:'-20%',width: '30px',height: '30px',background:'red'}}>
					<span style={caiprompt? {display:'block'} : {display:'none'}}>Hi there!</span>
				</div>
				<img src={laosanwalk}
				alt="naowalk"
				style={{width: '50px',height: '25px'}}
				onMouseEnter={()=>{setcaiprompt(true);}}					
				/>				
			</div>
		</div>
		<div className={classes.root}
		style={{block:'display',width:'900px',position:'relative',top:'150px', left:'400px'}}>
		  <Grid container spacing={2}>
			<Grid item xs={2}>
				<div style={{position:'relative',top:'40%'}}>
					<MyArrowleft 
					myonClick={arrowleftclick}
					/>
				</div> 
			</Grid>
			<Grid item xs={8} >
			  <Paper className={classes.paper}
			  style={onfoucslink?{height:`${displayHeight}`,border:'7px rgb(108,176,221) solid'}:{height:`${displayHeight}`}}
			  onMouseEnter={()=>{console.log('onenter');setonfoucslink(true);}}
			  onMouseLeave={()=>{setonfoucslink(false);}}		  
			  onClick={()=>{setcurrentpage(mylink[ithimage])}}
			  >
					<img className='mainimage' alt="linkimages" style={{height:`${displayHeight}`,width:'550px'}}
					src={items[ithimage].original} />
			  </Paper>
			</Grid>
			<Grid item xs={2}>
			  
				<div style={{position:'relative',top:'40%'}}>
					<MyArrowright 
					myonClick={arrowrightclick}
					/>
				</div>
			 
			</Grid>
			<Grid item xs={12}>
				<div style={{position:'relative',left:'43%',height:'30px',width:'100px',backgroundColor:'pink'}}>
					<h4>{titles[ithimage]}</h4>
				</div>
			</Grid>
		  </Grid>
		</div>
	</div>
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