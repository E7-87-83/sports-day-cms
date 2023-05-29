"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const antd_1 = require("antd");
const IndivApplicationForm = () => {
    return (React.createElement(antd_1.Card, { title: "Application Form" },
        React.createElement(antd_1.Form, null,
            React.createElement(antd_1.Divider, null),
            React.createElement(antd_1.Card, { title: "Personal Information" },
                React.createElement(antd_1.Form.Item, { label: "First Name" },
                    React.createElement(antd_1.Input, null)),
                React.createElement(antd_1.Form.Item, { label: "Last Name" },
                    React.createElement(antd_1.Input, null)),
                React.createElement(antd_1.Form.Item, { label: "Team / Department / House" },
                    React.createElement(antd_1.Input, null)),
                React.createElement(antd_1.Form.Item, { label: "Date of Birth" },
                    React.createElement(antd_1.DatePicker, null))),
            React.createElement(antd_1.Card, { title: "Events" },
                React.createElement(antd_1.Checkbox.Group, null,
                    React.createElement(antd_1.Checkbox, null, "100m"),
                    React.createElement(antd_1.Checkbox, null, "200m"),
                    React.createElement(antd_1.Checkbox, null, "400m"),
                    React.createElement(antd_1.Checkbox, null, "800m"),
                    React.createElement(antd_1.Checkbox, null, "1500m"),
                    React.createElement(antd_1.Checkbox, null, "5000m"),
                    React.createElement(antd_1.Checkbox, null, "110m Hurdles(M) / 100m Hurdles(F)"),
                    React.createElement(antd_1.Checkbox, null, "400m Hurdles(M)")),
                React.createElement(antd_1.Divider, null),
                React.createElement(antd_1.Checkbox.Group, null,
                    React.createElement(antd_1.Checkbox, null, "Shot Put"),
                    React.createElement(antd_1.Checkbox, null, "Discus"),
                    React.createElement(antd_1.Checkbox, null, "Javelin"),
                    React.createElement(antd_1.Checkbox, null, "Long Jump"),
                    React.createElement(antd_1.Checkbox, null, "High Jump"),
                    React.createElement(antd_1.Checkbox, null, "Triple Jump"))))));
};
exports.default = IndivApplicationForm;
