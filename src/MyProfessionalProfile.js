import {Redirect} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Header } from './header.js'
import 'react-pro-sidebar/dist/css/styles.css';
import profile from './profile.jpg' ;
import './App.css';
import React from 'react';
import Typical from 'react-typical';
import typing from './keyboard.gif';
import Card from 'react-bootstrap/Card';
import essay from './essay.jpg';
import innovationcup from './innovation_cup.jpg';
import patentAutomatic from './patent_automatic.jpg';
import patentprinter from './patent_printer.jpg';
import presentation from './presentation.jpg';
import robot from './robot_design.jpg';
import scholoarship2018 from './scholoarship2018.jpg';
import scholoarship from './scholoarship.jpg';
import svm from './SVM_thirdprize.jpg';
import technology from './technology.jpg';
import vicepresident from './vice_president.jpg';
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
					onClick={()=>{setpagerender('achievements')}}
				>
					<h2>ACHIEVEMENTS</h2>
				</div>
				<div style={{position:'relative',width:'80%',left:'10%', top:'15%',borderTop:'1px black solid'}}>
					<h5 style={{fontWeight:'normal'}}>LinkedIN:<a style={{color:'black'}} href="www.linkedin.com/in/sophia-zx-zhang">www.linkedin.com/in/sophia-zx-zhang</a></h5>
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
					<Education
					setpagerender={setpagerender}
					/>
				}
				{pagerender === 'achievements' && 
					<Achievements/>
				}
			</div>
		</Grid>
	  </Grid>
	</div>
  );
};

function Summary() {
	return <>
		<Grid container style={{textAlign:'center',padding:'13vh 7vh 7vh 7vh',height:'100%',width:'100%'}} >
		<div style={{height:'50%',width:'100%'}} >
			<h1>Summary</h1>
			<br/>
			<Typical 
			steps={[ 'A passionate front-end web developer and highly skilled in html, css, javascript and react. Demonstrated my scripting skill through designing and developing my own personal website as well as helping small business create their own website. Leadership skill and communication skill were developed through offering training on new recruiters. Focus on detail is my working philosophy.', 5000]}
			loop={Infinity}
			wrapper="h2"
			/>
		</div>
		<div style={{position:'relative',bottom:'-11%',height:'50%',width:'100%'}}>
			<img src={typing} alt="typing" />
		</div>
		</Grid>
	</>;
}

