/**
 * filters
 * 全局过滤器
 */
import pubfn from './index.js'
var util = {};
// 将时间显示成1秒前、1天前
util.dateDiff = function(starttime, showType) {
	return pubfn.dateDiff(starttime, showType);
}
util.dateDiff2 = function(starttime, showType) {
	return pubfn.dateDiff2(starttime, showType);
};
// 计数器1
util.numStr = function(n) {
	return pubfn.numStr(n);
};

util.timeStr = function(date) {
	return pubfn.timeFormat(date);
};
/**
 * 日期对象转字符串
 * @description 最终转成 2020-08-01 12:12:12
 * @param {Date || Number} 	date		需要转换的时间
 * date参数支持
 * 支持:时间戳
 * 支持:2020-08
 * 支持:2020-08-24
 * 支持:2020-08-24 12
 * 支持:2020-08-24 12:12
 * 支持:2020-08-24 12:12:12
 */
util.timeFilter = function(date, fmt) {
	return pubfn.timeFormat(date, fmt);
};
// 金额过滤器
util.priceFilter = function(n, defaultValue = " - ") {
	return pubfn.priceFilter(n, defaultValue);
};
// 金额过滤器 - 只显示小数点左边
util.priceLeftFilter = function(n) {
	return pubfn.priceLeftFilter(n);
};
// 金额过滤器 - 只显示小数点右边
util.priceRightFilter = function(n) {
	return pubfn.priceRightFilter(n);
};
// 百分比过滤器
util.percentageFilter = function(n, needShowSymbol, defaultValue = " - ") {
	return pubfn.percentageFilter(n, needShowSymbol, defaultValue);
};
// 折扣过滤器
util.discountFilter = function(n, needShowSymbol, defaultValue = " - ") {
	return pubfn.discountFilter(n, needShowSymbol, defaultValue);
};
// 大小过滤器 sizeFilter(1024,3,["B","KB","MB","GB"])
util.sizeFilter = function(...obj) {
	let res = pubfn.calcSize(...obj);
	return res.title;
};

export default util;
