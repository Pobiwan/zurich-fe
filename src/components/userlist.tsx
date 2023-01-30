import { User } from '../modals/user';
import './userlist.css';

export default function UserList({user}:{user: User}){

    return (
        <div className="user-container">
        <img src={user.avatar} alt="" />
        <div className="userDetail">
          <div className="first-name">{`${user.first_name}                
                                 ${user.last_name}`}</div>
          <div className="last-name">{user.email}</div>
        </div>
      </div>
    )
}