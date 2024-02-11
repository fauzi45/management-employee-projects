import { DO_LOGIN } from './constants';

export const doLoginAction = (formData,cb) => ({
  type: DO_LOGIN,
  formData,
  cb
});