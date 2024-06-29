let timeoutArr = [];
let flagArr = [];
/**
 * 节流函数
 * 节流原理：在一定时间内，只能触发一次
 * @param {Function} fn 要执行的回调函数 
 * @param {Number} time 延时的时间
 * @param {Boolean} isImmediate 是否立即执行
 * @param {String} timeoutName 定时器ID
 * @return null
pubfn.throttle(function() {
	
}, 1000);
 */
function throttle(fn, time = 500, isImmediate = true, timeoutName = "default") {
	if(!timeoutArr[timeoutName]) timeoutArr[timeoutName] = null;
	if (isImmediate) {
		if (!flagArr[timeoutName]) {
			flagArr[timeoutName] = true;
			// 如果是立即执行，则在time毫秒内开始时执行
			if(typeof fn === 'function') fn();
			timeoutArr[timeoutName] = setTimeout(() => {
				flagArr[timeoutName] = false;
			}, time);
		}
	} else {
		if (!flagArr[timeoutName]) {
			flagArr[timeoutName] = true;
			// 如果是非立即执行，则在time毫秒内的结束处执行
			timeoutArr[timeoutName] = setTimeout(() => {
				flagArr[timeoutName] = false;
				if(typeof fn === 'function') fn();
			}, time);
		}
	}
};
export default throttle