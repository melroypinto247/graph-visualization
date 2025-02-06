import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialNodes } from "../data/nodes";
import { initialEdges } from "../data/edges";
import { updateGraphState } from "./nodesSlice";
import { AppDispatch } from ".";

interface HistoryState {
  past: any[];
  present: any | null;
  future: any[];
}

const initialState: HistoryState = {
  past: [],
  present: {
    nodes: initialNodes,
    edges: initialEdges,
  },
  future: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    undo: (state) => {
      if (state.past.length > 0) {
        const previous = state.past.pop();
        if (state.present) {
          state.future.unshift(state.present);
        }
        state.present = previous || null;
      }
    },
    redo: (state) => {
      if (state.future.length > 0) {
        const next = state.future.shift();
        if (state.present) {
          state.past.push(state.present);
        }
        state.present = next || null;
      }
    },
    saveState: (state, action: PayloadAction<any>) => {
      if (state.present) {
        state.past.push(state.present);
      }
      state.present = action.payload;
      state.future = [];
    },
  },
});

// middleware for undo and redo func
export const performUndo = () => (dispatch: AppDispatch, getState: () => any) => {
  dispatch(undo());
  const newPresent = getState().history.present;
  if (newPresent) dispatch(updateGraphState(newPresent));
};

export const performRedo = () => (dispatch: AppDispatch, getState: () => any) => {
  dispatch(redo());
  const newPresent = getState().history.present;
  if (newPresent) dispatch(updateGraphState(newPresent));
};

export const { undo, redo, saveState } = historySlice.actions;
export default historySlice.reducer;
