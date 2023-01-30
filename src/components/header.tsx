import './header.css';
import {useState} from 'react';
import Menu from './nav/menu';
import Menulink from './nav/menulink';
import Modal from './modal';
import { useDispatch } from 'react-redux';
import { logUserOut } from '../reducers/userLoginReducer';
import { useNavigate } from 'react-router-dom';

export default function Header(props: any){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const openModal=()=>{
      setShowModal(true);
    }

    const hideModal=()=>{
      setShowModal(false);
    }

    const userLogOut=()=>{
      localStorage.removeItem('user-credential-expiry');
      dispatch(logUserOut());
      navigate('/login',{replace: true});
    }

    return(
    <>
      <Modal show={showModal} handleClose={hideModal}>
        <h1> Confirm log out ? </h1>
        <button className='modal-button' onClick={userLogOut}>Logout</button>
        <button className='modal-button' onClick={hideModal}>Close</button>
      </Modal>
    <nav className="headerNavBar">
        <Menu>
          <Menulink path="/home">
            Home
          </Menulink>
          <Menulink path="/dummy1">
            Reports
          </Menulink>
          <Menulink path="/dummy2">
            Insights
          </Menulink>
          <button style={{}} onClick={openModal}>
            Logout
          </button>
        </Menu>
    </nav>
    </>
    )
}