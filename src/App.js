import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/mobileApp/login/Login'
import Home from './components/mobileApp/home/Home'
import Show from './components/mobileApp/show/Show'
  
function App() {
  return (
    <div>     
      <Router>

       <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/show" component={Show}/>
        <Route path="/home" component={Home}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;

// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
// import './App.css';
// import NavMenu from './components/list and keys/NavMenu';
// // import Home from './components/home/Home';
// // import About from './components/about/About'
// // import Login from './components/login/Login';
// // import Greeting from './propsvalidation/Greeting';
// import Events from './reactevents/Events';


// function App() {
//   const menuItem = [100, 200, 300, 400, 500]
//   return (
//     <div className="App">

//      {/* <Greeting name= {300} /> */}

//      {/* <Events/> */}

//      <NavMenu menuItems={menuItem}/>
//     </div>
//   );
// }

// export default App;

// {/*<Router>

//          <nav class="navbar navbar-expand-lg navbar-light bg-primary">
//         <Link to="/" class="navbar-brand" href="#">Home</Link>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNav">
//           <ul class="navbar-nav">
//             <li class="nav-item active">
//               <Link to="/about" class="nav-link" href="#">About <span class="sr-only">(current)</span></Link>
//             </li>
//             <li class="nav-item">
//               <Link to="/login" class="nav-link" href="#">login</Link>
//             </li> */}
//             {/* <li class="nav-item">
//               <Link class="nav-link" href="#">Pricing</Link>
//             </li>
//             <li class="nav-item">
//               <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
//             </li> */}
//           {/* </ul>
//         </div>
//       </nav> */}
//       {/* <Link to="/">Home</Link><br/>
//       <Link to="/about">About</Link><br/>
//       <Link to="/login">login</Link> */}

//       {/* <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route path="/about" component={About}/>
//         <Route path="/login" component={Login}/>
//       </Switch>


//      </Router> */}
