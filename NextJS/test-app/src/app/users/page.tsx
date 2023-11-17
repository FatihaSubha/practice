import React from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
   
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
    {next: {revalidate: 10}}); //caching behavious is only implemented in fetch function
    const users: User[] = await res.json();
    return (
        <main>
        <h1> UsersPage</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
        </main>
    )
}
export default UsersPage