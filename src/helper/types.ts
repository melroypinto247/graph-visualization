import {
  type Edge,
  type Node,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  type BuiltInNode,
} from "@xyflow/react";

export type ColorNode = Node<
  {
    color: string;
    label: string;
    fontSize: number;
  },
  "colorNode"
>;

export type AppNode = ColorNode | BuiltInNode;

export type AppState = {
  nodes: AppNode[];
  edges: Edge[];
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: AppNode[]) => void;
  setEdges: (edges: Edge[]) => void;
  updateNodeColor: (nodeId: string, color: string) => void;
};

export type SelectedNode = {
  id: string;
  data: {
    fontSize: number;
    color: string;
    label: string;
  };
  type: string;
  measured: {
    width: number;
    height: number;
  };
  position: {
    x: number;
    y: number;
  };
};

export interface GraphState {
  nodes: Node[];
  edges: Edge[];
}

export interface RootState {
  graph:GraphState;
  history: {
    past: GraphState[];
    future: GraphState[];
  };
}
