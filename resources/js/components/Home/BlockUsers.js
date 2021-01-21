import React from 'react';

const BlockUsers = (props) => {

    const {users} = props;

    return (
        <div className={'row mt-2'}>
            {users.map(u => (
                <div className="col-md-4 mt-2" key={u.id}>
                    <div className="card">
                        <img src={`/images/users/${u.photo}`}
                             className="card-img-top img-fluid img-thumbnail"
                             alt="photo user"
                             style={{
                                 'width'    : 150,
                                 'margin'   : '15px auto'
                             }}
                        />
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5 className="card-title">{u.name}</h5>
                                </div>
                                <div className="col-md-4">
                                    <small className={''}>{u.date_of_birth}</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    {u.first_last_name}
                                </div>
                                <div className="col-12 mt-2">
                                    <span className={'text-primary'}>{u.email}</span>
                                </div>
                                <div className="col-12 mt-2">
                                    <small>{u.api_token}</small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default BlockUsers;
