/**
 * 通用公共函数
 * 整理自vk
 */
var pubfn = {};
// 防抖
import debounce from './debounce.js'
// 限流
import throttle from './throttle.js'
// url参数
import queryParams from './queryParams.js'
// 时间
import timeUtil from './timeUtil.js'
// 树形结构转换
import treeUtil from './treeUtil.js'

/**
 * 树形结构转换
 */
pubfn.treeUtil = treeUtil;
/**
 * 时间工具类
 */
pubfn.timeUtil = timeUtil;
/**
 * 防抖函数
 */
pubfn.debounce = debounce;
/**
 * 节流函数
 */
pubfn.throttle = throttle;
/**
 * 对象转url参数
 * @param {*} data,对象
 * @param {*} isPrefix,是否自动加上"?"
 * 此函数参考uView
 * pubfn.queryParams(json);
 */
pubfn.queryParams = queryParams;

/**
 * 休眠，等待（单位毫秒）
 * @param {Number} ms 毫秒
 * await pubfn.sleep(1000);
 */
pubfn.sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * 日期格式化
 * @param {Date || Number} date 需要格式化的时间
 * pubfn.timeFormat(new Date(),"yyyy-MM-dd hh:mm:ss");
 */
pubfn.timeFormat = pubfn.timeUtil.timeFormat;
/**
 * 解析日期对象属性
 * @param {Date || Number} date 需要转换的时间
 * pubfn.getDateInfo(new Date());
 */
pubfn.getDateInfo = pubfn.timeUtil.getDateInfo;

/**
 * 日期对象转换（此API已弃用，建议用pubfn.timeFormat代替）
 * @param {Date || Number} date 需要转换的时间
 * @param {Number} type 转换方式
 * type = 0 返回 2020-08-03 12:12:12
 * type = 1 返回 20200803121212
 * type = 2 返回 { YYYY, MM, DD, hh, mm, ss }
 */
pubfn.getFullTime = pubfn.timeUtil.getFullTime;

/**
 * 获取时间范围
 * @param {Date} date 日期对象 可以指定时间计算节点，默认使用当前时间进行计算
 * 返回的是时间戳(防止时区问题)
 * 返回数据如下：
 {
   todayStart 今日开始时间
   todayEnd   今日结束时间
   today12End 今日上午结束时间
   monthStart 本月开始时间
   monthEnd   本月结束时间
   yearStart  本年开始时间
   yearEnd    本年结束时间
   weekStart  本周开始时间
   weekEnd    本周结束时间
   now        现在的时间点(含月年日时分秒)
   months     本年度每月的开始和结束时间 months[1] 代表1月
 }
 * pubfn.getCommonTime();
 */
pubfn.getCommonTime = pubfn.timeUtil.getCommonTime;

/**
 * 获得指定时间偏移 year年 month月 day天 hours时 minutes分 seconds秒前或后的时间戳
 * 返回时间戳形式
pubfn.getOffsetTime(new Date(), {
	year:0,
	month:0,
	day:0,
	hours:0,
	minutes:0,
	seconds:0,
	mode:"after", // after 之后 before 之前
});
 */
pubfn.getOffsetTime = pubfn.timeUtil.getOffsetTime;

/**
 * 获得相对当前时间的偏移 count 小时的起止日期(小时的开始和结束)
 * @param {Number} count  默认0 (0代表当前小时 为-1代表上一个小时 为1代表下一个小时以此类推)
 * @param {Date || Number} date 指定从哪个时间节点开始计算
 * pubfn.getHourOffsetStartAndEnd(0);
 */
pubfn.getHourOffsetStartAndEnd = pubfn.timeUtil.getHourOffsetStartAndEnd;


/**
 * 获得相对当前时间的偏移 count 天的起止日期(日的开始和结束)
 * @param {Number} count  默认0 (0代表今日 为-1代表昨日 为1代表明日以此类推)
 * @param {Date || Number} date 指定从那天开始计算
 * pubfn.getDayOffsetStartAndEnd(0);
 */
pubfn.getDayOffsetStartAndEnd = pubfn.timeUtil.getDayOffsetStartAndEnd;

/**
 * 获得相对当前周addWeekCount个周的起止日期
 * @param {Number} addWeekCount  默认0 (0代表本周 为-1代表上周 为1代表下周以此类推 为2代表下下周)
 * pubfn.getWeekOffsetStartAndEnd(0);
 */
pubfn.getWeekOffsetStartAndEnd = pubfn.timeUtil.getWeekOffsetStartAndEnd; // 新版写法
pubfn.getWeekStartAndEnd = pubfn.timeUtil.getWeekOffsetStartAndEnd; // 兼容老版本写法

/**
 * 获得相对当前时间的偏移 count 月的起止日期(月的开始和结束)
 * @param {Number} count  默认0 (0代表本月 为-1代表上月 为1代表下月以此类推)
 * @param {Date || Number} date 指定从那天开始计算
 * pubfn.getMonthOffsetStartAndEnd(0);
 */
pubfn.getMonthOffsetStartAndEnd = pubfn.timeUtil.getMonthOffsetStartAndEnd;

/**
 * 获得相对当前时间的偏移 count 个季度的起止日期（季度的开始和结束时间戳）
 * @param {Number} count  默认0（0代表本季度 -1代表上个季度 1代表下个季度以此类推）
 * @param {Date || Number} date 指定从哪个时间节点开始计算
 * pubfn.getQuarterOffsetStartAndEnd(0);
 */
pubfn.getQuarterOffsetStartAndEnd = pubfn.timeUtil.getQuarterOffsetStartAndEnd;


/**
 * 获得相对当前时间的偏移 count 年的起止日期(年的开始和结束)
 * @param {Number} count  默认0 (0代表今年 为-1代表去年 为1代表明年以此类推)
 * @param {Date || Number} date 指定从那天开始计算
 * pubfn.getYearOffsetStartAndEnd(0);
 */
pubfn.getYearOffsetStartAndEnd = pubfn.timeUtil.getYearOffsetStartAndEnd;

/**
 * 获得指定年份和月份后的该月的开始时间和结束时间
 * 返回数据如下：(时间戳形式)
 {
   startTime 该月开始时间
   endTime   该月结束时间
 }
pubfn.getMonthStartAndEnd({
	year:2021
	month:1
});
 */
pubfn.getMonthStartAndEnd = pubfn.timeUtil.getMonthStartAndEnd;

/**
 * Vue 全局表单验证器扩展
rules: {
  receiver_mobile:[
    { validator:pubfn.validator("mobile"), message: '手机号格式错误', trigger: 'blur' }
  ],
},
 */
pubfn.validator = function(type) {
	return function(rule, value, callback) {
		let key = pubfn.test(value, type);
		if (typeof callback === "function") {
			if (key || !value) {
				callback();
			} else {
				return callback(false);
			}
		} else {
			return callback(false);
		}
	}
};

/**
 * 检测文本是否满足指定格式
 * @param {String} str 需要检测的文本
 * @param {String} type 检测类型（忽略大小写）
 * @param {Boolean} allowEmpty 是否允许为空
 * 包含
 * mobile 手机号码
 * tel 座机
 * card 身份证
 * mobileCode 6位数字验证码
 * username 账号以字母开头，长度在3~32之间，只能包含字母、数字和下划线
 * pwd 密码长度在6~18之间，只能包含字母、数字和下划线
 * password 与pwd效果一致，密码长度在6~18之间，只能包含字母、数字和下划线
 * paypwd 支付密码 6位纯数字
 * postal 邮政编码
 * qq QQ号
 * email 邮箱
 * money 金额(小数点只允许2位)
 * url 网址
 * ip IP地址
 * date 日期 2020-08-03
 * time 时间 12:12:12
 * dateTime 日期+时间 2020-08-03 12:12:12
 * number 纯数字
 * english 纯英文
 * chinese 纯中文
 * english+number 英文+数字
 * english+number+_ 英文+数字+_
 * english+number+_- 英文+数字+_-
 * lower 小写
 * upper 大写
 * version 版本号 xx.xx.xx (xx必须是数字)
 * html html格式
 * image 图片
 * video 视频
 * audio 音频
 * pubfn.test(str, type, allowEmpty);
 */
