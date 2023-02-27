import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import classes from './MainNav.module.css';
import React, { useContext } from 'react';
import Econtext from '../store/ecom-context';
const MainNavigation = () => {
    const ctx = useContext(Econtext)
    const totalQuantity = ctx.cart.reduce((currentValue, product) => {
        return currentValue += product.amount;
    }, 0)

    const logoutHandler = () => {
        ctx.logout();
    }
    const ShowCartItemsHandler = () => {
        ctx.onShowCart()
    }

    return (

        <header>
            <Navbar fixed="top" bg="dark" expand="lg" className={classes.header} >
                <Nav>
                    <ul className={classes.list}>
                        <li  >
                            <NavLink to="/home" className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            } style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/About" className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            } style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ContactUs" className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            } style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>ContactUs</NavLink>
                        </li>
                        {ctx.isLogedin && <li >
                            <NavLink to={`/Login/Product/${ctx.token}`}
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined}
                                style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Store</NavLink>
                        </li>}
                        {!ctx.isLogedin && <li>
                            <NavLink to="/Login" className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            } style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Login</NavLink>
                        </li>}
                        {!ctx.isLogedin && <li>
                            <NavLink to="/Signup" className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            } style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Signup</NavLink>
                        </li>}

                        {ctx.isLogedin && <li >
                            <NavLink to={`/Login/Cart/${ctx.token}`} onClick={ShowCartItemsHandler}
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined}
                                style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}

                            >   Cart
                                <Badge bg="light" style={{
                                    position: 'absolute', color: '#56CCF2',
                                    fontSize: '15px'
                                }}>{totalQuantity}</Badge>

                            </NavLink>
                        </li>}
                    </ul>
                    <ul className={classes.list} style={{ marginLeft: '45%' }}>
                        {ctx.isLogedin && <li >
                            <NavLink to="/Login" onClick={logoutHandler}
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined}
                                style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}

                            > Logout</NavLink>
                        </li>}
                        {ctx.isLogedin && <li >
                            <NavLink to={`/Login/${ctx.email}`}
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined}
                                style={{ color: 'white', fontWeight: 'bold', textTransform: 'capitalize' }}

                            >  {ctx.email} </NavLink>
                        </li>}
                    </ul>
                </Nav>
            </Navbar>
        </header >


    )
}
export default MainNavigation;