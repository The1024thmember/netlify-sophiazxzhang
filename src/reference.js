import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { MyInput } from './Myinput';
import { MyButton } from './MyButton';
import { MyModal } from './MyModal';
import Card from 'react-bootstrap/Card';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'
import './App.css';
import addnew from './addnew.png';
import van from './vangao.jfif';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams
} from 'react-router-dom';

export default function App () {
  localStorage.firstadvance = true;
  localStorage.firstexecutadvance = true;
  localStorage.questionArray = ['', '', '', '', '', '', '', '', '', ''];
  const [allsessionanswer, setallsessionanswer] = React.useState([]);
  const [token, mysettoken] = React.useState('');
  const [showregstate, setshowregstate] = React.useState(false);
  const [sessionid, setsessionid] = React.useState(0);
  const [gameindx, setgameindx] = React.useState([]);
  const [gametitle, setgametitle] = React.useState([]);
  const [gamequestionN, setgamequestionN] = React.useState([]);
  const [gamethumbnail, setgamethumbnail] = React.useState([]);
  const [gametime, setgametime] = React.useState([]);
  const [foucsgameid, setfoucsgameid] = React.useState(0);
  const [foucsgameidx, setfoucsgameidx] = React.useState(0);
  const [gameQuestions, setgameQuestions] = React.useState([]); // [gameindex, [question 'id','contennt']]
  const [qid, setqid] = React.useState(0); // question id for adding question
  const [focusquestionid, setfocusquestionid] = React.useState(0); // question id for focusing
  const [historysessions, sethistorysessions] = React.useState([]);
  const SendLogin = (Password, email) => {
    const loginBody = {
      email: email,
      password: Password,
    }
    const result = fetch('http://localhost:5005/admin/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginBody),
    }).then((data) => {
      console.log(result);
      if (data.status === 403) {
        console.log('403');
        setshowregstate(true);
      } else if (data.status === 200) {
        data.json().then(result => {
          mysettoken(result.token);
          localStorage.my_token = result.token;
        })
      } else if (data.status === 400) {
        setshowregstate(true);
        console.log('400');
      }
    }).catch((error) => {
      setshowregstate(true);
      console.log(error);
    });
  }
  const SendReg = (Password, email, name) => {
    const regBody = {
      email: email,
      password: Password,
      name: name
    }
    const result = fetch('http://localhost:5005/admin/auth/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(regBody),
    }).then((data) => {
      console.log(result);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(result => {
          mysettoken(result.token);
          localStorage.my_token = result.token;
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const Getgames = () => {
    const result = fetch('http://localhost:5005/admin/quiz', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    }).then((data) => {
      console.log(result);
      if (data.status === 403) {
        console.log('Invalid Token');
      } else if (data.status === 200) {
        data.json().then(result => {
          const newgameidx = [...gameindx];
          const newgametitle = [...gametitle];
          const newgamequestionN = [...gamequestionN];
          const newgamethumbnail = [...gamethumbnail];
          const newgametime = [...gametime];
          for (let i = 0; i < result.quizzes.length; i++) {
            newgameidx.push(result.quizzes[i].id);
            newgametitle.push(result.quizzes[i].name);
            newgamethumbnail.push(result.quizzes[i].thumbnail);
            newgamequestionN.push(result.quizzes[i].questionnumber);
            newgametime.push(result.quizzes[i].gametime);
          }
          setgameindx(newgameidx);
          setgametitle(newgametitle);
          setgamequestionN(newgamequestionN);
          setgamethumbnail(newgamethumbnail);
          setgametime(newgametime);
        })
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const SendLogout = () => {
    const result = fetch('http://localhost:5005/admin/auth/logout', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }).then((data) => {
      console.log(result);
      if (data.status === 403) {
        console.log('Invalid Token');
      } else if (data.status === 200) {
        console.log('logout success');
        data.json().then(result => {
        })
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const Postgame = (newgametitle, newgamequestionN, newgamethumbnail, newgametime) => {
    const GameBody = {
      name: newgametitle,
      thumbnail: newgamethumbnail,
    }
    const result = fetch('http://localhost:5005/admin/quiz/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(GameBody),
    }).then((data) => {
      console.log(result);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(result => {
          const copynewgameidx = [...gameindx];
          const copynewgametitle = [...gametitle];
          const copynewgamequestionN = [...gamequestionN];
          const copynewgamethumbnail = [...gamethumbnail];
          const copynewgametime = [...gametime];
          copynewgameidx.push(result.quizId);
          copynewgametitle.push(newgametitle);
          copynewgamethumbnail.push(newgamethumbnail);
          copynewgamequestionN.push(newgamequestionN);
          copynewgametime.push(newgametime);
          setgameindx(copynewgameidx);
          setgametitle(copynewgametitle);
          setgamequestionN(copynewgamequestionN);
          setgamethumbnail(copynewgamethumbnail);
          setgametime(copynewgametime);
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const Changegame = (questionlist, updatedname, thumbnaildata) => {
    let url = new URL('http://localhost:5005/admin/quiz/');
    url = url + foucsgameid;
    // const params = { quizid: foucsgameid };
    const QuestionBody = {
      name: updatedname,
      questions: questionlist,
      thumbnail: thumbnaildata
    };
    const result = fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(QuestionBody),
    }).then((data) => {
      console.log(result);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(result => {
          const copynewgametitle = [...gametitle];
          const copynewgamequestionN = [...gamequestionN];
          const copynewgamethumbnail = [...gamethumbnail];
          const copygamequestions = [...gameQuestions];
          const copynewgametime = [...gametime];
          copygamequestions[foucsgameidx] = questionlist; // assuming questionlist is updated question list with delete and new posted
          copynewgametitle[foucsgameidx] = updatedname;
          copynewgamethumbnail[foucsgameidx] = thumbnaildata;
          copynewgamequestionN[foucsgameidx] = questionlist.length; // try to figure out how to put new questions in it
          copynewgametime[foucsgameidx] = 0;
          for (let i = 0; i < questionlist.length; i++) {
            copynewgametime[foucsgameidx] += parseInt(questionlist[i][3]);
          }
          setgameQuestions(copygamequestions);
          setgametitle(copynewgametitle);
          setgamequestionN(copynewgamequestionN);
          setgamethumbnail(copynewgamethumbnail);
          setgametime(copynewgametime);
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const Removegame = () => {
    let url = new URL('http://localhost:5005/admin/quiz/');
    url = url + foucsgameid;
    const result = fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then((data) => {
      console.log(result);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(result => {
          const copynewgameindex = [...gameindx];
          const copynewgametitle = [...gametitle];
          const copynewgamequestionN = [...gamequestionN];
          const copynewgamethumbnail = [...gamethumbnail];
          const copynewgametime = [...gametime];
          const copygamequestions = [...gameQuestions];
          copygamequestions.splice(foucsgameidx, 1);
          copynewgameindex.splice(foucsgameidx, 1);
          copynewgametitle.splice(foucsgameidx, 1);
          copynewgamethumbnail.splice(foucsgameidx, 1);
          copynewgamequestionN.splice(foucsgameidx, 1); // try to figure out how to put new questions in it
          copynewgametime.splice(foucsgameidx, 1);
          setgameQuestions(copygamequestions);
          setgameindx(copynewgameindex);
          setgametitle(copynewgametitle);
          setgamequestionN(copynewgamequestionN);
          setgamethumbnail(copynewgamethumbnail);
          setgametime(copynewgametime);
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const GetgameQuestions = (mygameid, mygameidx) => {
    let countquestion = 0;
    const newresult = fetch('http://localhost:5005/admin/quiz/' + mygameid, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    }).then((data) => {
      console.log(newresult);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(newresult => {
          const copygamequestions = [...gameQuestions];
          if (!newresult.questions) { newresult.questions = ''; }
          copygamequestions[mygameidx] = newresult.questions;
          const copynewgametime = [...gametime];
          copynewgametime[mygameidx] = 0;
          for (let i = 0; i < newresult.questions.length; i++) {
            copynewgametime[mygameidx] += parseInt(newresult.questions[0][3]);
          }
          const copygamequestionN = [...gamequestionN];
          copygamequestionN[mygameidx] = newresult.questions.length;
          setgamequestionN(copygamequestionN);
          setgametime(copynewgametime);
          setgameQuestions(copygamequestions);
          setsessionid(newresult.active);
          countquestion += newresult.questions.length;
          setqid(countquestion);
          sethistorysessions(newresult.oldSessions);
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const Deletequestion = (questionid, allquestions) => {
    let url = new URL('http://localhost:5005/admin/quiz/');
    url = url + foucsgameid;
    allquestions.splice(questionid, 1);
    console.log('allquestions :' + allquestions);
    const QuestionBody = {
      name: gametitle[foucsgameidx],
      questions: allquestions,
      thumbnail: gamethumbnail[foucsgameidx],
    };
    const result = fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(QuestionBody),
    }).then((data) => {
      console.log(result);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(result => {
          const copynewgamequestionN = [...gamequestionN];
          const copygamequestions = [...gameQuestions];
          copygamequestions[foucsgameidx] = allquestions; // assuming questionlist is updated question list with delete and new posted
          copynewgamequestionN[foucsgameidx] = allquestions.length; // try to figure out how to put new questions in it
          setgameQuestions(copygamequestions);
          setgamequestionN(copynewgamequestionN);
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const Uploadeditedquestion = (allquestions) => {
    let url = new URL('http://localhost:5005/admin/quiz/');
    url = url + foucsgameid;
    const QuestionBody = {
      name: gametitle[foucsgameidx],
      questions: allquestions,
      thumbnail: gamethumbnail[foucsgameidx],
    };
    const result = fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(QuestionBody),
    }).then((data) => {
      console.log(result);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(result => {
          const copynewgamequestionN = [...gamequestionN];
          const copygamequestions = [...gameQuestions];
          copygamequestions[foucsgameidx] = allquestions; // assuming questionlist is updated question list with delete and new posted
          copynewgamequestionN[foucsgameidx] = allquestions.length; // try to figure out how to put new questions in it
          setgameQuestions(copygamequestions);
          setgamequestionN(copynewgamequestionN);
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const Startsession = () => {
    const newresult = fetch('http://localhost:5005/admin/quiz/' + foucsgameid + '/start', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    }).then((data) => {
      console.log(newresult);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(newresult => {
          console.log('Startsession: ' + newresult);
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const Getsessionresult = (everysessionid) => {
    const newresult = fetch('http://localhost:5005/admin/session/' + everysessionid + '/results', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.my_token,
        Accept: 'application/json',
      },
    }).then((data) => {
      console.log(newresult);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(myresult => {
          if (typeof (myresult.results[0]) !== 'undefined') {
            const temp = [];
            let currentanswers = [];
            for (let j = 0; j < myresult.results[0].answers.length; j++) {
              temp.push(myresult.results[0].answers[j].correct);
            }
            currentanswers = [...allsessionanswer];
            currentanswers.push(temp);
            setallsessionanswer(currentanswers);
          }
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <Router style = { { background: 'rgb(253,242,216)' } }>
      <div style = { { background: 'rgb(253,242,216)', height: '100%' } }>
        <nav>
            <Button><Link to="/">LogIn</Link></Button>
            <Button><Link to="/register">Register</Link></Button>
            <Button><Link to="/dashBoard">DashBoard</Link></Button>
            <Button><Link to ="/logout">Logout</Link></Button>
        </nav>

        <Switch>
          <Route path="/register">
            <Register
               SendReg={SendReg}
               token={token}
            />
          </Route>
          <Route path="/logout">
            <Logout
               SendLogout={SendLogout}
               mysettoken={mysettoken}
               token={token}
            />
          </Route>
          <Route path="/dashBoard">
            <DashBoard
               Getgames={Getgames}
               token={token}
               gameindx={gameindx}
               setgameindx={setgameindx}
               gametitle={gametitle}
               setgametitle={setgametitle}
               gameQuestions={gameQuestions[foucsgameidx]}
               setgamequestionN={setgamequestionN}
               gamequestionN={gamequestionN}
               gamethumbnail={gamethumbnail}
               setgamethumbnail={setgamethumbnail}
               gametime={gametime}
               setgametime={setgametime}
               setfoucsgameid={setfoucsgameid}
               setfoucsgameidx={setfoucsgameidx}
               Removegame={Removegame}
               GetgameQuestions={GetgameQuestions}
               Startsession={Startsession}
               sessionid={sessionid}
            />
          </Route>
          <Route path="/Newgame">
            <Newgame
               Postgame={Postgame}
               token={token}
            />
          </Route>
          <Route path="/Editgame">
            <Editgame
               Changegame={Changegame}
               quizid={foucsgameid}
               gameQuestions={gameQuestions[foucsgameidx]}
               qid={qid}
               setqid={setqid}
               Deletequestion={Deletequestion}
               setfocusquestionid={setfocusquestionid}
               foucsgameidx={foucsgameidx}
               gametitle={gametitle}
               gamethumbnail={gamethumbnail}
            />
          </Route>
          <Route path="/Editquestion">
            <Editquestion
               foucsgameid={foucsgameid}
               foucsgameidx={foucsgameidx}
               focusquestionid={focusquestionid}
               gameQuestions={gameQuestions}
               Uploadeditedquestion={Uploadeditedquestion}
            />
          </Route>
          <Route path="/PlayGame/:sessionid">
            <PlayGame
               foucsgameid={foucsgameid}
               foucsgameidx={foucsgameidx}
               Startsession={Startsession}
               GetgameQuestions={GetgameQuestions}
               gameQuestions={gameQuestions[foucsgameidx]}
            />
          </Route>
          <Route path="/Getresults/:sessionid">
            <Getresults
               foucsgameid={foucsgameid}
               historysessions={historysessions}
               Getsessionresult={Getsessionresult}
               allsessionanswer={allsessionanswer}
               setallsessionanswer={setallsessionanswer}
            />
          </Route>
           <Route path="/Finishgame">
            <Finishgame
            />
          </Route>
          <Route path="/">
            <LogIn
               SendLogin={SendLogin}
               token={token}
               showloginpage={true}
               showregstate={showregstate}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Logout ({ SendLogout, mysettoken, token }) {
  return <>
    <Card.Body style = { token ? { display: 'block', background: 'rgb(210,224,191)', width: '30%', position: 'relative', left: '35%', textAlign: 'center' } : { display: 'none' } }>
      <Card.Title style = { { fontWeight: 'bold ' } }>Are you sure to logout?</Card.Title>
      <Card.Text> You will not access to game information after logging out!</Card.Text>
      <MyButton variant="primary" onClick = { () => { SendLogout(); mysettoken(''); window.location.reload(); } } title = {'Yes'} style = { { display: 'inline-block' } }/>
      <Link to="/dashboard"><Button variant="primary" >Back to dashBoard</Button></Link>
    </Card.Body>
    <Card.Body style = { token ? { display: 'none' } : { display: 'block', background: 'rgb(210,224,191)', width: '30%', position: 'relative', left: '35%', textAlign: 'center' } }>
      <Card.Title style = { { fontWeight: 'bold ' } }>LogOut Success!</Card.Title>
      <Card.Text>You have successfully logged out, please go to Login to log into your account or go to reigster to have a new account!</Card.Text>
      <Link to="/login"><Button variant="primary">Go to Login</Button></Link>
      <Link to="/Register"><Button variant="primary">Go to Reigster</Button></Link>
    </Card.Body>
  </>
}

Logout.propTypes = {
  SendLogout: PropTypes.function,
  mysettoken: PropTypes.function,
  token: PropTypes.string
};

function LogIn ({ SendLogin, token, showloginpage, showregstate }) {
  const [Password, setpassword] = React.useState('');
  const [emailaddress, setemail] = React.useState('');
  return (
    <div style = { { background: 'rgb(253,242,216)', width: '100%', height: '100%' } }>
        <h1>LogIn</h1>
        <div className="p-3" style = { token ? { display: 'none' } : { display: 'block', textAlign: 'Center' } } >
            <div style={ showloginpage ? { display: 'block' } : { display: 'none' } } >
                  <h1>Please Login</h1>
                  Email:<input
                    style={ emailaddress ? {} : { background: 'rgb(253,237,235)' } }
                    onChange={(e) => { setemail(e.target.value) } }
                        />
                  <br />
                  Password:<input
                    style={ Password ? {} : { background: 'rgb(253,237,235)' } }
                    onChange={(e) => { setpassword(e.target.value) } }
                         />
                  <br />
                  <br />
                  <Button onClick={ () => {
                    SendLogin(Password, emailaddress);
                  }}
                  >Login</Button>
                  <br />
                  <Card
                   style={ showregstate ? { display: 'block', background: 'rgb(233,70,89)', width: '30%', position: 'relative', left: '35%' } : { display: 'none' } } >
                    <Card.Body>
                      <Card.Title>⚠</Card.Title>
                      <Card.Text>User not found, please register first!</Card.Text>
                      <Link to="/Register"><Button variant="primary">Go Reigster</Button></Link>
                    </Card.Body>
                  </Card>
            </div>
        </div>
        <Card
          style={ token ? { display: 'block', background: 'rgb(210,224,191)', width: '30%', position: 'relative', left: '35%', textAlign: 'center' } : { display: 'none' } } >
            <Card.Body>
              <Card.Title style = { { fontWeight: 'bold ' } }>Login Success!</Card.Title>
              <Card.Text>You have successfully logged in, please go to dashboard to play, create or modify any game!</Card.Text>
              <Link to="/dashBoard"><Button variant="primary">Go to dashBoard</Button></Link>
            </Card.Body>
        </Card>
    </div>
  );
}

LogIn.propTypes = {
  SendLogin: PropTypes.function,
  token: PropTypes.text,
  showloginpage: PropTypes.boolean,
  showregstate: PropTypes.boolean
};

function Register ({ SendReg, token }) {
  const [Password, setpassword] = React.useState('');
  const [emailaddress, setemail] = React.useState('');
  const [name, setname] = React.useState('');
  return <>
  <h1>Register</h1>
  <div style={ token ? { display: 'none' } : { display: 'block', textAlign: 'Center' } } >
    <h1>Please Reigster</h1>
        Email:<MyInput
        style={ emailaddress ? {} : { background: 'rgb(253,237,235)' } }
        onChange={(e) => { setemail(e.target.value) } }
        />
        <br />
        Password:<MyInput
               style={ Password ? {} : { background: 'rgb(253,237,235)' } }
               onChange={(e) => { setpassword(e.target.value) } }
        />
        <br />
        Name:<MyInput
            style={ name ? {} : { background: 'rgb(253,237,235)' } }
            onChange={(e) => { setname(e.target.value) } }
            />
        <br />
        <Button onClick={ () => {
          if (Password === '' || emailaddress === '' || name === '') {
            alert('Please complete all the requested information!');
          } else {
            SendReg(Password, emailaddress, name);
          }
        }}
        >Submit</Button>
    </div>
    <Card
      style={ token ? { display: 'block', background: 'rgb(210,224,191)', width: '30%', position: 'relative', left: '35%', textAlign: 'center' } : { display: 'none' } } >
        <Card.Body>
          <Card.Title style = { { fontWeight: 'bold ' } }>Reigstered and logged in Success!</Card.Title>
          <Card.Text>You have successfully reigstered, we have automatically logged into your account, please go to dashboard to play, create or modify any game!</Card.Text>
          <Link to="/dashBoard"><Button variant="primary">Go to dashBoard</Button></Link>
        </Card.Body>
    </Card>
  </>;
}

Register.propTypes = {
  SendReg: PropTypes.function,
  token: PropTypes.string
};

function DashBoard ({ Getgames, token, gameindx, setgameindx, gametitle, setgametitle, gamequestionN, setgamequestionN, gamethumbnail, setgamethumbnail, gametime, setgametime, setfoucsgameid, setfoucsgameidx, Removegame, GetgameQuestions, Startsession, sessionid, gameQuestions }) {
  const [firstgetgame, setfirstgetgame] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [message, setmessage] = React.useState('');
  const [popupfirstbutton, setpopupfirstbutton] = React.useState('');
  const [popupsecondbutton, setpopupsecondbutton] = React.useState('');
  const [popuptitle, setpopuptitle] = React.useState('');
  const [RedirectGetresult, setRedirectGetresult] = React.useState(false);
  const handleClose = () => setShow(false);
  if (token && gameindx.length === 0 && firstgetgame) {
    Getgames();
    if (gameindx.length === 0) { setfirstgetgame(false); }
  }
  if (RedirectGetresult) {
    return <Redirect to={`/Getresults/${sessionid}`} />
  }
  return <>
    <h2>DashBoard</h2>
    <Card
      style={ token ? { display: 'none' } : { display: 'block', background: 'rgb(210,224,191)', width: '30%', position: 'relative', left: '35%', textAlign: 'center' } } >
        <Card.Body>
          <Card.Title style = { { fontWeight: 'bold ' } }>⚠ You are logged out!</Card.Title>
          <Card.Text>Please login or register first to view dashboard data!</Card.Text>
          <Link to="/login"><Button variant="primary">Go to Login</Button></Link>
          <Link to="/register"><Button variant="primary">Go to Register</Button></Link>
        </Card.Body>
    </Card>
    <div
      style = { token ? { display: 'block', textAlign: 'Center', backgroundImage: `url(${van})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' } : { display: 'none' } }
      onLoad = { (event) => { console.log('Onloading'); } }
    >
        <hr size="8px" width="100%" color="gray"/>
        <h1>Quizes</h1>
        <MyModal show = {show}
        style = { show ? { display: 'block', textAlign: 'center', background: 'rgb(251,218,222)', width: '33%', height: '40%', position: 'absolute', top: '0%', left: '33%' } : { display: 'none' } }
        onHide = {handleClose}
        title = {popuptitle}
        bodymessage = {`${message} ${sessionid}`}
        firstbuttonvariant = 'secondary'
        firstbuttononclick = { () => {
          if (popupfirstbutton === 'yes') {
            setRedirectGetresult(true);
          } else {
            localStorage.lifesaving = gameQuestions;
            localStorage.Startsession = Startsession;
            navigator.clipboard.writeText('http://localhost:3000/PlayGame/' + sessionid);
          }
        } }
        firstbuttontext = {popupfirstbutton}
        secondbuttonstyle = { popupsecondbutton ? { display: 'inline-block' } : { display: 'none' } }
        secondbuttonvariant = 'primary'
        secondbuttononclick = { () => {
          if (popupsecondbutton === 'no') {
            setShow(false);
          }
        } }
        secondbuttontext = {popupsecondbutton} />
        <div className='Gamecard'>
           { gameindx.map((val, idx) => {
             return (
                  <Showgame
                      key={idx}
                      index={idx}
                      gamelist={gameindx}
                      title={gametitle}
                      questionnumber={gamequestionN[idx]}
                      thumbnail={gamethumbnail}
                      time={gametime[idx]}
                      setfoucsgameid={setfoucsgameid}
                      setfoucsgameidx={setfoucsgameidx}
                      Removegame={Removegame}
                      GetgameQuestions={GetgameQuestions}
                      setShow={setShow}
                      setmessage={setmessage}
                      setpopupfirstbutton={setpopupfirstbutton}
                      setpopupsecondbutton={setpopupsecondbutton}
                      setpopuptitle={setpopuptitle}
                      Startsession={Startsession}
                      show={show}
                  />
             )
           })}
           <Link to="/Newgame"><Card
               onClick = { () => { console.log('Jumping to newgame page'); } }
               style = {
                 {
                   width: '18rem',
                   background: 'rgb(249,188,175)',
                   border: '4px solid rgb(213,216,216)',
                   display: 'inline-block',
                   margin: '1rem',
                 } }
               >
               <Card.Img variant = 'top' className='Gamethumb' src = {addnew} style = { { width: '80%' } }/>
               <Card.Body >
                  <Card.Title>📎 Click to add new game </Card.Title>
                  <Card.Text>📝 Set your questions
                  <br />
                  ⌛ And timer
                  </Card.Text>
                  <span style = { { position: 'relative', left: '40%' } } variant = 'outline-secondary'>☀ </span>
                  <span style = { { position: 'relative', left: '40%' } } variant = 'outline-secondary'>☀ </span>
               </Card.Body>
           </Card></Link>
        </div>
    </div>
  </>;
}

DashBoard.propTypes = {
  Getgames: PropTypes.function,
  token: PropTypes.text,
  gameindx: PropTypes.array,
  setgameindx: PropTypes.function,
  gametitle: PropTypes.array,
  setgametitle: PropTypes.function,
  gamequestionN: PropTypes.array,
  setgamequestionN: PropTypes.function,
  gamethumbnail: PropTypes.array,
  setgamethumbnail: PropTypes.function,
  gametime: PropTypes.array,
  setgametime: PropTypes.function,
  setfoucsgameid: PropTypes.function,
  setfoucsgameidx: PropTypes.function,
  Removegame: PropTypes.function,
  GetgameQuestions: PropTypes.function,
  Startsession: PropTypes.function,
  sessionid: PropTypes.string,
  gameQuestions: PropTypes.array
};

function Showgame ({ key, index, gamelist, title, questionnumber, thumbnail, time, setfoucsgameid, setfoucsgameidx, Removegame, GetgameQuestions, setShow, setmessage, setpopupfirstbutton, setpopupsecondbutton, Startsession, setpopuptitle, show }) {
  const myEndsession = (myfoucsedid) => {
    const newresult = fetch('http://localhost:5005/admin/quiz/' + myfoucsedid + '/end', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + localStorage.my_token,
        Accept: 'application/json',
      },
    }).then((data) => {
      console.log(newresult);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(newresult => {
          console.log('Endsession: ' + newresult);
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  return <>
    <Card
      onMouseEnter = { () => {
        if (!show) {
          setfoucsgameidx(index);
          setfoucsgameid(gamelist[index]);
          GetgameQuestions(gamelist[index], index);
          localStorage.foucsgameid = gamelist[index];
          localStorage.foucsgameidx = index;
        }
      } }
      style = {
        {
          width: '18rem',
          background: 'rgb(243,158,125)',
          border: '4px solid rgb(228,174,132)',
          display: 'inline-block',
          margin: '1rem'
        }
        }>
      <div>
        <Button
        style = { { position: 'relative', left: '40%' } }
        onMouseDown = { () => {
          Startsession();
        } }
        onMouseUp = { () => {
          GetgameQuestions(gamelist[index], index);
          setmessage('start game ' + gamelist[index] + '!  Session id: ');
          setpopupfirstbutton('Copy Link'); setpopupsecondbutton(''); setShow(true);
          setpopuptitle('Play Game');
        } }
        variant = 'outline-secondary'>▷</Button>
        <Button
        style = { { position: 'relative', left: '40%' } }
        onClick = { () => {
          myEndsession(gamelist[index]);
          setmessage('Stop game ' + gamelist[index] + '. Would you like to view the results?');
          setpopupfirstbutton('yes'); setpopupsecondbutton('no');
          setpopuptitle('Pause Game');
          setShow(true);
        } }
        variant = 'outline-secondary'>◉</Button>
      </div>
      <Card.Img variant = 'top' className='Gamethumb' src = {thumbnail[index]} style = { { width: '80%' } }/>
      <Card.Body>
        <Card.Title>📎 {title[index]}</Card.Title>
        <Card.Text>📝 {questionnumber}
        <br />
        ⌛ {time}
        </Card.Text>
        <Link to="/Editgame"><Button style = { { position: 'relative', left: '40%' } } onChange = { () => { setfoucsgameidx(index); setfoucsgameid(gamelist[index]); } } variant="light">🖋</Button></Link>
        <Button variant="light" style = { { position: 'relative', left: '40%' } } onClick = { () => { Removegame() } }>🗑</Button>
      </Card.Body>
    </Card>
  </>;
}

Showgame.propTypes = {
  key: PropTypes.text,
  index: PropTypes.text,
  gamelist: PropTypes.array,
  title: PropTypes.array,
  questionnumber: PropTypes.array,
  thumbnail: PropTypes.array,
  time: PropTypes.array,
  setfoucsgameid: PropTypes.function,
  setfoucsgameidx: PropTypes.function,
  Removegame: PropTypes.function,
  GetgameQuestions: PropTypes.function,
  setShow: PropTypes.function,
  setmessage: PropTypes.function,
  setpopupfirstbutton: PropTypes.function,
  setpopupsecondbutton: PropTypes.function,
  Startsession: PropTypes.function,
  setpopuptitle: PropTypes.function,
  show: PropTypes.boolean
};

function Newgame ({ Postgame, token }) {
  const [newgametitle, setnewgametitle] = React.useState('');
  const [newgamequestionN, setnewgamequestionN] = React.useState('');
  const [thumbnaildata, setthumbnaildata] = React.useState('');
  const [newgametime, setnewgametime] = React.useState('');
  return <>
    <div style={ { textAlign: 'center' } }>
      <h1>Creating New Game</h1>
      Name: <input onChange={(e) => { setnewgametitle(e.target.value); } }/> <span className='Required'>(* Required)</span>
      <br />
      QuestionNumber: <input onChange={(e) => { setnewgamequestionN(e.target.value); } }/> <span className='Optional'>(Optional)</span>
      <br />
      Thumbnail: <input type='file' onChange = { (e) => { generatethumbnail(setthumbnaildata, e); } }/> <span className='Optional'>(Optional)</span>
      <br />
      Totaltime: <input onChange={(e) => { setnewgametime(e.target.value); } }/> <span className='Optional'>(Optional)</span>
      <br />
      <Button onClick = { () => { Postgame(newgametitle, newgamequestionN, thumbnaildata, newgametime) } }>Post New game</Button>
    </div>
  </>;
}

Newgame.propTypes = {
  Postgame: PropTypes.function,
  token: PropTypes.text,
};

function Editgame ({ Changegame, quizid, gameQuestions, qid, setqid, Deletequestion, setfocusquestionid, gametitle, gamethumbnail, foucsgameidx }) {
  const [updatedname, setupdatename] = React.useState('');
  const [toupdatename, settoupdatename] = React.useState(false);
  const [thumbnaildata, setthumbnaildata] = React.useState('');
  const [toupthumbnail, settoupthumbnail] = React.useState(false);
  const [updatedquestionlist, setupdatedquestionlist] = React.useState(gameQuestions);
  const [newcreatequestion, setnewcreatequestion] = React.useState('');
  if (typeof (gameQuestions) === 'undefined') {
    return <>
      <div style={ { textAlign: 'center' } }>
        <h1>Editing game id: {quizid}</h1>
        Name: <input onChange={(e) => { setupdatename(e.target.value); } }/> <span className='Required'>(* Required)</span>
        <br />
        <h2>Questions:</h2>
        <h2>Game Thumbnail:</h2>
        <input type='file' onChange = { (e) => { generatethumbnail(setthumbnaildata, e); } }/>
        <span className='Optional'>(Optional)</span>
        <br />
        <Card
          style = {
            {
              width: '18rem',
              background: 'rgb(213,216,216)',
              border: '4px solid rgb(225,221,214)',
              display: 'inline-block',
              margin: '1rem'
            }
            }>
          <Card.Img variant = 'top' className='Questionthumb' src = '' />
          <Card.Body>
            <h3>Add new question</h3>
            <input onBlur={(e) => { setnewcreatequestion(e.target.value); } }/>
            <Button onClick = { (e) => { const id = qid + 1; setqid(id); addquestion(qid, newcreatequestion, setupdatedquestionlist, updatedquestionlist) } }> ✔ </Button>
           </Card.Body>
        </Card>
        <br />
        <Button onClick = { () => { Changegame(updatedquestionlist, updatedname, thumbnaildata) } }>Save changes</Button>
      </div>
    </>
  } else {
    return <>
      <div style={ { textAlign: 'center' } }>
        <h1>Editing game id: {quizid}</h1>
        <h2>Edit Questions:</h2>
        <div onLoad = { (e) => { setthumbnaildata(gamethumbnail[foucsgameidx]); setupdatename(gametitle[foucsgameidx]) } }>
          { gameQuestions.map((val, idx) => {
            return <>
                <Card
                 onMouseEnter = { () => { setfocusquestionid(idx); } }
                 style = {
                  {
                    width: '18rem',
                    background: 'rgb(135,170,192)',
                    border: '4px solid rgb(156,183,212)',
                    display: 'inline-block',
                    margin: '1rem',
                  }
                  }>
                  <Card.Img variant = 'top' className='Questionthumb' src = '' />
                  <Card.Body>
                    <Card.Title>📎 {gameQuestions[idx][0]}</Card.Title>
                    <Card.Text>📝 {gameQuestions[idx][1]}
                    </Card.Text>
                    <Link to="/Editquestion"><Button style = { { position: 'relative', left: '40%' } } variant="light">🖋</Button></Link>
                    <Button style = { { position: 'relative', left: '40%' } } onClick = { () => { Deletequestion(gameQuestions[idx][0], gameQuestions) } } variant="light">🗑</Button>
                  </Card.Body>
                </Card>
            </>
          })}
        </div>
        <Card
          style = {
            {
              width: '18rem',
              background: 'rgb(213,216,216)',
              border: '4px solid rgb(225,221,214)',
              display: 'inline-block',
              margin: '1rem'
            }
            }>
          <Card.Img variant = 'top' className='Questionthumb' src = '' />
          <Card.Body>
            <h3>Add new question</h3>
            <input onBlur={(e) => { setnewcreatequestion(e.target.value); } }/>
            <Button onClick = { (e) => { const id = qid + 1; setqid(id); addquestion(qid, newcreatequestion, setupdatedquestionlist, updatedquestionlist) } }> ✔ </Button>
           </Card.Body>
        </Card>
        <br />
        <h2>Edit Game Metadata:</h2>
        Game Name: {gametitle[foucsgameidx]} <Button variant="light" onClick = { () => { settoupdatename(true); } }>🖋</Button>
        <input
        style = { toupdatename ? { display: 'block', width: '30%', position: 'relative', left: '35%' } : { display: 'none' } }
        onChange={(e) => { setupdatename(e.target.value); } }/>
        <br />
        Game cover image: <Button variant="light" onClick = { () => { settoupthumbnail(true); } }>🖋</Button>
        <input
        style = { toupthumbnail ? { display: 'block', width: '30%', position: 'relative', left: '35%' } : { display: 'none' } }
        type='file' onChange = { (e) => { generatethumbnail(setthumbnaildata, e); } }/>
        <div style = { { width: '30%', position: 'relative', left: '35%' } }>
          <img src={gamethumbnail[foucsgameidx]} style = { { height: '100%', width: '100%' } }/>
        </div>
        <br />
        <Button
          onClick = { () => {
            if (toupdatename && toupthumbnail) {
              Changegame(updatedquestionlist, updatedname, thumbnaildata);
              settoupdatename(false);
              settoupthumbnail(false);
            } else if (toupdatename) {
              Changegame(updatedquestionlist, updatedname, gamethumbnail[foucsgameidx]);
              settoupdatename(false);
            } else if (toupthumbnail) {
              Changegame(updatedquestionlist, gametitle[foucsgameidx], thumbnaildata);
              settoupthumbnail(false);
            } else {
              Changegame(updatedquestionlist, gametitle[foucsgameidx], gamethumbnail[foucsgameidx]);
            }
          } }>Save changes</Button>
      </div>
   </>
  }
}

Editgame.propTypes = {
  Changegame: PropTypes.function,
  quizid: PropTypes.number,
  gameQuestions: PropTypes.array,
  qid: PropTypes.number,
  setqid: PropTypes.function,
  Deletequestion: PropTypes.function,
  setfocusquestionid: PropTypes.function,
  gametitle: PropTypes.array,
  gamethumbnail: PropTypes.array,
  foucsgameidx: PropTypes.number
};

function addquestion (id, newcreatequestion, setupdatedquestionlist, updatedquestionlist) {
  if (typeof (updatedquestionlist) === 'undefined') {
    const copyquestions = [];
    copyquestions.push([id, newcreatequestion, 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None']);
    setupdatedquestionlist(copyquestions);
  } else {
    const copyquestions = [...updatedquestionlist];
    copyquestions.push([id, newcreatequestion, 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None', 'None']);
    setupdatedquestionlist(copyquestions);
  }
}

addquestion.propTypes = {
  id: PropTypes.number,
  newcreatequestion: PropTypes.text,
  setquestionlist: PropTypes.function,
  updatedquestionlist: PropTypes.array
};

function generatethumbnail (setthumbnaildata, e) {
  e.preventDefault();
  const reader = new FileReader();
  const file = e.target.files[0];
  reader.onloadend = () => {
    setthumbnaildata(reader.result);
  }
  reader.readAsDataURL(file)
}

generatethumbnail.propTypes = {
  setthumbnaildata: PropTypes.function,
  e: PropTypes.event
};

function Editquestion ({ foucsgameid, foucsgameidx, focusquestionid, gameQuestions, Uploadeditedquestion }) {
  const [extramedia, setextramedia] = React.useState(3);
  const questionforthisgame = gameQuestions[foucsgameidx];
  const [optionchoice, setoptionchoice] = React.useState(1);
  const [thisquestion, setthisquestion] = React.useState(gameQuestions[foucsgameidx][focusquestionid][1]);
  const [thistime, setthistime] = React.useState(0);
  const [thismark, setthismark] = React.useState(0);
  const [option1value, setoption1value] = React.useState('');
  const [option2value, setoption2value] = React.useState('');
  const [option3value, setoption3value] = React.useState('');
  const [thisthumbnail, setthisthumbnail] = React.useState('');
  const [showchangequestioninput, setshowchangequestioninput] = React.useState(false);
  const [showchangetime, setshowchangetime] = React.useState(false);
  const [showchangemark, setshowchangemark] = React.useState(false);
  const [showchangeoption1, setshowchangeoption1] = React.useState(false);
  const [showchangeoption2, setshowchangeoption2] = React.useState(false);
  const [showchangeoption3, setshowchangeoption3] = React.useState(false);
  const [questionanswer, setquestionanswer] = React.useState('');
  const editanswers = (whichoption) => {
    if (optionchoice === 1) {
      setquestionanswer(whichoption);
    } else {
      if (typeof (questionanswer) === 'string') {
        const newanswers = [questionanswer];
        newanswers.push(whichoption);
        setquestionanswer(newanswers);
      } else {
        const newanswers = [...questionanswer];
        newanswers.push(whichoption);
        setquestionanswer(newanswers);
      }
    }
  }
  return <>
    <div
    style = { gameQuestions[foucsgameidx][focusquestionid][8] === 3 ? { backgroundImage: `url(${gameQuestions[foucsgameidx][focusquestionid][9]})` } : { background: 'rgb(255,251,206)' } }>
      <h1 style = { { position: 'relative', left: '18%' } }>Game: {foucsgameid} - Question: {focusquestionid}</h1>
      <Form style = { { width: ' 60%', position: 'relative', left: '20%', textAlign: 'left' } }>
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Row>
      <Form.Label >QuestionType:  </Form.Label>
      <ToggleButtonGroup id = 'questiontype' type="radio" name="questiontype" defaultValue={1} >
        <ToggleButton id = '1' value={1} onClick = { () => { setoptionchoice(1); } }>single choice </ToggleButton>
        <br />
        <ToggleButton id = '2' value={2} onClick = { () => { setoptionchoice(2); } }>multiple choice </ToggleButton>
      </ToggleButtonGroup>
      <br />
      </Form.Row>
      <Form.Row>
      <Form.Label>Question:</Form.Label>
      <br />
      <Form.Label >{gameQuestions[foucsgameidx][focusquestionid][1]} </Form.Label>
      <Button variant="light" onClick = { () => { setshowchangequestioninput(true); } }>🖋</Button>
      <br />
      <div style = { showchangequestioninput ? { display: 'block' } : { display: 'none' } } >
        Change as: <input type='text' onBlur = { (e) => { setthisquestion(e.target.value); } }/>
      </ div>
      <br />
      </Form.Row>
      <Form.Row>
      <span>⌛: {gameQuestions[foucsgameidx][focusquestionid][3]}</span>
      <Button variant="light" onClick = { () => { setshowchangetime(true); } }>🖋</Button>
      <input
      style = { showchangetime ? { display: 'inline-block' } : { display: 'none' } }
      type='number' onBlur = { (e) => { setthistime(e.target.value); } }
      />
      <br />
      </Form.Row>
      <Form.Row>
      <span>⭐: {gameQuestions[foucsgameidx][focusquestionid][4]}</span>
      <Button variant="light" onClick = { () => { setshowchangemark(true); } }>🖋</Button>
      <input
      style = { showchangemark ? { display: 'inline-block' } : { display: 'none' } }
      type='number' onBlur = { (e) => { setthismark(e.target.value); } }
      />
      </Form.Row>
      <Form.Row>
      <br />
      <Form.Label>Options:</Form.Label>
      <ul>
        <li><span>{gameQuestions[foucsgameidx][focusquestionid][5]}</span>
        <Button variant="light" onClick = { () => { setshowchangeoption1(true); } }>🖋</Button>
        <input
        style = { showchangeoption1 ? { display: 'inline-block' } : { display: 'none' } }
        type='text' onBlur = { (e) => { setoption1value(e.target.value); } }/>
        <br />
        <span style = { { color: 'rgb(160,157,156)' } }>  set as answer</span>
        <Button variant="light" onClick = { () => { editanswers(option1value); } }>✔</Button></li>
        <li><span>{gameQuestions[foucsgameidx][focusquestionid][6]}</span>
        <Button variant="light" onClick = { () => { setshowchangeoption2(true); } }>🖋</Button>
        <input
        style = { showchangeoption2 ? { display: 'inline-block' } : { display: 'none' } }
        type='text' onBlur = { (e) => { setoption2value(e.target.value); } }/>
        <br />
        <span style = { { color: 'rgb(160,157,156)' } }>  set as answer </span>
        <Button variant="light" onClick = { () => { editanswers(option2value); } }>✔</Button></li>
        <li><span>{gameQuestions[foucsgameidx][focusquestionid][7]}</span>
        <Button variant="light" onClick = { () => { setshowchangeoption3(true); } }>🖋</Button>
        <input
        style = { showchangeoption3 ? { display: 'inline-block' } : { display: 'none' } }
        type='text' onBlur = { (e) => { setoption3value(e.target.value); } }/>
        <br />
        <span style = { { color: 'rgb(160,157,156)' } }> set as answer </span>
        <Button variant="light" onClick = { () => { editanswers(option3value); } }>✔</Button></li>
      </ul>
      <br />
      </Form.Row>
      <Form.Row>
      <Form.Label>Media Type: </Form.Label>
      <ToggleButtonGroup id = 'extramedia' type="radio" name="extramedia" defaultValue={3} >
        <ToggleButton id = '3' value={3} onClick = { (e) => { setextramedia(3); } }>photo(pre-checked)</ToggleButton>
        <br />
        <ToggleButton id = '4' value={4} onClick = { (e) => { setextramedia(4); } }>video link</ToggleButton>
      </ToggleButtonGroup>
      <br />
      </Form.Row>
      <Form.Row>
      <Form.Label >Media Data: </Form.Label>
      <br />
      Photo
      <input
        type = 'file'
        onChange = { (e) => {
          e.preventDefault();
          const reader = new FileReader();
          const file = e.target.files[0];
          reader.onloadend = () => {
            setthisthumbnail(reader.result);
          }
          reader.readAsDataURL(file);
        } }
      />
      <br />
      Or
      <br />
      Video Link
      <input
        type = 'text'
        onChange = { (e) => {
          setthisthumbnail(e.target.value);
        } }
      />
      </Form.Row>
      </Form.Group>
      </Form>
      <br />
      <Button
        style = { { position: 'relative', left: '35%' } }
        onClick = { () => {
          questionforthisgame[focusquestionid][1] = thisquestion;
          questionforthisgame[focusquestionid][2] = optionchoice;
          questionforthisgame[focusquestionid][3] = thistime;
          questionforthisgame[focusquestionid][4] = thismark;
          questionforthisgame[focusquestionid][5] = option1value;
          questionforthisgame[focusquestionid][6] = option2value;
          questionforthisgame[focusquestionid][7] = option3value;
          questionforthisgame[focusquestionid][8] = extramedia;
          questionforthisgame[focusquestionid][9] = thisthumbnail;
          questionforthisgame[focusquestionid][10] = questionanswer;
          Uploadeditedquestion(questionforthisgame);
          setshowchangequestioninput(false);
          setshowchangetime(false);
          setshowchangemark(false);
          setshowchangeoption1(false);
          setshowchangeoption2(false);
          setshowchangeoption3(false);
        } }>Save Changes</Button>
    </div>
  </>
}

Editquestion.propTypes = {
  foucsgameid: PropTypes.number,
  foucsgameidx: PropTypes.number,
  focusquestionid: PropTypes.number,
  gameQuestions: PropTypes.array,
  Uploadeditedquestion: PropTypes.function
};
// startsession first, then get the sessionid through getgamequestion, then get playerid by playerjoin function with session id, then advance the session
// to get the game started to be ture, then get the playergetquestion for quesition info.
function PlayGame ({ foucsgameid, foucsgameidx, Startsession, GetgameQuestions }) {
  foucsgameid = localStorage.foucsgameid;
  foucsgameidx = localStorage.foucsgameidx;
  const [gameQuestions, setlifesavingquestion] = React.useState([]);
  const { sessionid } = useParams();
  const [playername, setplayername] = React.useState('');
  const [inputtedsessionid, setinputtedsessionid] = React.useState(0);
  const [playerlogged, setplayerlogged] = React.useState(false);
  const [selectedanswer, setselectedanswer] = React.useState([]);
  const [currentStage, setcurrentStage] = React.useState(0);
  const [playerId, setplayerId] = React.useState(0);
  const [myresultdata, setmyresultdata] = React.useState([]);
  const [sessionend, setsessionend] = React.useState(false);
  let currentquestion = [];
  const MyGetgameQuestions = () => {
    const newresult = fetch('http://localhost:5005/admin/quiz/' + foucsgameid, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.my_token,
        Accept: 'application/json',
      },
    }).then((data) => {
      console.log(newresult);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(newresult => {
          setlifesavingquestion(newresult.questions);
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const Playerjoin = (name) => {
    console.log('register for player id');
    const playerjoinBody = { name: name };
    const newresult = fetch('http://localhost:5005/play/join/' + sessionid, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(playerjoinBody),
    }).then((data) => {
      console.log(newresult);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(newresult => {
          setplayerId(newresult.playerId);
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const Advancesession = () => {
    const newresult = fetch('http://localhost:5005/admin/quiz/' + foucsgameid + '/advance', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + localStorage.my_token,
        Accept: 'application/json',
      },
    }).then((data) => {
      console.log(newresult);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(newresult => {
          console.log('Advancesession: ' + newresult.stage);
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const Endsession = () => {
    const newresult = fetch('http://localhost:5005/admin/quiz/' + foucsgameid + '/end', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + localStorage.my_token,
        Accept: 'application/json',
      },
    }).then((data) => {
      console.log(newresult);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(newresult => {
          console.log('Endsession: ' + newresult);
          setsessionend(true);
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  const GetMyresults = () => {
    const newresult = fetch('http://localhost:5005/play/' + playerId + '/results', {
      method: 'GET',
    }).then((data) => {
      console.log(newresult);
      if (data.status === 403) {
        console.log('403');
      } else if (data.status === 200) {
        data.json().then(result => {
          const resultsdatatotal = [];
          for (let i = 0; i < result.length; i++) {
            const resultsdata = [];
            resultsdata.push(result[i].questionStartedAt);
            resultsdata.push(result[i].answeredAt);
            resultsdata.push(result[i].answerIds);
            resultsdata.push(result[i].correct);
            resultsdatatotal.push(resultsdata);
          }
          setmyresultdata(resultsdatatotal);
        })
      } else if (data.status === 400) {
        console.log('400');
      }
    }).catch((error) => {
      console.log(error);
    })
  }
  const Submitanswer = (selectedanswer) => {
    const SubmitBody = { answerIds: [selectedanswer] };
    const newresult = fetch('http://localhost:5005/play/' + playerId + '/answer', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(SubmitBody),
    }).then((data) => {
      console.log(newresult);
      if (data.status === 403) {
        console.log(data);
      } else if (data.status === 200) {
        data.json().then(result => {
          console.log(result);
        })
      } else if (data.status === 400) {
        console.log(data);
      }
    }).catch((error) => {
      console.log(error);
    })
  }
  let Questiontype = ''
  if (currentStage === 0) {
    if (gameQuestions.length === 0) {
      currentquestion = ['', '', '', '10', '', '', '', '', '', '', ''];
    } else {
      currentquestion = gameQuestions[0];
    }
  } else if (currentStage < gameQuestions.length) {
    currentquestion = gameQuestions[currentStage];
  } else {
    currentquestion = gameQuestions[0];
  }
  if (playerlogged && currentquestion[2] === 1) {
    Questiontype = 'Single choice';
  } else {
    Questiontype = 'Multiple choice';
  }
  // Timer
  const [counter, setcounter] = React.useState(10);
  const correctanswer = currentquestion[10];
  const mediadata = currentquestion[9];
  const mediatype = currentquestion[8];
  let videolink = false;
  let thumbnailimage = false;
  if (mediatype === 3) {
    videolink = false;
    thumbnailimage = true;
  } else {
    videolink = true;
    thumbnailimage = false;
  }
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setcounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return <>
    <div
    style = { sessionend ? { display: 'none' } : { display: 'block' } }>
      <div
        style = { playerlogged ? { display: 'none' } : { display: 'block', textAlign: 'center' } }>
        <h1>SessionID: {sessionid}</h1>
        <h1>Please fill your name and session to play game!</h1>
        <span>Nickname: </span>
        <input
        onMouseEnter = { () => { console.log('loading'); MyGetgameQuestions(); } }
        onBlur = { (e) => { setplayername(e.target.value) } }
        type = 'text' placeholder = 'yourname'/>
        <br />
        <span>SessionID: </span>
        <input
        onBlur = { (e) => { setinputtedsessionid(e.target.value) } }
        type = 'text' placeholder = 'eg:12345'/>
        <br />
        <Button
        onClick = { () => {
          const stringsessionid = sessionid.toString();
          if (stringsessionid === inputtedsessionid) {
            Advancesession();
            localStorage.firstexecutadvance = true;
            Playerjoin(playername);
            setplayerlogged(true);
            localStorage.counter = gameQuestions[0][3];
          }
        } }
        >Submit!</Button>
      </div>
      <div
      style = { playerlogged ? { width: '100%', height: '100%', display: 'block', textAlign: 'center', background: 'rgb(181,216,231)' } : { display: 'none' } }>
      <h1>Welcome to game!</h1>
      <h3>Question : {currentquestion[1]}</h3>
      <h3>Type : {Questiontype}</h3>
      <h3>⭐ : {currentquestion[4]}</h3>
      <h3>⌛: {counter}</h3>
      <div style = { { position: 'relative', left: '35%' } }>
        <div style = { videolink ? { display: 'block', width: '30%' } : { display: 'none' } }>Video Link : {mediadata}</div>
        <img style = { thumbnailimage ? { width: '30%', display: 'block' } : { display: 'none' } } src = {mediadata} alt = 'supplementry image for this question'/>
      </div>
      <Button
      value = {currentquestion[5]}
      onClick = { (e) => {
        if (!selectedanswer || Questiontype === 'Single choice') {
          Submitanswer(e.target.value);
        } else {
          const currentanswer = [...selectedanswer];
          currentanswer.push(e.target.value);
          setselectedanswer(currentanswer);
          Submitanswer(currentanswer);
        }
      } }
      >Option1 : {currentquestion[5]}</Button>
      <br />
      <Button
      value = {currentquestion[6]}
      onClick = { (e) => {
        if (!selectedanswer || Questiontype === 'Single choice') {
          Submitanswer(e.target.value);
        } else {
          const currentanswer = [...selectedanswer];
          currentanswer.push(e.target.value);
          setselectedanswer(currentanswer);
          Submitanswer(currentanswer);
        }
      } }
      >Option2 : {currentquestion[6]}</Button>
      <br />
      <Button
      value = {currentquestion[7]}
      onClick = { (e) => {
        if (!selectedanswer || Questiontype === 'Single choice') {
          Submitanswer(e.target.value);
        } else {
          const currentanswer = [...selectedanswer];
          currentanswer.push(e.target.value);
          setselectedanswer(currentanswer);
          Submitanswer(currentanswer);
        }
      } }
      >Option3 : {currentquestion[7]}</Button>
      <h3
      style = { counter ? { display: 'none' } : { display: 'block' } }
      >Correct Answer : {correctanswer}</h3>
      <Button
      style = { counter ? { display: 'none' } : { display: 'block', position: 'relative', left: '47%' } }
      onClick = { () => {
        if (currentStage === gameQuestions.length - 1) {
          Endsession();
          setcurrentStage(0);
          localStorage.firstadvance = true;
          setselectedanswer([]);
        } else {
          Advancesession();
          const tempcurrentstage = currentStage + 1;
          setcurrentStage(tempcurrentstage);
          setselectedanswer([]);
          setcounter(currentquestion[3]);
        }
      } }>Next question</Button>
      </div>
    </div>
    <div
    onMouseEnter = { () => { GetMyresults(); } }
    style = { sessionend ? { width: '100%', height: '100%', display: 'block', textAlign: 'center', background: 'rgb(235,207,146)' } : { display: 'none' } }>
    <h1>####My Score!####</h1>
    <div
    style = { myresultdata ? { width: '100%', height: '100%', display: 'block', textAlign: 'center', background: 'rgb(235,207,146)' } : { display: 'none' } }>
    { myresultdata.map((val, idx) => {
      return (
      <Showsingleresult
       key={idx}
       index={idx}
       resultforthisquestion={myresultdata[idx]}
      />
      )
    })}
    <Link to="/Finishgame"><Button
    onClick = { () => { setplayerlogged(false); setsessionend(false); setplayerId(0); setmyresultdata([]); } }>Close</Button></Link>
    </div>
    </div>
  </>
}

PlayGame.propTypes = {
  foucsgameid: PropTypes.string,
  foucsgameidx: PropTypes.number,
  Startsession: PropTypes.function,
  GetgameQuestions: PropTypes.function,
  gameQuestions: PropTypes.array
}

function Showsingleresult ({ index, resultforthisquestion }) {
  let mybackground = 'rgb(181,203,91)';
  let thisresult = '';
  if (resultforthisquestion[3]) {
    thisresult = 'Correct!';
    mybackground = 'rgb(181,203,91)';
  } else {
    thisresult = 'Try next time ~~';
    mybackground = 'rgb(246,194,187)';
  }
  return <>
    <Card.Body style = { { display: 'block', background: `${mybackground}`, width: '30%', position: 'relative', left: '35%', textAlign: 'center' } }>
      <Card.Title style = { { fontWeight: 'bold ' } }>Your Result for question {index}</Card.Title>
      <Card.Text>Your Answer: {resultforthisquestion[2]}</Card.Text>
      <Card.Text>Result: {thisresult}</Card.Text>
    </Card.Body>
  </>
}

Showsingleresult.propTypes = {
  index: PropTypes.number,
  resultforthisquestion: PropTypes.array
}

function Getresults ({ foucsgameid, historysessions, Getsessionresult, allsessionanswer, setallsessionanswer }) {
  const { sessionid } = useParams();
  return <>
    <h1>Score for sessionID: {sessionid}</h1>
    <div>
    </div>
    <Link to="/dashBoard">
      <Button
      >Back To DashBoard</Button>
    </Link>
  </>
}

Getresults.propTypes = {
  foucsgameid: PropTypes.string,
  historysessions: PropTypes.array,
  Getsessionresult: PropTypes.function,
  allsessionanswer: PropTypes.array,
  setallsessionanswer: PropTypes.function
}

function Finishgame () {
  return <>
  <h1 style = { { textAlign: 'center', position: 'relative', top: '20%' } }>Congrats! You have finished this game, this page will not direct you to any other web pages please close this page:)</h1>
  </>
}
