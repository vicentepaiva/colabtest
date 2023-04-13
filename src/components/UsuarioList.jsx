import { useState, useEffect } from 'react';
import { api } from '../lib/axios';



const UserItem = ({data}) => {


    return(
        <div className="transition duration-400 ease-in-out transform hover:scale-105 bg-white rounded shadow-md p-6 h-full">
            <img src={data.picture.thumbnail} alt="User avatar" className="mt-left" />
            <h2 className="text-black">{data.name.first} {data.name.last}</h2>
            <p className="text-black">{data.email}</p>
            <p className="text-black">{data.phone}</p>
        </div>
    );
}

export function UserList() {
const [users, setUsers] = useState([]);


    const getUsers = async () => {
        const response = await api.get(`https://randomuser.me/api/?results=48`);
        setUsers(response.data.results);
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleButtonClick = () => {
        getUsers();
    }

    return(
        <div>
        <div className="mb-4">
          <button  onClick={handleButtonClick} className="transition shadow-md duration-300  transform rounded bg-white hover:bg-violet-900 text-black hover:text-white p-2 ">Ver Usuários</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {users.map(user => <UserItem key={user.login.uuid} data={user} />)}
        </div>
      </div>
    );
}
