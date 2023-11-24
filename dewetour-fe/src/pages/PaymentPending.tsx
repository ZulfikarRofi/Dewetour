import { Card, Col, Container, Row } from "react-bootstrap";
import bukti from '../assets/dewetour-asset/bukti-upload.png';
import deweLogo from '../assets/dewetour-asset/dewe-tour-logo.svg';
import NavbarDefault from "../components/NavbarDefault";

export default function PaymentPending() {
  return (
    <>
    <div className="plain-backdrop">
    <NavbarDefault />
    <Container className="py-5 my-5 vh-100 d-flex justify-content-center">
        <Card className="transaction-detail mt-5">
            <Row className="py-3">
                <div className="d-flex justify-content-between mb-3">
                    <img className="ms-5" src={deweLogo} alt="" />
                    <div className="me-5">
                        <h1 className="transaction-title">Booking</h1>
                        <p><span className="fw-bold">Saturday</span>, 27 July 2023</p>
                    </div>
                </div>
                <Col md={9}>
                    <Row>
                        <Col md={6}>
                            <div className="transaction-dest d-flex flex-column justify-content-between ps-5">
                                <div className="mb-3">
                                    <h1 className="transaction-dest">6D/4N Fun Tassie Vacation</h1>
                                    <p className="dest-name">Australia</p>
                                </div>
                                <h6 className="alert alert-warning status-transaction py-1 px-0">
                                    Waiting Approve
                                </h6>
                            </div>
                        </Col>
                        <Col md={5}>
                            <Row>
                                <Col md={6}>
                                    <h6 className="transaction-detail-text">Date Trip</h6>
                                    <p className="transaction-fill-text">27 August 2020</p>
                                </Col>
                                <Col md={6}>
                                    <h6 className="transaction-detail-text">Duration</h6>
                                    <p className="transaction-fill-text">6 Day 4 Night</p>
                                </Col>
                                <Col md={6}>
                                    <h6 className="transaction-detail-text">Accomodation</h6>
                                    <p className="transaction-fill-text">Hotel 4 Nights</p>
                                </Col>
                                <Col md={6}>
                                    <h6 className="transaction-detail-text">Transportation</h6>
                                    <p className="transaction-fill-text">Qatar Airways</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <div className="d-flex flex-column align-items-center">
                        <img className="img-approval" src={bukti} alt="" />
                        <p className="text-secondary text-approval mt-2">Upload Payment proof</p>
                    </div>
                </Col>
                <div className="transaction-pricing mt-5">
                    <div className="transaction-head d-flex">
                        <h6 className="transaction-pricing-head me-5 pe-3">No</h6>
                        <h6 className="transaction-pricing-head me-5 pe-3">Full Name</h6>
                        <h6 className="transaction-pricing-head me-5 pe-3">Gender</h6>
                        <h6 className="transaction-pricing-head me-5 pe-3">Phone</h6>
                    </div>
                </div>
                <div className="transaction-fill d-flex justify-content-between mb-3 py-3">
                    <div className="d-flex justify-content-between">
                        <span className="text-secondary me-5" style={{font:"14px", fontFamily:'avenir'}}>1</span>
                        <span className="text-secondary me-5 ps-4" style={{font:"14px", fontFamily:'avenir'}}>Zulfikar Rofi</span>
                        <span className="text-secondary me-5 px-3" style={{font:"14px", fontFamily:'avenir'}}>Male</span>
                        <span className="text-secondary me-5 ps-4" style={{font:"14px", fontFamily:'avenir'}}>085967173382</span>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                        <span className="me-4 fw-bold">Qty</span>
                        <span className="me-2"> : </span>
                        <span className="fw-bold me-5 ms-2 pe-5">1</span>
                    </div>
                </div>
                <div className="total-price d-flex justify-content-end">
                    <h6 className="fw-bold me-2">Total</h6>
                    <h6> : </h6>
                    <h6 className="fw-bold me-5 ms-2 text-danger">IDR. 12,398,000</h6>
                </div>
            </Row>
        </Card>
    </Container>
    </div>
    </>
  )
}
