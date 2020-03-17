/**
 * 实现思路：从一个已经从小到大排序好的数组，查找相应的元素，设置左边界和右边界，猜测的位置在每次左边
 * 界和右边界之间，通过比较猜测的位置和要查找元素的大小，从而动态的确定左边界(猜测值+1)和右边界
 * (猜测值-1)
 */
function BinarySearch(arr, item) {
    let l = 0, //左边界为数组第一项
        r = arr.length - 1,//右边界为数组第二项
        guess;//先声明猜测的位置
    //循环不变式的成立条件 => 左边界小于右边界
    while (l <= r) {
        guess = Math.floor((l + r) / 2);//猜测的值在左边界与右边界的中间位置
        if(arr[guess] === item) {
            return `位置在数组的第${guess + 1}个`;
        }else if(arr[guess] < item) {
            //猜测位置(左边界与右边界中间的值)小于要查找的元素，左边界 => guess + 1
            l = guess + 1;
        }else {
            //猜测的位置(左边界与右边界中间的值)大于要查找的元素，右边界 => guess - 1
            r = guess - 1;
        }
    }
    return '没有所查找的元素';
}

let arr = [1, 2, 44, 45, 66, 108];
console.log(BinarySearch(arr, 108));