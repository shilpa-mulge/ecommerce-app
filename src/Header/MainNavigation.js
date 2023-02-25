import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import classes from './MainNav.module.css';
import Econtext from '../store/ecom-context';
import React, { useContext } from 'react';
const MainNavigation = () => {
    const ctx = useContext(Econtext)
    return (

        <header>
            <Navbar fixed="top" bg="dark" expand="lg" className={classes.header} >
                <Nav>
                    <ul className={classes.list}>
                        <li  >
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            } style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Home</NavLink>
                        </li>
                        <li >
                            <NavLink to={ctx.isLogedin ? "/Product" : "/Login"}
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined}
                                style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}

                            >Store</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About" className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            } style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ContactUs" className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            } style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Login" className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            } style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Login</NavLink>
                        </li>
                    </ul>
                </Nav>
            </Navbar>
            <Navbar bg="secondary" expand='lg' varient='dark' style={{
                padding: '50px', justifyContent: 'center', flexWrap: "wrap"
            }} >
                <Navbar.Brand style={{
                    fontSize: '60px',
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 'auto'
                }} >The Generics</Navbar.Brand>
            </Navbar>

        </header>


    )
}
export default MainNavigation;