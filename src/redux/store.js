import jobSlice from './jobSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  jobState: jobSlice,
});

export default configureStore({ reducer: rootReducer });
