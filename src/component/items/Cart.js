import React from 'react';
import { Card } from 'react-bootstrap';

export default function Cart(props) {
    const {product} = props;
    console.log(product);
    const item = product.slice(-1)
    
    let totalPrice = 0 ;
    totalPrice = product.reduce((x,y)=>(x + Math.round(y.price)),0);
    return (
        <div>
            <Card 
                bg='success'
                    text='light'
                    style={{ width: '18rem' }}
                        className="m-auto"
                    >
                    <Card.Header className='text-center'>Cart Item</Card.Header>
                    <Card.Body>
                    <Card.Title>{ `Items no : ${product.length}`}</Card.Title>
                    { item[0] ? <><Card.Text>{ `Last item no : ${item[0].id}`}</Card.Text>
                        <Card.Text>{ `Last item Price : ${item[0].price} $`}</Card.Text>
                        </>
                        :
                        <></>     
                    }
                    

                    <Card.Title> Total price : {totalPrice} $</Card.Title>
                    <Card.Title>  </Card.Title> 
                    <Card.Text>
                        
                    </Card.Text>
                    </Card.Body>
                    </Card>
        </div>
    )
}
