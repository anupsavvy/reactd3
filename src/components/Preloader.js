import React from 'react'

import PreloaderImg from '../assets/preloading.png'

const Preloader = () => (
  <div className="App container">
    <h1>The average H1B in tech pays $86,164/year</h1>
    <p className="lead">
      Since 2012 the US tech Do consectetur ullamco id consectetur mollit eu ut sint laborum voluptate sit. Ut incididunt pariatur proident minim sint dolor qui quis proident eu magna. Dolore amet adipisicing dolor cillum pariatur sint irure sit eiusmod reprehenderit ea duis commodo ullamco. Labore do deserunt cupidatat amet in nulla veniam reprehenderit consectetur ad ea. Tempor labore reprehenderit elit incididunt minim ipsum Lorem tempor reprehenderit tempor elit tempor ea non culpa. Elit laboris duis veniam ex officia eiusmod dolor ea eu commodo pariatur Lorem officia. Laboris cupidatat laboris do enim in consequat irure irure officia ad. Labore ipsum magna esse aliqua sunt dolor consequat commodo aute ad dolore sunt voluptate.
    </p>
    <img src={PreloaderImg} style={{width: '100%'}} role="presentation" />
    <h2 className="text-center">Loading data ...</h2>
  </div>
)

export default Preloader;