pubfn.test = function(str, type = "", allowEmpty=false) {
	type = type.toLowerCase();
	let newStr;
	if (allowEmpty && (str === "" || str === null || str === undefined)) {
		return true;
	}
	switch (type) {
		case 'mobile': //手机号码
			return new RegExp(/^1[3|4|5|6|7|8|9][0-9]{9}$/).test(str);
		case 'tel': //座机
			return new RegExp(/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/).test(str);
		case 'card': //身份证
			return new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(str);
		case 'mobilecode': //6位数字验证码
			return new RegExp(/^[0-9]{6}$/).test(str);
		case 'username': //账号以字母开头，长度在3~32之间，只能包含字母、数字和下划线
			return new RegExp(/^[a-zA-Z]([-_a-zA-Z0-9]{2,31})$/).test(str)
		case 'pwd': //密码长度在6~18之间，只能包含字母、数字和下划线和@
			return new RegExp(/^([a-zA-Z0-9_@]){6,18}$/).test(str)
		case 'password': //密码长度在6~18之间，只能包含字母、数字和下划线和@
			return new RegExp(/^([a-zA-Z0-9_@]){6,18}$/).test(str)
		case 'paypwd': //支付密码 6位纯数字
			return new RegExp(/^[0-9]{6}$/).test(str)
		case 'postal': //邮政编码
			return new RegExp(/[1-9]\d{5}(?!\d)/).test(str);
		case 'qq': //QQ号
			return new RegExp(/^[1-9][0-9]{4,9}$/).test(str);
		case 'email': //邮箱
			return new RegExp(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/).test(str);
		case 'money': //金额(小数点2位)
			return new RegExp(/^\d*(?:\.\d{0,2})?$/).test(str);
		case 'url': //网址
			return new RegExp(/^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/).test(str);
		case 'ip': //IP
			return new RegExp(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/).test(
				str);
		case 'date': //日期 2014-01-01
			return new RegExp(/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/).test(str);
		case 'time': //时间 12:00:00
			return new RegExp(/^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/).test(str);
		case 'datetime': //日期+时间 2014-01-01 12:00:00
			return new RegExp(/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/).test(str);
		case 'english+number': //英文+数字（空字符串算通过）
			return new RegExp(/^[a-zA-Z0-9]+$/).test(str);
		case 'english+number+_': //英文+数字+_（空字符串算通过）
			return new RegExp(/^[a-zA-Z0-9_]+$/).test(str);
		case 'english+number+_-': //英文+数字+_-（空字符串算通过）
			return new RegExp(/^[a-zA-Z0-9_-]+$/).test(str);
		case 'version': //版本号 xx.xx.xx（xx必须是数字）
			return new RegExp(/^([1-9]\d|[1-9])(.([1-9]\d|\d)){2}$/).test(str);
		case 'number': //数字（空字符串算通过）
			return new RegExp(/^[0-9]+$/).test(str);
		case 'english': //英文（空字符串算通过）
			return new RegExp(/^[a-zA-Z]+$/).test(str);
		case 'chinese': //中文（空字符串算通过）
			return new RegExp(/^[\u4e00-\u9fa5]+$/gi).test(str);
		case 'lower': //小写（空字符串算通过）
			return new RegExp(/^[a-z]+$/).test(str);
		case 'upper': //大写（空字符串算通过）
			return new RegExp(/^[A-Z]+$/).test(str);
		case 'html': //HTML标记
			return new RegExp(/<("[^"]*"|'[^']*'|[^'">])*>/).test(str);
		case 'image': //是否图片格式
			newStr = str.split("?")[0];
			return new RegExp(/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)$/).test(newStr);
		case 'video': //是否视频格式
			newStr = str.split("?")[0];
			return new RegExp(/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8|3gp)$/).test(newStr);
		case 'audio': //是否音频格式
			newStr = str.split("?")[0];
			return new RegExp(/\.(mp3)$/).test(newStr);
		default:
			return true;
	}
};
// 保留之前的函数名
pubfn.checkStr = pubfn.test;
/**
 * 删除对象中所有值为无效值的属性（如：undefined）
 * @param {Object} obj
 * pubfn.objectDeleteInvalid(obj);
 */
pubfn.objectDeleteInvalid = function(obj = {}) {
	Object.keys(obj).forEach(item => {
		if (obj[item] === undefined) {
			delete obj[item];
		}
	});
	return obj;
};
/**
 * 对象属性拷贝（浅拷贝）
 * @description 将 obj2 的属性赋值给 obj1（如果obj1中有对应的属性，则会被obj2的属性值覆盖）
 * @param {Object} 	obj1
 * @param {Object} 	obj2
 * pubfn.objectAssign(obj1, obj2);
 * pubfn.objectAssign(obj1, obj2, true);
 * pubfn.objectAssign(obj1, obj2, false);
 */
pubfn.objectAssign = function(obj1, obj2, deleteInvalid = true) {
	if (deleteInvalid) pubfn.objectDeleteInvalid(obj2);
	return Object.assign(obj1, obj2);
};
/**
 * 复制一份对象-没有映射关系
 * @description 主要用于解除映射关系（不支持克隆函数）
 * @param {Object} 	obj
 * let newObj = pubfn.copyObject(obj);
 */
pubfn.copyObject = function(obj) {
	if (typeof obj !== "undefined") {
		return JSON.parse(JSON.stringify(obj));
	} else {
		return obj;
	}
};
/**
 * 深度克隆一个对象-没有映射关系
 * @description 主要用于解除映射关系（支持克隆函数）
 * @param {Object} 	obj
 * let newObj = pubfn.deepClone(obj);
 */
pubfn.deepClone = function(obj) {
	// 对常见的“非”值，直接返回原来值
	if ([null, undefined, NaN, false].includes(obj)) return obj;
	if (typeof obj !== "object" && typeof obj !== 'function') {
		//原始类型直接返回
		return obj;
	}
	let o = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};
	for (let i in obj) {
		if (obj.hasOwnProperty(i)) {
			o[i] = typeof obj[i] === "object" ? pubfn.deepClone(obj[i]) : obj[i];
		}
	}
	return o;
};
/**
 * 表单自动填充数据
 * @description 主要用于表单修改时,数据库没有默认字段会报错的问题
 * @param {Object} 	defaultData 默认数据
 * @param {Object} 	itemData		当前数据
 * that.form1 = pubfn.formAssign(defaultData,itemData);
 */
pubfn.formAssign = function(defaultData, itemData) {
	let newDefaultData = pubfn.copyObject(defaultData);
	return pubfn.objectAssign(newDefaultData, itemData);
};


/**
 * 两个(元素为对象)的数组合并,并去除重复的数据
 * @param	{Array} 	arr1 	第一个数组(arr1和aar2没有顺序要求)
 * @param	{Array} 	aar2 	第二个数组
 * @param	{String} 	flag 	判断标识,默认用id来判断,若flag传-1,代表不去除重复数据
 * let arr = pubfn.arr_concat(arr1, arr2, "_id");
 */
pubfn.arr_concat = function(arr1, arr2, flag) {
	if (!flag) flag = "id"; // 默认用id来判断是否是同一个对象元素
	if (!arr1) arr1 = [];
	if (!arr2) arr2 = [];
	let arr3 = arr1.concat(arr2); // 新旧数据合并
	let arr = []; // 定义一个临时数组 存放对象
	if (flag != -1) {
		let arr_id = []; // 定义一个临时数组 存放id
		for (let i in arr3) { // 循环遍历当前数组
			// 判断当前数组下标为i的元素是否已经保存到临时数组
			// 如果已保存，则跳过，否则将此元素保存到临时数组中
			if (arr_id.indexOf(arr3[i][flag]) == -1) {
				arr_id.push(arr3[i][flag]); // 添加id到数组
				arr.push(arr3[i]); // 添加对象到数组
			}
		}
	} else {
		arr = arr3;
	}
	return arr;
};
/**
 * 自动根据字符串路径获取对象中的值支持.和[] , 且任意一个值为undefined时,不会报错,会直接返回undefined
 * @param	{Object} dataObj 数据源
 * @param	{String} name 支持a.b 和 a[b]
 * @param	{String} defaultValue undefined时的默认值
 * pubfn.getData(dataObj, name);
 */
pubfn.getData = function(dataObj, name, defaultValue) {
	let newDataObj;
	if (pubfn.isNotNull(dataObj)) {
		newDataObj = JSON.parse(JSON.stringify(dataObj));
		let k = "",
			d = ".",
			l = "[",
			r = "]";
		name = name.replace(/\s+/g, k) + d;
		let tstr = k;
		for (let i = 0; i < name.length; i++) {
			let theChar = name.charAt(i);
			if (theChar != d && theChar != l && theChar != r) {
				tstr += theChar;
			} else if (newDataObj) {
				if (tstr != k) newDataObj = newDataObj[tstr];
				tstr = k;
			}
		}
	}
	if (typeof newDataObj === "undefined" && typeof defaultValue !== "undefined") newDataObj = defaultValue;
	return newDataObj;
};
/**
 * 自动根据字符串路径设置对象中的值 支持.和[]
 * @param	{Object} dataObj 数据源
 * @param	{String} name 支持a.b 和 a[b]
 * @param	{String} value 值
 * pubfn.setData(dataObj, name, value);
 */
pubfn.setData = function(dataObj, name, value) {
	// 通过正则表达式  查找路径数据
	let dataValue;
	if (typeof value === "object") {
		dataValue = pubfn.copyObject(value);
	} else {
		dataValue = value;
	}
	let regExp = new RegExp("([\\w$-]+)|\\[(:\\d)\\]", "g");
	const patten = name.match(regExp);
	// 遍历路径  逐级查找  最后一级用于直接赋值
	for (let i = 0; i < patten.length - 1; i++) {
		let keyName = patten[i];
		if (typeof dataObj[keyName] !== "object") dataObj[keyName] = {};
		dataObj = dataObj[keyName];
	}
	// 最后一级
	dataObj[patten[patten.length - 1]] = dataValue;
};

/**
 * 检测参数是否为空 其中 undefined、null、{}、[]、"" 均为空值  true 空值  false 有值
 * pubfn.isNull(value);
 */
pubfn.isNull = function(value) {
	let key = false;
	if (
		typeof value == "undefined" ||
		Object.prototype.toString.call(value) == "[object Null]" ||
		JSON.stringify(value) == "{}" ||
		JSON.stringify(value) == "[]" ||
		value === "" ||
		JSON.stringify(value) === undefined
	) {
		key = true;
	}
	return key;
};
/**
 * 检测参数是否不为空 结果与 pubfn.isNull 相反
 * pubfn.isNotNull(value);
 */
pubfn.isNotNull = function(value) {
	return !pubfn.isNull(value);
};
/**
 * 检测所有参数 - 是否至少有一个为空
 * pubfn.isNullOne(value1,value2,value3);
 */
pubfn.isNullOne = function(...strS) {
	let key = false;
	for (let i = 0; i < strS.length; i++) {
		let str = strS[i];
		if (pubfn.isNull(str)) {
			key = true;
			break;
		}
	}

	return key;
};
/**
 * 检测整个对象是否没有一个属性是空值,如果有空值,则返回首个是空值的属性名
 let nullKey = pubfn.isNullOneByObject({ value1,value2,value3 });
 if(nullKey) return { code : -1, msg : `${nullKey}不能为空` };
 */
pubfn.isNullOneByObject = function(obj) {
	let key;
	for (let name in obj) {
		let val = obj[name];
		if (pubfn.isNull(val)) {
			key = name;
			break;
		}
	}
	return key;
};
/**
 * 检测所有参数 - 是否全部为空
 * pubfn.isNullAll(value1,value2,value3);
 */
