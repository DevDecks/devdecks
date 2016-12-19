import * as React from 'react';
import { Menu, MenuDivider, MenuItem, Popover, Position } from "@blueprintjs/core";

interface FontSizeProps {
  pluginState: any;
  updateCurrentPlugin: Function;
}

const FontSize = ({ pluginState, updateCurrentPlugin }: FontSizeProps) => {
  const DEFAULT_SIZE = 100;
  const MAGNIFIER = 7;
  
  const fontSizes = [50, 75, 90, 100, 125, 150, 175, 200, 250, 275, 300];
  const fontSelection = (
    <select
      value={ pluginState.fontSize / MAGNIFIER || '100' }
      onChange={(e: any) => updateCurrentPlugin({ fontSize: e.target.value * MAGNIFIER })}>
        {
          fontSizes.map((fontSize, key) => (
            <option
              key={ key }
              value={ fontSize } >
              { fontSize }
            </option>
          ))
        }
    </select>
  );

  return (
    <li>
      <label className="pt-label" style={{ fontSize: '1.25em' }}>
        Font Size
        <div className="pt-select">
          { fontSelection }
        </div>
      </label>
    </li>
  );
}

export default FontSize;
