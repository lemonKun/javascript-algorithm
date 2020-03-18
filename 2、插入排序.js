
//step1:在一个从小到大有序数组中，插入一个数字，使得数组能重新按顺序排列
//实现思路(原始实现)1、找到第一个比当前元素大的位置，用插入的数字，替换掉这个位置上的数字即可
function insertArr(arr, item) {
    let bigItem = arr.find(element => element > item);
    let ids = arr.indexOf(bigItem);
    //bigItem可能为undefined，那么此时说明item最大，将其push到数组末尾即可，否则，替代当前bigItem所在的位置
    arr.splice(ids === -1 ? arr.length : ids, 0, item);
    return arr;
}

let arr = [1, 3, 5, 7, 9];
console.log(insertArr(arr, 7));

//step2:一个更加好的实现方法：
function insertArr(arr, item) {
    //p指向下一个需要比较的元素，p + 1指向空位
    let p = arr.length - 1;
    while(p >= 0 && arr[p] > item) {
        //不断地向后移动元素(像华容道一样，留出空位，即p + 1)
        arr[p + 1] = arr[p];
        p--;
    }
    arr[p + 1] = item;
    return arr;
}
let arr = [1, 3, 5, 7, 9];
console.log(insertArr(arr, -99));

//step3:根据前边所说，可以实现整个插入排序算法：
function insert_sort(arr) {
    for(let i = 1; i < arr.length; i++) {
        // 参数分别为当前数组，动态的长度，要插入的新元素
     insert(arr, i, arr[i]);
    }
}
function insert(arr, dynamicLength, newItem) {
    let p = dynamicLength - 1;
    while(p >= 0 && arr[p] > newItem) {
        arr[p + 1] = arr[p];
        p--;
    }
    arr[p + 1] = newItem;
}
let arr = [1, 0, 6, 2, 7, -11];
insert_sort(arr)
console.log(arr);
// step4:二分插入排序，其实是对插入排序的一种优化，优化的点在于insert函数，即插入时候使用二分查找找到第一个比它大的数字
function insert_sort(arr) {
    for(let i = 1; i < arr.length; i++) {
        insert(arr, i, arr[i]);
    }
}
function insert(arr, dynamicLength, newItem) {
    let left = 0,
        right = dynamicLength - 1,
        guess;
    while(left <= right) {
        guess = Math.floor((left + right) / 2);
        if(arr[guess] < newItem) {
            left = guess + 1;
        }else {
            right = guess - 1;
        }
    }
    //此时arr[left]所表示的元素，是第一个比newItem大的元素
    for(let p = dynamicLength - 1; p >= left; p--) {
        arr[p + 1] = arr[p];
    }
    arr[left] = newItem;
}
let arr = [1, 0, 6, 2, 2, 2, 22, -11];
insert_sort(arr)
console.log(arr);

