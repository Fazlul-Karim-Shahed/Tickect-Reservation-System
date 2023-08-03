
import React, { useState } from 'react';
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

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar className='px-4 py-3' color="dark" dark light expand="md">
                <NavbarBrand href="/">ReserveTicket</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <Link className='text-decoration-none' to={'/ticket'}><NavLink>Ticket</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link className='text-decoration-none' to={'/Profile'}><NavLink>Profile</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link className='text-decoration-none' to={'/contact'}><NavLink>Contact</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link className='text-decoration-none' to={'/signin'}><NavLink>Login</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link className='text-decoration-none' to={'/admin'}><NavLink>AdminPanel</NavLink></Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
