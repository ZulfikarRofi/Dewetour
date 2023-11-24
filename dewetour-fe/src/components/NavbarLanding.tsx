import { useEffect, useState } from 'react';
import { Button, Dropdown, Navbar } from 'react-bootstrap';
import deweLogo from '../assets/dewetour-asset/dewe-tour-logo.svg';
import photo from '../assets/dewetour-asset/profile-photo.svg';
import profile from '../assets/dewetour-asset/user-icon.svg';
import bill from '../assets/dewetour-asset/bill-icon.svg';
import logout from '../assets/dewetour-asset/logout-icon.svg';
import LoginModal from './LoginModal';
import RegisModal from './RegisModal';
import { useNavigate } from 'react-router-dom';


interface NavbarLandingProps {
  showNavbar: string;
}

export default function NavbarLanding({showNavbar}:NavbarLandingProps) {
  const [showModal, setShowModal] = useState(false);
  const [regModal, setRegModal] = useState(false);
  
  const handleLogShow = () => setShowModal(true);
  const handleCloseLog = () => setShowModal(false);

  const handleRegShow = () => setRegModal(true);
  const handleRegClose = () => setRegModal(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    return navigate('/');
  }

  useEffect(()=>{
    
  },[])
  return (
    <>
    <Navbar fixed='top' className='d-flex justify-content-between px-5'>
        <Navbar.Brand className='ms-5'>
            <img src={deweLogo} alt="logoDw" width={180} />
        </Navbar.Brand>
        {showNavbar == "kosong"?
          <div className='d-flex me-5 navbar-content'>
          <Button className='btn btn-md px-4 btn-trans fw-semibold' onClick={handleLogShow}>
            Login
          </Button>
          <Button className='btn btn-md btn-first fw-semibold' onClick={handleRegShow}>
            Register
          </Button>
          <LoginModal loginShow={showModal} Close={handleCloseLog} />
          <RegisModal RegShow={regModal} Close={handleRegClose} />
          </div> 
        :
        <Dropdown>
            <Dropdown.Toggle variant='transparent' className='photo-profile-pic custom-dropdown d-flex justify-content-center align-items-center me-5'>
              <img src={photo} alt="" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className='fw-bold' href="/profile"><img src={profile} alt="" className='img-icon me-2'/>  Profile</Dropdown.Item>
              <Dropdown.Item className='fw-bold' href="/payment"><img src={bill} alt="" className='img-icon me-2'/>  Pay</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className='fw-bold' onClick={handleLogout}><img src={logout} alt="" className='img-icon me-2'/>  Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        }
    </Navbar>
    </>
  )
}
