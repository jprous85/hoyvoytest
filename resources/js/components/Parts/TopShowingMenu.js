import React from 'react';
import {AiOutlineUnorderedList} from "react-icons/ai";
import {FaBoxes} from "react-icons/fa";

const TopShowingMenu = (props) => {
    const {list, setList} = props;

    const buttonStyleList = (list) ? 'disabled' : 'btn-outline-primary';
    const buttonStyleBlock = (list) ? 'btn-outline-primary' : 'disabled';

    return (
        <div className={'d-flex flex-row-reverse bd-highlight'}>
            <a href="#" className={`btn mr-2 ${buttonStyleList}`}
               onClick={() => {
                   setList(!list);
               }}
            ><AiOutlineUnorderedList /></a>
            &nbsp;
            <a href="#" className={`btn ml-2 mr-5 ${buttonStyleBlock}`}
               onClick={() => {
                   setList(!list);
               }}
            ><FaBoxes /></a>
        </div>
    );
}

export default TopShowingMenu;
