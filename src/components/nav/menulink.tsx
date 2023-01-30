import { NavLink } from 'react-router-dom'
import './menulink.css'

export default function MenuLink (props: any){
    return (
        <NavLink style={({ isActive }) => ({color: isActive ? 'orange' : 'black'})} className={"menulink"} to={props.path}>
            {props.children}
        </NavLink>
    )
}

