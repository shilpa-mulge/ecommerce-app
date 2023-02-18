import { NavLink } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import classes from './MainNav.module.css';
import React from 'react';
const MainNavigation = () => {
    return (

        <header>
            <Navbar fixed="top" bg="dark" expand="lg" className={classes.header} >
                <ul className={classes.list}>
                    <li  >
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? classes.active : undefined
                        } style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Home</NavLink>
                    </li>
                    <li >
                        <NavLink to="/Product" className={({ isActive }) =>
                            isActive ? classes.active : undefined
                        }
                            style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Store</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className={({ isActive }) =>
                            isActive ? classes.active : undefined
                        } style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>About</NavLink>
                    </li>
                </ul>

            </Navbar>
            <Navbar bg="secondary" varient='dark' >
                <Container style={{
                    padding: '50px'
                }}>
                    <Navbar.Brand style={{
                        fontSize: '60px',
                        fontWeight: 'bold',
                        color: 'white',
                        margin: 'auto'
                    }} >The Generics</Navbar.Brand>
                </Container>
            </Navbar>

        </header>


    )
}
export default MainNavigation;