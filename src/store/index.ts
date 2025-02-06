import { configureStore } from '@reduxjs/toolkit';
import nodesReducer from './nodesSlice.ts';
import historyReducer from './historySlice.ts';

const store = configureStore({
    reducer: {
      graph: nodesReducer,
      history:historyReducer,
    },
  });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

  
export default store;