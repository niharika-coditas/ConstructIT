import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './constants';
import { IGetUser } from 'services/api/user/interfaces';

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser(state, action: PayloadAction<IGetUser>) {
      return {
        ...state,
        ...action.payload
      };
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
