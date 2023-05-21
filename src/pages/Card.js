import React from 'react';
import '../styles/card.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import {useNavigate} from "react-router-dom";


function Card()
{
    const navig=useNavigate();
    return(<>
            <div class="Iam">

            <p>SURPRISE YOUR</p>
            <b>
                    <div class="innerIam">
                        LOVED ONE<br /> 
                        FAMILY<br />
                        FRIENDS<br />
                        WITH<br />
                        SIGNATURE CAKES
                        </div>
            </b>

            </div>
    <Container>
        <Row>
            <Col xs={6} md={4}>
          
                    <div className = "container">
                        <div className = "card">
                                <div className = "image">
                                    <img  src = "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                                </div>
                                <div className = "content">
                                    <h3>WEDDING CAKES</h3>
                                    <button className="button-33" role="button" onClick={()=>navig('/menu')}>Order now</button>
                                </div>
                        </div>    
                    </div>
                </Col>
            <Col xs={6} md={4}>
            <div className = "container">
                        <div className = "card">
                                <div className = "image">
                                    <img  src = "https://cdn.pixabay.com/photo/2018/07/01/19/50/muffin-3510308__340.jpg"/>
                                </div>
                                <div className = "content">
                                    <h3>CUP CAKES</h3>
                                    <button className="button-33" role="button" onClick={()=>navig('/menu')}>Order now</button>
                                </div>
                        </div>    
                    </div>            </Col>
            <Col xs={6} md={4}>
            <div className = "container">
                        <div className = "card">
                                <div className = "image">
                                    <img  src = "https://img.freepik.com/free-photo/fruit-cake-with-chocolate-chips-blueberries_176474-2965.jpg?size=626&ext=jpg&ga=GA1.2.1112611815.1683538211&semt=sph"/>
                                </div>
                                <div className = "content">
                                    <h3>PREMIUM CAKES</h3>
                                    <button className="button-33" role="button" onClick={()=>navig('/menu')}>Order now</button>
                                </div>
                        </div>    
                    </div>
                </Col>
        </Row>

      </Container>
    
    
    </>)
}

export default Card;