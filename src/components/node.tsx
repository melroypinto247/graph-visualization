import { Handle, type NodeProps, Position } from "@xyflow/react";
import { type ColorNode } from "../helper/types.ts";

function NodeComp({ data }: NodeProps<ColorNode>) {
  return (
    <div style={{ backgroundColor: data.color, borderRadius: 10 }}>
      <Handle type="target" position={Position.Top} />
      <div style={{ padding: 20, fontSize: `${data.fontSize}px` }}>
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default NodeComp;