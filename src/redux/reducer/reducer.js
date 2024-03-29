import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: {},
  search: "",
  jobs: []
};

export const jobEase = createSlice({
  name: 'jobEase',
  initialState,
  reducers: {
    handleSearch: (state, action) => {
      state.search= action.payload
    },
    updateJobs: (state, action) => {
      state.jobs = action.payload
    },
    // resetJobs: (state, action) => 
  }
});

export const { 
  handleSearch,
  updateJobs,
} = jobEase.actions;

export default jobEase.reducer;