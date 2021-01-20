import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {URL_HOME} from '../../utils/Constants'
import NavBar from "../Parts/NavBar";
import {AiOutlineUnorderedList} from 'react-icons/ai';
import {FaBoxes} from 'react-icons/fa';
import ListUsers from "./ListUsers";
import BlockUsers from "./BlockUsers";
import TopShowingMenu from "../Parts/TopShowingMenu";

const Home = () => {

    const [users, setUsers] = useState([]);
    const [list, setList] = useState(true);

    useEffect(() => {
        axios.get(URL_HOME + '?api_token=5lM8aAtZccxJ4IORmw3vntOhEs40qwg6okYsoT9dfQ06rQqhyOSEryZPw1HU')
            .then(e => {
                setUsers(e.data);
            })
    }, []);

    const listData = (list)? <ListUsers users={users}/> : <BlockUsers users={users}/>

    return (
        <div className={'container-fluid'}>
            <NavBar/>
            <TopShowingMenu
                list={list}
                setList={setList}
            />
            {listData}
        </div>
    );
}

export default Home;
