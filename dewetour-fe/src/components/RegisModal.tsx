// LoginModal.tsx
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

interface RegisModalProps {
  RegShow: boolean;
  Close: () => void;
}

interface formData {
  username: string,
  email: string,
  password: string,
}

const RegisModal: React.FC<RegisModalProps> = ({ RegShow, Close }) => {

  const [formData, setFormData] = useState<formData>({username:"", email:"", password:""})

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    try {
      const requestData = {
        ...formData,
        password: String(formData.password)
      }
      const response = await axios.post('http://localhost:3000/api/register', requestData)
      console.log('Registration successful:', response.data);
      console.log(requestData);
    } catch (error: unknown) {
      if(axios.isAxiosError(error)){
        const axiosError = error as AxiosError;
        console.error('Error registering user:', axiosError.response?.data);
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData, [name]:value}))
  } 
  // console.log(RegShow);

  return (
    <Modal show={RegShow} onHide={Close}>
      <Modal.Body className='p-3 modal-style modal-global' style={{height:'30rem', overflowY:'auto' }}>
        <h5 className='fw-bold text-center fs-2 py-4'>Register</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2" style={{width:"100%"}}>
            <label className='fw-bold fs-6'>Username</label>
            <Form.Control className='p-2 add-trip-form' type='text' name='username' value={formData.username} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-2" style={{width:"100%"}}>
            <label className='fw-bold fs-6'>Email</label>
            <Form.Control className='p-2 add-trip-form'type='email' name='email' value={formData.email} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-4" style={{width:"100%"}}>
            <label className='fw-bold fs-6'>Password</label>
            <Form.Control className='p-2 add-trip-form' type='password' name='password' value={formData.password} onChange={handleInputChange} />
          </Form.Group>
          <Button className='btn btn-second fw-bold fs-5' type='submit' style={{width:"100%"}}>Register</Button>
          <p className='text-center mt-2 text-secondary fs-6'>Already have an account ? <span className='fw-bold' onClick={()=>{}}>click here</span></p>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisModal;
