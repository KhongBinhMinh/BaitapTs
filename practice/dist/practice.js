var numArray4 = [4, 7, 3, 8, 9, 10];
var numArray5 = ["Thi", "Hong", "Anh", "Nga"];
function bubbleSort(arr, callback) {
    var _a;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if ((arr[j] > arr[j + 1])) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
}
var result = bubbleSort(numArray4, function (item) {
    return item;
});
console.log(result);
var result2 = bubbleSort(numArray5, function (item) {
    return item;
});
console.log(result2);