pubfn.isNullAll = function(...strS) {
	let key = true;
	for (let i = 0; i < strS.length; i++) {
		let str = strS[i];
		if (pubfn.isNotNull(str)) {
			key = false;
			break;
		}
	}
	return key;
};

/**
 * 检测所有参数 - 是否全部都不为空
 * pubfn.isNotNullAll(value1,value2,value3);
 */
pubfn.isNotNullAll = function(...strS) {
	return !pubfn.isNullOne(...strS);
};
/**
 * 获取对象数组中的某一个item,根据指定的键名和键值
 * @description 主要用于在一个对象数组中快速获取 _id = 1 的对象
 * @param	{Array} list 数据源
 * @param	{String} key 键名(不可为空)
 * @param	{String} value 键值 (不可为空)
 * pubfn.getListItem(list, key, value);
 */
pubfn.getListItem = function(list, key, value) {
	let item;
	for (let i = 0; i < list.length; i++) {
		if (list[i][key] === value) {
			item = list[i];
			break;
		}
	}
	return item;
};
/**
 * 获取对象数组中某个元素的index,根据指定的键名和键值
 * @description 主要用于在一个对象数组中快速获取 _id = 1 的index
 * @param	{Array} list 数据源
 * @param	{String} key 键名
 * @param	{String} value 键值
 * pubfn.getListIndex(list, key, value);
 */
pubfn.getListIndex = function(list, key, value) {
	let index = -1;
	for (let i = 0; i < list.length; i++) {
		if (list[i][key] === value) {
			index = i;
			break;
		}
	}
	return index;
};
/**
 * 获取对象数组中某个元素的index,根据指定的键名和键值
 * @description 主要用于在一个对象数组中快速获取 _id = 1 的index
 * @param	{Array} list 数据源
 * @param	{String} key 键名
 * @param	{String} value 键值
 * pubfn.getListItemIndex(list, key, value);
 */
pubfn.getListItemIndex = function(list, key, value) {
	let obj = {};
	let item;
	let index = -1;
	for (let i = 0; i < list.length; i++) {
		if (list[i][key] === value) {
			index = i;
			item = list[i];
			break;
		}
	}
	obj = {
		item,
		index
	}
	return obj;
};
/**
 * 数组转对象 - 将对象数组转成json
 * 如[{"_id":"001","name":"name1","sex":1},{"_id":"002","name":"name2","sex":2}]
 * 转成
 * {"001",{"_id":"001","name":"name1","sex":1},"002":{"_id":"002","name":"name2","sex":2}}
 * pubfn.arrayToJson(list, "_id");
 */
pubfn.arrayToJson = function(list, key) {
	let json = {};
	for (let i in list) {
		let item = list[i];
		json[item[key]] = item;
	}
	return json;
};
pubfn.listToJson = pubfn.arrayToJson;

/**
 * 从数组中提取指定字段形式成为新的数组
 * 如[{"_id":"001","name":"name1","sex":1},{"_id":"002","name":"name2","sex":2}]
 * 提取_id字段转成
 * ["001","002"]
 * let idArr = pubfn.arrayObjectGetArray(list, "_id");
 */
pubfn.arrayObjectGetArray = function(list, key) {
	return list.map(obj => { return obj[key] });
};

/**
 * 产生指定位数的随机数(支持任意字符,默认纯数字)
 * @param	{Number} length 随机数固定位数
 * @param	{String} range 指定的字符串中随机范围
 * @param	{Array} arr 产生的随机数不会和此数组的任意一项重复
 * pubfn.random(6);
 * pubfn.random(6, "abcdefghijklmnopqrstuvwxyz0123456789");
 * pubfn.random(1,"12",["1","2"]);
 */
pubfn.random = function(length, range, arr) {
	let s;
	if (pubfn.isNull(arr)) {
		s = pubfn.randomFn(length, range);
	} else {
		let i = 0;
		let maxForCount = 100000;
		do {
			i++;
			s = pubfn.randomFn(length, range);
		} while (arr.indexOf(s) > -1 && i < maxForCount);
		if (i === maxForCount) {
			s = undefined;
		}
	}
	return s;
};
/**
 * 产生指定位数的随机数(支持任意字符,默认纯数字)
 * @param	{Number} length 随机数固定位数
 * @param	{String} range 指定的字符串中随机范围
 * pubfn.random(6);
 * pubfn.random(6, "abcdefghijklmnopqrstuvwxyz0123456789");
 */
pubfn.randomFn = function(length, range) {
	let s = "";
	let list = "123456789";
	//0123456789QWERTYUIPASDFGHJKLZXCVBNM
	if (pubfn.isNotNull(range)) {
		if (range == "a-z,0-9") {
			range = "abcdefghijklmnopqrstuvwxyz0123456789";
		} else if (range == "A-Z,0-9") {
			range = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		} else if (range == "a-z,A-Z,0-9" || range == "A-Z,a-z,0-9") {
			range = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		}
		list = range;
	}
	for (let i = 0; i < length; i++) {
		let code = list[Math.floor(Math.random() * list.length)];
		s += code;
	}
	return s;
};

/**
 * 将字符串id转化为指定位数的纯数字字符串id(会重复)
 * pubfn.stringIdToNumberId(uid,8);
 */
pubfn.stringIdToNumberId = function(str, length) {
	let s = "";
	let list = "0123456789";
	for (let i = 0; i < length; i++) {
		if (str.length > i) {
			let index = str[i].charCodeAt() % 10;
			s += list[index];
		} else {
			s = "0" + s;
		}
	}
	return s;
};

/**
 * 将手机号,账号等隐藏中间字段
 * @param {String} str   需要转换的字符串
 * @param {Number} first 前面显示的字符数量
 * @param {Number} last  后面显示的字符数量
 * pubfn.hidden(str, first, last);
 */
pubfn.hidden = function(str = "", first = 0, last = 0) {
	let len = str.length - first - last;
	let xing = '';
	for (let i = 0; i < len; i++) {
		xing += '*';
	}
	return str.substring(0, first) + xing + str.substring(str.length - last);
};
/**
 * 判断常量数组A是否至少有一个元素在常量数组B中存在(两数组有交集)
 * @param {Array} arr1 数组A
 * @param {Array} arr2 数组B
 * pubfn.checkArrayIntersection(arr1, arr2);
 */
pubfn.checkArrayIntersection = function(arr1 = [], arr2 = []) {
	let checkKey = false;
	for (let i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) > -1) {
			checkKey = true;
		}
	}
	return checkKey;
};
/**
 * 检测数据源是否满足表达式规则
 * @param {Object} data 数据源
 * @param {String} expText 表达式文本
 * pubfn.checkDataExpText(data, expText);
 */
pubfn.checkDataExpText = function(data = {}, expText) {
	expText = expText.replace(new RegExp("\\s", "g"), "");
	//console.log("expText:",expText);
	let orArr = expText.split("||");
	//console.log("orArr",orArr);
	let checkKey = false;
	for (let index1 = 0; index1 < orArr.length; index1++) {
		let orItem = orArr[index1];
		let andArr = orItem.split("&&");
		//console.log("andArr",andArr);
		let itemKey = true;
		for (let index2 = 0; index2 < andArr.length; index2++) {
			let andItem = andArr[index2];
			//console.log("andItem",andItem);
			if (andItem.indexOf("!=") > -1) {
				let andItemArr = andItem.split("!=");
				let key = andItemArr[0];
				let value = andItemArr[1];
				let formValue = pubfn.getData(data,key);
				
				itemKey = String(formValue) !== value ? true : false;
				
			} else if (andItem.indexOf("==") > -1) {
				let andItemArr = andItem.split("==");
				let key = andItemArr[0];
				let value = andItemArr[1];
				let formValue = pubfn.getData(data,key);
				
				itemKey = String(formValue) == value ? true : false;
				
			} else if (andItem.indexOf(">=") > -1) {
				let andItemArr = andItem.split(">=");
				let key = andItemArr[0];
				let value = andItemArr[1];
				let formValue = pubfn.getData(data,key);
				if (isNaN(value)) {
					if (typeof formValue !== "undefined") itemKey = String(formValue) >= value ? true : false;
					if (typeof formValue === "undefined" || formValue === null) itemKey = false;
				} else {
					if (typeof formValue !== "undefined") itemKey = formValue >= Number(value) ? true : false;
					if (typeof formValue === "undefined" || formValue === null) itemKey = false;
				}
			} else if (andItem.indexOf(">") > -1) {
				let andItemArr = andItem.split(">");
				let key = andItemArr[0];
				let value = andItemArr[1];
				let formValue = pubfn.getData(data,key);
				if (isNaN(value)) {
					if (typeof formValue !== "undefined") itemKey = String(formValue) > value ? true : false;
					if (typeof formValue === "undefined" || formValue === null) itemKey = false;
				} else {
					if (typeof formValue !== "undefined") itemKey = formValue > Number(value) ? true : false;
					if (typeof formValue === "undefined" || formValue === null) itemKey = false;
				}
			} else if (andItem.indexOf("<=") > -1) {
				let andItemArr = andItem.split("<=");
				let key = andItemArr[0];
				let value = andItemArr[1];
				if (isNaN(value)) {
					if (typeof data[key] !== "undefined") itemKey = String(data[key]) <= value ? true : false;
					if (typeof data[key] === "undefined" || data[key] === null) itemKey = false;
				} else {
					if (typeof data[key] !== "undefined") itemKey = data[key] <= Number(value) ? true : false;
					if (typeof data[key] === "undefined" || data[key] === null) itemKey = false;
				}
			} else if (andItem.indexOf("<") > -1) {
				let andItemArr = andItem.split("<");
				let key = andItemArr[0];
				let value = andItemArr[1];
				let formValue = pubfn.getData(data,key);
				if (isNaN(value)) {
					if (typeof formValue !== "undefined") itemKey = String(formValue) < value ? true : false;
					if (typeof formValue === "undefined" || formValue === null) itemKey = false;
				} else {
					if (typeof formValue !== "undefined") itemKey = formValue < Number(value) ? true : false;
					if (typeof formValue === "undefined" || formValue === null) itemKey = false;
				}
			} else if (andItem.indexOf("{in}") > -1) {
				let andItemArr = andItem.split("{in}");
				let key = andItemArr[0];
				let value = andItemArr[1];
				let formValue = pubfn.getData(data,key);
				if (Array.isArray(formValue)) {
					let index = formValue.findIndex(item => {
						return item.toString() === value.toString();
					});
					itemKey = index > -1 ? true : false;
				} else {
					itemKey = false;
				}
				//itemKey = (Array.isArray(formValue) && formValue.indexOf(value) > -1 ) ? true : false;
			} else if (andItem.indexOf("{nin}") > -1) {
				let andItemArr = andItem.split("{nin}");
				let key = andItemArr[0];
				let value = andItemArr[1];
				let formValue = pubfn.getData(data,key);
				if (Array.isArray(formValue)) {
					let index = formValue.findIndex(item => {
						return item.toString() === value.toString();
					});
					itemKey = index < 0 ? true : false;
				} else {
					itemKey = false;
				}
				//itemKey = (Array.isArray(formValue) && formValue.indexOf(value) < 0 ) ? true : false;
			} else {
				let andItemArr = andItem.split("=");
				let key = andItemArr[0];
				let value = andItemArr[1];
				let formValue = pubfn.getData(data,key);
				
				itemKey = String(formValue) == value ? true : false;
				
				//console.log("key:",key,"value:",value,"formValue",formValue.toString(),"itemKey:",itemKey);
			}
			if (!itemKey) {
				break;
			}
		}
		if (itemKey) {
			checkKey = true;
			break;
		}
	}
	return checkKey;
};

