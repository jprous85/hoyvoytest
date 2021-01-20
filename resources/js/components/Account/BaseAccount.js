import React from 'react';
import {
    image_logo,
    image_base,
    login_card
} from '../../../css/account/baseCSS'

import {
    IMAGE_LOGO,
    IMAGE_ROOM
} from '../../utils/Constants'

const BaseAccount = (props) => {

    const {children} = props;

    return (
        <div>
            <img src={IMAGE_LOGO}
                 alt="room of office"
                 style={image_logo}
                 height='90%'
            />
            <img src={IMAGE_ROOM}
                 alt="room of office"
                 style={image_base}
                 height='90%'
            />
            <div style={login_card}>{children}</div>
        </div>
    );
}

export default BaseAccount;
