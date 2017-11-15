define(function(require){
	var req = require('request');
	require('layer');
	var lsHelper = require('localStorageHelper');
	var tbHelper = require('tableRenderHelper');

	var inputObj = $('input[name=content]');
	//展示数据
	var id = req.getParam('id');
	var item = lsHelper.getOneInfo(id);
	tbHelper.renderEditPage(item);
	//监听取消按钮
	$('#cancelBtn').on('click', function(){
		var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
		parent.layer.close(index); //再执行关闭   
	});
	//监听确定按钮
	$('#confirmBtn').on('click', function(){
		//校验
			if (inputObj.val() == '' || $.trim(inputObj.val()) == ''){
				alert('输入不能为空呢');
				return false;
			}
			//保存
			var id = $('input[name=id]').val();
			var content = $.trim(inputObj.val());
			if (!lsHelper.saveOneInfo(id,content)){
				layer.msg('修改错误');
				return false;
			} else {
				layer.msg('修改成功',{icon:1});
				setTimeout(function(){parent.location.reload();},1500);
				
			}

	});

});