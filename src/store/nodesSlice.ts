import { createSlice } from "@reduxjs/toolkit";
import { applyNodeChanges, Node, Edge } from "@xyflow/react";
import { initialNodes } from "../data/nodes.ts";
import { initialEdges } from "../data/edges.ts";
import { saveState } from "./historySlice.ts";
import { AppDispatch, RootState } from "./index.ts";

function isColorNode(node: Node): boolean {
  return node.type === "colorNode";
}

type InitialState = {
  nodes: Node[];
  edges: Edge[];
};

const nodesSlice = createSlice({
  name: "nodes",
  initialState: {
    nodes: initialNodes,
    edges: initialEdges,
  },
  reducers: {
    setNodes: (state, action) => {
      state.nodes = action.payload;
    },
    // Replace the entire graph state
    updateGraphState: (_, action) => {
      return action.payload; 
    },
    onNodesChange: (state, action) => {
      state.nodes = applyNodeChanges(action.payload, state.nodes);
    },
    updateNodeProperty: (state: InitialState, action) => {
      const { nodeId, color, fontSize } = action.payload;
      state.nodes = state.nodes.map((node) =>
        node.id === nodeId && isColorNode(node)
          ? { ...node, data: { ...node.data, color, fontSize } }
          : node
      );
    },
  },
});

export const { setNodes, updateGraphState, onNodesChange, updateNodeProperty } = nodesSlice.actions;
export default nodesSlice.reducer;

// Middleware to Save State its past and present
export const updateNodePropertyWithHistory =
  (nodeId: string, fontSize: number, color: string) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(updateNodeProperty({ nodeId, fontSize, color }));
    dispatch(saveState(getState().graph)); // Saves the graph state in present and history present to past in history.
  };

export const changeNodeLocationWithHistory =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(saveState(getState().graph)); // Saves the graph state in present and history present to past in history.
  };