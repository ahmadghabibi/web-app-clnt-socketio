
import {  NavLink } from 'react-router-dom'
import './navbar.css'
export const NavBar = () => {
  return (
    <div>
        <header className="container">
  <nav className="navbar navbar-dark bg-dark navbar-expand-md">
    <h1 className="navbar-brand"><i className="fa fa-paint-brush fa-spin"></i> Welcome to Persian Arts</h1>
    <button className="navbar-toggler" data-toggle="collapse" data-target="#theMenu">
      <span className="navbar-toggler-icon"> </span>
    </button>
    <div  className="theMenu navbar-collapse collapse">
      <div className="wizard">
        <ul className=" navbar-nav">
          <li className="nav-item"><NavLink to='/' className='nav-link'>Home</NavLink></li>
        
          <li className="nav-item"><NavLink to='/products'  className='nav-link'>Products</NavLink></li>
          <li className="nav-item"><NavLink to='/login'  className='nav-link'>Login</NavLink></li>
          <li className="nav-item"><NavLink to='/register'  className='nav-link'>Register</NavLink></li>
          <li className="nav-item"><NavLink to='/orders'  className='nav-link'>Orders</NavLink></li>
        
        
         
        </ul>
      </div>
    </div>
    
    <h1   style={{color:'white', fontSize:'20px'}}></h1>
     </nav>
    </header>
   

    </div>
  )
}

export default  NavBar