/**
 * 判断变量是否是数组
 * pubfn.isArray(value);
 */
pubfn.isArray = function(value) {
	return Object.prototype.toString.call(value) === "[object Array]" ? true : false;
};
/**
 * 判断变量是否是对象
 * pubfn.isObject(value);
 */
pubfn.isObject = function(value) {
	return Object.prototype.toString.call(value) === "[object Object]" ? true : false;
};



/**
 * 计算运费
 *  @param {Object} freightItem 运费模板
 {
   first_weight             Number 首重（KG）
   first_weight_price       Number 首重 首重价格（100=1元）
   continuous_weight        Number 续重（KG）
   continuous_weight_price  Number 续重价格（100=1元）
   max_weight               Number 重量达到此值时（KG），会多计算首重的价格，并少一次续重的价格 倍乘（相当于拆分多个包裹）
 }
 * @param {Number} weight 运费重量
 * 返回值
 * @return {Number} 最终运费金额（100=1元）
 * pubfn.calcFreights(freightItem, weight);
 */
pubfn.calcFreights = function(freightItem, weight) {
	let freightRes = pubfn.calcFreightDetail(freightItem, weight);
	return freightRes.total_amount;
};

/**
 * 计算运费，返回细节
 * @param {Object} freightItem 运费模板
 {
   first_weight             Number 首重（KG）
   first_weight_price       Number 首重 首重价格（100=1元）
   continuous_weight        Number 续重（KG）
   continuous_weight_price  Number 续重价格（100=1元）
   max_weight               Number 重量达到此值时（KG），会多计算首重的价格，并少一次续重的价格 倍乘（相当于拆分多个包裹）
 }
 * @param {Number} weight 需要计算的商品重量
 * 返回值
 * @return {Number} weight 运费重量（KG）
 * @return {Number} first_weight_price 首重金额（100=1元）
 * @return {Number} continuous_weight_price 续重金额（100=1元）
 * @return {Number} total_amount 最终运费金额（100=1元）
 * @return {String} formula 运费计算公式字符串
 * let freightRes = pubfn.calcFreightDetail(freightItem, weight);
 */
pubfn.calcFreightDetail = function(freightItem, weight) {
	let {
		first_weight, // 首重（KG）
		first_weight_price, // 首重价格（元）
		continuous_weight, // 续重（KG）
		continuous_weight_price, // 续重价格（元）
		max_weight, // 拆包裹，每个包裹最大重量（KG）
	} = freightItem;
	if (!max_weight) max_weight = 1000000000;
	let originalWeight = weight;
	let money = 0; // 运费
	let first_weight_count = 0; // 包裹数量
	let packagesSurplusWeight = max_weight; // 包裹剩余重量
	let first_weight_key = false; // 是否已减过首重
	let continuous_weight_count = 0; // 续重次数
	let logArr = [];
	let logRun = false;
	while (weight > 0) {
		if (!first_weight_key) {
			// 首重
			first_weight_key = true;
			first_weight_count++;
			packagesSurplusWeight = max_weight; // 还原包裹剩余重量
			weight -= first_weight;
			packagesSurplusWeight -= first_weight;
		} else {
			// 续重
			continuous_weight_count++;
			weight -= continuous_weight;
			packagesSurplusWeight -= continuous_weight;
		}
		if (logRun) logArr.push({
			"总重量剩余": weight,
			"当前包裹重量剩余": packagesSurplusWeight,
			"当前第几个包裹": first_weight_count,
			"续重计算次数": continuous_weight_count
		});

		if (packagesSurplusWeight <= 0) {
			// 需要增加一个新的包裹
			first_weight_key = false; // 新包裹设置没有减过首重
		}
	}
	if (logRun) console.log(JSON.stringify(logArr));
	let total_amount = first_weight_price * first_weight_count + continuous_weight_price * continuous_weight_count;
	let res = {
		weight: originalWeight, // 商品重量（KG）
		first_weight, // 首重步长
		first_weight_price, // 首重单价
		first_weight_count, // 首重计算次数
		continuous_weight, // 续重步长
		continuous_weight_price, // 续重单价
		continuous_weight_count, // 续重计算次数
		first_weight_amount: first_weight_count * first_weight_price, // 首重总金额
		continuous_weight_amount: continuous_weight_price * continuous_weight_count, // 续重总金额
		total_amount, // 最终运费金额
		formula: `${first_weight_price} * ${first_weight_count} + ${continuous_weight_price} * ${continuous_weight_count} = ${total_amount}`, // 运费计算公式
	};
	return res;
};


/**
 * 从一个对象中取多个属性,并生成一个全新的对象,会过滤空字符串,空数组,空对象
 * @param {Object} obj 对象
 * @param {Array<String>} keys 键名数组
 * pubfn.getNewObject(obj, keys);
 */
pubfn.getNewObject = function(obj, keys) {
	let selectedObj = pubfn.copyObject(obj);
	let newObject = {};
	if (keys && keys.length > 0) {
		for (let i in keys) {
			let key = keys[i];
			if (pubfn.isNotNull(selectedObj[key])) {
				newObject[key] = selectedObj[key];
			}
		}
	} else {
		newObject = selectedObj;
	}
	return newObject;
};

/**
 * 对象删除指定的字段,返回新的对象
 * @param {Object} data  操作对象
 * @param {Array<String>} deleteKeys 需要删除的键名(数组形式)
 * pubfn.deleteObjectKeys(data, deleteKeys);
 */
pubfn.deleteObjectKeys = function(data, deleteKeys = []) {
	let newData = {};
	if (data) {
		for (let key in data) {
			if (deleteKeys.indexOf(key) == -1) {
				newData[key] = data[key];
			}
		}
	}
	return newData;
}

/**
 * 数组结构转树形结构
 * @param {Array} treeData  数据源
 * @param {Object} treeProps 树结构配置
 * { id:"_id", parent_id:"parent_id", children:"children",need_field:["_id","name"],deleteParentId:true }
 * pubfn.arrayToTree(treeData, treeProps);
 */
pubfn.arrayToTree = pubfn.treeUtil.arrayToTree;
/**
 * 树形结构转数组结构
 * @param {Array} treeData  数据源
 * @param {Object} treeProps 树结构配置
 * { id:"_id", parent_id:"parent_id", children:"children", deleteChildren:true }
 * pubfn.treeToArray(treeData, treeProps);
 */
pubfn.treeToArray = pubfn.treeUtil.treeToArray;

/**
 * 通配符匹配
 * @param {String} text  被匹配的文本
 * @param {String} expText 通配符规则
 * pubfn.wildcardTestOne(text, expText);
 */
pubfn.wildcardTestOne = function(text, expText) {
	if (!expText) return false;
	let regExpText = expText.replace(new RegExp("\\*"), "(.*)");
	let startText = expText.indexOf("*") !== 0 ? "^" : "";
	let endText = expText[expText.length - 1] !== "*" ? "$" : "";
	let regExp = new RegExp(startText + regExpText + endText);
	return regExp.test(text);
};
/**
 * 通配符匹配 expText支持数组
 * @param {String} text  被匹配的文本
 * @param {String | Array<String>} expText 通配符规则
 * pubfn.wildcardTest(text, expText);
 */
pubfn.wildcardTest = function(text, expText) {
	let matchNum = 0; // 被匹配的次数
	let regExp1 = new RegExp("\\*");
	if (typeof expText === "string") {
		// 字符串
		if (pubfn.wildcardTestOne(text, expText)) {
			matchNum++;
		}
	} else if (typeof expText === "object") {
		// 数组
		for (let i = 0; i < expText.length; i++) {
			let expTextItem = expText[i];
			if (pubfn.wildcardTestOne(text, expTextItem)) {
				matchNum++;
			}
		}
	}
	return matchNum;
}

/**
 * 正则匹配
 * @param {String} text  被匹配的文本
 * @param {String} expText 正则表达式规则
 * pubfn.regExpTestOne(text, expText);
 */
pubfn.regExpTestOne = function(text, expText) {
	if (!expText) return false;
	let regExp = new RegExp(expText);
	return regExp.test(text);
};

/**
 * 正则匹配
 * @param {String} text  被匹配的文本
 * @param {String || Array<String>} wildcardExp 正则表达式规则
 * pubfn.regExpTest(text, regExp);
 */
