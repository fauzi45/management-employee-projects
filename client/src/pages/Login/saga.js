import { takeLatest, call, put } from 'redux-saga/effects';
import { login } from '@domain/api';
import { setLoading, showPopup } from '@containers/App/actions';
import { DO_LOGIN } from './constants';
import { setLogin, setToken } from '@containers/Client/actions';

function* doLogin({formData}) {
    setLoading(true);
    try {
      const response = yield call(login, formData);
      const token = response.token;
      yield put(setLogin(true));
      yield put(setToken(token));
      cb();
    } catch (error) {
        yield put(showPopup(error.info));
    }
    setLoading(false);
  }
  
  export default function* loginSaga() {
    yield takeLatest(DO_LOGIN, doLogin);
  }
