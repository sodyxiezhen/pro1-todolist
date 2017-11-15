/**
 * 改文件是对layer的封装，提供如下三个函数
 	1.打开查看页面
 	2.打开编辑页面
 */

define(function(require,exports,module){
	require('layer');
	function openUrlByLayer(url)
	{
		layer.open({
			type:2,
			title:false,
			content:url,
			area:['500px','300px'],
			closeBtn:false,
			shadeClose:true,
			anim:6,
			btnAlign: 'c'
		});
	}
	//打开展示页面
	function openShowPage(id){
		var url = './show.html?id='+id;
		openUrlByLayer(url);
	}
	module.exports.openShowPage = openShowPage;

	//打开编辑页面
	function openEditPage(id){
		var url = './edit.html?id='+id;
		openUrlByLayer(url);
	}
	module.exports.openEditPage = openEditPage;


});