pubfn.regExpTest = function(text, expText) {
	let matchNum = 0; // 被匹配的次数
	if (typeof expText === "string") {
		// 字符串
		if (pubfn.regExpTestOne(text, expText)) {
			matchNum++;
		}
	} else if (typeof expText === "object") {
		// 数组
		for (let i = 0; i < expText.length; i++) {
			let expTextItem = expText[i];
			if (pubfn.regExpTestOne(text, expTextItem)) {
				matchNum++;
			}
		}
	}
	return matchNum;
}

/**
 * 产生订单号，不依赖数据库，高并发时性能高（理论上会重复，但概率非常非常低）
 * @param {String} prefix 前缀
 * @param {Number} num 位数，建议在25-30之间，默认25
 * pubfn.createOrderNo();
 */
pubfn.createOrderNo = function(prefix = "", num = 25) {
	// 获取当前时间字符串格式如20200803093000123
	let fullTime = pubfn.timeFormat(new Date(), "yyyyMMddhhmmss");
	fullTime = fullTime.substring(2);
	let randomNum = num - (prefix + fullTime).length;
	return prefix + fullTime + pubfn.random(randomNum);
};

const isSnakeCase = new RegExp('_(\\w)', 'g');
const isCamelCase = new RegExp('[A-Z]', 'g');

function parseObjectKeys(obj, type) {
	let parserReg;
	let parser;
	switch (type) {
		case 'snake2camel':
			parser = pubfn.snake2camel
			parserReg = isSnakeCase
			break
		case 'camel2snake':
			parser = pubfn.camel2snake
			parserReg = isCamelCase
			break
	}
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			if (parserReg.test(key)) {
				const keyCopy = parser(key)
				obj[keyCopy] = obj[key]
				delete obj[key]
				if (Object.prototype.toString.call((obj[keyCopy])) === '[object Object]') {
					obj[keyCopy] = parseObjectKeys(obj[keyCopy], type)
				} else if (Array.isArray(obj[keyCopy])) {
					obj[keyCopy] = obj[keyCopy].map((item) => {
						return parseObjectKeys(item, type)
					})
				}
			}
		}
	}
	return obj
}
/**
 * 字符串 - 蛇形转驼峰
 * @param {String} value
 * pubfn.snake2camel(value);
 */
pubfn.snake2camel = function(value) {
	return value.replace(isSnakeCase, (_, c) => (c ? c.toUpperCase() : ''))
}
/**
 * 字符串 - 驼峰转蛇形
 * @param {String} value
 * pubfn.camel2snake(value);
 */
pubfn.camel2snake = function(value) {
	return value.replace(isCamelCase, str => '_' + str.toLowerCase())
}

/**
 * 对象内的属性名 - 蛇形转驼峰
 * @param {Object} obj
 * pubfn.snake2camelJson(obj);
 */
pubfn.snake2camelJson = function(obj) {
	return parseObjectKeys(obj, 'snake2camel');
};
/**
 * 对象内的属性名 - 驼峰转蛇形
 * @param {Object} obj
 * pubfn.camel2snakeJson(obj);
 */
pubfn.camel2snakeJson = function(obj) {
	return parseObjectKeys(obj, 'camel2snake');
};

/**
 * 将能转成数字的字符串转数字（支持字符串、对象、数组）
 * @param {Any} obj
 * @param {Object} option 哪些格式需要排除
 * 默认排除
 * mobile:true 手机号，如 15200000001
 * idCard:true 身份证，如 330154202109301214
 * startFrom0:true 第一位是0，且长度大于1的，同时第二位不是.的字符串  如 01，057189101254
 * maxLength:14 超过此长度的字符串排除
 * pubfn.string2Number(obj, option);
 */
pubfn.string2Number = function(obj, option = {}) {
	const type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
	switch (type) {
		case 'string':
			if (obj && !isNaN(obj)) {
				let {
					mobile = true,
						idCard = true,
						startFrom0 = true,
						maxLength = 14,
				} = option;
				if (obj.length > maxLength) {
					return obj;
				} else if (mobile && pubfn.test(obj, "mobile")) {
					return obj;
				} else if (idCard && pubfn.test(obj, "card")) {
					return obj;
				} else if (startFrom0 && obj.length > 1 && obj.indexOf("0") === 0 && obj.indexOf(".") !== 1) {
					return obj;
				}
				return Number(obj);
			} else {
				return obj;
			}
			case 'object':
				const keys = Object.keys(obj);
				for (let i = 0; i < keys.length; i++) {
					const key = keys[i];
					obj[key] = pubfn.string2Number(obj[key]);
				}
				return obj;
			case 'array':
				for (let i = 0; i < obj.length; i++) {
					obj[i] = pubfn.string2Number(obj[i]);
				}
				return obj;
			default:
				return obj;
	}
};

/**
 * 保留小数
 * @param {Number} val 原值
 * @param {Number} precision 精度
 * pubfn.toDecimal(val, 2);
 */
pubfn.toDecimal = function(val, precision = 0) {
	if (typeof val === "string") val = Number(val);
	return parseFloat(val.toFixed(precision));
};

/**
 * 判断文件url的类型
 * @param {String} url 文件的url路径
 * pubfn.getFileType(url);
 * 返回值为字符串
 * image 图片
 * video 视频
 * audio 音频
 * other 其他
 */
pubfn.getFileType = function(url) {
	let fileType;
	if (pubfn.checkFileSuffix(url, ["png", "jpg", "jpeg", "gif", "bmp", "svg"])) {
		fileType = "image";
	} else if (pubfn.checkFileSuffix(url, ["avi", "mp4", "3gp", "mov", "rmvb", "rm", "flv", "mkv"])) {
		fileType = "video";
	} else if (pubfn.checkFileSuffix(url, ["mp3"])) {
		fileType = "audio";
	} else {
		fileType = "other";
	}
	return fileType;
};
/**
 * 获取文件url的后缀名
 * @param {String} url 文件的url路径，必须带
 * pubfn.getFileSuffix(url);
 */
pubfn.getFileSuffix = function(url) {
	let suffix;
	let index = url.lastIndexOf(".");
	if (index > -1) {
		suffix = url.substring(index + 1);
	}
	return suffix;
};

/**
 * 判断文件url是否在指定后缀名数组内
 * @param {String} url 文件的url路径
 * @param {Array<String>} list 后缀名列表
 * pubfn.checkFileSuffix(url,["png", "jpg", "jpeg", "gif", "bmp", "svg"]);
 */
pubfn.checkFileSuffix = function(url, list) {
	let key = false;
	let suffix = pubfn.getFileSuffix(url);
	for (let i = 0; i < list.length; i++) {
		if (list.indexOf(suffix) > -1) {
			key = true;
			break;
		}
	}
	return key;
};
// 前端专属开始 -----------------------------------------------------------
/**
 * 将时间显示成1秒前、1天前
 * @description 主要用于 文章最后回复时间: 1分钟前
 * @param {String || Number} 	startTime	需要计算的时间 如文章最后回复时间
 * pubfn.dateDiff(startTime);
 */
pubfn.dateDiff = function(startTime, suffix = "前") {
	if (!startTime) {
		return "";
	}
	if (typeof startTime === "string" && !isNaN(startTime)) startTime = Number(startTime);
	if (typeof startTime == "number") {
		if (startTime.toString().length == 10) startTime *= 1000;
		startTime = new Date(startTime);
		startTime = pubfn.timeFormat(startTime);
	}
	if (typeof startTime == "string") {
		startTime = startTime.replace("T", " ");
		startTime = startTime;
		startTime = new Date(startTime.replace(/-/g, "/")); //将-转化为/，使用new Date
	}
	let endTime = new Date(); //获取当前时间
	let nd = 1000 * 24 * 60 * 60; //一天的毫秒数
	let nh = 1000 * 60 * 60; //一小时的毫秒数
	let nm = 1000 * 60; //一分钟的毫秒数
	let ns = 1000; //一秒钟的毫秒数long diff;try {
	let diff = endTime.getTime() - startTime.getTime();
	let day = Math.floor(diff / nd); //计算差多少天
	let hour = Math.floor(diff % nd / nh); //计算差多少小时
	let min = Math.floor(diff % nd % nh / nm); //计算差多少分钟
	let sec = Math.round(diff % nd % nh % nm / ns); //计算差多少秒//输出结果
	let showStr = "1 秒";
	if (day > 0) {
		showStr = day + "天";
	} else if (hour > 0) {
		showStr = hour + "小时";
	} else if (min > 0) {
		showStr = min + "分钟";
	} else if (sec > 0) {
		showStr = sec + "秒";
	}
	showStr += suffix;
	return showStr;
}
/**
 * 将时间显示成1秒、1天
 * @description 主要用于 到期时间剩余 : 3天 这样的场景
 * @param {String || Number} endTime	需要计算的时间 如到期时间
 * pubfn.dateDiff2(endTime);
 */
pubfn.dateDiff2 = function(startTime, str = "1秒") {
	if (!startTime) {
		return "";
	}
	if (typeof startTime === "string" && !isNaN(startTime)) startTime = Number(startTime);
	if (typeof startTime == "number") {
		if (startTime.toString().length == 10) startTime *= 1000;
		startTime = new Date(startTime);
		startTime = pubfn.timeFormat(startTime);
	}
	if (typeof startTime == "string") {
		startTime = startTime.replace("T", " ");
		startTime = startTime;
		startTime = new Date(startTime.replace(/-/g, "/")); //将-转化为/，使用new Date
	}
	let endTime = new Date(); //获取当前时间
	let nd = 1000 * 24 * 60 * 60; //一天的毫秒数
	let nh = 1000 * 60 * 60; //一小时的毫秒数
	let nm = 1000 * 60; //一分钟的毫秒数
	let ns = 1000; //一秒钟的毫秒数long diff;try {
	let diff = startTime.getTime() - endTime.getTime();
	let day = Math.floor(diff / nd);
	let hour = Math.floor(diff % nd / nh);
	let min = Math.floor(diff % nd % nh / nm);
	let sec = Math.round(diff % nd % nh % nm / ns);
	let showStr = str;
	if (day > 0) {
		showStr = day + "天";
	} else if (hour > 0) {
		showStr = hour + "小时";
	} else if (min > 0) {
		showStr = min + "分钟";
	} else if (sec > 0) {
		showStr = sec + "秒";
	}
	return showStr;
};
/**
 * 将大数字转中文
 * @description 主要用于展示浏览量等不需要非常精确显示的场景
 * 如:
 * 3210 -> 3千
 * 31210 -> 3万
 * 1523412 -> 1百万
 * 15234120 ->1千万
 * @param {Number} n 需要转换的数字
 * pubfn.numStr(n);
 */
