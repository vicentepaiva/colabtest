import { useState, useEffect } from 'react';
import { api } from '../lib/axios';



const User = ({data}) => {


    return(
        <div className="transition duration-400 ease-in-out transform hover:scale-105 bg-white rounded shadow-md p-6 h-full">
            <h2 className="text-black">{data.name.first} {data.name.last}</h2>
            <p className="text-black">{data.email}</p>
            <p className="text-black">{data.phone}</p>
            <img src={data.picture.thumbnail} alt="User avatar" className="mt-left" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {users.map(user => <User key={user.login.uuid} data={user} />)}
        </div>
    );
}
