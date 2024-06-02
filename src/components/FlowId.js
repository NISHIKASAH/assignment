import React from "react";
import Plot from "react-plotly.js";
import { data } from "./data";

const FlowId = () => {
  const flowid = data.reduce((acc, curr) => {
    const id = curr.flow_id;
    acc[id] = (acc[id] || 0) + 1;

    return acc;
  }, {});

  const trace = {
    labels: Object.keys(flowid),
    values: Object.values(flowid),
    type: "pie",
  };

  return (
    <Plot
      data={[trace]}
      layout={{
        title: "Alerts by flowId",
        template: "plotly_dark",
        paper_bgcolor: "#000", // Set background color directly
        plot_bgcolor: "#001",
      }}
      useResizeHandler
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default FlowId;
