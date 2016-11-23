"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var CPButton = (function (_super) {
    __extends(CPButton, _super);
    function CPButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            slides: []
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    CPButton.prototype.generateSlides = function () {
        return;
    };
    CPButton.prototype.handleClick = function () {
        console.log('in the function');
        console.log(this.state);
    };
    ;
    CPButton.prototype.render = function () {
        return React.createElement("button", { type: 'submit', id: 'CPButton', onClick: this.handleClick }, "+");
    };
    return CPButton;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CPButton;
