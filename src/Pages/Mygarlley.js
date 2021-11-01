import React from "react";
import {Redirect} from "react-router-dom";
import bg from "../Images/sophia_gray_wihitebackground.jpg";
import caiwalk from "../Images/cai_walk.gif";
import rouwalk from "../Images/rou_walk.gif";
import carrot from "../Images/carrot.png";
import naowalk from "../Images/naowalk.gif";
import sun from "../Images/sun.jpg";
import feiwalk from "../Images/feiwalk2.gif";
import grape from "../Images/grape.jpg";
import laodawalk from "../Images/laodawalk.gif";
import laosanwalk from "../Images/laosanwalk.gif";
import {Cloud1, Cloud2, Cloud3, Myband} from "../Components/music_band";
import {Grid} from "@material-ui/core";
import {MyArrowleft, MyArrowright} from "../Components/Arrow";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

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

export  const Mygarlley = ({items,currentpage,setcurrentpage,ithimage,setithimage}) => {
    const titles = ["My Professional Profile","My Jewerly design","My music","My family","My fancy world"];
    const [onfoucslink, setonfoucslink] = React.useState(false);
    const mylink=["/My_Professional_Profile","/My_Jewerly_design","/My_music","/My_family","/My_fancy_world"];
    const classes = useStyles();
    const windowheight='801px';
    const windowwidth='1710px';
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
    const [rouprompt,setrouprompt] = React.useState(false);
    const [naoprompt,setnaoprompt] = React.useState(false);
    const [feiprompt,setfeiprompt] = React.useState(false);
    const [laodaprompt,setlaodaprompt] = React.useState(false);
    const [laosanprompt,setlaosanprompt] = React.useState(false);
    React.useEffect(()=>{
        const timer = setInterval(() => setcaiprompt(false), 3000);
        return () => clearInterval(timer);
    },[caiprompt])
    React.useEffect(()=>{
        const timer = setInterval(() => setrouprompt(false), 3000);
        return () => clearInterval(timer);
    },[rouprompt])
    React.useEffect(()=>{
        const timer = setInterval(() => setnaoprompt(false), 3000);
        return () => clearInterval(timer);
    },[naoprompt])
    React.useEffect(()=>{
        const timer = setInterval(() => setfeiprompt(false), 3000);
        return () => clearInterval(timer);
    },[feiprompt])
    React.useEffect(()=>{
        const timer = setInterval(() => setlaodaprompt(false), 3000);
        return () => clearInterval(timer);
    },[laodaprompt])
    React.useEffect(()=>{
        const timer = setInterval(() => setlaosanprompt(false), 3000);
        return () => clearInterval(timer);
    },[laosanprompt])
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
                    <div style={{position:'relative', top:'-70%',width: '30px',height: '50px',display:'inline-block'}}>
					<span style={caiprompt? {display:'block',position:'relative',top:'0%',left:'-50%'} : {display:'none'}}>
						<div style={{height:'100%',width:'100%',backgroundColor:'rgb(247,238,164)',padding:'40%',borderRadius:'60%',border:'5px dotted rgb(246,172,163)'}}>
							Hi there!
						</div>
						<div style={{position:'relative', left:'170%', height:'10%',width:'10%',backgroundColor:'rgb(247,238,164)',padding:'10%',borderRadius:'50%',border:'3px dotted rgb(246,172,163)'}}></div>
					</span>
                    </div>
                    <img src={caiwalk}
                         alt="caiwalk"
                         style={{width: '120px',height: '250px'}}
                         onMouseEnter={()=>{setcaiprompt(true);}}
                    />
                </div>
                <div className="Rou" >
                    <div style={{position:'relative', top:'-50%',width: '30px',height: '50px',display:'inline-block'}}>
					<span style={rouprompt? {display:'block',position:'relative',top:'0%'} : {display:'none'}}>
						<div style={{height:'100%',width:'100%',backgroundColor:'rgb(226,254,255)',padding:'40%',borderRadius:'40%',border:'5px dotted rgb(246,172,163)'}}>
							sophia :)
						</div>
						<div style={{position:'relative', left:'170%', height:'10%',width:'10%',backgroundColor:'rgb(226,254,255)',padding:'10%',borderRadius:'50%',border:'3px dotted rgb(246,172,163)'}}></div>
					</span>
                    </div>
                    <img src={rouwalk}
                         alt="rouwalk"
                         style={{width: '130px',height: '250px'}}
                         onMouseEnter={()=>{setrouprompt(true);}}
                    />
                </div>
                <div className="Nao" >
                    <div style={{position:'relative', top:'-30%', width: '30px',height: '30px'}}>
					<span style={naoprompt? {display:'block'} : {display:'none'}}>
						<div style={{height:'100%',width:'100%',backgroundColor:'rgb(229,241,214)',padding:'20%',borderRadius:'20%',border:'4px dotted rgb(181,203,91)'}}>
							<img style={{width: '120%',height: '120%'}} alt='carrot' src={carrot}/>
						</div>
						<div style={{position:'relative', left:'70%', height:'5%',width:'5%',backgroundColor:'rgb(229,241,214)',padding:'10%',borderRadius:'50%',border:'2px dotted rgb(181,203,91)'}}></div>
					</span>
                    </div>
                    <img src={naowalk}
                         alt="naowalk"
                         style={{width: '60px',height: '30px'}}
                         onMouseEnter={()=>{setnaoprompt(true);}}
                    />
                </div>
                <div className="Fei" >
                    <div style={{position:'relative', top:'-60%', width: '30px',height: '30px'}}>
					<span style={feiprompt? {display:'block'} : {display:'none'}}>
						<div style={{height:'100%',width:'100%',backgroundColor:'rgb(229,241,214)',padding:'20%',borderRadius:'20%',border:'4px dotted rgb(181,203,91)'}}>
							<img style={{width: '120%',height: '120%'}}  alt='sun' src={sun}/>
						</div>
						<div style={{position:'relative', left:'70%', height:'5%',width:'5%',backgroundColor:'rgb(229,241,214)',padding:'10%',borderRadius:'50%',border:'2px dotted rgb(181,203,91)'}}></div>
					</span>
                    </div>
                    <img src={feiwalk}
                         alt="feiwalk"
                         style={{width: '58px',height: '27px'}}
                         onMouseEnter={()=>{setfeiprompt(true);}}
                    />
                </div>
                <div className="Laoda" >
                    <div style={{position:'relative', top:'-70%',width: '30px',height: '25px'}}>
					<span style={laodaprompt? {display:'block'} : {display:'none'}}>
						<div style={{height:'100%',width:'100%',backgroundColor:'rgb(229,241,214)',padding:'20%',borderRadius:'20%',border:'4px dotted rgb(181,203,91)'}}>
							<img style={{width: '100%',height: '80%'}} alt='grape' src={grape}/>
						</div>
						<div style={{position:'relative', left:'70%', height:'5%',width:'5%',backgroundColor:'rgb(229,241,214)',padding:'10%',borderRadius:'50%',border:'2px dotted rgb(181,203,91)'}}></div>
					</span>
                    </div>
                    <img src={laodawalk}
                         alt="laodawalk"
                         style={{width: '50px',height: '25px'}}
                         onMouseEnter={()=>{setlaodaprompt(true);}}
                    />
                </div>
                <div className="Laosan" >
                    <div style={{position:'relative', top:'-10%',width: '15px',height: '30px'}}>
					<span style={laosanprompt? {display:'block'} : {display:'none'}}>
						<div style={{height:'100%',width:'100%',backgroundColor:'rgb(229,241,214)',padding:'20%',borderRadius:'20%',border:'4px dotted rgb(181,203,91)',fontWeight:'bold'}}>
							?
						</div>
						<div style={{position:'relative', left:'70%', height:'5%',width:'5%',backgroundColor:'rgb(229,241,214)',padding:'10%',borderRadius:'50%',border:'2px dotted rgb(181,203,91)'}}></div>
					</span>
                    </div>
                    <img src={laosanwalk}
                         alt="naowalk"
                         style={{width: '50px',height: '25px'}}
                         onMouseEnter={()=>{setlaosanprompt(true);}}
                    />
                </div>
            </div>
            <Cloud1 />
            <Cloud2 />
            <Cloud3 />
            <Myband />
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
                               style={onfoucslink?{height:`${displayHeight}`,cursor:'pointer'}:{height:`${displayHeight}`}}
                               onMouseEnter={()=>{console.log('onenter');setonfoucslink(true);}}
                               onMouseLeave={()=>{setonfoucslink(false);}}
                               onClick={()=>{setcurrentpage(mylink[ithimage])}}
                        >
                            <img className='mainimage' alt="linkimages" style={{height:`${displayHeight}`,width:'550px',border:'7px black double'}}
                                 src={items[ithimage]} />
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
                        <div style={{ position:'relative',left:'33%',height:'15%',width:'1%', borderRadius:'50%',border:'5px black double', display:'inline-block'}}></div>
                        <div style={{position:'relative',left:'38%',height:'50%',width:'20%',borderRadius:'10%',paddingBottom:'5px',borderBottom:'5px black double',borderTop:'5px black double',display:'inline-block',textAlign:'center'}}>
                            <span style={{fontWeight:'bold'}}>{titles[ithimage]}</span>
                        </div>
                        <div style={{ position:'relative',left:'43%',height:'15%',width:'1%', borderRadius:'50%',border:'5px black double', display:'inline-block'}}></div>
                    </Grid>
                </Grid>
            </div>
        </div>
    </>
}
