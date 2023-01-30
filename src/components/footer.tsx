import { NavLink } from 'react-router-dom'
import './footer.css';

export default function Footer(props:any){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    
    return(
        <footer className={"footer"}>
          <NavLink to="/privacy">
            Privacy Policy
          </NavLink>
          <p> Contact Us at +65 20991122 </p> 
          <p> {today.toLocaleDateString()} </p>
        </footer>
        )
}