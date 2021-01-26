/*
 * IMAGES
 * */
export const IMAGE_LOGO = '/images/hoy-voy-logo.png';
export const IMAGE_ROOM = '/images/room.jpg';
export const IMAGE_CAR = '/images/coche-hoy-voy.jpg';

/*
 * URL's
 * */
const ORIGIN = window.location.origin;
export const API_LOGIN = "/api/login";
export const URL_LOGIN = `${ORIGIN}${API_LOGIN}`;
export const URL_HOME = `${ORIGIN}/api/home`;
export const LOGIN = '/login';

/*
 * CONSTANTS
 * */
export const ACTION_CURRENT_USER = 'actionCurrentUser';
export const TOKEN = 'token';

/*
* MESSAGES
* */
export const LOGIN_MESSAGES = {
    'NO_USER'       : 'This user doesn\'t exist, if you want, you can create a new user.',
    'NO_PASSWORD'   : 'The password is wrong.',
    'NO_FIELDS'     : 'Please, fill the fields.'
}
