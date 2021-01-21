import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {URL_HOME, LOGIN} from '../../utils/Constants'
import NavBar from "../Parts/NavBar";
import ListUsers from "./ListUsers";
import BlockUsers from "./BlockUsers";
import TopShowingMenu from "../Parts/TopShowingMenu";
import { connect } from 'react-redux';
import actionCurrentUser from "../../redux/actions/actionCurrentUser";
import {useHistory} from 'react-router-dom';

const Home = (props) => {

    const {currentUser, actionCurrentUser} = props;
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const [list, setList] = useState(true);
    const history = useHistory();

    useEffect(() => {
        if (currentUser.length !== 0) {
            axios.get(`${URL_HOME}?api_token=${currentUser}`)
                .then(e => {
                    setUsers(e.data);
                    const u = e.data.find((e) => {
                        return e.api_token === currentUser;
                    })
                    setUser(u);
                })
                .catch(c => {
                    console.log(c);
                })
        }
        else {
            history.push(LOGIN);
        }
    }, []);

    const listData = (list)? <ListUsers users={users}/> : <BlockUsers users={users}/>

    return (
        <div className={'container-fluid'}>
            <NavBar
                actionCurrentUser={actionCurrentUser}
                user={user}
            />
            <TopShowingMenu
                list={list}
                setList={setList}
            />
            {listData}
        </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
