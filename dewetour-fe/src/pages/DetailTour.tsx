import axios from 'axios';
import numeral from 'numeral';
import { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import minus from '../assets/dewetour-asset/Minus.svg';
import plus from '../assets/dewetour-asset/Plus.svg';
import calendar from '../assets/dewetour-asset/calendar 1.svg';
import hotel from '../assets/dewetour-asset/hotel 1.svg';
import meal from '../assets/dewetour-asset/meal 1.svg';
import plane from '../assets/dewetour-asset/plane 1.svg';
import sidney from '../assets/dewetour-asset/sidney.png';
import sidney2 from '../assets/dewetour-asset/sidney2.png';
import sidney3 from '../assets/dewetour-asset/sidney3.png';
import sidney4 from '../assets/dewetour-asset/sidney4.png';
import time from '../assets/dewetour-asset/time 1.svg';
import NavbarDefault from "../components/NavbarDefault";

interface DetailTrip {
    id: number;
    date: string;
    total_photos: number;
    price: number;
    trip_name: string;
    country: string;
    accomo: string;
    transport: string;
    eats: string;
    image: string;
    duration: number;
    nduration: number;
    quota: number;
    description: string;
}


export default function DetailTour() {
    const [detailTrip, setDetailTrip] = useState<DetailTrip | null>(null);
    const [count, setCount] = useState<number>(1);
    const [originalPrice, setOriginalPrice] = useState<number | null>(null)
    const [showNavbar, setShowNavbar] = useState("");
    // const [redirectMessage, setRedirectMessage] = useState('');
    const {id} = useParams();

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }



    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem('token');
      
            if (!token) {
              window.location.href = '/?message=You need to login to perform this action';
              setShowNavbar("kosong");
              return;
            }
      
            const response = await axios.get(`http://localhost:3000/api/trip/${id}`);
            const fetchedData = response.data.payload.data;
      
            if (fetchedData) {
              setOriginalPrice(fetchedData.price);
      
              const newPrice = count * fetchedData.price;
              setDetailTrip({
                ...fetchedData,
                price: newPrice,
              });
            }
          } catch (error) {
            console.error('Error while fetching data:', error);
          }
        };
      
        fetchData();
      }, [id, count]);
  return (
    <>
    <NavbarDefault showNavbar={showNavbar} />
    <div className="backdrop">
        {detailTrip?
        <Container className="my-5 py-3">
            <div className="detail-head my-5">
                <h1 className="detail-title mt-5">{detailTrip.trip_name}</h1>
                <p className="detail-dest">Australia</p>
            </div>
            <Row className="mb-5">
                <div className="detail-banner d-flex justify-content-center">
                    <img src={sidney} className="detail-img-banner" alt="image banner" />
                </div>
                <div className="more-img-banner d-flex justify-content-center">
                    <img src={sidney2} alt="" />
                    <img src={sidney3} alt="" />
                    <img src={sidney4} alt="" />
                </div>
            </Row>
            <Row className="trip-info">
                <h6 className="trip-info-title mb-2">Information Trip</h6>
                <div className="d-flex others mb-5">
                    <div className="other-info">
                        <p className="info-name m-0 ps-1">Accomodation</p>
                        <h6 className="info-value mt-1"><span><img src={hotel} alt="" /></span> {detailTrip.accomo}</h6>
                    </div>
                    <div className="other-info">
                        <p className="info-name m-0 ps-1">Transportation</p>
                        <h6 className="info-value mt-1"><span><img src={plane} alt="" /></span>{detailTrip.transport}</h6>
                    </div>
                    <div className="other-info">
                        <p className="info-name m-0 ps-1">Eat</p>
                        <h6 className="info-value mt-1"><span><img src={meal} alt="" /></span> {detailTrip.eats}</h6>
                    </div>
                    <div className="other-info">
                        <p className="info-name m-0 ps-1">Duration</p>
                        <h6 className="info-value mt-1"><span><img src={time} alt="" /></span> {detailTrip.duration} Day {detailTrip.nduration} Night</h6>
                    </div>
                    <div className="other-info">
                        <p className="info-name m-0 ps-1">Date Trip</p>
                        <h6 className="info-value mt-1"><span><img src={calendar} alt="" /></span> {detailTrip.date}</h6>
                    </div>
                </div>
                <div className="description">
                    <h6 className="description-title">Description</h6>
                    <p className="description-fill">
                    {detailTrip.description}
                    </p>
                </div>
            </Row>
            <Row className="detail-pricing">
                <div className="d-flex justify-content-between align-items-center">
                <h1 className="detail-price pt-1">IDR. {numeral(originalPrice).format('0,0')} <span className="person">/ Person</span></h1>
                    <div className="d-flex gap-2">
                        {count != 0 ?
                        <img src={minus} className="equation" alt="" onClick={decrement}  />
                        :
                        <img src={minus} className="equation" alt=""/>
                        }
                        <span className="fw-bold">{count}</span>
                        <img src={plus} className="equation" alt="" onClick={increment}  />
                    </div>
                </div>
                <div className="total-pricing d-flex justify-content-between">
                    <h1 className="person">Total :</h1>
                    <h1 className="detail-price">IDR. {numeral(detailTrip.price).format('0,0')}</h1>
                </div>
                <div className="my-4 d-flex justify-content-end">
                    <Button className="button-first">Book Now</Button>
                </div>
            </Row>
        </Container>
        : <p>is Loading...</p>}
        </div>
    </>
  )
}
