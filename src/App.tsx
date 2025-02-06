import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNodePropertyWithHistory } from "./store/nodesSlice";
import { performRedo, performUndo } from "./store/historySlice";
import { RootState, SelectedNode } from "./helper/types";
import { AppDispatch } from "./store";
import UndoRedoControls from "./components/UndoRedoControls";
import NodeCustomizationPanel from "./components/NodeCustomizationPanel";
import ReactFlowComp from "./components/ReactFlowComp";

export const useAppDispatch = () => useDispatch<AppDispatch>();

function Flow() {
  const { nodes, edges } = useSelector((state: RootState) => state.graph);

  //checks data is present in past and future.(history of node customization)
  const { pastLength, futureLength } = useSelector((state: RootState) => ({ 
    pastLength: state.history.past.length,
    futureLength: state.history.future.length,
  }));

  const dispatch = useAppDispatch();
  const [selectedNode, setSelectedNode] = useState<SelectedNode | null>(null);

  // submits node customization data 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!selectedNode) return;
    e.preventDefault();
    dispatch(
      updateNodePropertyWithHistory(
        selectedNode?.id,
        selectedNode?.data?.fontSize,
        selectedNode.data.color
      )
    );
    handleCloseSideComp();
  };

  // on changing node customization data(fontsize and color are changed on side component)
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedNode((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        data: {
          ...prev.data,
          [e.target.name === "font-size" ? "fontSize" : "color"]: e.target.value,
        },
      };
    });
  };

  const handleCloseSideComp = () => {
    setSelectedNode(null);
  };

  const handleUndo = () => {
    handleCloseSideComp();
    dispatch(performUndo());
  };

  const handleRedo = () => {
    handleCloseSideComp();
    dispatch(performRedo());
  };

  // to open node customizing component
  const onClickNode = (_: React.MouseEvent, node: SelectedNode) => {
    setSelectedNode(node);
  };

  // key accessibility is done for redo and undo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        e.preventDefault();
        handleUndo();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "y") {
        e.preventDefault();
        handleRedo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        // overflow: "hidden",
      }}
    >
      {/* graph component */}
      <ReactFlowComp onClickNode={onClickNode} nodes={nodes} edges={edges} />

      {/* Side component */}
      <NodeCustomizationPanel
        handleCloseSideComp={handleCloseSideComp}
        selectedNode={selectedNode}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
      />

      {/* Footer component */}
      <UndoRedoControls
        handleRedo={handleRedo}
        handleUndo={handleUndo}
        futureLength={futureLength}
        pastLength={pastLength}
      />
    </div>
  );
}

export default Flow;


