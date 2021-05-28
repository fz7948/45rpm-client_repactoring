import * as authAPI from '../lib/api/auth';

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const WITHDRAW = 'WITHDRAW';
const KAKAO_LOGIN = 'KAKAO_LOGIN';
const CHECK = 'CHECK';
const CHECK_SUCCESS = 'CHECK_SUCCESS';
const CHECK_ERROR = 'CHECK_ERROR';

export const loginUser = ({ id, email, username, token }) => ({
  type: LOGIN_USER,
  token,
  id,
  email,
  username,
});

export const loginKakao = ({ id, email, username, token }) => ({
  type: KAKAO_LOGIN,
  token,
  id,
  email,
  username,
});

export const logoutUser = (token) => async (dispatch) => {
  console.log('로그아웃되냐', token);
  try {
    const logoutRes = await authAPI.logout(token);
    dispatch({ type: LOGOUT_USER });
    removeSessionStorage();
  } catch (error) {
    console.log(error);
  }
};

function removeSessionStorage() {
  try {
    sessionStorage.removeItem('id');
  } catch (e) {
    console.log('sessionStorage is not working');
  }
}

export const checkUser = (ssID, token) => async (dispatch) => {
  dispatch({ type: CHECK });
  try {
    const res = await authAPI.check(ssID);
    console.log(res);
    const { id, username, email, admin, social } = res.data;
    dispatch({
      type: CHECK_SUCCESS,
      token,
      id,
      email,
      username,
    });
  } catch (e) {
    dispatch({ type: CHECK_ERROR });
    removeSessionStorage();
  }
};

export const withdrawal = (token) => async (dispatch) => {
  try {
    const withdraw = await authAPI.withdraw(token);
    dispatch({ type: WITHDRAW });
    // removeSessionStorage();
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  isLogin: false,
  token: null,
  id: null,
  email: null,
  username: null,
};

function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
    case CHECK_SUCCESS:
      return {
        ...state,
        isLogin: true,
        token: action.token,
        id: action.id,
        email: action.email,
        username: action.username,
      };
    case KAKAO_LOGIN:
      return {
        ...state,
        isLogin: true,
        token: action.token,
        id: action.id,
        email: action.email,
        username: action.username,
      };
    case LOGOUT_USER:
    case CHECK:
    case CHECK_ERROR:
      return {
        ...state,
        isLogin: false,
        token: null,
        id: null,
        email: null,
        username: null,
      };
    case WITHDRAW:
      return {
        ...state,
        isLogin: false,
        token: null,
        id: null,
        email: null,
        username: null,
      };
    default:
      return state;
  }
}

export default user;