pubfn.numStr = function(n) {
	if (typeof n == "string") {
		n = parseFloat(n);
	}
	let str = n;
	if (n < 1000) {
		str = n;
	} else if (n < 10000) {
		let n1 = Math.floor(n / 100);
		str = n1 / 10 + "千"
	} else if (n < 1000000) {
		let n1 = Math.floor(n / 1000);
		str = n1 / 10 + "万"
	} else if (n < 10000000) {
		let n1 = Math.floor(n / 1000000);
		str = n1 + "百万"
	} else if (n < 100000000) {
		let n1 = Math.floor(n / 10000000);
		str = n1 + "千万"
	} else if (n >= 100000000) {
		let n1 = Math.floor(n / 10000000);
		str = n1 / 10 + "亿"
	}
	return str;
};
/**
 * 金额显示过滤器（已分为单位，将100 转成 1）
 * @param {Number} money 金额
 * pubfn.priceFilter(money);
 */
pubfn.priceFilter = function(money, defaultValue = "") {
	if (pubfn.isNull(money)) {
		return defaultValue;
	}
	if (isNaN(money)) {
		return money;
	}
	if (typeof money == "string") {
		money = parseFloat(money);
	}
	return (money / 100).toFixed(2);
};
// 金额过滤器 - 只显示小数点左边
pubfn.priceLeftFilter = function(n) {
	let s = "";
	if (n) {
		s = pubfn.priceFilter(n).split(".")[0];
	}
	return s;
};
// 金额过滤器 - 只显示小数点右边
pubfn.priceRightFilter = function(n) {
	let s = "";
	if (n) {
		s = pubfn.priceFilter(n).split(".")[1];
	}
	return s;
};
/**
 * 百分比过滤器 将 0.01 显示成 1%  1 显示成 100%
 * @param {Number} value 百分比值
 * @param {Boolean} needShowSymbol 显示 % 这个符号
 * @param {String | Number} defaultValue value为空时的默认值
 * pubfn.percentageFilter(money);
 */
pubfn.percentageFilter = function(value, needShowSymbol = true, defaultValue = "") {
	if (pubfn.isNull(value)) {
		return defaultValue;
	}
	if (isNaN(value)) {
		return value;
	}
	if (typeof value == "string") {
		value = parseFloat(value);
	}
	value = parseFloat((value * 100).toFixed(2));
	if (needShowSymbol) {
		value += "%";
	}
	return value;
};
/**
 * 折扣过滤器 将 0.1 显示成 1折 1 显示成 原价 0 显示成免费
 * @param {Number} value 折扣值
 * @param {Boolean} needShowSymbol 显示 折 这个中文字符
 * @param {String | Number} defaultValue value为空时的默认值
 * pubfn.discountFilter(value);
 */
pubfn.discountFilter = function(value, needShowSymbol = true, defaultValue = "") {
	if (pubfn.isNull(value)) {
		return defaultValue;
	}
	if (isNaN(value)) {
		return value;
	}
	if (typeof value == "string") {
		value = parseFloat(value);
	}
	value = parseFloat((value * 10).toFixed(2));
	if (value > 10) {
		return "折扣不可以大于原价";
	}
	if (value == 10) {
		return "原价";
	}
	if (value == 0) {
		return "免费";
	}
	if (value < 0) {
		return "折扣不可以小于0";
	}
	if (needShowSymbol) {
		value += " 折";
	}
	return value;
};
/**
 * 将字符串格式的时间转为时间戳
 * @param {String} 	dateString		格式为:2020-08-08 12:12:12
 */
pubfn.toTimeLong = function(dateString) {
	if (!dateString) {
		return "";
	}
	dateString = dateString.substring(0, 19);
	dateString = dateString.replace(new RegExp(/-/, "g"), '/');
	let time = new Date(dateString).getTime();
	if (isNaN(time)) {
		time = "";
	}
	return time;
};

/**
 * 单位进制换算
 * length	换算前大小
 * arr		进制的数组,如["B","KB","MB","GB"]
 * ary		进制,如KB-MB-GB,进制1024
 * precision	数值精度
 * pubfn.calcSize(length,["B","KB","MB","GB"],1024,3);
 */
pubfn.calcSize = function(length = 0, arr, ary, precision = 2, showType = "auto") {
	length = parseFloat(length);
	let size = 0;
	let type = "";
	if (length < ary || arr.length <= 1) {
		type = arr[0];
		size = parseFloat(length.toFixed(precision));
	} else {
		for (let i = 1; i < arr.length; i++) {
			let currentType = arr[i];
			length = length / ary;
			if (showType === "auto") {
				if (length < ary) {
					type = currentType;
					size = parseFloat(length.toFixed(precision));
					break;
				}
			} else {
				if (showType === currentType) {
					type = currentType;
					size = parseFloat(length.toFixed(precision));
					break;
				}
			}
		}
	}
	return {
		size: size,
		type: type,
		title: size + " " + type
	}
};

/**
 * 将一个大数组拆分成N个小数组（分割数组）
 * @param {Array} array 大数组
 * @param {Number} size 小数组每组最大多少个
 * 代码示例
 * let newArray = pubfn.splitArray(array, 2);
 */
pubfn.splitArray = function(array, size) {
	let data = [];
	for (let i = 0; i < array.length; i += size) {
		data.push(array.slice(i, i + size))
	}
	return data
};

/**
 * 将对象内的属性按照ASCII字符顺序进行排序，返回排序后的对象
 * @param {Object} obj 需要排序对象
 * 代码示例
 * let newObj = pubfn.objectKeySort(obj);
 */
pubfn.objectKeySort = function(obj) {
	let keys = Object.keys(obj).sort();
	let newObject = {};
	for (let i in keys) {
		newObject[keys[i]] = (obj[keys[i]]);
	}
	return newObject;
};

// 以下是前端专属API-----------------------------------------------------------

/**
 * 手机端长列表分页加载数据 2.0版本
 * @param {Vue页面对象} 	that						页面数据对象this
 * @param {String} 			url							请求地址(云函数路径)
 * @param {String} 			listName				后端返回的list数组的字段名称,默认rows(二选一即可)
 * @param {String} 			listKey					后端返回的list数组的字段名称,默认rows(二选一即可)
 * @param {String} 			formKey					表单请求的对象数据源字段名称,默认queryForm1
 * @param {Object} 			data						额外数据
 * @param {function} 		dataPreprocess	数据预处理函数
 *
 * 代码示例
	pubfn.getListData2({
		that : this,
		url : "template/db_api/pub/select",
		data : {
			a : 1
		},
		dataPreprocess : function(list){
			return list;
		}
	});
 */
pubfn.getListData2 = function(obj = {}) {
	let vk = uni.vk;
	let {
		that,
		listName,
		listKey = "rows",
		formKey = "queryForm1",
		url,
		dataPreprocess,
		idKeyName = "_id"
	} = obj;
	if (listName) listKey = listName;
	/**
	 * 2.0与1.0的区别
	 * 2.0使用的queryForm1作为查询,而1.0是form1
	 * 2.0云函数端是getTableData,而1.0是selects
	 */
	let queryForm1 = that[formKey] || that.queryForm1 || that.queryForm;
	// 标记为请求中
	that.loading = true;
	let hasMore = true;
	if (queryForm1.pagination.pageIndex === 1) {
		that.firstLoading = true;
	}
	callFunction({
		url: url,
		data: queryForm1,
		success: function(data) {
			let list = data[listKey] || [];
			// 数据预处理
			if (typeof dataPreprocess == "function") {
				list = dataPreprocess(list);
			}
			if (queryForm1.pagination.pageIndex > 1) {
				// 翻页
				if (list.length == 0) {
					// 无数据时
					hasMore = false;
					queryForm1.pagination.pageIndex--;
					list = that.data.list;
				} else {
					// 有数据时
					if (list.length < queryForm1.pagination.pageSize) {
						hasMore = false;
					}
					// 数据合并
					list = pubfn.arr_concat(that.data.list, list, idKeyName);
				}
			} else if (queryForm1.pagination.pageIndex == 1) {
				// 第一页
				if (list.length < queryForm1.pagination.pageSize) {
					hasMore = false;
				}
				if (list.length == 0) {
					that.state.isEmpty = true;
				} else {
					that.state.isEmpty = false;
				}
			}
			// 如果后端返回了hasMore,则使用后端的hasMore值
			if (typeof data.hasMore !== "undefined") {
				hasMore = data.hasMore;
			}
			data = {
				...data,
				total: data.total,
				list: list,
				hasMore: hasMore,
				pageIndex: data.pageIndex,
				pageSize: data.pageSize
			};
			that.state.loadmore = hasMore ? "loadmore" : "nomore"; // 更新状态
			that.data = pubfn.objectAssign(that.data, data); // 更新数据
			if (typeof obj.success == "function") obj.success(data);
		},
		fail: function(err) {
			that.state.loadmore = "loadmore";
			if (queryForm1.pagination.pageIndex > 1) {
				queryForm1.pagination.pageIndex--;
			}
			if (typeof obj.fail == "function") {
				obj.fail(data);
			} else if (err && err.msg) {
				toast(err.msg, "none");
			}
		},
		complete: function(res) {
			that.loading = false;
			if (queryForm1.pagination.pageIndex === 1) {
				that.state.firstLoading = false;
			}
			if (typeof obj.complete == "function") obj.complete(res);
		}
	});
};

