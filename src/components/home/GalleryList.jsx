import { useState } from 'react';
import {Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {vData} from '../../data.js';

function GalleryList(){
  const [myData, setMyData] = useState(vData)
  return(
    <Container className='mb-2 mb-md-5 main-font'>
    <div className='text-center mb-3'>
      <h3 className='title dot'>GALLERY</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </div>
    <Row>
      {
        myData.map(function(item, i){
          return <CardView product={myData[i]} />
        })
      }
      
    </Row>
  </Container>



  )
}

function CardView({product}){
return(
  <>
    <Col sm={6} md={3} className='mb-2'>
      <Card className='cardView'>
        <Card.Img variant="top" src={`./img/${product.img}`} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.content}
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
  </>
  )
}

export default GalleryList;