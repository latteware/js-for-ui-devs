webpackHotUpdate(2,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(33);\n\nvar _reactRedux = __webpack_require__(172);\n\nvar _redux = __webpack_require__(179);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Creamos un componente\nvar Counter = function Counter(_ref) {\n\tvar value = _ref.value;\n\n\tconsole.log('Rendering state', value);\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t_react2.default.createElement(\n\t\t\t'h1',\n\t\t\tnull,\n\t\t\tvalue\n\t\t)\n\t);\n};\n\n// Reducer\nfunction increment() {\n\tvar state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];\n\tvar action = arguments[1];\n\n\tconsole.log(state, action);\n\tif (action.type === 'INCREMENT') {\n\t\treturn state + 1;\n\t} else {\n\t\treturn state;\n\t}\n}\n\n// Creamos un store\nvar store = (0, _redux.createStore)(increment);\n\n// Conectar un componente a store\nfunction mapStateToProps(state) {\n\treturn { value: state };\n}\nCounter = (0, _reactRedux.connect)(mapStateToProps)(Counter);\n\n// Hacemos una accion recurrent\nsetInterval(function () {\n\tif (Math.random() > .5) {\n\t\tstore.dispatch({ type: 'INCREMENT' });\n\t} else {\n\t\tstore.dispatch({ type: 'DECREMENT' });\n\t}\n}, 1000);\n\n// Rendereamos\n(0, _reactDom.render)(_react2.default.createElement(\n\t_reactRedux.Provider,\n\t{ store: store },\n\t_react2.default.createElement(Counter, null)\n), document.getElementById('root'));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./frontend/hello-world.jsx\n ** module id = 0\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./frontend/hello-world.jsx?");

/***/ }
])