/**
 * 手机端长列表分页加载数据(1.0版本)
 * @param {Vue页面对象} 	that						页面数据对象this
 * @param {String} 			url							请求地址(云函数路径)
 * @param {String} 			listName				后端返回的list数组的字段名称,默认rows
 * @param {String} 			listKey					后端返回的list数组的字段名称,默认rows
 * @param {String} 			formKey					表单请求的对象数据源字段名称,默认form1
 * @param {Object} 			data						额外数据
 * @param {function} 		dataPreprocess	数据预处理函数
 *
 * 代码示例
	pubfn.getListData({
		that : this,
		url : "template/db_api/pub/select",
		listKey : "rows",
		formKey : "form1",
		data : {
			a : 1
		},
		dataPreprocess : function(list){
			return list;
		}
	});
 */
pubfn.getListData = function(obj = {}) {
	let {
		that,
		listName,
		listKey = "rows",
		formKey = "form1",
		url,
		dataPreprocess,
		loading
	} = obj;
	let vk = uni.vk;
	if (listName) listKey = listName;
	let { data = {} } = that;
	let form1 = that[formKey] || {};
	let { pageKey = true } = data;
	if (!form1.pageIndex) form1.pageIndex = 1;
	if (!form1.pageSize) form1.pageSize = 20;
	let addTime = form1.addTime;
	let endTime = form1.endTime;
	if (endTime) endTime += " 23:59:59";
	if (!pageKey && form1.pageIndex > 1) {
		form1.pageIndex--;
		return false;
	}

	if (addTime) form1.addTimeLong = pubfn.toTimeLong(addTime);
	if (endTime) form1.endTimeLong = pubfn.toTimeLong(endTime);
	if (obj.data && JSON.stringify(obj.data) != "{}") {
		pubfn.objectAssign(form1, obj.data);
	}
	let title = obj.title;
	if (typeof obj.title == "undefined" && !loading) {
		title = form1.pageIndex == 1 ? "请求中..." : "";
	}
	callFunction({
		url: url,
		data: form1,
		title: title,
		loading: loading,
		success: function(data) {
			let list = data[listKey] || [];
			// 数据预处理
			if (typeof dataPreprocess == "function") {
				list = dataPreprocess(list);
			}
			if (form1.pageIndex > 1) {
				// 翻页
				if (list.length == 0) {
					// 无数据时
					pageKey = false;
					form1.pageIndex--;
					list = that.data.list;
				} else {
					// 有数据时
					if (list.length < form1.pageSize) {
						pageKey = false;
					}
					let oldList = that.data.list;
					// 数据合并
					list = pubfn.arr_concat(oldList, list, "_id");
				}
			} else if (form1.pageIndex == 1) {
				if (list.length < form1.pageSize) {
					pageKey = false;
				}
			}
			//console.log(pageKey,list.length,form1.pageSize);
			data = {
				...data,
				total: data.total,
				list: list,
				pageKey: pageKey,
				loadmore: pageKey ? "loadmore" : "nomore" // 更新状态
			};
			that.data = pubfn.objectAssign(that.data, data); // 更新数据
			if (typeof obj.success == "function") obj.success(data);
		},
		fail: function(err) {
			if (form1.pageIndex > 1) { form1.pageIndex--; }
			if (typeof obj.fail == "function") {
				obj.fail(data);
			} else if (err && err.msg) {
				toast(err.msg, "none");
			}
		},
		complete: function(res) {
			if (typeof obj.complete == "function") obj.complete(res);
		},
	});
};

/**
 * 动态组件数据获取
 * @description 主要用于动态组件的数据获取
 * @param {Vue页面对象} that 页面数据对象this
 * @param {String}     ids  动态数据组件的ID
 *
 * 代码示例
 * 如:放置一个动态数据的 公告组件 和 一个轮播图组件
 * view  核心:自定义组件接收一个 Object 类型的属性 datas
  <vk-u-notice-bar :datas='componentsDynamic["notice-bar-01"]'></vk-u-notice-bar>
  <vk-u-swiper :datas='componentsDynamic["index-swiper-01"]' :custom-datas='{
    "height":600,
  }'></vk-u-swiper>
  在页面数据变量中新增 componentsDynamic
  data() {
    return {
      // 动态组件数据集合
      componentsDynamic:{}
    }
  }
  在页面初始化方法中执行下面的函数
  this.pubfn.getComponentsDynamicData({
    that : this,
    ids : ["notice-bar-01","index-swiper-01"]
  });
 */
pubfn.getComponentsDynamicData = function(obj = {}) {
	let {
		that,
		keyName = "componentsDynamic",
		title,
		url = "plugs/components_dynamic/client/pub/getComponentsDynamicData",
		ids
	} = obj;
	let vk = uni.vk;
	let form1 = {
		ids: ids
	};
	if (obj.data && JSON.stringify(obj.data) != "{}") {
		pubfn.objectAssign(form1, obj.data);
	}
	// 读取缓存开始-----------------------------------------------------------
	let cacheKey = "pub-componentsDynamic";
	let cacheData = uni.getStorageSync(cacheKey) || {};
	let cacheDataKey = JSON.stringify(ids);
	if (cacheData[cacheDataKey]) {
		// 渲染本地数据
		that[keyName] = cacheData[cacheDataKey];
	}
	// 读取缓存结束-----------------------------------------------------------
	callFunction({
		url: url,
		data: form1,
		title: title,
		success: function(data) {
			if (JSON.stringify(cacheData[cacheDataKey]) !== JSON.stringify(data.componentsDynamic)) {
				// 渲染服务器数据
				that[keyName] = data.componentsDynamic;
				// 同时将组件数据进行缓存
				cacheData[cacheDataKey] = data.componentsDynamic;
				uni.setStorageSync(cacheKey, cacheData);
			}
			if (typeof obj.success == "function") obj.success(data);
		},
		fail: function(err) {
			console.error(err);
			if (typeof obj.fail == "function") obj.fail(data);
		},
		complete: function() {
			if (typeof obj.complete == "function") obj.complete(data);
		},
	});
};

/**
 * 将../../ 形式的页面相对路径 转成 页面绝对路径
 * @param {String} url 需要转换的url
 * pubfn.getPageFullPath(url);
 */
pubfn.getPageFullPath = function(url) {
	let fullPath = url;
	if (fullPath.indexOf("/") !== 0) {
		if (fullPath.indexOf("./") === 0) {
			//fullPath = "." + fullPath;
			fullPath = fullPath.substring(2);
		}
		let urlSplit = fullPath.split("../");
		// 向上目录级数,0:根目录 1:向上1级
		let level = urlSplit.length;
		// 尾部路径
		let urlEnd = urlSplit[level - 1];
		// 获取当前页面的页面全路径
		let pages = getCurrentPages();
		let currentPage = pages[pages.length - 1];
		let currentPagePath = currentPage.route;
		// 分割成目录,最后一段是页面名称
		let urlArr = currentPagePath.split("/");
		let urlSplicing = "";
		// 开始拼接
		for (let i = 0; i < urlArr.length - level; i++) {
			urlSplicing += urlArr[i] + "/";
		}
		// 完整页面路径
		fullPath = urlSplicing + urlEnd;
		if (fullPath.indexOf("/") != 0) {
			fullPath = "/" + fullPath;
		}
	}
	return fullPath;
};
/**
 * 获取平台信息
 * let platform = pubfn.getPlatform();
 */
pubfn.getPlatform = function() {
	let platform;
	// #ifdef APP-PLUS || APP-NVUE || APP-PLUS-NVUE
	platform = "app-plus";
	// #endif
	// #ifdef H5
	platform = "h5";
	// #endif
	// #ifdef MP-WEIXIN
	platform = "mp-weixin";
	// #endif
	// #ifdef MP-ALIPAY
	platform = "mp-alipay";
	// #endif
	// #ifdef MP-BAIDU
	platform = "mp-baidu";
	// #endif
	// #ifdef MP-TOUTIAO
	platform = "mp-toutiao";
	// #endif
	// #ifdef MP-QQ
	platform = "mp-qq";
	// #endif
	// #ifdef MP-360
	platform = "mp-360";
	// #endif
	// #ifdef MP-KUAISHOU
	platform = "mp-toutiao";
	// #endif
	return platform;
};
/**
 * 获取当前页面实例
 * 返回数据
 * fullPath 当前打开页面的完整路径（带页面参数）
 * pagePath 当前打开页面的路径（不含参数）
 * options  当前打开页面的参数
 * route    当前打开页面路由地址
 * $vm      当前打开页面的vue实例
 * pubfn.getCurrentPage();
 */
pubfn.getCurrentPage = function() {
	let res = {};
	let pages = getCurrentPages();
	let page = pages[pages.length - 1];
	if (page.route.indexOf("/") == 0) page.route = page.route.substring(1);
	let pagePath = `/${page.route}`;
	let fullPath = `/${page.route}`;
	let options = page.options;
	if (page.$page) {
		if (typeof page.$page.fullPath !== "undefined") {
			fullPath = page.$page.fullPath;
		} else if (typeof options === "object") {
			let optionsStr = pubfn.queryParams(options);
			fullPath = pagePath + optionsStr;
		}
	}
	res.fullPath = fullPath;
	res.pagePath = pagePath;
	res.options = options;
	res.route = page.route;
	res.$vm = page.$vm;
	return res;
};
/**
 * 获取当前页面路由
 * pubfn.getCurrentPageRoute();
 */
pubfn.getCurrentPageRoute = function(removeSlash) {
	let pages = getCurrentPages();
	let page = pages[pages.length - 1];
	if (removeSlash) {
		return page.route;
	} else {
		return "/" + page.route;
	}
};
/**
 * 文件转base64

方式一

pubfn.fileToBase64({
	file:res.tempFiles[0],
	success:function(base64){

	}
});

方式二

pubfn.fileToBase64({ file }).then(base64 => {

});
 */
