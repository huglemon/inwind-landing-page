/**
 * 事件管理模块，用于在不确定事件执行顺序的情况下，确保在事件触发后执行相应的回调函数。
 * 该模块与uni.$emit和uni.$on不同的地方是
 * 主要特点：
 * 1. 无论 notifyEventReady 函数先执行，还是 awaitEventReady 函数先执行，最终都能触发 awaitEventReady 内的回调函数。
 * 2. awaitEventReady 函数始终会等待 notifyEventReady 函数先执行后再执行。
 * 3. 每个 awaitEventReady 内的回调函数只会执行一次。
 * 主要函数：
 * 1. notifyEventReady(eventName, data) 通知特定事件已准备就绪，并将数据传递给awaitEventReady注册的回调函数。一定会在 awaitEventReady 函数被调用之前触发。
 * 2. awaitEventReady(eventName, callback) 等待特定事件执行后再执行相应的回调函数，如果事件已准备就绪，它会立即执行回调函数；否则，它将等待事件notifyEventReady后再执行。
 * 3. checkEventReady(eventName) 检查事件是否已准备就绪，如果事件已准备就绪，它会返回true；否则，它将返回false
 * 4. getEventReadyData(eventName) 获取事件准备就绪时的参数，如果事件未准备就绪，则返回null
 * 示例用法：
 * 如实现 onLaunch 执行后再执行页面的 onLoad（因为无法判断onLaunch和onLoad的执行顺序）
 * 1. 在 App.vue 中：
 *    notifyEventReady("onLaunch", data);
 *
 * 2. 在页面的 onLoad 中有以下3种方式：
 *    - 回调形式
 *      awaitEventReady("onLaunch", (data) => {
 *        console.log('onLaunch-awaitEventReady: ', data);
 *      });
 * 
 *    - Promise 方式
 *      awaitEventReady("onLaunch").then((data)=>{
 *        console.log('onLaunch-awaitEventReady: ', data);
 *      });
 * 
 *    - async/await 方式
 *      let data = await awaitEventReady("onLaunch"); 
 *      console.log('onLaunch-awaitEventReady: ', data);
 */
const eventManager = (function() {
	// 创建一个对象，用于存储不同 eventName 对应的状态和回调函数
	const eventStatus = {};

	return {
		/**
		 * 执行并通知 awaitEventReady 的回调函数执行
		 * @param {string} eventName - 事件名称
		 * @param {any} data - 传递给回调函数的数据
		 */
		notifyEventReady(eventName, data) {
			// 如果指定的 eventName 不存在，则初始化相应的状态对象
			if (!eventStatus[eventName]) {
				eventStatus[eventName] = {
					executed: false,
					data: null,
					callbacks: [],
				};
			}
			// 设置该事件的状态为已执行，并保存数据
			eventStatus[eventName].executed = true;
			eventStatus[eventName].data = data;

			// 执行所有该事件等待的回调函数
			eventStatus[eventName].callbacks.forEach((callback) => {
				callback(data);
			});
			// 清空该事件已执行过的回调函数
			eventStatus[eventName].callbacks = [];
		},
		/**
		 * 注册回调函数，并在 notifyEventReady 后执行回调函数
		 * @param {string} eventName - 事件名称
		 * @param {Function} callback - 回调函数，接收传递的数据参数
		 */
		awaitEventReady(eventName, callback) {
			return new Promise((resolve, reject) => {
				// 如果指定的 eventName 存在且已执行过
				if (eventStatus[eventName] && eventStatus[eventName].executed) {
					// 执行回调函数
					if (typeof callback === "function") {
						callback(eventStatus[eventName].data);
					}
					resolve(eventStatus[eventName].data);
				} else {
					// 如果指定的 eventName 不存在，则初始化相应的状态对象
					if (!eventStatus[eventName]) {
						eventStatus[eventName] = {
							executed: false,
							data: null,
							callbacks: [],
						};
					}
					// 将回调函数加入相应 eventName 的待执行函数队列数组
					if (typeof callback === "function") {
						eventStatus[eventName].callbacks.push(callback);
					}
					// 将resolve函数加入相应 eventName 的待执行函数队列数组
					eventStatus[eventName].callbacks.push(resolve);
				}
			});
		},
		/**
		 * 检查事件是否已准备就绪
		 * @param {string} eventName - 事件名称
		 */
		checkEventReady(eventName) {
			return eventStatus[eventName] && eventStatus[eventName].executed ? true : false;
		},
		/**
		 * 获取事件准备就绪时的参数，如果事件未准备就绪，则返回null
		 * @param {string} eventName - 事件名称
		 */
		getEventReadyData(eventName) {
			if (eventStatus[eventName] && eventStatus[eventName].executed) {
				return eventStatus[eventName].data;
			} else {
				return null;
			}
		}
	};
})();

export default eventManager;