// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route
 
}from 'react-router-dom';



import React, { Component } from 'react'

export default class App extends Component {
  pageSize=70;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        {/* <News pageSize={8} country={"in"} category={"science"}/> */}
        <Routes>
          <Route exact path="/general" element={ <News key="general" pageSize={this.pageSize} country={"in"} category={"general"}/>}>
           </Route>
          <Route exact path="/business" element={ <News key="business" pageSize={this.pageSize} country={"in"} category={"business"}/>}></Route>
          <Route exact path="/entertainment" element={ <News key="entertainment" pageSize={this.pageSize} country={"in"} category={"entertainment"}/>}></Route>
          <Route exact path="/health" element={ <News key="health"pageSize={this.pageSize} country={"in"} category={"health"}/>}></Route>
          <Route exact path="/science" element={ <News key="science" pageSize={this.pageSize} country={"in"} category={"science"}/>}></Route>
          <Route exact path="/sports" element={ <News key="sports" pageSize={this.pageSize} country={"in"} category={"sports"}/>}></Route>
          <Route exact path="/technology" element={ <News key="technology" pageSize={this.pageSize} country={"in"} category={"technology"}/>}></Route>




        </Routes>
        </Router>
      </div>
    )
  }
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

// export default App;
