import { takeLatest, call, put } from 'redux-saga/effects';
import { setLogin, setToken } from './actions';
import { login } from '@domain/api';
import { setLoading, showPopup } from '@containers/App/actions';
import { DO_LOGIN } from './constants';

function* doLogin({formData}) {
    setLoading(true);
    try {
      const response = yield call(login, formData);
      const token = response.token;
      yield put(setLogin(true));
      yield put(setToken(token));
    } catch (error) {
        console.log(error)
    }
    setLoading(false);
  }
  
  export default function* loginSaga() {
    yield takeLatest(DO_LOGIN, doLogin);
  }
