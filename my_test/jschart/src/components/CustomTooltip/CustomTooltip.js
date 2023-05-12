import React from "react";
import './customtooltip.css';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

export function CustomTooltip({text, icon}) {
  return (
    <div className="tooltipWrapper">
      <button className="tooltip" data-tooltip-id="my-tooltip" data-tooltip-content={text}>
        {icon}
      </button>
      <Tooltip id="my-tooltip" />
    </div>
  );
};
