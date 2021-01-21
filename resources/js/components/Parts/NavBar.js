import React from 'react';
import {useHistory} from 'react-router-dom';
import {TOKEN, LOGIN} from '../../utils/Constants';

const NavBar = (props) => {

    const {actionCurrentUser, user} = props;
    const history = useHistory();

    const logout = () => {
        actionCurrentUser('');
        localStorage.setItem(TOKEN, '');
        history.push(LOGIN);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">HoyvoyTest</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <span className={'mr-5'}>Hola {user.name}</span>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <a href="#"
                       className={'btn btn-outline-secondary'}
                       onClick={(e) => {
                           e.preventDefault();
                           logout()
                       }}
                    >Logout</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
