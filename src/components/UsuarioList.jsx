import { useState, useEffect } from 'react';
import { api } from '../lib/axios';



const User = ({data}) => {


    return(
        <div>
            <h2>{data.name.first} {data.name.last}</h2>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.website}</p>
            <img src={data.picture.thumbnail} alt="User avatar" />
        </div>
    );
}

export function UserList() {
const [users, setUsers] = useState([]);


    useEffect(() => {
        const getUsers = async () => {
            const response = await api.get('https://randomuser.me/api/?results=50');
            setUsers(response.data.results);
            console.log(response.data.results)
        };
        getUsers();
    }, []);

    return(
        <div>
            {users.map(user => <User key={user.login.uuid} data={user} />)}
        </div>
    );
}
