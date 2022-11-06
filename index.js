arr1 = ['js', 'css', 'html'];
arr2 = [0, 1, false, 2, undefined, '', 3, null];
arr3 = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4]
];

function showResult1() {
    alert(`Первый элемент: ` + arr1[0]);
}

function showResult2() {
    const arr2Filtered = arr2.filter(function (e) {
        e === true;
        return e;
    });
    alert(`Отфильтрованный массив: ` + arr2Filtered);
}

function showResult3() {
    let x = arr3.findIndex(checkArray);

    function checkArray(arr) {
        return arr.length > 3;
    };
    alert(`Индекс массива: ` + x);
}