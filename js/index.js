define(function(require){
	//引入cmd模块化的jquery(只是兼容，不用cmd也能和以前一样使用)
	var $ = require('jquery'); 
	var lsHelper = require('localStorageHelper');
	var tbHelper = require('tableRenderHelper');
	var inputObj = $('#inputText');
	//1.监听 window的 keydown事件 enter键 keyCode==13
	$('#inputText').on('keydown',function(e){
		if (e.keyCode == 13){
			//校验
			if (inputObj.val() == '' || $.trim(inputObj.val()) == ''){
				alert('输入不能为空呢');
				return false;
			}
			//保存
			var content = $.trim(inputObj.val());
			lsHelper.appendOneTodoList(content);
			//重新渲染表格
			// console.log(lsHelper.getAllTodoList());
			var dataList = lsHelper.getAllTodoList();
			tbHelper.renderTable(dataList);
			//输入框清空
			inputObj.val('');
		}
	});
	
	//2.从localStorage中读取数据，如果有数据那么渲染
	var dataList = lsHelper.getAllTodoList();
	tbHelper.renderTable(dataList);
});