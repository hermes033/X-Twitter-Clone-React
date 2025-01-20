import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1222,
    userName: 'baghirov03',
    fullName: 'Ali Baghirov',
    avatar: 'https://pbs.twimg.com/profile_images/1811768156601438208/6Fx3OgS2_400x400.jpg',
    joinedTime:'July 2024'
  },
  accounts: [
    {
      id: 3242,
      userName: 'baghirov03',
      fullName: 'Ali Baghirov',
      avatar: 'https://pbs.twimg.com/profile_images/1811768156601438208/6Fx3OgS2_400x400.jpg'
    },
    {
      id: 768763,
      userName: 'hermes0033',
      fullName: 'hermes03',
      avatar: 'https://pbs.twimg.com/profile_images/1207636309508014081/hfA24vWM_400x400.jpg'
    },
  ],
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        state.currentAccount = false;
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
