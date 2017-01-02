webpackJsonp([1,3],{

/***/ 1169:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },

/***/ 1177:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(491);


/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(811);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1169)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js?sourcemap!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?sourcemap!./styles.scss", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js?sourcemap!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?sourcemap!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(812)();
// imports


// module
exports.push([module.i, ".ct-label {\n  fill: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 0.75rem;\n  line-height: 1; }\n\n.ct-chart-line .ct-label,\n.ct-chart-bar .ct-label {\n  display: block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.ct-chart-pie .ct-label,\n.ct-chart-donut .ct-label {\n  dominant-baseline: central; }\n\n.ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-label.ct-vertical.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n\n.ct-label.ct-vertical.ct-end {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: end; }\n\n.ct-grid {\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 1px;\n  stroke-dasharray: 2px; }\n\n.ct-grid-background {\n  fill: none; }\n\n.ct-point {\n  stroke-width: 10px;\n  stroke-linecap: round; }\n\n.ct-line {\n  fill: none;\n  stroke-width: 4px; }\n\n.ct-area {\n  stroke: none;\n  fill-opacity: 0.1; }\n\n.ct-bar {\n  fill: none;\n  stroke-width: 10px; }\n\n.ct-slice-donut {\n  fill: none;\n  stroke-width: 60px; }\n\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: #d70206; }\n\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #d70206; }\n\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: #f05b4f; }\n\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #f05b4f; }\n\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: #f4c63d; }\n\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #f4c63d; }\n\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: #d17905; }\n\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #d17905; }\n\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: #453d3f; }\n\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #453d3f; }\n\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: #59922b; }\n\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-area {\n  fill: #59922b; }\n\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: #0544d3; }\n\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-area {\n  fill: #0544d3; }\n\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: #6b0392; }\n\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-area {\n  fill: #6b0392; }\n\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: #f05b4f; }\n\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-area {\n  fill: #f05b4f; }\n\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: #dda458; }\n\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-area {\n  fill: #dda458; }\n\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: #eacf7d; }\n\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-area {\n  fill: #eacf7d; }\n\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: #86797d; }\n\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-area {\n  fill: #86797d; }\n\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: #b2c326; }\n\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-area {\n  fill: #b2c326; }\n\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: #6188e2; }\n\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-area {\n  fill: #6188e2; }\n\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: #a748ca; }\n\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-area {\n  fill: #a748ca; }\n\n.ct-square {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-square:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 100%; }\n  .ct-square:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-square > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 93.75%; }\n  .ct-minor-second:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-minor-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 88.88889%; }\n  .ct-major-second:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 83.33333%; }\n  .ct-minor-third:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-minor-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 80%; }\n  .ct-major-third:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-perfect-fourth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-perfect-fourth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 75%; }\n  .ct-perfect-fourth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-perfect-fourth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-perfect-fifth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-perfect-fifth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 66.66667%; }\n  .ct-perfect-fifth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-perfect-fifth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 62.5%; }\n  .ct-minor-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-minor-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-golden-section {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-golden-section:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 61.8047%; }\n  .ct-golden-section:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-golden-section > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 60%; }\n  .ct-major-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-minor-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-minor-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 56.25%; }\n  .ct-minor-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-minor-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 53.33333%; }\n  .ct-major-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 50%; }\n  .ct-octave:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-tenth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-tenth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 40%; }\n  .ct-major-tenth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-tenth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-eleventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-eleventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 37.5%; }\n  .ct-major-eleventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-eleventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-major-twelfth {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-major-twelfth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 33.33333%; }\n  .ct-major-twelfth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-major-twelfth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.ct-double-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n  .ct-double-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 25%; }\n  .ct-double-octave:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .ct-double-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n@media only screen and (min-width: 993px) {\n  header, footer, main {\n    padding-left: 300px; } }\n\n.chat-bottom {\n  position: fixed;\n  right: 10px;\n  bottom: 0;\n  width: 300px;\n  box-sizing: border-box;\n  margin: 0; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.no-margin {\n  margin: 0 !important; }\n\n.text-small {\n  font-size: 0.6em; }\n\n.text-large {\n  font-size: 1.4em; }\n\na {\n  cursor: pointer; }\n\n.material-tooltip > * {\n  background: #607d8b;\n  color: white; }\n\n.flex, .flex-wrap, .flex-wrap-end, .flex-down, .flex-down-left, .flex-down-center, .flex-down-spacebetween, .flex-center, .flex-vCenter, .flex-stretch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.flex-wrap, .flex-wrap-end {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.flex-down, .flex-down-left, .flex-down-center, .flex-down-spacebetween {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.flex-down-left {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end; }\n\n.flex-down-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flex-down-spacebetween {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.flex-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flex-vCenter {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flex-stretch {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.flex-wrap-end {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n", ""]);

// exports


/***/ },

/***/ 812:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }

},[1177]);
//# sourceMappingURL=styles.bundle.map