import React from 'react';
import { ReactFlow,Background,Controls,Edge,Node } from '@xyflow/react';
import { SelectedNode } from '../helper/types';
import { changeNodeLocationWithHistory,onNodesChange } from '../store/nodesSlice';
import { useAppDispatch } from '../App';
import NodeComp from './Node.tsx';

type ReactFlowComp={
    nodes:Node[];
    edges:Edge[];
    onClickNode:(_:React.MouseEvent,node:SelectedNode)=>void;
}

const nodeTypes = { colorNode: NodeComp };

const ReactFlowComp:React.FC<ReactFlowComp> = ({nodes,edges,onClickNode}) => {
  const dispatch=useAppDispatch();
    
  return (
    <ReactFlow
      nodes={nodes as SelectedNode[] }
      edges={edges}
      onNodesChange={(nodes)=>{ dispatch(onNodesChange(nodes))}}
      onNodeDragStop={()=>{dispatch(changeNodeLocationWithHistory())}}
      onNodeClick={onClickNode}
      nodeTypes={nodeTypes}
      fitView
      
    >
      <Background/>
      <Controls/>
    </ReactFlow>
  )
}

export default ReactFlowComp