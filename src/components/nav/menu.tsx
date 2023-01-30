import './menu.css';

export default function MenuLink (props: any){
    
    return (
        <div className="navmenu">
            {props.children}
        </div>
    )
}

