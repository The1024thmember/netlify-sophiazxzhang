import {Redirect} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Header } from './header.js'
import 'react-pro-sidebar/dist/css/styles.css';
import profile from './profile.jpg' ;
import './App.css';
import React from 'react'
import Typical from 'react-typical'
export const MyProfessionalProfile = ({toolbarstyle,currentpage,setcurrentpage,Mygarlley,images,ithimage,setithimage}) => {
  const [pagerender,setpagerender] = React.useState('summary');
  if (currentpage==="/"){
	return <Redirect to="/" />
  }
  return (
	<div className="professional">
	  <Grid container >
		<Grid item xs={12}>
			
				<Header
					toolbarstyle={{backgroundColor:'rgb(135,170,192)',height:'12vh'}}
					headertext={"My Professional Profile"}
					headerstyle={{display:'inline-block'}}
					buttontexts={["Main page"]}
					buttonvariant={["outline-warning"]}
					buttonstyles={[{fontSize:'20px'}]}
					setcurrentpage={setcurrentpage}
					links={["/"]}
				/>
				
		</Grid>
		<Grid item xs={3}>
			<div style={{backgroundColor:'rgb(238,238,238)',height:'87vh',width:'25vw',display:'inline-block',textAlign:'center'}}>
				<div style={{position:'relative',borderRadius: '100%',width:'60%',left:'20%',top:'5%',aspectRatio:'1',backgroundImage:`url(${profile})`
				,backgroundPosition: 'center',backgroundSize: 'cover'}}>
				</div>
				<div className='Profilelinks'
					onClick={()=>{setpagerender('summary')}}
				>
					<h2>SUMMARY</h2>
				</div>
				<div className='Profilelinks'
					onClick={()=>{setpagerender('experience')}}
				> 
					<h2>EXPERIENCE</h2>
				</div>
				<div className='Profilelinks' 
					onClick={()=>{setpagerender('education')}}
				>
					<h2>EDUCATION</h2>
				</div>
				<div className='Profilelinks' 
					onClick={()=>{setpagerender('awards')}}
				>
					<h2>AWARDS</h2>
				</div>
				<div style={{position:'relative',width:'80%',left:'10%', top:'15%',borderTop:'1px black solid'}}>
					<h5 style={{fontWeight:'normal'}}>LinkedIN:www.linkedin.com/in/sophia-zx-zhang</h5>
					<h5 style={{fontWeight:'normal'}}>Email:Sophia.zx.zhang@gmail.com</h5>
				</div>
			</div>
		</Grid>
		<Grid item xs={9}>
			<div style={{height:'87vh',width:'75vw',display:'inline-block'}}>
				{pagerender === 'summary' && 
					<Summary/>
				}
				{pagerender === 'experience' && 
					<Experience/>
				}
				{pagerender === 'education' && 
					<Education/>
				}
				{pagerender === 'awards' && 
					<Awards/>
				}
			</div>
		</Grid>
	  </Grid>
	</div>
  );
};

function Summary() {
	return <>
		<div style={{textAlign:'center',padding:'13vh 7vh 7vh 7vh',}}>
		<h1>Summary</h1>
		<br/>
		<Typical 
        steps={[ 'A passionate front-end web developer and highly skilled in html, css, javascript and react. Demonstrated my scripting skill through designing and developing my own personal website as well as helping small business create their own website. Leadership skill and communication skill were developed through offering training on new recruiters. Focuson detail is my working philosophy.', 5000]}
        loop={Infinity}
        wrapper="h2"
		/>
		</div>
	</>;
}

function Experience() {
	return <>
		<h1>This is Experience</h1>
	</>;
}

function Education() {
	return <>
		<h1>This is Education</h1>
	</>;
}

function Awards() {
	return <>
		<h1>This is Awards</h1>
	</>;
}