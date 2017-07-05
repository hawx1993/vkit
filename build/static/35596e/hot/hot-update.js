webpackHotUpdate(0,{

/***/ 25:
/***/ (function(module, exports) {

module.exports = function anonymous(locals, escape, include, rethrow) {
    escape = escape || function(n) {
        return n == undefined ? "" : String(n).replace(_MATCH_HTML, encode_char);
    };
    var _ENCODE_HTML_RULES = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&#34;",
        "'": "&#39;"
    }, _MATCH_HTML = /[&<>'"]/g;
    function encode_char(n) {
        return _ENCODE_HTML_RULES[n] || n;
    }
    var __output = [], __append = __output.push.bind(__output);
    with (locals || {}) {
        __append('<div class="parent">\n    <img src="https://si.geilicdn.com/hz_img_062a0000015aa7ab46b30a026860_22_26_unadjust.png" alt="" class="icon" >\n    <p class="text">hello world</p>\n    <button class="btn">加载中 <span class="loading dots"></span></button>\n</div>\n<div class="m-button">\n    <img src="https://si.geilicdn.com/hz_img_10040000015c387f0e9c0a026860_30_30_unadjust.png" alt="">\n    <p class="txt">关注</p>\n</div>\n<input type="text" class="mod-input">\n\n<div class="m-btn">\n    <img src="https://si.geilicdn.com/hz_img_10040000015c387f0e9c0a026860_30_30_unadjust.png" alt="">\n    <p class="focus">关注</p>\n</div>');
    }
    return __output.join("");
}

/***/ })

})