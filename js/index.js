define(function(require){
	//引入cmd模块化的jquery(只是兼容，不用cmd也能和以前一样使用)
	// var $ = require('jquery'); 
	// 这里引入layer很奇怪，不能 var layer = require('layer');
	require('layer');
	var layerHelper = require('layerHelper');
	var lsHelper = require('localStorageHelper');
	var tbHelper = require('tableRenderHelper');
	var inputObj = $('#inputText');

	function refreshPage(){
		var dataList = lsHelper.getAllTodoList();
		tbHelper.renderTable(dataList);
		//3.监听查看事件
		$('a.a-show').on('click', function(e){
			e.preventDefault();
			// layer.msg($(this).attr('data-id'));
			layerHelper.openShowPage($(this).attr('data-id'));
		});
		//4.监听编辑事件
		$('a.a-edit').on('click', function(e){
			e.preventDefault();
			// layer.msg($(this).attr('data-id'));
			layerHelper.openEditPage($(this).attr('data-id'));
		});
		//5.监听删除事件
		$('a.a-delete').on('click', function(e){
			e.preventDefault();
			// layer.msg($(this).attr('data-id'));
			var id = $(this).attr('data-id');
			layer.confirm('确定吗',function(){
				lsHelper.deleteOneList(id);
				layer.closeAll();
				refreshPage();	
			});
		});
	}
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
			refreshPage();			
			//输入框清空
			inputObj.val('');
		}
	});
	
	//2.从localStorage中读取数据，如果有数据那么渲染
	refreshPage();

});