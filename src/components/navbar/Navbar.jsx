import React,{useState} from 'react'
import './navbar.css';
import { RiCloseLine } from 'react-icons/ri';
import { RiMenu3Line } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu =() => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#Wgpt3">What is GPT-3</a></p>
    <p><a href="#possibility">open ai</a></p>
    <p><a href="#feature">case stu</a></p>
    <p><a href="#blog">library</a></p>              
  </>
)


const Navbar = () => {
  const [toggleMenue,SetToggleMenue] = useState(false)
  return (
    <div className='gpt3_navbar'>
      <div className="gpt3_navbar-links"> 
        <div className="gpt3_navbar-links_logo">
            <img src={logo} alt="logo" />
            <div className="gpt3_navbar-links_container">
                <Menu/>
            </div>
        </div>
        <div className="gpt3_navbar-sign">
            <p>Sign in</p>
            <button type='button'>Sign up</button>            
        <div className="gpt3_navbar-menu">
          {toggleMenue ? <RiCloseLine color='#fff' size={27} onClick={()=> SetToggleMenue(false)} /> 
          : <RiMenu3Line color='#fff' size={27} onClick={()=> SetToggleMenue(true)}/>
          }
          {toggleMenue && (
            <div className="gpt3_navbar-menu_container scale-up-center">
              <div className="gpt3_navbar-menu_container-inks">
                <Menu/>
              </div>
            </div>
          )}
        </div>  
        </div>
      </div>
    </div>
  )
}

export default Navbar
