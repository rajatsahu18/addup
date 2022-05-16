import React from 'react'
import { SiTodoist } from 'react-icons/si'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../Components/Styling/Navbar.css'
import MenuListComposition from '../Components/ThemeMenu'
const Navbar = () => {
    const auth = useSelector(state => state.auth.auth)
    return (
        <div>
            <div className="navbar">
                <Link className="headers" to="/"><SiTodoist /> Add Up </Link>
                <div className="midHeaders">
                    <div>{auth && <Link className="headers" to="/all">Dashboard </Link>}</div>
                    <div>{auth && <Link className="headers" to="/create" >Create Task</Link>}</div>
                </div>
                <div className="midHeaders">
                    <div>{!auth && <Link className="headers" to = "/registration">Signup</Link>}</div>
                    <div>{!auth && <Link className="headers" to="/login">Login</Link>}</div>
                </div>
                <div><MenuListComposition /></div>
            </div>
            
            <div className="useless"></div>
        </div>
    )
}
export default Navbar
