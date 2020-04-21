/**
 * @license
 * Video.js 5.9.2 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */

(function(f) {
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f()
	} else if (typeof define === "function" && define.amd) {
		define([], f)
	} else {
		var g;
		if (typeof window !== "undefined") {
			g = window
		} else if (typeof global !== "undefined") {
			g = global
		} else if (typeof self !== "undefined") {
			g = self
		} else {
			g = this
		}
		g.videojs = f()
	}
})(function() {
		var define, module, exports;
		return (function e(t, n, r) {
				function s(o, u) {
					if (!n[o]) {
						if (!t[o]) {
							var a = typeof require == "function" && require;
							if (!u && a) return a(o, !0);
							if (i) return i(o, !0);
							var f = new Error("Cannot find module '" + o + "'");
							throw f.code = "MODULE_NOT_FOUND", f
						}
						var l = n[o] = {
							exports: {}
						};
						t[o][0].call(l.exports, function(e) {
							var n = t[o][1][e];
							return s(n ? n : e)
						}, l, l.exports, e, t, n, r)
					}
					return n[o].exports
				}
				var i = typeof require == "function" && require;
				for (var o = 0; o < r.length; o++) s(r[o]);
				return s
			})({
					1: [function(_dereq_, module, exports) {
						(function(global) {
							var topLevel = typeof global !== 'undefined' ? global :
								typeof window !== 'undefined' ? window : {}
							var minDoc = _dereq_('min-document');

							if (typeof document !== 'undefined') {
								module.exports = document;
							} else {
								var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

								if (!doccy) {
									doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
								}

								module.exports = doccy;
							}

						}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
						//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9nbG9iYWwvZG9jdW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdG9wTGV2ZWwgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fVxudmFyIG1pbkRvYyA9IHJlcXVpcmUoJ21pbi1kb2N1bWVudCcpO1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQ7XG59IGVsc2Uge1xuICAgIHZhciBkb2NjeSA9IHRvcExldmVsWydfX0dMT0JBTF9ET0NVTUVOVF9DQUNIRUA0J107XG5cbiAgICBpZiAoIWRvY2N5KSB7XG4gICAgICAgIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXSA9IG1pbkRvYztcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvY2N5O1xufVxuIl19
					}, {
						"min-document": 3
					}],
					2: [function(_dereq_, module, exports) {
						(function(global) {
							if (typeof window !== "undefined") {
								module.exports = window;
							} else if (typeof global !== "undefined") {
								module.exports = global;
							} else if (typeof self !== "undefined") {
								module.exports = self;
							} else {
								module.exports = {};
							}

						}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
						//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBzZWxmO1xufSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHt9O1xufVxuIl19
					}, {}],
					3: [function(_dereq_, module, exports) {

					}, {}],
					4: [function(_dereq_, module, exports) {
						var getNative = _dereq_('../internal/getNative');

						/* Native method references for those with the same name as other `lodash` methods. */
						var nativeNow = getNative(Date, 'now');

						/**
						 * Gets the number of milliseconds that have elapsed since the Unix epoch
						 * (1 January 1970 00:00:00 UTC).
						 *
						 * @static
						 * @memberOf _
						 * @category Date
						 * @example
						 *
						 * _.defer(function(stamp) {
						 *   console.log(_.now() - stamp);
						 * }, _.now());
						 * // => logs the number of milliseconds it took for the deferred function to be invoked
						 */
						var now = nativeNow || function() {
							return new Date().getTime();
						};

						module.exports = now;

					}, {
						"../internal/getNative": 20
					}],
					5: [function(_dereq_, module, exports) {
						var isObject = _dereq_('../lang/isObject'),
							now = _dereq_('../date/now');

						/** Used as the `TypeError` message for "Functions" methods. */
						var FUNC_ERROR_TEXT = 'Expected a function';

						/* Native method references for those with the same name as other `lodash` methods. */
						var nativeMax = Math.max;

						/**
						 * Creates a debounced function that delays invoking `func` until after `wait`
						 * milliseconds have elapsed since the last time the debounced function was
						 * invoked. The debounced function comes with a `cancel` method to cancel
						 * delayed invocations. Provide an options object to indicate that `func`
						 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
						 * Subsequent calls to the debounced function return the result of the last
						 * `func` invocation.
						 *
						 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
						 * on the trailing edge of the timeout only if the the debounced function is
						 * invoked more than once during the `wait` timeout.
						 *
						 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
						 * for details over the differences between `_.debounce` and `_.throttle`.
						 *
						 * @static
						 * @memberOf _
						 * @category Function
						 * @param {Function} func The function to debounce.
						 * @param {number} [wait=0] The number of milliseconds to delay.
						 * @param {Object} [options] The options object.
						 * @param {boolean} [options.leading=false] Specify invoking on the leading
						 *  edge of the timeout.
						 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
						 *  delayed before it's invoked.
						 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
						 *  edge of the timeout.
						 * @returns {Function} Returns the new debounced function.
						 * @example
						 *
						 * // avoid costly calculations while the window size is in flux
						 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
						 *
						 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
						 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
						 *   'leading': true,
						 *   'trailing': false
						 * }));
						 *
						 * // ensure `batchLog` is invoked once after 1 second of debounced calls
						 * var source = new EventSource('/stream');
						 * jQuery(source).on('message', _.debounce(batchLog, 250, {
						 *   'maxWait': 1000
						 * }));
						 *
						 * // cancel a debounced call
						 * var todoChanges = _.debounce(batchLog, 1000);
						 * Object.observe(models.todo, todoChanges);
						 *
						 * Object.observe(models, function(changes) {
						 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
						 *     todoChanges.cancel();
						 *   }
						 * }, ['delete']);
						 *
						 * // ...at some point `models.todo` is changed
						 * models.todo.completed = true;
						 *
						 * // ...before 1 second has passed `models.todo` is deleted
						 * // which cancels the debounced `todoChanges` call
						 * delete models.todo;
						 */
						function debounce(func, wait, options) {
							var args,
								maxTimeoutId,
								result,
								stamp,
								thisArg,
								timeoutId,
								trailingCall,
								lastCalled = 0,
								maxWait = false,
								trailing = true;

							if (typeof func != 'function') {
								throw new TypeError(FUNC_ERROR_TEXT);
							}
							wait = wait < 0 ? 0 : (+wait || 0);
							if (options === true) {
								var leading = true;
								trailing = false;
							} else if (isObject(options)) {
								leading = !!options.leading;
								maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
								trailing = 'trailing' in options ? !!options.trailing : trailing;
							}

							function cancel() {
								if (timeoutId) {
									clearTimeout(timeoutId);
								}
								if (maxTimeoutId) {
									clearTimeout(maxTimeoutId);
								}
								lastCalled = 0;
								maxTimeoutId = timeoutId = trailingCall = undefined;
							}

							function complete(isCalled, id) {
								if (id) {
									clearTimeout(id);
								}
								maxTimeoutId = timeoutId = trailingCall = undefined;
								if (isCalled) {
									lastCalled = now();
									result = func.apply(thisArg, args);
									if (!timeoutId && !maxTimeoutId) {
										args = thisArg = undefined;
									}
								}
							}

							function delayed() {
								var remaining = wait - (now() - stamp);
								if (remaining <= 0 || remaining > wait) {
									complete(trailingCall, maxTimeoutId);
								} else {
									timeoutId = setTimeout(delayed, remaining);
								}
							}

							function maxDelayed() {
								complete(trailing, timeoutId);
							}

							function debounced() {
								args = arguments;
								stamp = now();
								thisArg = this;
								trailingCall = trailing && (timeoutId || !leading);

								if (maxWait === false) {
									var leadingCall = leading && !timeoutId;
								} else {
									if (!maxTimeoutId && !leading) {
										lastCalled = stamp;
									}
									var remaining = maxWait - (stamp - lastCalled),
										isCalled = remaining <= 0 || remaining > maxWait;

									if (isCalled) {
										if (maxTimeoutId) {
											maxTimeoutId = clearTimeout(maxTimeoutId);
										}
										lastCalled = stamp;
										result = func.apply(thisArg, args);
									} else if (!maxTimeoutId) {
										maxTimeoutId = setTimeout(maxDelayed, remaining);
									}
								}
								if (isCalled && timeoutId) {
									timeoutId = clearTimeout(timeoutId);
								} else if (!timeoutId && wait !== maxWait) {
									timeoutId = setTimeout(delayed, wait);
								}
								if (leadingCall) {
									isCalled = true;
									result = func.apply(thisArg, args);
								}
								if (isCalled && !timeoutId && !maxTimeoutId) {
									args = thisArg = undefined;
								}
								return result;
							}
							debounced.cancel = cancel;
							return debounced;
						}

						module.exports = debounce;

					}, {
						"../date/now": 4,
						"../lang/isObject": 33
					}],
					6: [function(_dereq_, module, exports) {
						/** Used as the `TypeError` message for "Functions" methods. */
						var FUNC_ERROR_TEXT = 'Expected a function';

						/* Native method references for those with the same name as other `lodash` methods. */
						var nativeMax = Math.max;

						/**
						 * Creates a function that invokes `func` with the `this` binding of the
						 * created function and arguments from `start` and beyond provided as an array.
						 *
						 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
						 *
						 * @static
						 * @memberOf _
						 * @category Function
						 * @param {Function} func The function to apply a rest parameter to.
						 * @param {number} [start=func.length-1] The start position of the rest parameter.
						 * @returns {Function} Returns the new function.
						 * @example
						 *
						 * var say = _.restParam(function(what, names) {
						 *   return what + ' ' + _.initial(names).join(', ') +
						 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
						 * });
						 *
						 * say('hello', 'fred', 'barney', 'pebbles');
						 * // => 'hello fred, barney, & pebbles'
						 */
						function restParam(func, start) {
							if (typeof func != 'function') {
								throw new TypeError(FUNC_ERROR_TEXT);
							}
							start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
							return function() {
								var args = arguments,
									index = -1,
									length = nativeMax(args.length - start, 0),
									rest = Array(length);

								while (++index < length) {
									rest[index] = args[start + index];
								}
								switch (start) {
									case 0:
										return func.call(this, rest);
									case 1:
										return func.call(this, args[0], rest);
									case 2:
										return func.call(this, args[0], args[1], rest);
								}
								var otherArgs = Array(start + 1);
								index = -1;
								while (++index < start) {
									otherArgs[index] = args[index];
								}
								otherArgs[start] = rest;
								return func.apply(this, otherArgs);
							};
						}

						module.exports = restParam;

					}, {}],
					7: [function(_dereq_, module, exports) {
						var debounce = _dereq_('./debounce'),
							isObject = _dereq_('../lang/isObject');

						/** Used as the `TypeError` message for "Functions" methods. */
						var FUNC_ERROR_TEXT = 'Expected a function';

						/**
						 * Creates a throttled function that only invokes `func` at most once per
						 * every `wait` milliseconds. The throttled function comes with a `cancel`
						 * method to cancel delayed invocations. Provide an options object to indicate
						 * that `func` should be invoked on the leading and/or trailing edge of the
						 * `wait` timeout. Subsequent calls to the throttled function return the
						 * result of the last `func` call.
						 *
						 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
						 * on the trailing edge of the timeout only if the the throttled function is
						 * invoked more than once during the `wait` timeout.
						 *
						 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
						 * for details over the differences between `_.throttle` and `_.debounce`.
						 *
						 * @static
						 * @memberOf _
						 * @category Function
						 * @param {Function} func The function to throttle.
						 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
						 * @param {Object} [options] The options object.
						 * @param {boolean} [options.leading=true] Specify invoking on the leading
						 *  edge of the timeout.
						 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
						 *  edge of the timeout.
						 * @returns {Function} Returns the new throttled function.
						 * @example
						 *
						 * // avoid excessively updating the position while scrolling
						 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
						 *
						 * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
						 * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
						 *   'trailing': false
						 * }));
						 *
						 * // cancel a trailing throttled call
						 * jQuery(window).on('popstate', throttled.cancel);
						 */
						function throttle(func, wait, options) {
							var leading = true,
								trailing = true;

							if (typeof func != 'function') {
								throw new TypeError(FUNC_ERROR_TEXT);
							}
							if (options === false) {
								leading = false;
							} else if (isObject(options)) {
								leading = 'leading' in options ? !!options.leading : leading;
								trailing = 'trailing' in options ? !!options.trailing : trailing;
							}
							return debounce(func, wait, {
								'leading': leading,
								'maxWait': +wait,
								'trailing': trailing
							});
						}

						module.exports = throttle;

					}, {
						"../lang/isObject": 33,
						"./debounce": 5
					}],
					8: [function(_dereq_, module, exports) {
						/**
						 * Copies the values of `source` to `array`.
						 *
						 * @private
						 * @param {Array} source The array to copy values from.
						 * @param {Array} [array=[]] The array to copy values to.
						 * @returns {Array} Returns `array`.
						 */
						function arrayCopy(source, array) {
							var index = -1,
								length = source.length;

							array || (array = Array(length));
							while (++index < length) {
								array[index] = source[index];
							}
							return array;
						}

						module.exports = arrayCopy;

					}, {}],
					9: [function(_dereq_, module, exports) {
						/**
						 * A specialized version of `_.forEach` for arrays without support for callback
						 * shorthands and `this` binding.
						 *
						 * @private
						 * @param {Array} array The array to iterate over.
						 * @param {Function} iteratee The function invoked per iteration.
						 * @returns {Array} Returns `array`.
						 */
						function arrayEach(array, iteratee) {
							var index = -1,
								length = array.length;

							while (++index < length) {
								if (iteratee(array[index], index, array) === false) {
									break;
								}
							}
							return array;
						}

						module.exports = arrayEach;

					}, {}],
					10: [function(_dereq_, module, exports) {
						/**
						 * Copies properties of `source` to `object`.
						 *
						 * @private
						 * @param {Object} source The object to copy properties from.
						 * @param {Array} props The property names to copy.
						 * @param {Object} [object={}] The object to copy properties to.
						 * @returns {Object} Returns `object`.
						 */
						function baseCopy(source, props, object) {
							object || (object = {});

							var index = -1,
								length = props.length;

							while (++index < length) {
								var key = props[index];
								object[key] = source[key];
							}
							return object;
						}

						module.exports = baseCopy;

					}, {}],
					11: [function(_dereq_, module, exports) {
						var createBaseFor = _dereq_('./createBaseFor');

						/**
						 * The base implementation of `baseForIn` and `baseForOwn` which iterates
						 * over `object` properties returned by `keysFunc` invoking `iteratee` for
						 * each property. Iteratee functions may exit iteration early by explicitly
						 * returning `false`.
						 *
						 * @private
						 * @param {Object} object The object to iterate over.
						 * @param {Function} iteratee The function invoked per iteration.
						 * @param {Function} keysFunc The function to get the keys of `object`.
						 * @returns {Object} Returns `object`.
						 */
						var baseFor = createBaseFor();

						module.exports = baseFor;

					}, {
						"./createBaseFor": 18
					}],
					12: [function(_dereq_, module, exports) {
						var baseFor = _dereq_('./baseFor'),
							keysIn = _dereq_('../object/keysIn');

						/**
						 * The base implementation of `_.forIn` without support for callback
						 * shorthands and `this` binding.
						 *
						 * @private
						 * @param {Object} object The object to iterate over.
						 * @param {Function} iteratee The function invoked per iteration.
						 * @returns {Object} Returns `object`.
						 */
						function baseForIn(object, iteratee) {
							return baseFor(object, iteratee, keysIn);
						}

						module.exports = baseForIn;

					}, {
						"../object/keysIn": 39,
						"./baseFor": 11
					}],
					13: [function(_dereq_, module, exports) {
						var arrayEach = _dereq_('./arrayEach'),
							baseMergeDeep = _dereq_('./baseMergeDeep'),
							isArray = _dereq_('../lang/isArray'),
							isArrayLike = _dereq_('./isArrayLike'),
							isObject = _dereq_('../lang/isObject'),
							isObjectLike = _dereq_('./isObjectLike'),
							isTypedArray = _dereq_('../lang/isTypedArray'),
							keys = _dereq_('../object/keys');

						/**
						 * The base implementation of `_.merge` without support for argument juggling,
						 * multiple sources, and `this` binding `customizer` functions.
						 *
						 * @private
						 * @param {Object} object The destination object.
						 * @param {Object} source The source object.
						 * @param {Function} [customizer] The function to customize merged values.
						 * @param {Array} [stackA=[]] Tracks traversed source objects.
						 * @param {Array} [stackB=[]] Associates values with source counterparts.
						 * @returns {Object} Returns `object`.
						 */
						function baseMerge(object, source, customizer, stackA, stackB) {
							if (!isObject(object)) {
								return object;
							}
							var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
								props = isSrcArr ? undefined : keys(source);

							arrayEach(props || source, function(srcValue, key) {
								if (props) {
									key = srcValue;
									srcValue = source[key];
								}
								if (isObjectLike(srcValue)) {
									stackA || (stackA = []);
									stackB || (stackB = []);
									baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
								} else {
									var value = object[key],
										result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
										isCommon = result === undefined;

									if (isCommon) {
										result = srcValue;
									}
									if ((result !== undefined || (isSrcArr && !(key in object))) &&
										(isCommon || (result === result ? (result !== value) : (value === value)))) {
										object[key] = result;
									}
								}
							});
							return object;
						}

						module.exports = baseMerge;

					}, {
						"../lang/isArray": 30,
						"../lang/isObject": 33,
						"../lang/isTypedArray": 36,
						"../object/keys": 38,
						"./arrayEach": 9,
						"./baseMergeDeep": 14,
						"./isArrayLike": 21,
						"./isObjectLike": 26
					}],
					14: [function(_dereq_, module, exports) {
						var arrayCopy = _dereq_('./arrayCopy'),
							isArguments = _dereq_('../lang/isArguments'),
							isArray = _dereq_('../lang/isArray'),
							isArrayLike = _dereq_('./isArrayLike'),
							isPlainObject = _dereq_('../lang/isPlainObject'),
							isTypedArray = _dereq_('../lang/isTypedArray'),
							toPlainObject = _dereq_('../lang/toPlainObject');

						/**
						 * A specialized version of `baseMerge` for arrays and objects which performs
						 * deep merges and tracks traversed objects enabling objects with circular
						 * references to be merged.
						 *
						 * @private
						 * @param {Object} object The destination object.
						 * @param {Object} source The source object.
						 * @param {string} key The key of the value to merge.
						 * @param {Function} mergeFunc The function to merge values.
						 * @param {Function} [customizer] The function to customize merged values.
						 * @param {Array} [stackA=[]] Tracks traversed source objects.
						 * @param {Array} [stackB=[]] Associates values with source counterparts.
						 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
						 */
						function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
							var length = stackA.length,
								srcValue = source[key];

							while (length--) {
								if (stackA[length] == srcValue) {
									object[key] = stackB[length];
									return;
								}
							}
							var value = object[key],
								result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
								isCommon = result === undefined;

							if (isCommon) {
								result = srcValue;
								if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
									result = isArray(value) ?
										value :
										(isArrayLike(value) ? arrayCopy(value) : []);
								} else if (isPlainObject(srcValue) || isArguments(srcValue)) {
									result = isArguments(value) ?
										toPlainObject(value) :
										(isPlainObject(value) ? value : {});
								} else {
									isCommon = false;
								}
							}
							// Add the source value to the stack of traversed objects and associate
							// it with its merged value.
							stackA.push(srcValue);
							stackB.push(result);

							if (isCommon) {
								// Recursively merge objects and arrays (susceptible to call stack limits).
								object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
							} else if (result === result ? (result !== value) : (value === value)) {
								object[key] = result;
							}
						}

						module.exports = baseMergeDeep;

					}, {
						"../lang/isArguments": 29,
						"../lang/isArray": 30,
						"../lang/isPlainObject": 34,
						"../lang/isTypedArray": 36,
						"../lang/toPlainObject": 37,
						"./arrayCopy": 8,
						"./isArrayLike": 21
					}],
					15: [function(_dereq_, module, exports) {
						var toObject = _dereq_('./toObject');

						/**
						 * The base implementation of `_.property` without support for deep paths.
						 *
						 * @private
						 * @param {string} key The key of the property to get.
						 * @returns {Function} Returns the new function.
						 */
						function baseProperty(key) {
							return function(object) {
								return object == null ? undefined : toObject(object)[key];
							};
						}

						module.exports = baseProperty;

					}, {
						"./toObject": 28
					}],
					16: [function(_dereq_, module, exports) {
						var identity = _dereq_('../utility/identity');

						/**
						 * A specialized version of `baseCallback` which only supports `this` binding
						 * and specifying the number of arguments to provide to `func`.
						 *
						 * @private
						 * @param {Function} func The function to bind.
						 * @param {*} thisArg The `this` binding of `func`.
						 * @param {number} [argCount] The number of arguments to provide to `func`.
						 * @returns {Function} Returns the callback.
						 */
						function bindCallback(func, thisArg, argCount) {
							if (typeof func != 'function') {
								return identity;
							}
							if (thisArg === undefined) {
								return func;
							}
							switch (argCount) {
								case 1:
									return function(value) {
										return func.call(thisArg, value);
									};
								case 3:
									return function(value, index, collection) {
										return func.call(thisArg, value, index, collection);
									};
								case 4:
									return function(accumulator, value, index, collection) {
										return func.call(thisArg, accumulator, value, index, collection);
									};
								case 5:
									return function(value, other, key, object, source) {
										return func.call(thisArg, value, other, key, object, source);
									};
							}
							return function() {
								return func.apply(thisArg, arguments);
							};
						}

						module.exports = bindCallback;

					}, {
						"../utility/identity": 42
					}],
					17: [function(_dereq_, module, exports) {
						var bindCallback = _dereq_('./bindCallback'),
							isIterateeCall = _dereq_('./isIterateeCall'),
							restParam = _dereq_('../function/restParam');

						/**
						 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
						 *
						 * @private
						 * @param {Function} assigner The function to assign values.
						 * @returns {Function} Returns the new assigner function.
						 */
						function createAssigner(assigner) {
							return restParam(function(object, sources) {
								var index = -1,
									length = object == null ? 0 : sources.length,
									customizer = length > 2 ? sources[length - 2] : undefined,
									guard = length > 2 ? sources[2] : undefined,
									thisArg = length > 1 ? sources[length - 1] : undefined;

								if (typeof customizer == 'function') {
									customizer = bindCallback(customizer, thisArg, 5);
									length -= 2;
								} else {
									customizer = typeof thisArg == 'function' ? thisArg : undefined;
									length -= (customizer ? 1 : 0);
								}
								if (guard && isIterateeCall(sources[0], sources[1], guard)) {
									customizer = length < 3 ? undefined : customizer;
									length = 1;
								}
								while (++index < length) {
									var source = sources[index];
									if (source) {
										assigner(object, source, customizer);
									}
								}
								return object;
							});
						}

						module.exports = createAssigner;

					}, {
						"../function/restParam": 6,
						"./bindCallback": 16,
						"./isIterateeCall": 24
					}],
					18: [function(_dereq_, module, exports) {
						var toObject = _dereq_('./toObject');

						/**
						 * Creates a base function for `_.forIn` or `_.forInRight`.
						 *
						 * @private
						 * @param {boolean} [fromRight] Specify iterating from right to left.
						 * @returns {Function} Returns the new base function.
						 */
						function createBaseFor(fromRight) {
							return function(object, iteratee, keysFunc) {
								var iterable = toObject(object),
									props = keysFunc(object),
									length = props.length,
									index = fromRight ? length : -1;

								while ((fromRight ? index-- : ++index < length)) {
									var key = props[index];
									if (iteratee(iterable[key], key, iterable) === false) {
										break;
									}
								}
								return object;
							};
						}

						module.exports = createBaseFor;

					}, {
						"./toObject": 28
					}],
					19: [function(_dereq_, module, exports) {
						var baseProperty = _dereq_('./baseProperty');

						/**
						 * Gets the "length" property value of `object`.
						 *
						 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
						 * that affects Safari on at least iOS 8.1-8.3 ARM64.
						 *
						 * @private
						 * @param {Object} object The object to query.
						 * @returns {*} Returns the "length" value.
						 */
						var getLength = baseProperty('length');

						module.exports = getLength;

					}, {
						"./baseProperty": 15
					}],
					20: [function(_dereq_, module, exports) {
						var isNative = _dereq_('../lang/isNative');

						/**
						 * Gets the native function at `key` of `object`.
						 *
						 * @private
						 * @param {Object} object The object to query.
						 * @param {string} key The key of the method to get.
						 * @returns {*} Returns the function if it's native, else `undefined`.
						 */
						function getNative(object, key) {
							var value = object == null ? undefined : object[key];
							return isNative(value) ? value : undefined;
						}

						module.exports = getNative;

					}, {
						"../lang/isNative": 32
					}],
					21: [function(_dereq_, module, exports) {
						var getLength = _dereq_('./getLength'),
							isLength = _dereq_('./isLength');

						/**
						 * Checks if `value` is array-like.
						 *
						 * @private
						 * @param {*} value The value to check.
						 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
						 */
						function isArrayLike(value) {
							return value != null && isLength(getLength(value));
						}

						module.exports = isArrayLike;

					}, {
						"./getLength": 19,
						"./isLength": 25
					}],
					22: [function(_dereq_, module, exports) {
						/**
						 * Checks if `value` is a host object in IE < 9.
						 *
						 * @private
						 * @param {*} value The value to check.
						 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
						 */
						var isHostObject = (function() {
							try {
								Object({
									'toString': 0
								} + '');
							} catch (e) {
								return function() {
									return false;
								};
							}
							return function(value) {
								// IE < 9 presents many host objects as `Object` objects that can coerce
								// to strings despite having improperly defined `toString` methods.
								return typeof value.toString != 'function' && typeof(value + '') == 'string';
							};
						}());

						module.exports = isHostObject;

					}, {}],
					23: [function(_dereq_, module, exports) {
						/** Used to detect unsigned integer values. */
						var reIsUint = /^\d+$/;

						/**
						 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
						 * of an array-like value.
						 */
						var MAX_SAFE_INTEGER = 9007199254740991;

						/**
						 * Checks if `value` is a valid array-like index.
						 *
						 * @private
						 * @param {*} value The value to check.
						 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
						 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
						 */
						function isIndex(value, length) {
							value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
							length = length == null ? MAX_SAFE_INTEGER : length;
							return value > -1 && value % 1 == 0 && value < length;
						}

						module.exports = isIndex;

					}, {}],
					24: [function(_dereq_, module, exports) {
						var isArrayLike = _dereq_('./isArrayLike'),
							isIndex = _dereq_('./isIndex'),
							isObject = _dereq_('../lang/isObject');

						/**
						 * Checks if the provided arguments are from an iteratee call.
						 *
						 * @private
						 * @param {*} value The potential iteratee value argument.
						 * @param {*} index The potential iteratee index or key argument.
						 * @param {*} object The potential iteratee object argument.
						 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
						 */
						function isIterateeCall(value, index, object) {
							if (!isObject(object)) {
								return false;
							}
							var type = typeof index;
							if (type == 'number' ?
								(isArrayLike(object) && isIndex(index, object.length)) :
								(type == 'string' && index in object)) {
								var other = object[index];
								return value === value ? (value === other) : (other !== other);
							}
							return false;
						}

						module.exports = isIterateeCall;

					}, {
						"../lang/isObject": 33,
						"./isArrayLike": 21,
						"./isIndex": 23
					}],
					25: [function(_dereq_, module, exports) {
						/**
						 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
						 * of an array-like value.
						 */
						var MAX_SAFE_INTEGER = 9007199254740991;

						/**
						 * Checks if `value` is a valid array-like length.
						 *
						 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
						 *
						 * @private
						 * @param {*} value The value to check.
						 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
						 */
						function isLength(value) {
							return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
						}

						module.exports = isLength;

					}, {}],
					26: [function(_dereq_, module, exports) {
						/**
						 * Checks if `value` is object-like.
						 *
						 * @private
						 * @param {*} value The value to check.
						 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
						 */
						function isObjectLike(value) {
							return !!value && typeof value == 'object';
						}

						module.exports = isObjectLike;

					}, {}],
					27: [function(_dereq_, module, exports) {
						var isArguments = _dereq_('../lang/isArguments'),
							isArray = _dereq_('../lang/isArray'),
							isIndex = _dereq_('./isIndex'),
							isLength = _dereq_('./isLength'),
							isString = _dereq_('../lang/isString'),
							keysIn = _dereq_('../object/keysIn');

						/** Used for native method references. */
						var objectProto = Object.prototype;

						/** Used to check objects for own properties. */
						var hasOwnProperty = objectProto.hasOwnProperty;

						/**
						 * A fallback implementation of `Object.keys` which creates an array of the
						 * own enumerable property names of `object`.
						 *
						 * @private
						 * @param {Object} object The object to query.
						 * @returns {Array} Returns the array of property names.
						 */
						function shimKeys(object) {
							var props = keysIn(object),
								propsLength = props.length,
								length = propsLength && object.length;

							var allowIndexes = !!length && isLength(length) &&
								(isArray(object) || isArguments(object) || isString(object));

							var index = -1,
								result = [];

							while (++index < propsLength) {
								var key = props[index];
								if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
									result.push(key);
								}
							}
							return result;
						}

						module.exports = shimKeys;

					}, {
						"../lang/isArguments": 29,
						"../lang/isArray": 30,
						"../lang/isString": 35,
						"../object/keysIn": 39,
						"./isIndex": 23,
						"./isLength": 25
					}],
					28: [function(_dereq_, module, exports) {
						var isObject = _dereq_('../lang/isObject'),
							isString = _dereq_('../lang/isString'),
							support = _dereq_('../support');

						/**
						 * Converts `value` to an object if it's not one.
						 *
						 * @private
						 * @param {*} value The value to process.
						 * @returns {Object} Returns the object.
						 */
						function toObject(value) {
							if (support.unindexedChars && isString(value)) {
								var index = -1,
									length = value.length,
									result = Object(value);

								while (++index < length) {
									result[index] = value.charAt(index);
								}
								return result;
							}
							return isObject(value) ? value : Object(value);
						}

						module.exports = toObject;

					}, {
						"../lang/isObject": 33,
						"../lang/isString": 35,
						"../support": 41
					}],
					29: [function(_dereq_, module, exports) {
						var isArrayLike = _dereq_('../internal/isArrayLike'),
							isObjectLike = _dereq_('../internal/isObjectLike');

						/** Used for native method references. */
						var objectProto = Object.prototype;

						/** Used to check objects for own properties. */
						var hasOwnProperty = objectProto.hasOwnProperty;

						/** Native method references. */
						var propertyIsEnumerable = objectProto.propertyIsEnumerable;

						/**
						 * Checks if `value` is classified as an `arguments` object.
						 *
						 * @static
						 * @memberOf _
						 * @category Lang
						 * @param {*} value The value to check.
						 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
						 * @example
						 *
						 * _.isArguments(function() { return arguments; }());
						 * // => true
						 *
						 * _.isArguments([1, 2, 3]);
						 * // => false
						 */
						function isArguments(value) {
							return isObjectLike(value) && isArrayLike(value) &&
								hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
						}

						module.exports = isArguments;

					}, {
						"../internal/isArrayLike": 21,
						"../internal/isObjectLike": 26
					}],
					30: [function(_dereq_, module, exports) {
						var getNative = _dereq_('../internal/getNative'),
							isLength = _dereq_('../internal/isLength'),
							isObjectLike = _dereq_('../internal/isObjectLike');

						/** `Object#toString` result references. */
						var arrayTag = '[object Array]';

						/** Used for native method references. */
						var objectProto = Object.prototype;

						/**
						 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
						 * of values.
						 */
						var objToString = objectProto.toString;

						/* Native method references for those with the same name as other `lodash` methods. */
						var nativeIsArray = getNative(Array, 'isArray');

						/**
						 * Checks if `value` is classified as an `Array` object.
						 *
						 * @static
						 * @memberOf _
						 * @category Lang
						 * @param {*} value The value to check.
						 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
						 * @example
						 *
						 * _.isArray([1, 2, 3]);
						 * // => true
						 *
						 * _.isArray(function() { return arguments; }());
						 * // => false
						 */
						var isArray = nativeIsArray || function(value) {
							return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
						};

						module.exports = isArray;

					}, {
						"../internal/getNative": 20,
						"../internal/isLength": 25,
						"../internal/isObjectLike": 26
					}],
					31: [function(_dereq_, module, exports) {
						var isObject = _dereq_('./isObject');

						/** `Object#toString` result references. */
						var funcTag = '[object Function]';

						/** Used for native method references. */
						var objectProto = Object.prototype;

						/**
						 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
						 * of values.
						 */
						var objToString = objectProto.toString;

						/**
						 * Checks if `value` is classified as a `Function` object.
						 *
						 * @static
						 * @memberOf _
						 * @category Lang
						 * @param {*} value The value to check.
						 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
						 * @example
						 *
						 * _.isFunction(_);
						 * // => true
						 *
						 * _.isFunction(/abc/);
						 * // => false
						 */
						function isFunction(value) {
							// The use of `Object#toString` avoids issues with the `typeof` operator
							// in older versions of Chrome and Safari which return 'function' for regexes
							// and Safari 8 which returns 'object' for typed array constructors.
							return isObject(value) && objToString.call(value) == funcTag;
						}

						module.exports = isFunction;

					}, {
						"./isObject": 33
					}],
					32: [function(_dereq_, module, exports) {
						var isFunction = _dereq_('./isFunction'),
							isHostObject = _dereq_('../internal/isHostObject'),
							isObjectLike = _dereq_('../internal/isObjectLike');

						/** Used to detect host constructors (Safari > 5). */
						var reIsHostCtor = /^\[object .+?Constructor\]$/;

						/** Used for native method references. */
						var objectProto = Object.prototype;

						/** Used to resolve the decompiled source of functions. */
						var fnToString = Function.prototype.toString;

						/** Used to check objects for own properties. */
						var hasOwnProperty = objectProto.hasOwnProperty;

						/** Used to detect if a method is native. */
						var reIsNative = RegExp('^' +
							fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
							.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
						);

						/**
						 * Checks if `value` is a native function.
						 *
						 * @static
						 * @memberOf _
						 * @category Lang
						 * @param {*} value The value to check.
						 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
						 * @example
						 *
						 * _.isNative(Array.prototype.push);
						 * // => true
						 *
						 * _.isNative(_);
						 * // => false
						 */
						function isNative(value) {
							if (value == null) {
								return false;
							}
							if (isFunction(value)) {
								return reIsNative.test(fnToString.call(value));
							}
							return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
						}

						module.exports = isNative;

					}, {
						"../internal/isHostObject": 22,
						"../internal/isObjectLike": 26,
						"./isFunction": 31
					}],
					33: [function(_dereq_, module, exports) {
						/**
						 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
						 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
						 *
						 * @static
						 * @memberOf _
						 * @category Lang
						 * @param {*} value The value to check.
						 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
						 * @example
						 *
						 * _.isObject({});
						 * // => true
						 *
						 * _.isObject([1, 2, 3]);
						 * // => true
						 *
						 * _.isObject(1);
						 * // => false
						 */
						function isObject(value) {
							// Avoid a V8 JIT bug in Chrome 19-20.
							// See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
							var type = typeof value;
							return !!value && (type == 'object' || type == 'function');
						}

						module.exports = isObject;

					}, {}],
					34: [function(_dereq_, module, exports) {
						var baseForIn = _dereq_('../internal/baseForIn'),
							isArguments = _dereq_('./isArguments'),
							isHostObject = _dereq_('../internal/isHostObject'),
							isObjectLike = _dereq_('../internal/isObjectLike'),
							support = _dereq_('../support');

						/** `Object#toString` result references. */
						var objectTag = '[object Object]';

						/** Used for native method references. */
						var objectProto = Object.prototype;

						/** Used to check objects for own properties. */
						var hasOwnProperty = objectProto.hasOwnProperty;

						/**
						 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
						 * of values.
						 */
						var objToString = objectProto.toString;

						/**
						 * Checks if `value` is a plain object, that is, an object created by the
						 * `Object` constructor or one with a `[[Prototype]]` of `null`.
						 *
						 * **Note:** This method assumes objects created by the `Object` constructor
						 * have no inherited enumerable properties.
						 *
						 * @static
						 * @memberOf _
						 * @category Lang
						 * @param {*} value The value to check.
						 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
						 * @example
						 *
						 * function Foo() {
						 *   this.a = 1;
						 * }
						 *
						 * _.isPlainObject(new Foo);
						 * // => false
						 *
						 * _.isPlainObject([1, 2, 3]);
						 * // => false
						 *
						 * _.isPlainObject({ 'x': 0, 'y': 0 });
						 * // => true
						 *
						 * _.isPlainObject(Object.create(null));
						 * // => true
						 */
						function isPlainObject(value) {
							var Ctor;

							// Exit early for non `Object` objects.
							if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isHostObject(value) && !isArguments(value)) ||
								(!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
								return false;
							}
							// IE < 9 iterates inherited properties before own properties. If the first
							// iterated property is an object's own property then there are no inherited
							// enumerable properties.
							var result;
							if (support.ownLast) {
								baseForIn(value, function(subValue, key, object) {
									result = hasOwnProperty.call(object, key);
									return false;
								});
								return result !== false;
							}
							// In most environments an object's own properties are iterated before
							// its inherited properties. If the last iterated property is an object's
							// own property then there are no inherited enumerable properties.
							baseForIn(value, function(subValue, key) {
								result = key;
							});
							return result === undefined || hasOwnProperty.call(value, result);
						}

						module.exports = isPlainObject;

					}, {
						"../internal/baseForIn": 12,
						"../internal/isHostObject": 22,
						"../internal/isObjectLike": 26,
						"../support": 41,
						"./isArguments": 29
					}],
					35: [function(_dereq_, module, exports) {
						var isObjectLike = _dereq_('../internal/isObjectLike');

						/** `Object#toString` result references. */
						var stringTag = '[object String]';

						/** Used for native method references. */
						var objectProto = Object.prototype;

						/**
						 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
						 * of values.
						 */
						var objToString = objectProto.toString;

						/**
						 * Checks if `value` is classified as a `String` primitive or object.
						 *
						 * @static
						 * @memberOf _
						 * @category Lang
						 * @param {*} value The value to check.
						 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
						 * @example
						 *
						 * _.isString('abc');
						 * // => true
						 *
						 * _.isString(1);
						 * // => false
						 */
						function isString(value) {
							return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
						}

						module.exports = isString;

					}, {
						"../internal/isObjectLike": 26
					}],
					36: [function(_dereq_, module, exports) {
						var isLength = _dereq_('../internal/isLength'),
							isObjectLike = _dereq_('../internal/isObjectLike');

						/** `Object#toString` result references. */
						var argsTag = '[object Arguments]',
							arrayTag = '[object Array]',
							boolTag = '[object Boolean]',
							dateTag = '[object Date]',
							errorTag = '[object Error]',
							funcTag = '[object Function]',
							mapTag = '[object Map]',
							numberTag = '[object Number]',
							objectTag = '[object Object]',
							regexpTag = '[object RegExp]',
							setTag = '[object Set]',
							stringTag = '[object String]',
							weakMapTag = '[object WeakMap]';

						var arrayBufferTag = '[object ArrayBuffer]',
							float32Tag = '[object Float32Array]',
							float64Tag = '[object Float64Array]',
							int8Tag = '[object Int8Array]',
							int16Tag = '[object Int16Array]',
							int32Tag = '[object Int32Array]',
							uint8Tag = '[object Uint8Array]',
							uint8ClampedTag = '[object Uint8ClampedArray]',
							uint16Tag = '[object Uint16Array]',
							uint32Tag = '[object Uint32Array]';

						/** Used to identify `toStringTag` values of typed arrays. */
						var typedArrayTags = {};
						typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
							typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
							typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
							typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
							typedArrayTags[uint32Tag] = true;
						typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
							typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
							typedArrayTags[dateTag] = typedArrayTags[errorTag] =
							typedArrayTags[funcTag] = typedArrayTags[mapTag] =
							typedArrayTags[numberTag] = typedArrayTags[objectTag] =
							typedArrayTags[regexpTag] = typedArrayTags[setTag] =
							typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

						/** Used for native method references. */
						var objectProto = Object.prototype;

						/**
						 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
						 * of values.
						 */
						var objToString = objectProto.toString;

						/**
						 * Checks if `value` is classified as a typed array.
						 *
						 * @static
						 * @memberOf _
						 * @category Lang
						 * @param {*} value The value to check.
						 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
						 * @example
						 *
						 * _.isTypedArray(new Uint8Array);
						 * // => true
						 *
						 * _.isTypedArray([]);
						 * // => false
						 */
						function isTypedArray(value) {
							return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
						}

						module.exports = isTypedArray;

					}, {
						"../internal/isLength": 25,
						"../internal/isObjectLike": 26
					}],
					37: [function(_dereq_, module, exports) {
						var baseCopy = _dereq_('../internal/baseCopy'),
							keysIn = _dereq_('../object/keysIn');

						/**
						 * Converts `value` to a plain object flattening inherited enumerable
						 * properties of `value` to own properties of the plain object.
						 *
						 * @static
						 * @memberOf _
						 * @category Lang
						 * @param {*} value The value to convert.
						 * @returns {Object} Returns the converted plain object.
						 * @example
						 *
						 * function Foo() {
						 *   this.b = 2;
						 * }
						 *
						 * Foo.prototype.c = 3;
						 *
						 * _.assign({ 'a': 1 }, new Foo);
						 * // => { 'a': 1, 'b': 2 }
						 *
						 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
						 * // => { 'a': 1, 'b': 2, 'c': 3 }
						 */
						function toPlainObject(value) {
							return baseCopy(value, keysIn(value));
						}

						module.exports = toPlainObject;

					}, {
						"../internal/baseCopy": 10,
						"../object/keysIn": 39
					}],
					38: [function(_dereq_, module, exports) {
						var getNative = _dereq_('../internal/getNative'),
							isArrayLike = _dereq_('../internal/isArrayLike'),
							isObject = _dereq_('../lang/isObject'),
							shimKeys = _dereq_('../internal/shimKeys'),
							support = _dereq_('../support');

						/* Native method references for those with the same name as other `lodash` methods. */
						var nativeKeys = getNative(Object, 'keys');

						/**
						 * Creates an array of the own enumerable property names of `object`.
						 *
						 * **Note:** Non-object values are coerced to objects. See the
						 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
						 * for more details.
						 *
						 * @static
						 * @memberOf _
						 * @category Object
						 * @param {Object} object The object to query.
						 * @returns {Array} Returns the array of property names.
						 * @example
						 *
						 * function Foo() {
						 *   this.a = 1;
						 *   this.b = 2;
						 * }
						 *
						 * Foo.prototype.c = 3;
						 *
						 * _.keys(new Foo);
						 * // => ['a', 'b'] (iteration order is not guaranteed)
						 *
						 * _.keys('hi');
						 * // => ['0', '1']
						 */
						var keys = !nativeKeys ? shimKeys : function(object) {
							var Ctor = object == null ? undefined : object.constructor;
							if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
								(typeof object == 'function' ? support.enumPrototypes : isArrayLike(object))) {
								return shimKeys(object);
							}
							return isObject(object) ? nativeKeys(object) : [];
						};

						module.exports = keys;

					}, {
						"../internal/getNative": 20,
						"../internal/isArrayLike": 21,
						"../internal/shimKeys": 27,
						"../lang/isObject": 33,
						"../support": 41
					}],
					39: [function(_dereq_, module, exports) {
						var arrayEach = _dereq_('../internal/arrayEach'),
							isArguments = _dereq_('../lang/isArguments'),
							isArray = _dereq_('../lang/isArray'),
							isFunction = _dereq_('../lang/isFunction'),
							isIndex = _dereq_('../internal/isIndex'),
							isLength = _dereq_('../internal/isLength'),
							isObject = _dereq_('../lang/isObject'),
							isString = _dereq_('../lang/isString'),
							support = _dereq_('../support');

						/** `Object#toString` result references. */
						var arrayTag = '[object Array]',
							boolTag = '[object Boolean]',
							dateTag = '[object Date]',
							errorTag = '[object Error]',
							funcTag = '[object Function]',
							numberTag = '[object Number]',
							objectTag = '[object Object]',
							regexpTag = '[object RegExp]',
							stringTag = '[object String]';

						/** Used to fix the JScript `[[DontEnum]]` bug. */
						var shadowProps = [
							'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
							'toLocaleString', 'toString', 'valueOf'
						];

						/** Used for native method references. */
						var errorProto = Error.prototype,
							objectProto = Object.prototype,
							stringProto = String.prototype;

						/** Used to check objects for own properties. */
						var hasOwnProperty = objectProto.hasOwnProperty;

						/**
						 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
						 * of values.
						 */
						var objToString = objectProto.toString;

						/** Used to avoid iterating over non-enumerable properties in IE < 9. */
						var nonEnumProps = {};
						nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = {
							'constructor': true,
							'toLocaleString': true,
							'toString': true,
							'valueOf': true
						};
						nonEnumProps[boolTag] = nonEnumProps[stringTag] = {
							'constructor': true,
							'toString': true,
							'valueOf': true
						};
						nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = {
							'constructor': true,
							'toString': true
						};
						nonEnumProps[objectTag] = {
							'constructor': true
						};

						arrayEach(shadowProps, function(key) {
							for (var tag in nonEnumProps) {
								if (hasOwnProperty.call(nonEnumProps, tag)) {
									var props = nonEnumProps[tag];
									props[key] = hasOwnProperty.call(props, key);
								}
							}
						});

						/**
						 * Creates an array of the own and inherited enumerable property names of `object`.
						 *
						 * **Note:** Non-object values are coerced to objects.
						 *
						 * @static
						 * @memberOf _
						 * @category Object
						 * @param {Object} object The object to query.
						 * @returns {Array} Returns the array of property names.
						 * @example
						 *
						 * function Foo() {
						 *   this.a = 1;
						 *   this.b = 2;
						 * }
						 *
						 * Foo.prototype.c = 3;
						 *
						 * _.keysIn(new Foo);
						 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
						 */
						function keysIn(object) {
							if (object == null) {
								return [];
							}
							if (!isObject(object)) {
								object = Object(object);
							}
							var length = object.length;

							length = (length && isLength(length) &&
								(isArray(object) || isArguments(object) || isString(object)) && length) || 0;

							var Ctor = object.constructor,
								index = -1,
								proto = (isFunction(Ctor) && Ctor.prototype) || objectProto,
								isProto = proto === object,
								result = Array(length),
								skipIndexes = length > 0,
								skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
								skipProto = support.enumPrototypes && isFunction(object);

							while (++index < length) {
								result[index] = (index + '');
							}
							// lodash skips the `constructor` property when it infers it's iterating
							// over a `prototype` object because IE < 9 can't set the `[[Enumerable]]`
							// attribute of an existing property and the `constructor` property of a
							// prototype defaults to non-enumerable.
							for (var key in object) {
								if (!(skipProto && key == 'prototype') &&
									!(skipErrorProps && (key == 'message' || key == 'name')) &&
									!(skipIndexes && isIndex(key, length)) &&
									!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
									result.push(key);
								}
							}
							if (support.nonEnumShadows && object !== objectProto) {
								var tag = object === stringProto ? stringTag : (object === errorProto ? errorTag : objToString.call(object)),
									nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];

								if (tag == objectTag) {
									proto = objectProto;
								}
								length = shadowProps.length;
								while (length--) {
									key = shadowProps[length];
									var nonEnum = nonEnums[key];
									if (!(isProto && nonEnum) &&
										(nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
										result.push(key);
									}
								}
							}
							return result;
						}

						module.exports = keysIn;

					}, {
						"../internal/arrayEach": 9,
						"../internal/isIndex": 23,
						"../internal/isLength": 25,
						"../lang/isArguments": 29,
						"../lang/isArray": 30,
						"../lang/isFunction": 31,
						"../lang/isObject": 33,
						"../lang/isString": 35,
						"../support": 41
					}],
					40: [function(_dereq_, module, exports) {
						var baseMerge = _dereq_('../internal/baseMerge'),
							createAssigner = _dereq_('../internal/createAssigner');

						/**
						 * Recursively merges own enumerable properties of the source object(s), that
						 * don't resolve to `undefined` into the destination object. Subsequent sources
						 * overwrite property assignments of previous sources. If `customizer` is
						 * provided it's invoked to produce the merged values of the destination and
						 * source properties. If `customizer` returns `undefined` merging is handled
						 * by the method instead. The `customizer` is bound to `thisArg` and invoked
						 * with five arguments: (objectValue, sourceValue, key, object, source).
						 *
						 * @static
						 * @memberOf _
						 * @category Object
						 * @param {Object} object The destination object.
						 * @param {...Object} [sources] The source objects.
						 * @param {Function} [customizer] The function to customize assigned values.
						 * @param {*} [thisArg] The `this` binding of `customizer`.
						 * @returns {Object} Returns `object`.
						 * @example
						 *
						 * var users = {
						 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
						 * };
						 *
						 * var ages = {
						 *   'data': [{ 'age': 36 }, { 'age': 40 }]
						 * };
						 *
						 * _.merge(users, ages);
						 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
						 *
						 * // using a customizer callback
						 * var object = {
						 *   'fruits': ['apple'],
						 *   'vegetables': ['beet']
						 * };
						 *
						 * var other = {
						 *   'fruits': ['banana'],
						 *   'vegetables': ['carrot']
						 * };
						 *
						 * _.merge(object, other, function(a, b) {
						 *   if (_.isArray(a)) {
						 *     return a.concat(b);
						 *   }
						 * });
						 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
						 */
						var merge = createAssigner(baseMerge);

						module.exports = merge;

					}, {
						"../internal/baseMerge": 13,
						"../internal/createAssigner": 17
					}],
					41: [function(_dereq_, module, exports) {
						/** Used for native method references. */
						var arrayProto = Array.prototype,
							errorProto = Error.prototype,
							objectProto = Object.prototype;

						/** Native method references. */
						var propertyIsEnumerable = objectProto.propertyIsEnumerable,
							splice = arrayProto.splice;

						/**
						 * An object environment feature flags.
						 *
						 * @static
						 * @memberOf _
						 * @type Object
						 */
						var support = {};

						(function(x) {
							var Ctor = function() {
									this.x = x;
								},
								object = {
									'0': x,
									'length': x
								},
								props = [];

							Ctor.prototype = {
								'valueOf': x,
								'y': x
							};
							for (var key in new Ctor) {
								props.push(key);
							}

							/**
							 * Detect if `name` or `message` properties of `Error.prototype` are
							 * enumerable by default (IE < 9, Safari < 5.1).
							 *
							 * @memberOf _.support
							 * @type boolean
							 */
							support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') ||
								propertyIsEnumerable.call(errorProto, 'name');

							/**
							 * Detect if `prototype` properties are enumerable by default.
							 *
							 * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
							 * (if the prototype or a property on the prototype has been set)
							 * incorrectly set the `[[Enumerable]]` value of a function's `prototype`
							 * property to `true`.
							 *
							 * @memberOf _.support
							 * @type boolean
							 */
							support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');

							/**
							 * Detect if properties shadowing those on `Object.prototype` are non-enumerable.
							 *
							 * In IE < 9 an object's own properties, shadowing non-enumerable ones,
							 * are made non-enumerable as well (a.k.a the JScript `[[DontEnum]]` bug).
							 *
							 * @memberOf _.support
							 * @type boolean
							 */
							support.nonEnumShadows = !/valueOf/.test(props);

							/**
							 * Detect if own properties are iterated after inherited properties (IE < 9).
							 *
							 * @memberOf _.support
							 * @type boolean
							 */
							support.ownLast = props[0] != 'x';

							/**
							 * Detect if `Array#shift` and `Array#splice` augment array-like objects
							 * correctly.
							 *
							 * Firefox < 10, compatibility modes of IE 8, and IE < 9 have buggy Array
							 * `shift()` and `splice()` functions that fail to remove the last element,
							 * `value[0]`, of array-like objects even though the "length" property is
							 * set to `0`. The `shift()` method is buggy in compatibility modes of IE 8,
							 * while `splice()` is buggy regardless of mode in IE < 9.
							 *
							 * @memberOf _.support
							 * @type boolean
							 */
							support.spliceObjects = (splice.call(object, 0, 1), !object[0]);

							/**
							 * Detect lack of support for accessing string characters by index.
							 *
							 * IE < 8 can't access characters by index. IE 8 can only access characters
							 * by index on string literals, not string objects.
							 *
							 * @memberOf _.support
							 * @type boolean
							 */
							support.unindexedChars = ('x' [0] + Object('x')[0]) != 'xx';
						}(1, 0));

						module.exports = support;

					}, {}],
					42: [function(_dereq_, module, exports) {
						/**
						 * This method returns the first argument provided to it.
						 *
						 * @static
						 * @memberOf _
						 * @category Utility
						 * @param {*} value Any value.
						 * @returns {*} Returns `value`.
						 * @example
						 *
						 * var object = { 'user': 'fred' };
						 *
						 * _.identity(object) === object;
						 * // => true
						 */
						function identity(value) {
							return value;
						}

						module.exports = identity;

					}, {}],
					43: [function(_dereq_, module, exports) {
						'use strict';

						var keys = _dereq_('object-keys');

						module.exports = function hasSymbols() {
							if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
								return false;
							}
							if (typeof Symbol.iterator === 'symbol') {
								return true;
							}

							var obj = {};
							var sym = Symbol('test');
							if (typeof sym === 'string') {
								return false;
							}

							// temp disabled per https://github.com/ljharb/object.assign/issues/17
							// if (sym instanceof Symbol) { return false; }
							// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
							// if (!(Object(sym) instanceof Symbol)) { return false; }

							var symVal = 42;
							obj[sym] = symVal;
							for (sym in obj) {
								return false;
							}
							if (keys(obj).length !== 0) {
								return false;
							}
							if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
								return false;
							}

							if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
								return false;
							}

							var syms = Object.getOwnPropertySymbols(obj);
							if (syms.length !== 1 || syms[0] !== sym) {
								return false;
							}

							if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
								return false;
							}

							if (typeof Object.getOwnPropertyDescriptor === 'function') {
								var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
								if (descriptor.value !== symVal || descriptor.enumerable !== true) {
									return false;
								}
							}

							return true;
						};

					}, {
						"object-keys": 50
					}],
					44: [function(_dereq_, module, exports) {
						'use strict';

						// modified from https://github.com/es-shims/es6-shim
						var keys = _dereq_('object-keys');
						var bind = _dereq_('function-bind');
						var canBeObject = function(obj) {
							return typeof obj !== 'undefined' && obj !== null;
						};
						var hasSymbols = _dereq_('./hasSymbols')();
						var toObject = Object;
						var push = bind.call(Function.call, Array.prototype.push);
						var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);

						module.exports = function assign(target, source1) {
							if (!canBeObject(target)) {
								throw new TypeError('target must be an object');
							}
							var objTarget = toObject(target);
							var s, source, i, props, syms, value, key;
							for (s = 1; s < arguments.length; ++s) {
								source = toObject(arguments[s]);
								props = keys(source);
								if (hasSymbols && Object.getOwnPropertySymbols) {
									syms = Object.getOwnPropertySymbols(source);
									for (i = 0; i < syms.length; ++i) {
										key = syms[i];
										if (propIsEnumerable(source, key)) {
											push(props, key);
										}
									}
								}
								for (i = 0; i < props.length; ++i) {
									key = props[i];
									value = source[key];
									if (propIsEnumerable(source, key)) {
										objTarget[key] = value;
									}
								}
							}
							return objTarget;
						};

					}, {
						"./hasSymbols": 43,
						"function-bind": 49,
						"object-keys": 50
					}],
					45: [function(_dereq_, module, exports) {
						'use strict';

						var defineProperties = _dereq_('define-properties');

						var implementation = _dereq_('./implementation');
						var getPolyfill = _dereq_('./polyfill');
						var shim = _dereq_('./shim');

						defineProperties(implementation, {
							implementation: implementation,
							getPolyfill: getPolyfill,
							shim: shim
						});

						module.exports = implementation;

					}, {
						"./implementation": 44,
						"./polyfill": 52,
						"./shim": 53,
						"define-properties": 46
					}],
					46: [function(_dereq_, module, exports) {
						'use strict';

						var keys = _dereq_('object-keys');
						var foreach = _dereq_('foreach');
						var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

						var toStr = Object.prototype.toString;

						var isFunction = function(fn) {
							return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
						};

						var arePropertyDescriptorsSupported = function() {
							var obj = {};
							try {
								Object.defineProperty(obj, 'x', {
									enumerable: false,
									value: obj
								});
								/* eslint-disable no-unused-vars, no-restricted-syntax */
								for (var _ in obj) {
									return false;
								}
								/* eslint-enable no-unused-vars, no-restricted-syntax */
								return obj.x === obj;
							} catch (e) { /* this is IE 8. */
								return false;
							}
						};
						var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

						var defineProperty = function(object, name, value, predicate) {
							if (name in object && (!isFunction(predicate) || !predicate())) {
								return;
							}
							if (supportsDescriptors) {
								Object.defineProperty(object, name, {
									configurable: true,
									enumerable: false,
									value: value,
									writable: true
								});
							} else {
								object[name] = value;
							}
						};

						var defineProperties = function(object, map) {
							var predicates = arguments.length > 2 ? arguments[2] : {};
							var props = keys(map);
							if (hasSymbols) {
								props = props.concat(Object.getOwnPropertySymbols(map));
							}
							foreach(props, function(name) {
								defineProperty(object, name, map[name], predicates[name]);
							});
						};

						defineProperties.supportsDescriptors = !!supportsDescriptors;

						module.exports = defineProperties;

					}, {
						"foreach": 47,
						"object-keys": 50
					}],
					47: [function(_dereq_, module, exports) {

						var hasOwn = Object.prototype.hasOwnProperty;
						var toString = Object.prototype.toString;

						module.exports = function forEach(obj, fn, ctx) {
							if (toString.call(fn) !== '[object Function]') {
								throw new TypeError('iterator must be a function');
							}
							var l = obj.length;
							if (l === +l) {
								for (var i = 0; i < l; i++) {
									fn.call(ctx, obj[i], i, obj);
								}
							} else {
								for (var k in obj) {
									if (hasOwn.call(obj, k)) {
										fn.call(ctx, obj[k], k, obj);
									}
								}
							}
						};


					}, {}],
					48: [function(_dereq_, module, exports) {
						var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
						var slice = Array.prototype.slice;
						var toStr = Object.prototype.toString;
						var funcType = '[object Function]';

						module.exports = function bind(that) {
							var target = this;
							if (typeof target !== 'function' || toStr.call(target) !== funcType) {
								throw new TypeError(ERROR_MESSAGE + target);
							}
							var args = slice.call(arguments, 1);

							var bound;
							var binder = function() {
								if (this instanceof bound) {
									var result = target.apply(
										this,
										args.concat(slice.call(arguments))
									);
									if (Object(result) === result) {
										return result;
									}
									return this;
								} else {
									return target.apply(
										that,
										args.concat(slice.call(arguments))
									);
								}
							};

							var boundLength = Math.max(0, target.length - args.length);
							var boundArgs = [];
							for (var i = 0; i < boundLength; i++) {
								boundArgs.push('$' + i);
							}

							bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

							if (target.prototype) {
								var Empty = function Empty() {};
								Empty.prototype = target.prototype;
								bound.prototype = new Empty();
								Empty.prototype = null;
							}

							return bound;
						};

					}, {}],
					49: [function(_dereq_, module, exports) {
						var implementation = _dereq_('./implementation');

						module.exports = Function.prototype.bind || implementation;

					}, {
						"./implementation": 48
					}],
					50: [function(_dereq_, module, exports) {
						'use strict';

						// modified from https://github.com/es-shims/es5-shim
						var has = Object.prototype.hasOwnProperty;
						var toStr = Object.prototype.toString;
						var slice = Array.prototype.slice;
						var isArgs = _dereq_('./isArguments');
						var hasDontEnumBug = !({
							toString: null
						}).propertyIsEnumerable('toString');
						var hasProtoEnumBug = function() {}.propertyIsEnumerable('prototype');
						var dontEnums = [
							'toString',
							'toLocaleString',
							'valueOf',
							'hasOwnProperty',
							'isPrototypeOf',
							'propertyIsEnumerable',
							'constructor'
						];
						var equalsConstructorPrototype = function(o) {
							var ctor = o.constructor;
							return ctor && ctor.prototype === o;
						};
						var blacklistedKeys = {
							$console: true,
							$frame: true,
							$frameElement: true,
							$frames: true,
							$parent: true,
							$self: true,
							$webkitIndexedDB: true,
							$webkitStorageInfo: true,
							$window: true
						};
						var hasAutomationEqualityBug = (function() {
							/* global window */
							if (typeof window === 'undefined') {
								return false;
							}
							for (var k in window) {
								try {
									if (!blacklistedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
										try {
											equalsConstructorPrototype(window[k]);
										} catch (e) {
											return true;
										}
									}
								} catch (e) {
									return true;
								}
							}
							return false;
						}());
						var equalsConstructorPrototypeIfNotBuggy = function(o) {
							/* global window */
							if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
								return equalsConstructorPrototype(o);
							}
							try {
								return equalsConstructorPrototype(o);
							} catch (e) {
								return false;
							}
						};

						var keysShim = function keys(object) {
							var isObject = object !== null && typeof object === 'object';
							var isFunction = toStr.call(object) === '[object Function]';
							var isArguments = isArgs(object);
							var isString = isObject && toStr.call(object) === '[object String]';
							var theKeys = [];

							if (!isObject && !isFunction && !isArguments) {
								throw new TypeError('Object.keys called on a non-object');
							}

							var skipProto = hasProtoEnumBug && isFunction;
							if (isString && object.length > 0 && !has.call(object, 0)) {
								for (var i = 0; i < object.length; ++i) {
									theKeys.push(String(i));
								}
							}

							if (isArguments && object.length > 0) {
								for (var j = 0; j < object.length; ++j) {
									theKeys.push(String(j));
								}
							} else {
								for (var name in object) {
									if (!(skipProto && name === 'prototype') && has.call(object, name)) {
										theKeys.push(String(name));
									}
								}
							}

							if (hasDontEnumBug) {
								var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

								for (var k = 0; k < dontEnums.length; ++k) {
									if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
										theKeys.push(dontEnums[k]);
									}
								}
							}
							return theKeys;
						};

						keysShim.shim = function shimObjectKeys() {
							if (Object.keys) {
								var keysWorksWithArguments = (function() {
									// Safari 5.0 bug
									return (Object.keys(arguments) || '').length === 2;
								}(1, 2));
								if (!keysWorksWithArguments) {
									var originalKeys = Object.keys;
									Object.keys = function keys(object) {
										if (isArgs(object)) {
											return originalKeys(slice.call(object));
										} else {
											return originalKeys(object);
										}
									};
								}
							} else {
								Object.keys = keysShim;
							}
							return Object.keys || keysShim;
						};

						module.exports = keysShim;

					}, {
						"./isArguments": 51
					}],
					51: [function(_dereq_, module, exports) {
						'use strict';

						var toStr = Object.prototype.toString;

						module.exports = function isArguments(value) {
							var str = toStr.call(value);
							var isArgs = str === '[object Arguments]';
							if (!isArgs) {
								isArgs = str !== '[object Array]' &&
									value !== null &&
									typeof value === 'object' &&
									typeof value.length === 'number' &&
									value.length >= 0 &&
									toStr.call(value.callee) === '[object Function]';
							}
							return isArgs;
						};

					}, {}],
					52: [function(_dereq_, module, exports) {
						'use strict';

						var implementation = _dereq_('./implementation');

						var lacksProperEnumerationOrder = function() {
							if (!Object.assign) {
								return false;
							}
							// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
							// note: this does not detect the bug unless there's 20 characters
							var str = 'abcdefghijklmnopqrst';
							var letters = str.split('');
							var map = {};
							for (var i = 0; i < letters.length; ++i) {
								map[letters[i]] = letters[i];
							}
							var obj = Object.assign({}, map);
							var actual = '';
							for (var k in obj) {
								actual += k;
							}
							return str !== actual;
						};

						var assignHasPendingExceptions = function() {
							if (!Object.assign || !Object.preventExtensions) {
								return false;
							}
							// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
							// which is 72% slower than our shim, and Firefox 40's native implementation.
							var thrower = Object.preventExtensions({
								1: 2
							});
							try {
								Object.assign(thrower, 'xy');
							} catch (e) {
								return thrower[1] === 'y';
							}
						};

						module.exports = function getPolyfill() {
							if (!Object.assign) {
								return implementation;
							}
							if (lacksProperEnumerationOrder()) {
								return implementation;
							}
							if (assignHasPendingExceptions()) {
								return implementation;
							}
							return Object.assign;
						};

					}, {
						"./implementation": 44
					}],
					53: [function(_dereq_, module, exports) {
						'use strict';

						var define = _dereq_('define-properties');
						var getPolyfill = _dereq_('./polyfill');

						module.exports = function shimAssign() {
							var polyfill = getPolyfill();
							define(
								Object, {
									assign: polyfill
								}, {
									assign: function() {
										return Object.assign !== polyfill;
									}
								}
							);
							return polyfill;
						};

					}, {
						"./polyfill": 52,
						"define-properties": 46
					}],
					54: [function(_dereq_, module, exports) {
								module.exports =