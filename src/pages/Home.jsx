import React from 'react'
import photo from "../assets/pexels-photo-1229356.webp"
import "../components/Home.css"
import { Navigate } from 'react-router'

function Home() {
  return (
    <div>
         <section className="home">
    <div className="max-width">
      <div className="home-content">
        <h3> BIENVENUE À<br /> DOUUMA GYM</h3>
        <p>Enjoy the Difference with California Gym, l'enseigne de club de fitness
de plus de 20 ans d'expérience en Tunisie et actuellement
présente aussi en Algérie.</p>
      <a className="btn" href="/Cards">Get started</a>
      </div>
      <div className="home-image">
        <img src={photo} alt />
      </div>
    </div>
  </section>
    </div>
  )
}

export default Home