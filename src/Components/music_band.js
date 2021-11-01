import React from 'react'; 
import './music_bandStyle.css';
export function Cloud1() {
	return <>
		<div className='cloud1'>
		</div>
	</>
}

export function Cloud2() {
	return <>
		<div className='cloud2'>
		</div>
	</>
}

export function Cloud3() {
	return <>
		<div className='cloud3'>
		</div>
	</>
}

export function Myband () {
	const [pause, setpause] = React.useState(false);
	return <>
	{ pause &&
		<div className='bandoncloud'
		onClick= {()=>{setpause(!false)}}
		>
		</div>
	}
	{ !pause &&
		<div className='bandoncloud'
		onClick= {()=>{setpause(!false)}}
		>
		</div>
	}
	</>
}