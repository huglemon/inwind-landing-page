let timeoutArr = [];
/**
 * 防抖函数
 * 防抖原理：一定时间内，只有最后一次或第一次调用,回调函数才会执行
 * @param {Function}  fn 要执行的回调函数 
 * @param {Number}    time 延时的时间
 * @param {Boolean}   isImmediate 是否立即执行 默认true
 * @param {String} timeoutName 定时器ID
 * @return null
pubfn.debounce(() => {
	
}, 1000);
 */
function debounce(fn, time = 500, isImmediate = true, timeoutName = "default") {
	// 清除定时器
	if(!timeoutArr[timeoutName]) timeoutArr[timeoutName] = null;
	if (timeoutArr[timeoutName] !== null) clearTimeout(timeoutArr[timeoutName]);
	// 立即执行一次
	if (isImmediate) {
		var callNow = !timeoutArr[timeoutName];
		timeoutArr[timeoutName] = setTimeout(() => {
			timeoutArr[timeoutName] = null;
		}, time);
		if (callNow){
			if(typeof fn === 'function') return fn();
		}
	} else {
		// 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时time毫秒后执行fn回调方法
		timeoutArr[timeoutName] = setTimeout(() => {
			if(typeof fn === 'function') return fn();
		}, time);
	}
}
export default debounce
