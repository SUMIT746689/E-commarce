import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut ,signInWithEmailAndPassword, FacebookAuthProvider } from "firebase/auth";
import firebaseConfig from '../../Firebase';
import Items from '../items/Items';

initializeApp(firebaseConfig)

export default function Login() {
    const [user,setuser]=useState({
        isSignedIn : '',
        name  : '',
        email : '',
        photo : '',
        error : '',
        success : ''
    });
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    
    
    const handleSignIn =()=>{
            signInWithPopup(auth,provider)
            .then((res)=>{
                 GoogleAuthProvider.credentialFromResult(res);
                //const token = credential.accessToken;
                const {displayName,email,photoURL}=res.user;
                const values = {
                    isSignedIn : true,
                    name  : displayName,
                    email : email,
                    photo : photoURL,
                    
                }
                setuser(values)
            })
            .catch((error) => {
                // // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.email;
                // // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // // ...
              });
        }
    const handleSignOut=()=>{ 
            signOut(auth)
            .then(() => {
                const values = {
                    isSignedIn : false,
                    name  : '',
                    email : '',
                    photo : '',
                    error : ''
                }
                setuser(values)
            }).catch((error) => {
            // An error happened.
            });
    }
    const handleBlur =(e)=>{
        let isValid =false; 
        if(e.target.name==='email'){
           isValid=true;
        }
        if(e.target.name==='password'){
            isValid=true;        
        }
        if(isValid){
            let values = {...user};
            values[e.target.name] =e.target.value;
            setuser(values);
        }
    }
   console.log(user);
   
    const formLogedIn = (e)=>{
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                const values ={...user}
                values.isSignedIn=true ;
                values.success = 'Log in success..'
                setuser(values)
            })
            .catch((error) => {
                const errorCode = error.code.slice(5);
                //const errorMessage = error.message;
                const values = {...user}
                values.error = errorCode ;
                setuser(values);
            });
        e.preventDefault();
    }
    const fbProvider = new FacebookAuthProvider();
    //const fbauth = getAuth();
    const handleFbSignin =() =>  {
       
        signInWithPopup(auth, fbProvider)
          .then((result) => {
            // The signed-in user info.
            const user = result.user;
        
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            console.log(result)
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
        
            // ...
          });
        
    }
   
    return(
        <>
            {
                !user.isSignedIn ? <div  style={{width:'100%',height:'100%'}}>
                <div style={{marginTop :'100px', display:'flex',alignItems:'center',justifyContent:'center'}} >
    
                    <Form onSubmit={formLogedIn} variant='danger' className='shadow p-3 bg-light rounded'>
                        <h3 className='w-100 text-center text-primary border-bottom pb-3'> Log In </h3>
                        { user.isSignedIn ? <Alert variant='success'>{user.success}</Alert> :
                        <Alert variant='warning'>{user.error}</Alert>    
                        }
                        
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
                        {user.isSignedIn ? <Button type='submit'variant='primary' className='w-100 mt-5'><Link to='/home'>home page</Link></Button> 
                        : <Button type='submit'variant='primary' className='w-100 mt-5'>Log In</Button>    
                        
                        }
                        <div className='mt-2 d-flex justify-content-center'>
                        <h6 >or</h6>
                        </div>
                        <div className='d-flex w-100'>
                            {user.isSignedIn ? <Button onClick={handleSignOut} variant='dark' className='d-flex m-1'><p className='m-0'>Log Out with google</p></Button> :
                                <Button  variant='dark' onClick={handleSignIn} className='d-flex m-1'><p className='m-0'>login with google</p></Button>
                                }
    
                                <Link to='/logout'></Link>
                            <Button  onClick={handleFbSignin} variant='success' className='m-1 d-flex'><p className='m-0'>Login with FB </p></Button>
                                
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Link to='/logout'><Button  type='submit'variant='success' className='m-1 d-flex'><p className='m-0'>Create a Account </p></Button></Link>
                        </div>
                    </Form>
                   
                    
                </div>
                    <div>
                        {/* <p> name : {user.name}</p>
                        <p> email : {user.email}</p>
                        <img src={user.photo} alt='images'/> */}
                    </div>
                </div>
                :
                <>  
                    { alert('login Success') }
                    <Items/>
                </>
            }
        </>  
        )
}
