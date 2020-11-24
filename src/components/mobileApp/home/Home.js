import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom' 

export default function Home() {
    return (
        <div>
             <nav class="navbar navbar-light bg-primary">
                <span class="navbar-brand mb-0 h1">MyMobile.com</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="login">Login<span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </nav>
            <h1 id="home">Welcome to MyMobiles.com</h1>
            
           <div className="card" style={{width: "23rem"}}>
                <img src="/apple.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"fuchsia"}} class="card-text"><b>Apple</b><br/>website: WWW.apple.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="/samsung.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"blue"}} class="card-text"><b>Samsung</b><br/>website: WWW.samsung.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="/nokia.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"crimson"}} class="card-text"><b>Nokia</b><br/>website: WWW.nokia.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="/oneplus.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"darkblue"}} class="card-text"><b>One+</b><br/>website: WWW.oneplus.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="/vivo.jpg" class="card-img-top" alt="..."/>
                <div class="card-body" >
                <p style={{color:"grey"}} class="card-text"><b>Vivo</b><br/>website: WWW.vivo.com </p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="/oppo.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"red"}} class="card-text"><b>Oppo</b> <br/> website: WWW.oppo.com</p>
            </div>
            </div>
        </div>
    )
}
