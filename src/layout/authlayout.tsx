import { Outlet } from "react-router-dom"
import Header from '../components/header';
import Footer from '../components/footer'; 
import './authlayout.css';

export default function AuthLayout() {
    return (
            <div className={"authlayoutcontainer"}>
                <Header /> 
                    <Outlet/>
                        <Footer />
            </div>
        
    );
  }