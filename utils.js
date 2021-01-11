export function replaceArray(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        array1[i].textContent = array2[i].value;
    }
}