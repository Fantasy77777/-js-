/**
 * 获取url中的参数，不使用URLSearchParams是因为兼容性问题
 * @param {*} url 
 */
const getUrlParams = (url) => {
  let res = {}
  url.replace(/([^?&=]+)=([^&]+)/g, (_,k,v) => {
    res[k]=v
  })
  return res
}

// 快速生成26个英文大写字母
const upperLetters = Array.from({length: 26}, (_, index) => {
  return String.fromCodePoint(65 + index)
})
// 快速生成26个英文小写字母
const lowerLetters = Array.from({length: 26}, (_, index) => {
  return String.fromCodePoint(97 + index)
})

/**
 * 类型判断
 * @param {*} param 需要判断的变量 
 */
const judgeType = (param) => {
  const typeMap = {
    '[object Bollean]' : 'bollean',
    '[object Number]' : 'number',
    '[object String]' : 'string',
    '[object Function]' : 'function',
    '[object Array]' : 'array',
    '[object Date]' : 'date',
    '[object RegExp]' : 'regExp',
    '[object Undefined]' : 'undefined',
    '[object Null]' : 'null',
    '[object Object]' : 'object',
    '[object Arguments]' : 'arguments',
    '[object Error]' : 'error',
    '[object Window]' : 'window',
    '[object HTMLDocument]' : 'document',
    '[object Map]' : 'map',
    '[object Set]' : 'set',
    '[object WeakMap]' : 'weakMap'
  }
  const type = typeMap[Object.prototype.toString.call(param)]
  return type
}

/**
 * 判断某个变量是否为空对象/空数组，多用于判断后台返回的结果
 * @param {*} param 
 */
const isBlank = (param) => {
  if (param === null || param === undefined || param === '' || param.length === 0) {
    return false
  }
  return true
}

/**
 * 函数防抖，就是只会执行时间段内触发的最后一次
 * @param {*} fn 
 * @param {*} delay 
 */
const debounce = (fn, delay) => {
  console.log('------debounce------')
  let timer = null
  return function (...args) {
    let ctx = this
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(ctx, args)
      timer = null
    }, delay)
  }
}

/**
 * 函数节流，就是在规定时间之后才会执行
 * @param {*} fn 
 * @param {*} delay 
 */
const throttle = (fn, delay) => {
  let timer = null
  return function (...args) {
    let ctx = this
    if (!timer) {
      timer = setTimeout(function() {
        fn.apply(ctx, args)
        timer = null
      }, delay)
    }
  }
}

module.exports = {
  getUrlParams,
  upperLetters,
  lowerLetters,
  judgeType,
  isBlank,
  debounce,
  throttle
}