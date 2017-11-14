/**
 * 这个文件是通用帮手类
 * [description]
 * @param  {[type]} require             [description]
 * @param  {[type]} exports             [description]
 * @param  {String} module){		function ensureLength(str,len,padding [description]
 * @return {[type]}                     [description]
 */
define(function(require,exports,module){
	//保证字符串的最小长度
	function ensureLength(str,len,padding){
		str = '' + str;//转化为字符串
		len = len || 5;
		padding = padding || "0";
		return padding.repeat(len - str.length) + str;
	}
	module.exports.ensureLength = ensureLength;
});