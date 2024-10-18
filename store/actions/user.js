import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as Location from 'expo-location';

import * as c from '../../constants/requestTypes/user';
import { ENV } from '../../environment';

const BASE_URL = ENV.API_URL;

// -------------------------------- REPORT ACTION --------------------------------

export const sendRecoveryCode = (email) => {
  return async (dispatch) => {
    try {
      dispatch({ type: c.RECOVER_CODE_REQUEST });

      const config = {
        'Content-Type': 'application/json',
      };

      const { data } = await axios({
        method: 'POST',
        url: `${BASE_URL}/api/v1/users/recovery-code/`,
        headers: config,
        data: {
          email,
        },
      });

      dispatch({
        type: c.RECOVERY_CODE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: c.RECOVERY_CODE_FAIL,
        payload: error,
      });
    }
  };
};

export const validateCode = (email, code) => {
  return async (dispatch) => {
    try {
      dispatch({ type: c.VALIDATE_CODE_REQUEST });

      const config = {
        'Content-Type': 'application/json',
      };

      const { data } = await axios({
        method: 'POST',
        url: `${BASE_URL}/api/v1/users/validate-code/`,
        headers: config,
        data: {
          email,
          code,
        },
      });

      dispatch({
        type: c.VALIDATE_CODE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: c.VALIDATE_CODE_FAIL,
        payload: error,
      });
    }
  };
};

export const changePassword = (email, password, repeated_password, token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: c.CHANGE_PASSWORD_REQUEST });

      const config = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const { data } = await axios({
        method: 'POST',
        url: `${BASE_URL}/api/v1/profiles/actions/reset-password/`,
        headers: config,
        data: {
          email,
          password,
          repeated_password,
        },
      });

      dispatch({
        type: c.CHANGE_PASSWORD_SUCCESS,
        payload: data,
      });

      dispatch({ type: c.CHANGE_PASSWORD_RESET });
    } catch (error) {
      dispatch({
        type: c.CHANGE_PASSWORD_FAIL,
        payload: error,
      });
    }
  };
};
