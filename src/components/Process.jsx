import React, { useEffect } from "react";
import { Progress } from "reactstrap";

const Process = ({ percent }) => {
  useEffect(() => {
    console.log("Process");
  });
  return (
    <div>
      <Progress value={percent}>{percent.toFixed(0)}%</Progress>
    </div>
  );
};

export default React.memo(Process);
