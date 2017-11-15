define(function(require,exports,module){
	/**
	 * tableRenderTable.js提供一个方法供外部使用
	 * 1.渲染所有数据
	 *
	 */
	// var $ = require('jquery'); 
	var lsHelper = require('localStorageHelper');
	var tableObj = $('.show-area table tbody');
	var renderTable = function(dataList){
		var html = '';
		if (dataList && dataList.length != 0){
			for(var obj of dataList){
				html += '<tr>';
					html += '<td>'+obj.id+'</td>';
					html += '<td>'+obj.content+'</td>';
					html += '<td>'+obj.date+'</td>';
					html += '<td><a class="a-show" data-id="'+obj.id+'">查看</a> ';
					html += '<a class="a-edit" data-id="'+obj.id+'">编辑</a> ';
					html += '<a class="a-delete" data-id="'+obj.id+'">删除</a></td>';
				html += '</tr>';
			}
		} else {
			html += '<tr><td colspan="4">暂无数据呢...</td></tr>';
		}
		tableObj.html(html);
	};
	exports.renderTable = renderTable;

	var renderShowPage = function(item){
		var html = '';
		if (item) {
			html += '<tr><th>id</th><td>'+item.id+'</td></tr>';
			html += '<tr><th>内容</th><td>'+item.content+'</td></tr>';
			html += '<tr><th>日期</th><td>'+item.date+'</td></tr>';
		} else {
			html += '<tr><th colspan="2">404 not found...</th></tr>';
		}
		tableObj.html(html);
	};
	exports.renderShowPage = renderShowPage;

	var renderEditPage = function(item){
		var html = '';
		if (item) {
			$('input[name=id]').val(item.id);
			$('input[name=content]').val(item.content);
			$('input[name=date]').val(item.date);
		} else {
			html += '<tr><th colspan="2">404 not found...</th></tr>';
			tableObj.html(html);
		}
	};
	exports.renderEditPage = renderEditPage;
});