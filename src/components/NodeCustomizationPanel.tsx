import React from "react";
import { SelectedNode } from "../helper/types";

type NodeCustomizationPanelProps = {
    selectedNode: SelectedNode | null;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCloseSideComp: () => void;
};

const NodeCustomizationPanel: React.FC<NodeCustomizationPanelProps> = ({
    selectedNode,
    handleSubmit,
    handleOnChange,
    handleCloseSideComp,
}) => {
    
  if (!selectedNode) return null;   

  return (
    <div className="side-component">
      <button
        className="closeBtn"
        aria-label="close"
        style={{ cursor: "pointer" }}
        onClick={handleCloseSideComp}
      >
        ×
      </button>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="font-size">Font size:</label>
          <input
            type="range"
            id="font-size"
            max="24"
            min="12"
            name="font-size"
            value={selectedNode.data?.fontSize || 12}
            onChange={handleOnChange}
          />
          <span>{selectedNode.data.fontSize}px</span>
        </div>

        <div className="form-control">
          <label htmlFor="color-picker">Choose Color:</label>
          <input
            type="color"
            id="color-picker"
            name="color"
            value={selectedNode.data.color}
            onChange={handleOnChange}
          />
        </div>

        <button className="submitBtn" type="submit">
          Apply
        </button>
      </form>
    </div>
  );
};

export default NodeCustomizationPanel;
