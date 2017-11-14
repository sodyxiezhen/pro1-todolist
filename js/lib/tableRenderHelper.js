define(function(require,exports,module){
	/**
	 * tableRenderTable.js提供一个方法供外部使用
	 * 1.渲染所有数据
	 *
	 */
	var $ = require('jquery'); 
	var lsHelper = require('localStorageHelper');
	var tableObj = $('.show-area table tbody');
	var renderTable = function(dataList){
		if (dataList){
			var html = '';
			for(var obj of dataList){
				html += '<tr>';
					html += '<td>'+obj.id+'</td>';
					html += '<td>'+obj.content+'</td>';
					html += '<td>'+obj.date+'</td>';
				html += '</tr>';
			}
			tableObj.html(html);
		}
	};
	exports.renderTable = renderTable;
});