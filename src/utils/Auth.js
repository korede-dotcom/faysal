import { Axios } from 'utils/Axios';

const baseurl = JSON.stringify(import.meta.env.REACT_APP_API)
// user login
export const userLogin = async (body) => {

  const { data } = await Axios.post(
    `${baseurl}auth/login/`,
    body
  );
  console.log(body)
  return data;
};



// create bank account
export const createAccount = async (body) => {
  const { data } = await Axios.post(
    `${baseurl}account/open-account/`,
    body
  );
  return data;
};

// register user
export const registerUser = async (body) => {
  const { data } = await Axios.post(
    `${baseurl}account/signup/`,
    body
  );
  return data;
};

// Request OTP for user registration
export const requestSignUpOtp = async (body) => {
  const { data } = await Axios.post(
    `${baseurl}account/signup-otp/`,
    body
  );
  return data;
};

// Reset OTP
export const resetOtp = async (body) => {
  const { data } = await Axios.post(
    `${baseurl}account/reset-otp/`,
    body
  );
  return data;
};

// Reset transaction pin
export const resetTransactionPin = async (body) => {
  const { data } = await Axios.post(
    `${baseurl}account/reset-transaction-pin/`,
    body
  );
  return data;
};

// Change transaction pin
export const changeTransactionPin = async (body) => {
  const { data } = await Axios.post(
    `${baseurl}account/change-pin/`,
    body
  );
  return data;
};

// Change password
export const changePassword = async (body) => {
  const { data } = await Axios.post(
    `${baseurl}account/change-password/`,
    body
  );
  return data;
};

// forgot password
export const forgotPassword = async (body) => {
  const { data } = await Axios.post(
    `${baseurl}account/reset-otp/`,
    body
  );
  return data;
};

// validate BVN 
export const validateBvn = async (body) => {
  const { data } = await Axios.post(
    `${baseurl}account/validate-bvn/${process.env.REACT_APP_BANK_ID}/`,
    body
  );
  return data;
};

// Update user account details
export const updateProfile = async (body) => {
  const { data } = await Axios.put(
    `${baseurl}account/profile/`,
    body
  );
  return data;
};
