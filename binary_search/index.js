// Бинарный поиск применим ТОЛЬКО для сортированного списка
// В общем случае для списка из n элементов бинарный поиск
// выполняется за log2n шагов, где n - максимальное кол-во шагов при
// обычном поиске
function binary_search(list, item) {
    var low = 0;
    var high = list.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var guess = list[mid];
        if (guess == item) {
            return mid;
        }
        if (guess > item) {
            high = mid + 1;
        }
        else {
            low = mid + 1;
        }
    }
    return null;
}
var list = [1, 3, 5, 7, 9, 11];
console.log(binary_search(list, 3));
