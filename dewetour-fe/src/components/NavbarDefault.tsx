// NavbarDefault.tsx
import { useState } from 'react';
import { Button, Dropdown, Navbar as NavbarDf } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import bill from '../assets/dewetour-asset/bill-icon.svg';
import deweLogo from '../assets/dewetour-asset/dewe-tour-logo.svg';
import logout from '../assets/dewetour-asset/logout-icon.svg';
import photo from '../assets/dewetour-asset/profile-photo.svg';
import profile from '../assets/dewetour-asset/user-icon.svg';
import LoginModal from './LoginModal';

interface NavbarDefaultProps{
  showNavbar: string;
}

export default function NavbarLanding({showNavbar}:NavbarDefaultProps) {
  const [showModal, setShowModal] = useState(false);

  const handleLogShow = () => setShowModal(true);
  const handleCloseLog = () => setShowModal(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    return navigate('/');
  }

  return (
    
    <NavbarDf fixed='top' className='d-flex justify-content-between px-5 navbar-default'>
      <NavbarDf.Brand className='ms-5'>
        <Link to='/'>
          <img src={deweLogo} alt="logoDw" width={180} />
        </Link>
      </NavbarDf.Brand>
        {showNavbar == "kosong"?
          <div className='d-flex me-5 navbar-content'>
            <Button className='btn btn-md px-4 btn-trans fw-semibold' onClick={handleLogShow}>
              Login
            </Button>
            <Button className='btn btn-md btn-first fw-semibold'>
              Register
            </Button>
            <LoginModal loginShow={showModal} Close={handleCloseLog} />
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
    </NavbarDf>
  );
}