function Experience() {
	const [experiencePage,setexperiencePage] = React.useState(1);
	return <>
		{experiencePage === 1 && 
			<Grid container style={{padding:'13vh 7vh 7vh 7vh',height:'90%',width:'100%'}} >
				<div style={{height:'100%',width:'100%'}} >
					<div style={{textAlign:'center'}} >
						<h1>Experience</h1>
					</div>
					<Grid container>
						<Grid item xs={9}><h2 style={{display:'inline-block'}}>Freelance Web Developer </h2> </Grid>
						<Grid item xs={3}><h3 style={{display:'inline-block'}}> Mar 2021 - present </h3></Grid>
					</Grid>
					<ul style={{color:'rgb(72,72,72)'}}>
						<li>Creating my own <a style={{fontWeight:'bold'}} href="https://sophiazxzhang-netlify-site.netlify.app/">website</a> from scratch under reactjs framework.</li>
						<li>Built a website mimicking Kahoot.it under Reactjs framework, allowing users to register, login, create, modify and play game. Interact with APIs for game data uploading and game playing. Imported Bootstrap components for UX designing. 
						</li>
						<li>Built a single-page-app liked website mimicking Instagram functionality, allowing user to register, login, follow, unfollow, create post, manage post and browse post of user he/she follows. Using javascript, html and css for coding.
						</li>
						<li>Helping other small business building their online purchasing platform using wordpress (show commodity pictures, product details as well as price, setting payment method).
						</li>					
					</ul>
					<Grid container>
						<Grid item xs={9}><h2 style={{display:'inline-block'}}> Data Analyst Intern Call - journey (Sydney, NSW)  </h2> </Grid>
						<Grid item xs={3}><h3 style={{display:'inline-block'}}> Jan 2021 - April 2021 </h3></Grid>
					</Grid>
					<ul style={{color:'rgb(72,72,72)'}}>
						<li>Develop customized applications under the word bench framework (phone call categorization, enrich phrase library, troubleshooting).</li>
						<li>Analyse hundreds of phone calls (extract mainly information for evaluating agent performance, gain insights in improving clients¡¯ business). 
						</li>
						<li>Create a report analyzing <a style={{fontWeight:'bold'}} href="https://app.powerbi.com/links/04yLpv6jt1?ctid=4eaed389-575d-431d-8099-13c4566eed90&pbi_source=linkShare">'customer experience' </a>using PowerBI.
						</li>
						<li>Build slides to display outcomes for clients (generate visuals based on clients' data, formatting).
						</li>					
					</ul>			
				</div>
			</Grid>
		}
		{experiencePage === 2 && 
			<Grid container style={{padding:'13vh 7vh 7vh 7vh',height:'90%',width:'100%'}} >
				<div style={{height:'100%',width:'100%'}} >
					<div style={{textAlign:'center'}} >
						<h1>Experience</h1>
					</div>
					<Grid container>
						<Grid item xs={9}><h2 style={{display:'inline-block'}}> Project Hub Web Developer  - PTW (Melbourne, Victoria)  </h2> </Grid>
						<Grid item xs={3}><h3 style={{display:'inline-block'}}>  April 2021 - Present </h3></Grid>
					</Grid>
					<ul style={{color:'rgb(72,72,72)'}}>
						<li>Maintained the design and content of the PTW Project Hub through checking the functionality of each component in the web page fix problems and when necessary.</li>
						<li>Reviewed and improved the quality and content access of the PTW Project Hub. </li>						
					</ul>	
					<Grid container>
						<Grid item xs={9}><h2 style={{display:'inline-block'}}>Physics Teacher Intern - XiuNing high school (Huangshan, China) </h2> </Grid>
						<Grid item xs={3}><h3 style={{display:'inline-block'}}> Sept 2018 - Dec 2018 </h3></Grid>
					</Grid>
					<ul style={{color:'rgb(72,72,72)'}}>
						<li>Constructed teaching materials (demonstrating slides, transcript form).</li>
						<li>Reinforced strong communication and analytical skills (tutoring, encouraging disadvantaged student, conduct experiment, report to supervisor). 
						</li>
						<li>Enhanced strong organizational abilities and management skills (hold sport meeting and theme class meeting, assist leader teach manage daily class affairs).
						</li>				
					</ul>		
				</div>
			</Grid>
		}
		{experiencePage === 3 && 
			<Grid container style={{padding:'13vh 7vh 7vh 7vh',height:'90%',width:'100%'}} >
				<div style={{height:'100%',width:'100%'}} >
					<div style={{textAlign:'center'}} >
						<h1>Experience</h1>
					</div>
					<Grid container>
						<Grid item xs={9}><h2 style={{display:'inline-block'}}>Research Assistant - AHNU </h2> </Grid>
						<Grid item xs={3}><h3 style={{display:'inline-block'}}> Jan 2018 - May 2019 </h3></Grid>
					</Grid>
					<ul style={{color:'rgb(72,72,72)'}}>
						<li>Programmed C++ language model to verify new assumption in field of Atomic and Molecular Physics.</li>
						<li>Participated in seminars and reported research results to supervisor.
						</li>
						<li>Co-published essay in International Journal of Quantum Chemistry.
						</li>			
					</ul>
					<Grid container>
						<Grid item xs={9}><h2 style={{display:'inline-block'}}> Vice President of Electronic Amateurs Association  - AHNU, China  </h2> </Grid>
						<Grid item xs={3}><h3 style={{display:'inline-block'}}> Sept 2017 - Sept 2018 </h3></Grid>
					</Grid>
					<ul style={{color:'rgb(72,72,72)'}}>
						<li>Trained and supervised over 15 new members in hardware programming, circuit board constructing and safety procedures.</li>
						<li>Participated in school level electronic making competition and won first prize.
						</li>
						<li>Co-organised school level web design competition, C language programming contest.
						</li>				
					</ul>			
				</div>
			</Grid>
		}
		<div style={{height:'10%',width:'100%',textAlign:'center'}}>
			<span className='experiencePagepointer'
			onClick={()=>{
				if (experiencePage>1){setexperiencePage(experiencePage-1);}
				else{setexperiencePage(3);}}}
			><-</span > {experiencePage} <span className='experiencePagepointer'
			onClick={()=>{if (experiencePage<3){setexperiencePage(experiencePage+1);}
				else{setexperiencePage(1);}}}
			>-></span>
		</div>
	</>;
}

function Education({setpagerender}) {
	const [projectshown,setprojectshown] = React.useState('hiden...');
	return <>
			<Grid container style={{padding:'13vh 7vh 7vh 7vh',height:'90%',width:'100%'}} >
				<div style={{height:'100%',width:'100%'}} >
					<div style={{textAlign:'center'}} >
						<h1>Education</h1>
					</div>
					<Grid container>
						<Grid item xs={9}><h2 style={{lineHeight:'100%'}}>Master of Information Technology </h2><h3 style={{lineHeight:'100%',color:'rgb(72,72,72)'}}>UNSW Sydney / Engineering Faculty </h3> </Grid>
						<Grid item xs={3}><h3 style={{display:'inline-block'}}> Sept 2019 - Sept 2021 </h3></Grid>
					</Grid>
					
					<ul style={{color:'rgb(72,72,72)'}}>
						<li>Distinction Average | High Distinction for programming, algorithm and Neuron network courses.</li>		
						<li>Courses: Software construction,Web Front-End Programming,Computer Vision,Neuron network&Deep learning,machine learning&data mining,etc. </li>
						<li >Projects: <span className= 'projectshownpointer' style={{color:'rgb(135,170,192)'}} onClick={()=>{
							if (projectshown==='hiden...'){setprojectshown('expand');}
							else{setprojectshown('hiden...');}}}>({projectshown})</span>
							{projectshown==='expand' &&
								<ul>
									<li>Independently designed and created a bus station system using C language from scratch, achieved functionality such as providing source and destination stops, automatically planning the shortest path, and transfer information. Including graph data structure and DFS algorithm. This project received a perfect score of ten out of ten.</li>
									<li>Using pure machine learning and CV methods implemented a vehicle detection system for calculating vehicle velocity and detecting lane markers, achieving 77 percent accuracy on vehicle velocity and 76 percent accuracy on lane detection.</li>
									<li>Combined with computer network knowledge, built a P2P system using Linux terminal simulating user dynamic joining, quitting, and sharing the file in the real-world phenomenon. The designed paperwork clarifies the implementations and testing procedures to the customer.</li>
									<li>Built a deep learning-based framework to categorize business feedback and predict business categories (restaurants, shopping, home services, etc.) and sentiment (positive, negative). The system achieved an accuracy of 87 percent.</li>
								</ul>
							}
						</li>
					</ul>
				  {projectshown==='hiden...' &&
					<div>
						<Grid container>
							<Grid item xs={9}><h2 style={{lineHeight:'100%'}}> Bachelor of Physics  </h2> <h3 style={{lineHeight:'100%',color:'rgb(72,72,72)'}}>AHNU / Physics and Electronic Information Faculty  </h3></Grid>
							<Grid item xs={3}><h3 style={{display:'inline-block'}}> Sept 2015 - June 2019 </h3></Grid>
						</Grid>
						<ul style={{color:'rgb(72,72,72)'}}>
							<li>GPA 84/100 | Awarded with school level second class scholarship two times.</li>	
							<li>Courses: Advanced mathmatics, linear algebra, Atomic physics,Quantum mechanics,Electromagnetism,Electrodynamics,etc.</li>	
							<li>Awards:
								<ul>
									<li>Published paper "Automatic following robot based on camera" in Undergraduate Innovation and Entrepreneurship Project</li>
									<li>First Prize in the Robot Concept Design Competition</li>
									<li>First Prize in College Students' Science and Technology Works Competition "Innovation Cup"</li>
									<li>Second Prize in Theme Speech Competition: "Sunny Campus, Healthy Heart"</li>
									<li>Third Prize in MCU Skill Application Contest</li>
									<li><span className= 'projectshownpointer' style={{color:'rgb(135,170,192)'}}
									onClick={()=>{setpagerender('achievements');}}
									>.etc</span></li>
								</ul>
							</li>						
						</ul>
					</ div>
					  }
				</div>
			</Grid>
	</>;
}

function Achievements() {
    const [achievementpage, setachievementpage] =  React.useState(1);
	return <>
		<Grid container style={{textAlign:'center',padding:'13vh 7vh 7vh 7vh',height:'90%',width:'100%'}} >
		<div style={{height:'50%',width:'100%'}} >
			<h1>Achievements</h1>
			<br/>
			{achievementpage===1 &&
			<Grid container>
				<Grid item xs={4}>
					<Card>
						<Card.Img variant="top" style={{height:'60%',width:'60%', border: '7px gold double'}} alt="image" src={patentAutomatic} />
						<Card.Body>
						  <Card.Title><h2 >'Automatic glass cleaning robot' Patent</h2></Card.Title>
						</Card.Body>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card>
						<Card.Img style={{height:'60%',width:'60%', border: '7px gold double'}} variant="top" alt="image" src={patentprinter} />
						<Card.Body>
						  <Card.Title><h2 >'Printe' Patent</h2></Card.Title>
						</Card.Body>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card>
						<Card.Img style={{height:'60%',width:'60%', border: '7px gold double'}} variant="top" alt="image" src={essay} />
						<Card.Body>
						  <Card.Title><h2 >'Automatic following robot based on camera' publication</h2></Card.Title>
						</Card.Body>
					</Card>
				</Grid>
			</Grid>
			}
			{achievementpage===2 &&
			<Grid container>
				<Grid item xs={4}>
					<Card>
						<Card.Img style={{height:'80%',width:'80%', border: '7px gold double'}} variant="top" alt="image" src={scholoarship2018} />
						<Card.Body>
						  <Card.Title><h2>School-level second-class scholarship 2018</h2></Card.Title>
						</Card.Body>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card>
						<Card.Img style={{height:'80%',width:'80%', border: '7px gold double'}} variant="top" alt="image" src={scholoarship} />
						<Card.Body>
						  <Card.Title><h2>School-level second-class scholarship 2016</h2></Card.Title>
						</Card.Body>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card>
						<Card.Img style={{height:'80%',width:'80%', border: '7px gold double'}} variant="top" alt="image" src={technology} />
						<Card.Body>
						  <Card.Title><h2>School-level Science and Technology Activity scholarship</h2></Card.Title>
						</Card.Body>
					</Card>
				</Grid>	
			</Grid>
			}
			{achievementpage===3 &&
			<Grid container>
				<Grid item xs={4}>
					<Card>
						<Card.Img style={{height:'80%',width:'80%', border: '7px gold double'}} variant="top" alt="image" src={vicepresident} />
						<Card.Body>
						  <Card.Title><h2>Appointment Letter of Vice president of Electronic Fans Association</h2></Card.Title>
						</Card.Body>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card>
						<Card.Img style={{height:'80%',width:'80%', border: '7px gold double'}} variant="top" alt="image" src={robot} />
						<Card.Body>
						  <Card.Title><h2>First Prize in the Robot Concept Design Competition</h2></Card.Title>
						</Card.Body>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card>
						<Card.Img style={{height:'80%',width:'80%', border: '7px gold double'}} variant="top" alt="image" src={innovationcup}/>
						<Card.Body>
						  <Card.Title><h2>First Prize in College Students' Science and Technology Works Competition "Innovation Cup"</h2></Card.Title>
						</Card.Body>
					</Card>
				</Grid>
			</Grid>
			}			
			{achievementpage===4 &&
			<Grid container>
				<Grid item xs={4}>
					<Card>
						<Card.Img style={{height:'80%',width:'80%', border: '7px gold double'}} variant="top" alt="image" src={presentation} />
						<Card.Body>
						  <Card.Title><h2>Second Prize in Theme Speech Competition: "Sunny Campus, Healthy Heart"</h2></Card.Title>
						</Card.Body>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card>
						<Card.Img style={{height:'80%',width:'80%', border: '7px gold double'}} variant="top" alt="image" src={svm} />
						<Card.Body>
						  <Card.Title><h2>Third Prize in MCU Skill Application Contest</h2></Card.Title>
						</Card.Body>
					</Card>
				</Grid>
			</Grid>	
			}			
		</div>
		</Grid>
		<div style={{height:'10%',width:'100%',textAlign:'center'}}>
			<span className='achievementpagepointer'
			onClick={()=>{
				if (achievementpage>1){setachievementpage(achievementpage-1);}
				else{setachievementpage(4);}}}
			><-</span > {achievementpage} <span className='achievementpagepointer'
			onClick={()=>{if (achievementpage<3){setachievementpage(achievementpage+1);}
				else{setachievementpage(4);}}}
			>-></span>
		</div>
	</>;
}