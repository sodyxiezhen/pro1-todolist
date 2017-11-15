define(function(require,exports,module){
	/**
	 * localStorageHelper.js提供两个方法供外部使用
	 * 1.插入一条数据
	 * 2.读取所有输入
	 *
	 * APi:localStorage.setItem('name','value')  localStorage.getItem('name')
	 * 	简单字符串格式，如果想存储其他数据结构需要自己 json化，转一下
	 *
	 * ps： json字符串转 对象 JSON.parse(str)
	 * 		对象转 json字符串 JSON.stringify(obj)
	 */
	var tool = require('tool');
	//存储key
	const TODO_KEY = 'todolist';
	//公用方法：获取所有数据并转化成 [{},{}...]的结构
	function getAllDataFromLocalStorage(){
		var jsonStr = localStorage.getItem(TODO_KEY);
		var jsonArr = JSON.parse(jsonStr);
		if (!jsonArr) {
			return false;
		}
		return jsonArr;
	}
	//存储所有数据
	function setAllData(dataList){
		localStorage.setItem(TODO_KEY, JSON.stringify(dataList));
		return true;
	}
	//获取当前最大的记录编号
	function getMaxId(){
		var dataList = getAllDataFromLocalStorage();
		if (!dataList || dataList.length == 0) {
			return 0;
		}
		var lastObj = dataList[dataList.length - 1];
		return lastObj.id;
	}
	//获取当前时间 YYYY--mm-dd HH:ii:ss
	function getNowDate(){
		var date = new Date();
		var year = tool.ensureLength(date.getFullYear(), 4);
		var month = tool.ensureLength(date.getMonth() + 1, 2);
		var day = tool.ensureLength(date.getDate(), 2);
		var hour = tool.ensureLength(date.getHours(), 2);
		var munite = tool.ensureLength(date.getMinutes(), 2);
		var second = tool.ensureLength(date.getSeconds(), 2);
		return ''+year+'-'+month+'-'+day+' '+hour+':'+munite+':'+second;
	}
	//插入一条记录
	var appendOneTodoList = function(content){
		var todoObj = {};
		todoObj.id = getMaxId() + 1;
		todoObj.content = content;
		todoObj.date = getNowDate();
		var dataList = getAllDataFromLocalStorage();
		if (! dataList) {
			dataList = [];
		}
		dataList.push(todoObj);
		setAllData(dataList);
	};
	//读取所有记录 
	var getAllTodoList = getAllDataFromLocalStorage;

	//删掉一条记录
	var deleteOneList = function(id){
		var lists = getAllDataFromLocalStorage();
		for(var i = 0;i<lists.length;i++){
			if(lists[i].id == id){
				lists.splice(i,1);
				break;
			}
		}
		//记得这里放回去
		console.log(lists);
		setAllData(lists);
		return true;
	};
	//获取一条记录
	var getOneInfo = function(id){
		var lists = getAllDataFromLocalStorage();
		for(var item of lists){
			if(item.id == id){
				return item;
			}
		}
		return false;
	};
	//修改一条记录
	var saveOneInfo = function(id, content){
		var lists = getAllDataFromLocalStorage();
		var flag = false;
		for(var i = 0;i<lists.length;i++){
			if(lists[i].id == id){
				lists[i].content = content;
				lists[i].date = getNowDate();
				flag = true;
				break;
			}
		}
		if (flag) {
			//保存
			setAllData(lists);
		}
		return flag;
	};
	module.exports = {
		'getAllTodoList':getAllTodoList,
		'appendOneTodoList':appendOneTodoList,
		'deleteOneList':deleteOneList,
		'getOneInfo':getOneInfo,
		'saveOneInfo':saveOneInfo
	};
});