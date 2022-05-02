import React from "react";
import { Progress } from "reactstrap";

const Process = ({ percent }) => {
  return (
    <div>
      <Progress value={percent}>{percent.toFixed(0)}%</Progress>
    </div>
  );
};

export default Process;
