// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from 'react';



const  App=()=> {
  const  apiKey=process.env.REACT_APP_NEWS_API;
  const  pageSize=8;

const[progress,setProgress]=useState(0)

  // state={
  //   progress:0
  // }
  // setProgress=(progress)=>{
  //   this.setState({progress:progress})
  // }
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={4}
        color='#196cf1'
        progress={progress}
        />
        {/* <News apiKey={this.apiKey}  setProgress={setProgress}  pageSize={8} country={"in"} category={"science"}/> */}
        <Routes>
          <Route exact path="/general" element={ <News apiKey={apiKey}  setProgress={setProgress}  key="general" pageSize={pageSize} country={"in"} category={"general"}/>}>
           </Route>
          <Route exact path="/business" element={ <News apiKey={apiKey}  setProgress={setProgress}  key="business" pageSize={pageSize} country={"in"} category={"business"}/>}></Route>
          <Route exact path="/entertainment" element={ <News apiKey={apiKey}  setProgress={setProgress}  key="entertainment" pageSize={pageSize} country={"in"} category={"entertainment"}/>}></Route>
          <Route exact path="/health" element={ <News apiKey={apiKey}  setProgress={setProgress}  key="health"pageSize={pageSize} country={"in"} category={"health"}/>}></Route>
          <Route exact path="/science" element={ <News apiKey={apiKey}  setProgress={setProgress}  key="science" pageSize={pageSize} country={"in"} category={"science"}/>}></Route>
          <Route exact path="/sports" element={ <News apiKey={apiKey}  setProgress={setProgress}  key="sports" pageSize={pageSize} country={"in"} category={"sports"}/>}></Route>
          <Route exact path="/technology" element={ <News apiKey={apiKey}  setProgress={setProgress}  key="technology" pageSize={pageSize} country={"in"} category={"technology"}/>}></Route>




        </Routes>
        </Router>
      </div>
    )
  
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
