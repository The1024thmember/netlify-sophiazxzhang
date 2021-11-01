import { Toolbar } from "@material-ui/core";
import Button from 'react-bootstrap/Button';
import React from "react";
export const Header = ({toolbarstyle,headertext,headerstyle,buttontexts,buttonvariant,buttonstyles,setcurrentpage,links}) => {
  const displayDesktop = () => {
    return <Toolbar
	  style={toolbarstyle}
	>
		<div className="navbuttons"
		style={{position:'relative',left:"90%"}}>
		  {buttontexts.map((val, idx) => {
			return (
				<Button variant={buttonvariant[idx]} size="lg"
					style={buttonstyles[idx]}
					onClick={()=>{setcurrentpage(links[idx]);}}
					> {buttontexts[idx]}
				</Button>
			);
		})}
		</div>
		<h1
		style={headerstyle}
		>{headertext}</h1>
	</Toolbar>
  };
  return (
    <header>
      <div>{displayDesktop()}</div>
    </header>
  );
}