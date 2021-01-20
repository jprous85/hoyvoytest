import React, {useState} from 'react';
import BaseAccount from "./BaseAccount";
import axios from 'axios'
import {URL_LOGIN} from '../../utils/Constants';

const Login = () => {

    const [] = useState({});
    const [login, setLogin] = useState({email: '', password: ''});
    const [alert, setAlert] = useState(false);

    const checkUser = async () => {
        axios.post(URL_LOGIN, login)
            .then(e => {
                if (e.data.data === 'KO') {
                    setAlert(true);
                } else {
                    setAlert(false);
                    console.log(e.data);
                }
            })
            .catch(e => {
                console.log(e);
            })
    }

    const changeInputsValue = (type, e) => {
        setLogin({...login, [type]: e.target.value});
    }

    const alert_div = (alert) ? (
        <div className="alert alert-warning mt-4">
            The Email or Password are wrong!
        </div>
    ) : null;

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

export default Login;