pubfn.fileToBase64 = function(obj = {}) {
	let { file } = obj;
	let filePath = typeof file === "object" ? file.path : file;
	return new Promise(function(resolve, reject) {
		// #ifdef H5
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(res) {
			let base64 = this.result;
			if (base64.indexOf(";base64,") == -1) {
				base64 = "data:image/jpeg;base64," + base64;
			}
			if (obj.success) obj.success(base64);
			if (obj.complete) obj.complete(base64);
			resolve(base64);
		};
		reader.onerror = function(err) {
			if (obj.fail) obj.fail(err);
			if (obj.complete) obj.complete(err);
			reject(err);
		};
		// #endif
		// #ifdef MP
		uni.getFileSystemManager().readFile({
			filePath: filePath,
			encoding: "base64",
			success: function(res) {
				let base64 = res.data;
				if (base64.indexOf(";base64,") == -1) {
					base64 = "data:image/jpeg;base64," + base64;
				}
				if (obj.success) obj.success(base64);
				if (obj.complete) obj.complete(base64);
				resolve(base64);
			},
			fail: function(err) {
				if (obj.fail) obj.fail(err);
				reject(err);
			},
			complete: obj.complete
		});
		// let base64 = uni.getFileSystemManager().readFileSync(file.path, 'base64');
		// if(obj.success) obj.success(base64);
		// if(obj.complete) obj.complete(base64);
		// resolve(base64);
		// #endif
		// #ifdef APP-PLUS
		plus.io.resolveLocalFileSystemURL(pubfn.getLocalFilePath(filePath), function(entry) {
			entry.file(function(file) {
				let fileReader = new plus.io.FileReader();
				fileReader.onload = function(data) {
					if (obj.success) obj.success(data.target.result);
					if (obj.complete) obj.complete(data.target.result);
					resolve(data.target.result);
				}
				fileReader.onerror = function(err) {
					if (obj.fail) obj.fail(err);
					reject(err);
				}
				fileReader.readAsDataURL(file)
			}, function(err) {
				if (obj.fail) obj.fail(err);
				reject(err);
			})
		}, function(err) {
			if (obj.fail) obj.fail(err);
			reject(err);
		})
		// #endif
	});
};

/**
 * base64转文件
方式一

pubfn.base64ToFile({
	base64:base64,
	success:function(file){

	}
});

方式二

pubfn.base64ToFile({ base64 }).then(file => {

});
 */
pubfn.base64ToFile = function(obj = {}) {
	let {
		base64 = "",
			filePath
	} = obj;
	let extName = base64.split(',')[0].match(/data\:\S+\/(\S+);/);
	if (extName) {
		extName = extName[1];
	} else {
		reject(new Error('base64 error'));
	}
	if (!filePath) {
		filePath = pubfn.random(32, "abcdefghijklmnopqrstuvwxyz0123456789") + '.' + extName;
	}
	let index = base64.indexOf("base64,");
	let base64Data = base64;
	if (index > -1) {
		base64Data = base64.substring(base64.indexOf("base64,") + 7);
	}
	let savePath;
	return new Promise(function(resolve, reject) {
		// #ifdef MP
		savePath = wx.env.USER_DATA_PATH + '/' + filePath;
		let fs = uni.getFileSystemManager();
		fs.writeFile({
			filePath: savePath,
			data: base64Data,
			encoding: "base64",
			success: function(res) {
				let file = {
					path: savePath,
					lastModifiedDate: new Date(),
					name: filePath
				};
				if (obj.success) obj.success(file);
				resolve(file);
			},
			fail: function(res) {
				if (obj.fail) obj.fail(res);
				reject(res);
			},
			complete: obj.complete
		});
		// #endif
		// #ifdef H5
		savePath = filePath;
		let blob = pubfn.base64toBlob(base64);
		let file = pubfn.blobToFile(blob, savePath);
		if (obj.success) obj.success(file);
		if (obj.complete) obj.complete(file);
		resolve(file);
		// #endif
		// #ifdef APP-PLUS
		let fileName = filePath;
		let basePath = '_user_resources';
		let dirPath = 'vk_temp';
		savePath = basePath + '/' + dirPath + '/' + fileName;
		let bitmap = new plus.nativeObj.Bitmap(fileName);
		bitmap.loadBase64Data(base64, function() {
			bitmap.save(savePath, {}, function() {
				bitmap.clear();
				let file = {
					path: savePath,
					lastModifiedDate: new Date(),
					name: filePath
				};
				if (obj.success) obj.success(file);
				if (obj.complete) obj.complete(file);
				resolve(file);
			}, function(error) {
				bitmap.clear();
				if (obj.fail) obj.fail(error);
				reject(error);
			})
		}, function(error) {
			bitmap.clear();
			if (obj.fail) obj.fail(error);
			reject(error);
		})
		// #endif
	});
};
/**
 * 将base64转换为blob （H5独有）
 pubfn.base64toBlob(base64);
 */
pubfn.base64toBlob = function(base64) {
	let arr = base64.split(',');
	let mime = arr[0].match(/:(.*?);/)[1];
	let bstr = atob(arr[1]);
	let n = bstr.length;
	let u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], { type: mime });
};
/**
 * //将blob转换为file
 pubfn.blobToFile(base64);
 */
pubfn.blobToFile = function(blob, fileName) {
	blob.lastModifiedDate = new Date();
	blob.name = fileName;
	blob.path = URL.createObjectURL(blob);
	return blob;
};

/**
 * 小程序订阅消息 前端无需再写 #ifdef MP-WEIXIN
 pubfn.requestSubscribeMessage({
	 tmplIds: ['NcspDBQpH6CGHos3mMADrrQpEv2gHmtfOPa5KTLs92E']
 });
 */
pubfn.requestSubscribeMessage = function(obj) {
	// #ifdef MP-WEIXIN
	return uni.requestSubscribeMessage(obj);
	// #endif
};

/**
 * 检测是否需要登录 此方法目前为测试版
 * pubfn.checkLogin();
 */
pubfn.checkLogin = function(obj = {}) {
	let vk = uni.vk;
	let loginUrl = getConfig("login.url");
	try {
		let url;
		try {
			url = obj.url || pubfn.getCurrentPageRoute();
		} catch (err) {
			url = getConfig("index.url") || "/pages/index/index";
		}
		navigate.checkNeedLogin({
			url: url,
			success: function(res) {
				if (res.needLogin) {
					// 记录下原本要跳转的页面
					url = pubfn.getPageFullPath(obj.fullPath || url);
					navigate.setOriginalPage({ url });
					if (obj.isOnLaunch) navigate.isOnLaunchToLogin = true; // 标记为首次启动的页面需要登录
					uni.reLaunch({
						url: loginUrl,
						success: () => {
							// #ifdef MP-WEIXIN
							setTimeout(() => {
								uni.hideHomeButton();
							}, 400);
							// #endif
						}
					});
				} else {
					// #ifdef H5
					// 解决微信公众号登录无法跳回原页面的问题
					if (!obj.options || !obj.options.code || !obj.options.state) {
						navigate.setOriginalPage(null);
					}
					// #endif
					// #ifndef H5
					navigate.setOriginalPage(null);
					// #endif
				}
			}
		});
	} catch (err) {
		console.error("catch", err);
		uni.reLaunch({
			url: loginUrl
		});
		// #ifdef MP-WEIXIN
		uni.hideHomeButton();
		// #endif
	}
};
/**
 * 获取文件本地路径
 * @param {Object} path
 */
pubfn.getLocalFilePath = function(path) {
	if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf('_downloads') === 0) {
		return path
	}
	if (path.indexOf('file://') === 0) {
		return path
	}
	if (path.indexOf('/storage/emulated/0/') === 0) {
		return path
	}
	if (path.indexOf('/') === 0 && typeof plus !== "undefined") {
		let localFilePath = plus.io.convertAbsoluteFileSystem(path)
		if (localFilePath !== path) {
			return localFilePath
		} else {
			path = path.substr(1)
		}
	}
	return '_www/' + path
};

/**
 * 获取当前支持的应用语言
 * let localeList = pubfn.getLocaleList();
 */
pubfn.getLocaleList = function() {
	let localeList = [
		{ value: "zh-Hans", label: "简体中文" },
		{ value: "zh-Hant", label: "繁體中文" },
		{ value: "en", label: "English" }
	];
	return localeList;
};
/**
 * 获取当前应用语言
 * let locale = pubfn.getLocale();
 */
pubfn.getLocale = function() {
	let localeValue;
	if (typeof uni.getLocale === "function") {
		localeValue = uni.getLocale();
	} else {
		localeValue = "zh-Hans"; // 默认中文简体
	}
	let localeObj = {
		"zh_CN": "zh-Hans", // 中国大陆（简体）
		"zh_HK": "zh-Hant", // 香港（繁体）
		"zh_MO": "zh-Hant", // 澳门（繁体）
		"zh_SG": "zh-Hans", // 新加坡（简体）
		"zh_TW": "zh-Hant", // 台湾（繁体）
	};
	if (localeObj[localeValue]) localeValue = localeObj[localeValue];
	return localeValue;
};
/**
 * 获取当前应用语言
 * let localeObj = pubfn.getLocaleObject();
 */
pubfn.getLocaleObject = function() {
	let value = pubfn.getLocale();
	let list = pubfn.getLocaleList();
	return pubfn.getListItem(list, "value", value);
};
/**
 * 设置当前应用语言
 */
pubfn.setLocale = function(...e) {
	return uni.setLocale(...e);
};

/**
 * 将obj2的数据赋值给obj1，并使vue双向绑定（vue2对象新增属性不会双向绑定）
 * @description 将 obj2 的属性赋值给 obj1 (如果obj1中有对应的属性,则会被obj2的属性值覆盖)
 * @param {Object} 	obj1
 * @param {Object} 	obj2
 * @param {Object} 	that 页面实例
 * pubfn.objectAssignForVue(obj1, obj2, that);
 */
pubfn.objectAssignForVue = function(obj1, obj2, that) {
	pubfn.objectDeleteInvalid(obj2);
	for (let key in obj2) {
		that.$set(obj1, key, obj2[key]);
	}
};

// 前端专属结束 -----------------------------------------------------------
export default pubfn;
