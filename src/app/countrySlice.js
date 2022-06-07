import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "counter",
  initialState: {
    countries: [],
    covidInfo:[],
    TableInfo:[],
    dailyInfoDetails:[],
    countryName: "",
  },
  reducers: {
    countryFunc: (state, action) => {
      state.countries = action.payload;
    },
    choosenCountry: (state, action) => {
      state.countryName = action.payload;
    },
    getInfo: (state, action) => {
      state.covidInfo = action.payload;
    },
    getTableInfo: (state, action) => {
      state.TableInfo = action.payload;
    },
    getDailyInfo: (state, action) => {
      state.dailyInfoDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { countryFunc, choosenCountry,getInfo,getTableInfo ,getDailyInfo} = countrySlice.actions;

export default countrySlice.reducer;
