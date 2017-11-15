define(function(require){
	var req = require('request');
	var lsHelper = require('localStorageHelper');
	var tbHelper = require('tableRenderHelper');

	//展示数据
	var id = req.getParam('id');
	var item = lsHelper.getOneInfo(id);
	tbHelper.renderShowPage(item);
	//监听确定按钮
	$('#confirmBtn').on('click', function(){
		var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
		parent.layer.close(index); //再执行关闭   
	});
});