import React, { useState } from 'react';
import { Form ,Button, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import Firebase from '../../Firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Login from './Login';


initializeApp(Firebase);

export default function Registration() {
    const[user,setUser]=useState({
        islogin:false,
        firstName: '',
        lastName : '',
        email : '',
        password : '',
        confirmPassword :'',
        error : ''
    })

    const handleBlur=(e)=>{ 
        let isValid =false ;
        if(e.target.name==='firstName'){
            isValid=true; 
        }
        if(e.target.name==='lastName'){
            isValid=true; 
        }
        if(e.target.name==='email'){
            isValid=true;
        }
        if(e.target.name==='password' ){
            isValid=true ;
        }
        if(e.target.name==='confirmPassword' ){
           user.password === e.target.value ? isValid=true: isValid=false ;
        }
        
        if(isValid){
            const updateValues = {...user} ;
            console.log(e.target.name);
            updateValues[e.target.name]=e.target.value;
            setUser(updateValues);
        }
        
    }
    const auth = getAuth();
    const formSubmit=(e)=>{
        createUserWithEmailAndPassword(auth, user.email, user.confirmPassword)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            user.islogin = true ;
            const values ={...user}
            values.error = 'login success ';
            console.log(values)
            setUser(values);
          // ...
        })
        .catch((error) => {
          //console.log(error.code);
          //user.error = error.message;
          const values ={...user}
            const errors=error.code.slice(5);
          values.error = `${errors} !`;
          console.log(values)
          setUser(values);
          // ..
        });
      
        e.preventDefault()
    }
    console.log(user)
    return (
        <div style={{width:'100%',height:'100%'}}>
            
            <div style={{marginTop :'100px', display:'flex',alignItems:'center',justifyContent:'center'}} >

            {!user.islogin ? <Form onSubmit={formSubmit} className='w-40rem shadow p-3 bg-white'>
                <h3 className='w-100 text-center text-primary border-bottom pb-3'> Registration </h3>
                {user.islogin ? <h5 className='text-success text-center'>{user.error}</h5> : 
                <h5 className='text-danger text-center'>{`${user.error} `}</h5>}
                <Form.Group>
                <Row>
                    <Col>
                        <Form.Label>First Name : </Form.Label>
                        <Form.Control name='firstName' type='text' onBlur={handleBlur} placeholder='First name' />
                    </Col>
                    <Col>
                        <Form.Label>Last Name : </Form.Label>
                        <Form.Control name='lastName' type='text' onBlur={handleBlur} placeholder='Last name' />
                    </Col>
                </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address : </Form.Label>
                    <Form.Control name='email' onBlur={handleBlur} type='email' placeholder="Enter Email " required/>
                    <Form.Text className="text-muted">
                        We,ll never share your Email anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password : </Form.Label>
                    <Form.Control name='password' onBlur={handleBlur} type='password' placeholder="Enter Password " required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password : </Form.Label>
                    <Form.Control name='confirmPassword' onBlur={handleBlur} type='password' placeholder="Confirm Password " required/>
                </Form.Group>
                <br/>
                <Button  type='submit' variant='primary' className='text-center w-100'>Submit</Button>
                <Link to='/login'><Form.Label className='mt-2 text-lightdark'>Already Have an Account ? </Form.Label></Link>
            </Form> 
            :
            <Login/>
            }
            
            </div>
        </div>
        )
}
