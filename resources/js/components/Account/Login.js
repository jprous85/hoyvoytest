import React, {useState} from 'react';
import  { useHistory } from 'react-router-dom'
import BaseAccount from "./BaseAccount";
import axios from 'axios'
import {URL_LOGIN, LOGIN_MESSAGES} from '../../utils/Constants';
import {connect} from "react-redux";
import actionCurrentUser from './../../redux/actions/actionCurrentUser';
import {TOKEN} from '../../utils/Constants';

const Login = (props) => {

    const {actionCurrentUser} = props;
    const history = useHistory();
    const [login, setLogin] = useState({email: '', password: ''});
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const checkUser = async () => {
        if (login.email.length !== 0 && login.password.length !== 0) {
            axios.post(URL_LOGIN, login)
                .then(e => {
                    if (e.data.data === 'KO') {
                        setAlertMessage(LOGIN_MESSAGES[e.data.message]);
                        setAlert(true);
                    } else {
                        setAlertMessage('');
                        setAlert(false);
                        actionCurrentUser(e.data.api_token);
                        localStorage.setItem(TOKEN, e.data.api_token);
                        history.push('/');
                    }
                })
                .catch(e => {
                    console.log(e);
                })
        }
        else {
            setAlert(true);
            setAlertMessage(LOGIN_MESSAGES.NO_FIELDS);
        }
    }

    const changeInputsValue = (type, e) => {
        setLogin({...login, [type]: e.target.value});
    }

    const alert_div = (alert) && (
        <div className="alert alert-warning mt-4">
            {alertMessage}
        </div>
    );

    return (
        <div>
            <BaseAccount>
                <div className="row justify-content-center">
                    <div className="col-sm-5 mt-5">
                        <div className="card" style={{backgroundColor: 'rgba(255,255,255,0.84)'}}>
                            <div className="card-body">
                                <form action="" className="form-group text-center" onSubmit={() => checkUser()}>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="email"
                                               value={login.email}
                                               autoComplete="off" onChange={(e) => {
                                            changeInputsValue('email', e)
                                        }}/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="password" className="form-control"
                                               placeholder="password"
                                               value={login.password}
                                               onChange={(e) => {
                                                   changeInputsValue('password', e)
                                               }}
                                        />
                                    </div>
                                    {alert_div}
                                    <a className="btn btn-block btn-warning mt-3"
                                       onClick={() => checkUser()}>Login</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </BaseAccount>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionCurrentUser: token => dispatch(actionCurrentUser(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
