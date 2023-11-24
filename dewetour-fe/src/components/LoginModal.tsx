// LoginModal.tsx
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../context/dataContext';


// interface Action {
//   type:string;
//   payload: {
//     token: string;
//     user: User;
//   }
// }
interface LoginModalProps {
  loginShow: boolean;
  Close: () => void;
}

interface loginFormData {
  email: string;
  password: string;
}

const LoginModal: React.FC<LoginModalProps> = ({ loginShow, Close }) => {
  const navigate = useNavigate();
  // console.log(loginShow);
const [formData
, setFormData] = useState<loginFormData>({email:"", password:""});
// const context = useContext< UserContextProps | null>(UserContext);
// const {state:{}, dispatch} =useUserContext();
const {setUser} = useUserStore();
const handleSubmit = async (e:React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3000/api/login', formData)
    const user = response.data.user;
    localStorage.setItem('token', response.data.token)

    //sending the user data to context
    setUser(user)
    
    //navigating after login
    navigate('/')
    
    console.log('users data :', user)
    console.log('login successful :', response.data)
    // console.log(setUser);
  } catch (error: unknown) {
    if(axios.isAxiosError(error)){
      const axiosError = error as AxiosError;
      console.error('Error registering user:', axiosError.response?.data);
    }
  } 
}
const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
  const {name, value} = e.target;
  setFormData((prevData)=> ({...prevData, [name]:value}))
}
  return (
    <Modal show={loginShow} onHide={Close}>
      <Modal.Body className='p-3 modal-style modal-global' style={{height:'25rem', overflowY:'auto' }}>
        <h5 className='fw-bold text-center fs-2 py-4'>Login</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2" style={{width:"100%"}}>
            <label className='fw-bold fs-6'>Email</label>
            <Form.Control className='p-2 add-trip-form' name='email' value={formData.email} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-4" style={{width:"100%"}}>
            <label className='fw-bold fs-6'>Password</label>
            <Form.Control className='p-2 add-trip-form' name='password' type='password' value={formData.password} onChange={handleChange} />
          </Form.Group>
          <Button className='btn btn-second fw-bold fs-5' type='submit' style={{width:"100%"}}>Login</Button>
          <p className='text-center mt-2 text-secondary fs-6'>Do not have an account ? <span className='fw-bold' onClick={()=>{}}>click here</span></p>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
