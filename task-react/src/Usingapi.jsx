import { useEffect } from "react";
import { useState } from "react";

export default function User(){
    const [users, setUsers] = useState([])
    const [show, setShow] = useState(false);

    useEffect(() =>{
        const fetchUsers = async () =>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    return(
        <>
            <div className="counts">
                <button onClick={() => setShow(!show)}>{show ? "Hide Data": "Show Data"}</button>
                {show && <p>Total Users: {users.length}</p>}
                {
                    show && users.map(user =>(
                        <div key={user.id} className="counts">
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Company: {user.company.name}</p>
                            <p>City: {user.address.city}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};