"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var CPButton_1 = require("./CPButton/CPButton");
var ControlPanel = (function (_super) {
    __extends(ControlPanel, _super);
    function ControlPanel() {
        return _super.apply(this, arguments) || this;
    }
    ControlPanel.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(CPButton_1.default, null)));
    };
    return ControlPanel;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ControlPanel;
