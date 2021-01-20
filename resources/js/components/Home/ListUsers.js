import React from 'react';

const ListUsers = (props) => {

    const {users} = props;

    return (
        <div className="table-responsive mt-2">
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Email</th>
                    <th scope="col">token</th>
                    <th scope="col">Date of birth</th>
                </tr>
                </thead>
                <tbody>
                {users.map(u => (
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.first_last_name}</td>
                        <td>{u.email}</td>
                        <td>{u.api_token}</td>
                        <td>{u.date_of_birth}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

}

export default ListUsers;
