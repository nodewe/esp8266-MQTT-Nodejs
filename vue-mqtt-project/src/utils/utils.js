//工具函数

/**
 * 判断 是否为工作日  是工作日就返回true  否则false
 * @param {Date} date 日期对象
 * @returns {Boolean} 是就返回true 不是就是false
 */
const isWorkDay = date => date.getDay() % 6 !== 0;
// console.log(isWorkDay(new Date('2022/11/25')))
/**
 * rgb 转 16 进制
 * @param {String | Number} r red 值
 * @param {String | Number} g green值
 * @param {String | Number} b blue值
 * @returns {String} 转成16进制的值
 */
const rgbToHex = (r, g, b) => '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// console.log(rgbToHex(0,0,0))

/**
 * 两个日期之间的相差的天数
 * @param {Date} date1 第一个date对象
 * @param {Date} date2 第二个date对象
 */
const dayDiff = (date1, date2) => {
    date1 = new Date(date1).getTime();
    date2 = new Date(date2).getTime();
    return Math.abs(date1 - date2) / 1000 / 60 / 60 / 24;
}
// 6天
// console.log(dayDiff(new Date('2022/11/26'),new Date('2022/11/20')))