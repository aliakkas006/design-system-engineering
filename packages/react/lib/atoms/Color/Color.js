import React from 'react';
import '@ds.e/scss/lib/Utilities.css';

const Color = ({ hexCode, width, height }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    return (React.createElement("div", { className: className, style: { backgroundColor: hexCode } },
        React.createElement("h6", null, " Color Component")));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
