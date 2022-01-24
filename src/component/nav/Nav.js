import React,{useState}from "react";
import brand from "./brand.svg";
import {Nav,Navbar, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";
import firebaseConfig from '../../Firebase';

initializeApp(firebaseConfig)

const NavCom= ()=>{
    const [state, setstate] = useState({
        name  : '',
        email : '',
        photo : ''
    })
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
    const {displayName,email,photoURL} = user;
    const values ={...state};
    values.name  = displayName;
    values.email = email;
    values.photo = photoURL ;
    setstate(values);
    } else {
    // No user is signed in.
    }
    return(
        <>
            <Navbar  style={{top:'0px',position:'sticky',zIndex:'2'}} bg="dark" variant="dark" expand="lg">
                <Container className='w-100'>
                <Navbar.Brand > <img style={{width:'45px'}} src={brand} alt='brand'/>MY Brand</Navbar.Brand>            
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                
                >
                <Nav.Link ><Link to="/home"> Home</Link></Nav.Link>
                    <Nav.Link ><Link to="/item"> Item</Link></Nav.Link>
                    <Nav.Link><Link to="/login"> Log In</Link></Nav.Link>
                    <Nav.Link><Link to="/logout">Registration</Link></Nav.Link> 
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavCom ; 