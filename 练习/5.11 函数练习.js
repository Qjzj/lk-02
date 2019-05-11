/**
 * @Author QJ
 * @date 2019--11 18:02
 * @desc 5.11 函数练习.js
 */


function getCirclePerimeterArea(r) {
    let perimeter = (2 * Math.PI * r).toFixed(2);
    let area = (Math.PI * Math.pow(r, 2)).toFixed(2);

    return {
        perimeter,
        area
    }
}

console.log(getCirclePerimeterArea(2));


/**
 * 获取最大值
 * @param x
 * @param y
 * @returns {*}
 */
function getMax(x, y) {
    if(typeof x === 'number' && typeof y === 'number') {
        return x > y ? x : y;
    }
    console.log('请输入数字')

}

console.log(getMax(2, 2));

/**
 * 获取一些数的最大值
 * @param args
 * @returns {void|*}
 */

function getMaxAny(...args) {
    if(args.length === 0) {
        return console.log('请传入参数');
    }

    let max = args[0];
    for (let i = 1,len = args.length; i < len; i++) {
        if(max < args[i]) {
            max = args[i]
        }
    }

    return max;
}

console.log(getMaxAny(1,2,3,7,8,10,-2));


/**
 * 获取一些数的最小值
 * @param args
 * @returns {void|*}
 */

function getMinAny(...args) {
    if(args.length === 0) {
        return console.log('请传入参数');
    }

    let min = args[0];
    for (let i = 1,len = args.length; i < len; i++) {
        if(min > args[i]) {
            min = args[i]
        }
    }

    return min;
}

console.log(getMinAny(1,2,3,7,8,10,-2));

/**
 * 反转数组
 * @param arr
 * @returns {Array}
 */
function reverseArr(arr) {
    if(typeof arr === 'object' && arr instanceof Array) {
        // reverse方法会改变原有数组
        arr.reverse();
        return arr;
    }
    console.log("参数类型有误");
}

console.log(reverseArr([1,2,3,4,5]));

/**
 * 使用for循环翻转数组
 * @param arr
 * @returns {Array}
 */
function reverseArrByFor(arr) {
    if(typeof arr === 'object' && arr instanceof Array) {
        if(arr.length === 1) return arr;

        for(let i = 0, len = arr.length; i < len; i++) {

            for (let j = 0; j < len - i -1; j++) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }

        }
        return arr;
    }
    console.log("参数类型有误");
}

console.log(reverseArrByFor([1,2,3,4,5]));

