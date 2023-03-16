var numArray4 = [4, 7, 3, 8, 9, 10];
var numArray5 = ["Thi", "Hong", "Anh", "Nga"];
function bubbleSort(arr) {
    var _a;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
}
bubbleSort(numArray5);
console.log(numArray5);
