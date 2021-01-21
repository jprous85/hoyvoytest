import {type as actionCurrentUser} from '../actions/actionCurrentUser';
import {TOKEN} from '../../utils/Constants';

const defaultState = localStorage.getItem(TOKEN);

function reducer(state = defaultState, {type, payload}) {
    switch (type) {
        case actionCurrentUser:
            return payload;
        default:
            return state;
    }
}

export default reducer;
