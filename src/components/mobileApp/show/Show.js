import React  from 'react'
import './Show.css'
import {Link} from 'react-router-dom'


export default class Show extends React.Component {
  constructor(){
      super();
      this.state={
          name:""
      }
  }

  displayProduct =()=>{
      this.setState({
          name:<Child />
      })
  } 
  displayProduct1 =()=>{
      this.setState({
          name:<Child1 />
      })
  } 
  displayProduct2 =()=>{
      this.setState({
          name:<Child2 />
      })
  } 
  displayProduct3 =()=>{
      this.setState({
          name:<Child3 />
      })
  } 
 
 
         render() {
      return (
          <div> 

            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <Link class="navbar-brand" href="#"><b>Mobile Store</b></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      {/* <li class="nav-item active">
        <Link class="nav-link" href="#">Add Mobiles <span class="sr-only">(current)</span></Link>
      </li> */}
      <li class="nav-item active">
        <Link class="nav-link" href="#">Show Mobiles</Link>
      </li>
      <li class="nav-item7 active">
        <Link class="nav-link" to="/Home">Logout</Link>
      </li>
    </ul>
  </div>
</nav>  


<div class="container" >
 <div>{this.state.name} </div>
</div>
              <div className="container">
             
         {/* card */}
         <div className="card-deck">
<div class="card" id="c1">
  <img className="showing" src="apple.jpg" alt="" onClick={this.displayProduct}/>
  
  <div class="card-body">
      <h5>i phone</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showing" src="/samsung.jpg" alt="" onClick={this.displayProduct1}/>
  <div class="card-body">
      <h5>Samsung</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showing" src="/nokia.jpg" alt="" onClick={this.displayProduct2}/>
  <div class="card-body">
      <h5>Nokia</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showing" src="/vivo.jpg" alt="" onClick={this.displayProduct3}/>
  <div class="card-body">
      <h5>Vivo</h5>
  </div>
</div>
</div>


          </div>
          </div>
      )
  }
}

class Child extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="/Apple1.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">i phone </h4>
               <p className="card-text">
                   Color: Black <br/>
                   RAM: 16GB <br/>
                   Storage:128Gb<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child1 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="/samsung1.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">Samsung</h4>
               <p className="card-text">
                   Color: Grey <br/>
                   RAM: 4GB <br/>
                   Storage:64GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child2 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="/nokia1.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">Nokia</h4>
               <p className="card-text">
                   Color:Fantasy Grey <br/>
                   RAM: 6GB <br/>
                   Storage:128GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child3 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="vivo1.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">Vivo V20</h4>
               <p className="card-text">
                   Color: Sunset Melody <br/>
                   RAM: 8GB <br/>
                   Storage:128GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
