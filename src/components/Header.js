import React from 'react'

export default function Header({ brandName = 'Exatorial' }) {
  return (

 <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="index.html">{brandName}</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="index.html">Home</a></li>
      {/* <li><a href="index.html">About Us</a></li> */}
      {/* <li><a href="index.html">Contact</a></li> */}
    </ul>
    <ul className="nav navbar-nav navbar-right">
      {/* <li><a href="index.html"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li> */}
      {/* <li><a href="index.html"><span className="glyphicon glyphicon-log-in"></span> Login</a></li> */}
    </ul>
  </div>
</nav> 


  )
}

