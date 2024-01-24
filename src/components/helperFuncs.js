export function resetIDs(arr) {
    for (let i = 0; i < arr.length; i++) arr[i].id = i + 1;
    return arr;
}

export function sortArr(arr) {
    const uncheckedItems = arr.filter(item => !item.checked);
    const checkedItems = arr.filter(item => item.checked);
    const sorted = [...uncheckedItems, ...checkedItems];
    return resetIDs(sorted);
}