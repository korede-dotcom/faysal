import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'login/user',
  async ({ password, username }, thunkAPI) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}papss/v1/authenticate`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      let data = await response.json();
      if (data) {
        // localStorage.setItem(
        //   'allowedServices',
        //   JSON.stringify(data?.data?.client?.allowedServices)
        // );
        localStorage.setItem('token',data.token);
        // localStorage.setItem('user', JSON.stringify(data.data.client));
        return data.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: 'Failed! To establish connection.',
      });
      // console.log('Error', e.response.data);
      // thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

