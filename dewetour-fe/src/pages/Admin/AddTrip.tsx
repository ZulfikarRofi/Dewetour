import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import paperclip from '../../assets/dewetour-asset/papaerclip.svg';
import NavbarDefault from "../../components/NavbarDefault";

interface formData {
    destination_name:string, 
    trip_name:string, price:number, 
    total_photos:number, country:string, 
    accomo:string, transport:string, eats:string, 
    image:string, 
    duration:string, 
    quota:string, 
    description:string, 
    nduration:string
}

export default function AddTrip() {

    const [showNavbar] = useState("");
    const [caption, setCaption] = useState("Attach Here");
    const [formData, setFormData] = useState<formData>({destination_name:"", trip_name:"", price:0, total_photos:0, country:"", accomo:"", transport:"", eats:"", image:"", duration:"", quota:"", description:"", nduration:""})
 
    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        try {
            const requestData = {
                ...formData,
            }
            const response = await axios.post('http://localhost:3000/api/addTrip', requestData)
            console.log('Data added successfully :',response.data)
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error('Error registering user:', axiosError.response?.data);
        }
    }

    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value, files} = e.target;
        if(name === "image" && files){
            const selectedFile = files[0];
            setFormData((prevData) => ({ ...prevData, image: selectedFile}));
        }
        else {
            setFormData((prevData)=>({...prevData, [name]:value}))
        }
    }

    useEffect(() => {
        const fileInput = document.getElementById("image") as HTMLInputElement | null;
        if(fileInput){
            fileInput.addEventListener('change', () => {
                console.log('File Input Changed');
                if(fileInput.files && fileInput.files.length > 0){
                    console.log('file selected');
                    const file = fileInput.files[0];
                    const fileType = file.type;

                    if(fileType.includes('image')){
                        console.log('Image Uploaded');
                        setCaption("image already uploaded");
                    }
                }
            })
        }
      }, [caption]);

  return (
    <>
    <NavbarDefault showNavbar={showNavbar} />
        <Container fluid className="plain-backdrop mt-5 py-5">
            <div className="d-flex justify-content-between align-items-center mx-5 px-5 pt-2">
                <h1>Add Trip</h1>
            </div>
            <Row className="d-flex justify-content-center pt-5">
                <Form onSubmit={handleSubmit} className="trip-form" method="POST" encType="multipart/form-data">
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className="add-trip-title-form">Title Trip</Form.Label>
                        <Form.Control type="text" name="trip_name" className="add-trip-form" value={formData.trip_name} onChange={handleChangeInput}  />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className="add-trip-title-form">Country</Form.Label>
                        <Form.Control type="text" name="country" className="add-trip-form"  value={formData.country} onChange={handleChangeInput} />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className="add-trip-title-form">Accomodation</Form.Label>
                        <Form.Control type="text" name="accomo" className="add-trip-form" value={formData.accomo} onChange={handleChangeInput}  />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className="add-trip-title-form">Transportation</Form.Label>
                        <Form.Control type="text" name="transport" className="add-trip-form" value={formData.transport} onChange={handleChangeInput}  />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className="add-trip-title-form">Eat</Form.Label>
                        <Form.Control type="text" name="eats" className="add-trip-form" value={formData.eats} onChange={handleChangeInput}  />
                    </Form.Group>
                    <Form.Label className="add-trip-title-form">Duration</Form.Label>
                    <Form.Group className="mb-5 d-flex align-items-center gap-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="duration" className="add-trip-form" style={{width:'20%'}} value={formData.duration} onChange={handleChangeInput}  />
                        <span className="fw-bold">Day</span>
                        <Form.Control type="text" name="nduration" className="add-trip-form" style={{width:'20%'}} value={formData.nduration} onChange={handleChangeInput}  />
                        <span className="fw-bold">Night</span>
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className="add-trip-title-form">Date Trip</Form.Label>
                        <Form.Control type="text" name="destination_name" className="add-trip-form" value={formData.destination_name} onChange={handleChangeInput}  />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className="add-trip-title-form">Price</Form.Label>
                        <Form.Control type="text" name="price" className="add-trip-form" value={formData.price} onChange={handleChangeInput} />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className="add-trip-title-form">Quota</Form.Label>
                        <Form.Control type="text" name="quota" className="add-trip-form" value={formData.quota} onChange={handleChangeInput} />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className="add-trip-title-form">Description</Form.Label>
                        <Form.Control as='textarea' name="description" className="add-trip-form" value={formData.description} onChange={handleChangeInput} />
                    </Form.Group>
                    <div className="input-group d-flex form-image justify-content-between align-items-center p-2 mb-5">
                        <input type="file" className="form-control" id="image" value={formData.image} onChange={handleChangeInput} hidden />
                        <h6 className="form-image-label">{caption}</h6>
                        <label htmlFor="image"><img src={paperclip} style={{width:'100%'}} alt=""/></label>
                    </div>
                    <div className="d-flex justify-content-center my-5">
                        <Button type="submit" className="button-first px-5">Add Trip</Button>
                    </div>
                </Form>
            </Row>
        </Container>
    </>
  )
}
