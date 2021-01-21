import {ACTION_CURRENT_USER} from './../../utils/Constants';
export const type = ACTION_CURRENT_USER;

const actionCurrentUser = token => {
    return {
        type,
        payload: token
    }
}

export default actionCurrentUser
