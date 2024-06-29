
import deepClone from './deepClone'
var util = {};
/**
 * 将树形结构转成数组结构
 * @param {Array} treeData  数据源
 * @param {Object} treeProps 树结构配置 { id : "menu_id", children : "children" }
 * pubfn.treeToArray(treeData);
 */
util.treeToArray = function(treeData, treeProps) {
	let newTreeData = deepClone(treeData);
	return util.treeToArrayFn(newTreeData, treeProps);
};
util.treeToArrayFn = function(treeData, treeProps = {}, arr=[], current_parent_id) {
	let { id="_id", parent_id="parent_id", children = "children", deleteChildren = true } = treeProps;
	for(let i in treeData){
		let item = treeData[i];
		if(current_parent_id) item[parent_id] = current_parent_id;
		arr.push(item);
		if(item[children] && item[children].length>0){
			arr = util.treeToArrayFn(item[children], treeProps, arr, item[id]);
		}
		if(deleteChildren){
			delete item[children];
		}
	}
	return arr;
};
/**
 * 数组结构转树形结构
let tree = pubfn.arrayToTree(arrayData,{
	id:"code", 
	parent_id:"parent_code",
});
 */

util.arrayToTree = function(originalArrayData,treeProps) {
	let arrayData = deepClone(originalArrayData);
	let {
		id="_id",
		parent_id="parent_id",
		children = "children",
		deleteParentId = false,
		need_field
	} = treeProps;
	let result = [];
	let temp = {};
	for (let i = 0; i < arrayData.length; i++) {
	  temp[arrayData[i][id]] = arrayData[i]; // 以id作为索引存储元素，可以无需遍历直接定位元素
	}
	for (let j = 0; j < arrayData.length; j++) {
	  let currentElement = arrayData[j];
		let newCurrentElement = {};
		if(need_field){
			need_field = uniqueArr(need_field.concat([id,parent_id,children]));
			for(let keyName in currentElement){
				if(need_field.indexOf(keyName) === -1){
					delete currentElement[keyName];
				}
			}
		}
	  let tempCurrentElementParent = temp[currentElement[parent_id]]; // 临时变量里面的当前元素的父元素
	  if (tempCurrentElementParent) {
	    // 如果存在父元素
	    if (!tempCurrentElementParent[children]) {
	      // 如果父元素没有chindren键
	      tempCurrentElementParent[children] = []; // 设上父元素的children键
	    }
			if(deleteParentId){
				delete currentElement[parent_id];
			}
	    tempCurrentElementParent[children].push(currentElement); // 给父元素加上当前元素作为子元素
	  } else {
	    // 不存在父元素，意味着当前元素是一级元素
	    result.push(currentElement);
	  }
	}
	return result;
};

// 最简单数组去重法
function uniqueArr(array) {
	let n = []; //一个新的临时数组
	//遍历当前数组
	for (let i = 0; i < array.length; i++) {
		//如果当前数组的第i已经保存进了临时数组，那么跳过，
		//否则把当前项push到临时数组里面
		if (n.indexOf(array[i]) == -1) n.push(array[i]);
	}
	return n;
}

export default util;