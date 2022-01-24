import React, { useEffect, useState } from 'react'
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import Cart from './Cart';
import { getDatabase, ref, onValue} from "firebase/database";



export default function Items() {
    const [state, setstate] = useState([]);
    const [items, setItems] = useState([]);
    
    const db = getDatabase();
     const starCountRef = ref(db, 'posts/');
     console.log(starCountRef);
    // onValue(starCountRef, (snapshot) => {
    //     const data = snapshot.val();
    //     updateStarCount(postElement, data);
    // });

    useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(data=>setstate(data))
    }, [])
    const cards = state.map((x)=>{
       const productInfo =(x)=>{
        setItems([...items,x])
       }
        const descriptionSort = `${x.description.slice(0,100)} ...`;
      return(
        
      <Col key={x.id}>
      <Card  className='text-center' bg='light' >
      <Card.Img variant='top' className="mx-auto"  style={{width:'16em',height:'20rem'}} src ={x.image} alt={x.id} />
      <Card.Body>
          <Card.Title> {x.title}</Card.Title>
          <Card.Text className='text-justify'>
             {descriptionSort}
          </Card.Text>
          <Card.Text className='text-justify'>
             Price : {x.price}BDT
          </Card.Text>
          <Card.Text className='text-justify'>
             Item no : {x.id} 
          </Card.Text>
          <Button onClick={()=>productInfo(x)} varient='primary'>
            Add Cart 
          </Button>
          
      </Card.Body>
      </Card>
      </Col>)
    })

    return (
        <div>
            <Container className='mt-3'>
                <div className='row'>
                    
                    <div className='col-12 mb-3'>        
                        <Cart product={items} />
                           
                    </div>
                    <div className='cl-12 col-md-12 mb-2'>        
                        <CardGroup  >
                        <Row xs={1} md={2} lg={3} className="g-4">
                                {cards}
                        </Row>
                        </CardGroup>
                    </div>
                </div>
            </Container>
        </div>
    )
}
