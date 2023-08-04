
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { checkLocalStorageAuth } from '../Function/StorageFunction';

export default function Header() {

    useEffect(() => {

        if (checkLocalStorageAuth().auth) {
            setAuth(true)
            if (checkLocalStorageAuth().data.role === 'admin') {
                setAdmin(true)
            }
        }

    }, [])

    const [isOpen, setIsOpen] = useState(false);
    const [auth, setAuth] = useState(false);
    const [admin, setAdmin] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar className='py-3' color="dark" dark light expand="md">
                <NavbarBrand href="/">ReserveTicket</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>

                        {admin ? <>

                            <NavItem>
                                <Link className='text-decoration-none' to={'/logout'}><NavLink>Logout</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link className='text-decoration-none' to={'/admin'}><NavLink>AdminPanel</NavLink></Link>
                            </NavItem>

                        </> : <>


                            <NavItem>
                                <Link className='text-decoration-none' to={auth ? '/ticket' : '/signin'}><NavLink>Ticket</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link className='text-decoration-none' to={'/Profile'}><NavLink>Profile</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link className='text-decoration-none' to={'/contact'}><NavLink>Contact</NavLink></Link>
                            </NavItem>
                            {auth ? <>
                                <NavItem>
                                    <Link className='text-decoration-none' to={'/logout'}><NavLink>Logout</NavLink></Link>
                                </NavItem>
                            </> : <>
                                <NavItem>
                                    <Link className='text-decoration-none' to={'/signin'}><NavLink>Login</NavLink></Link>
                                </NavItem>
                            </>}

                        </>}



                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
