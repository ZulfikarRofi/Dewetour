import { Button, Card, Col, Container, Row } from "react-bootstrap";
import australia from '../../assets/dewetour-asset/Australia.svg';
import indonesia1 from '../../assets/dewetour-asset/indonesia1.svg';
import indonesia2 from '../../assets/dewetour-asset/indonesia2.svg';
import japan1 from '../../assets/dewetour-asset/japan1.svg';
import japan2 from '../../assets/dewetour-asset/japan2.svg';
import korea from '../../assets/dewetour-asset/korea.svg';
import NavbarDefault from "../../components/NavbarDefault";

export default function IncomeTrip() {
  return (
    <>
        <NavbarDefault />
        <Container fluid className="plain-backdrop mt-5 pt-5">
            <div className="d-flex justify-content-between align-items-center mx-5 px-5 pt-2">
                <h1>Income Trip</h1>
                <Button className="btn-add-trip">Add Trip</Button>
            </div>
            <div className="d-flex justify-content-center">
            <Row className='my-5 ms-5 ps-5'>
                <Col md={4} className='mb-5'>
                    <Card className='card-group-tour p-2'>
                        <Card.Img variant='top' className='card-group-img' src={australia}/>
                        <Card.Body className='card-group-body d-flex flex-column justify-content-between'>
                            <span className='card-group-tour-title'>
                                6D/4N Fun Tassie Vacation ...
                            </span>
                            <div className='d-flex justify-content-between'>
                                <span className='card-group-tour-price'>IDR. 12,398,000</span>
                                <span className='card-group-tour-dest'>Australia</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='mb-5'>
                    <Card className='card-group-tour p-2'>
                        <Card.Img variant='top' className='card-group-img' src={korea}/>
                        <Card.Body className='card-group-body d-flex flex-column justify-content-between'>
                            <span className='card-group-tour-title'>
                                6D/4N Exciting Summer in ...
                            </span>
                            <div className='d-flex justify-content-between'>
                                <span className='card-group-tour-price'>IDR. 10,288,000</span>
                                <span className='card-group-tour-dest'>South Korea</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='mb-5'>
                    <Card className='card-group-tour p-2'>
                        <Card.Img variant='top' className='card-group-img' src={japan1}/>
                        <Card.Body className='card-group-body d-flex flex-column justify-content-between'>
                            <span className='card-group-tour-title'>
                                8D/6N Wonderful Autum ...
                            </span>
                            <div className='d-flex justify-content-between'>
                                <span className='card-group-tour-price'>IDR. 12,398,000</span>
                                <span className='card-group-tour-dest'>Japan</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='mb-5'>
                    <Card className='card-group-tour p-2'>
                        <Card.Img variant='top' className='card-group-img' src={indonesia1}/>
                        <Card.Body className='card-group-body d-flex flex-column justify-content-between'>
                            <span className='card-group-tour-title'>
                                6D/4N Fun Tassie Vacation ...
                            </span>
                            <div className='d-flex justify-content-between'>
                                <span className='card-group-tour-price'>IDR. 12,398,000</span>
                                <span className='card-group-tour-dest'>Indonesia</span>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='mb-5'>
                    <Card className='card-group-tour p-2'>
                        <Card.Img variant='top' className='card-group-img' src={indonesia2}/>
                        <Card.Body className='d-flex flex-column justify-content-between'>
                            <span className='card-group-tour-title'>
                                6D/4N Fun Tassie Vacation ...
                            </span>
                            <div className='d-flex justify-content-between'>
                                <span className='card-group-tour-price'>IDR. 12,398,000</span>
                                <span className='card-group-tour-dest'>Indonesia</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='mb-5'>
                    <Card className='card-group-tour p-2'>
                        <Card.Img variant='top' className='card-group-img' src={japan2}/>
                        <Card.Body className='card-group-body d-flex flex-column justify-content-between'>
                            <span className='card-group-tour-title'>
                                6D/4N Fun Tassie Vacation ...
                            </span>
                            <div className='d-flex justify-content-between'>
                                <span className='card-group-tour-price'>IDR. 12,398,000</span>
                                <span className='card-group-tour-dest'>Australia</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
        </Container>
    </>
  )
}
