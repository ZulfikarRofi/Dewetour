import numeral from 'numeral'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import australia from '../assets/dewetour-asset/Australia.svg'
import agent from '../assets/dewetour-asset/agent 1.svg'
import bestPrice from '../assets/dewetour-asset/guarantee 1.svg'
import heart from '../assets/dewetour-asset/heart 1.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import support from '../assets/dewetour-asset/support 1.svg'
import LoginModal from '../components/LoginModal'
import NavbarLanding from '../components/NavbarLanding'
import { useUserStore } from '../context/dataContext'


interface Trips {
    id: number;
    country: string;
    total_photos: number;
    price: number;
    trip_name: string;
}

export default function LandingPage() {
const [trips, setTrip] = useState<Trips[]>([]);
const [showModal, setShowModal] = useState(false);
const [showNavbar, setShowNavbar] = useState("");
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get('message');
const location = useLocation();

const handleCloseLog = () => setShowModal(false);
const user = location.state?.user;
console.log('users data :', user)
const {id, username, level, setUser} = useUserStore();
useEffect(() => {
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/');
      setTrip(response.data.payload.data);
      const token = localStorage.getItem('token');

      if(!token){
        setShowModal(true)
        setShowNavbar("kosong");
    }
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  };

  fetchData();
}, [message, user, username, setUser, id]);
    
  return (
    <>
        <div className='banner'>
        <NavbarLanding showNavbar={showNavbar}/>
        <LoginModal loginShow={showModal} Close={handleCloseLog} />
            <Container className='py-5'>
                <Row className='my-5 py-5'>
                    <div className='mb-3'>
                        <h1 className='text-bold-banner text-white'>{username} {level}</h1>
                        <h6 className='text-light-banner'>your amazing city together</h6>
                    </div>
                    <div>
                        <Form.Label className='search-bar-label'>Find great places to holiday</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control name='' />
                        <Button className='btn-lg btn-first search-btn' id="button-addon2">
                        Search
                        </Button>
                    </InputGroup>
                    </div>
                </Row>
                <Row className='my-5'>
                    <Col>
                        <Card className='card-support d-flex justify-content-center align-items-center py-2 px-3'>
                            <img src={bestPrice} alt="" width={100} />
                            <p className='card-subtitle'>Best Price Guarantee</p>
                            <p className='card-fill'>A small river named Duren flows by their place and supplies</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card-support d-flex justify-content-center align-items-center py-2 px-3'>
                            <img src={heart} alt="" width={100} />
                            <p className='card-subtitle'>Travellers Love Us</p>
                            <p className='card-fill'>A small river named Duren flows by their place and supplies</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card-support d-flex justify-content-center align-items-center py-2 px-3'>
                            <img src={agent} alt="" width={100} />
                            <p className='card-subtitle'>Best Travel Agent</p>
                            <p className='card-fill'>A small river named Duren flows by their place and supplies</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card-support d-flex justify-content-center align-items-center py-2 px-3'>
                            <img src={support} alt="" width={100} />
                            <p className='card-subtitle'>Our Dedicated Support</p>
                            <p className='card-fill'>A small river named Duren flows by their place and supplies</p>
                        </Card>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <h1 className='text-center group-title my-5'>Group Tour</h1>
                    <Row className='group-tour my-5 ps-5 ms-5'>
                        {trips.map((trip) =>(
                        <Col md='3'>
                            <Link to={`/trip/${trip.id}`}style={{textDecoration: 'none'}}>
                                <Card className='card-group-tour p-2'>
                                    <Card.Img variant='top' className='card-group-img' src={australia}/>
                                    <Card.Body className='card-group-body d-flex flex-column justify-content-between'>
                                        <span className='card-group-tour-title'>
                                        {trip.trip_name}
                                        </span>
                                        <div className='d-flex justify-content-between'>
                                            <span className='card-group-tour-price'>IDR. {numeral(trip.price).format('0,0')}</span>
                                            <span className='card-group-tour-dest'>{trip.country}</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        ))};
                    </Row>
                </Row>
            </Container>
        </div>
    </>
  )
}
