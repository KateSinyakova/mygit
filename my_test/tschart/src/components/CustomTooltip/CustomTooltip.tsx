import React from "react";
import './customtooltip.css';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

interface ICustomTooltipProps {
  text: string;
  icon: React.ReactNode;
};

export function CustomTooltip({ text, icon }: ICustomTooltipProps) {
  return (
    <div className="tooltipWrapper">
      <button className="tooltip" data-tooltip-id="my-tooltip" data-tooltip-content={text}>
        {icon}
      </button>
      <Tooltip id="my-tooltip" style={{ transition: 'opacity 0.9s ease' }} />
    </div>
  );
};
