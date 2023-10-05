var inputValue="";
function destiny(inputV, destination) {
    if(destination=="bfat"||destination=="efat"||destination=="dfat"||destination=="fat") {
        return inputV*9;
    }
    else return inputV*4;
}
function retrieve (inputName, destination) {
    document.getElementById(destination).innerHTML=destiny(inputName.value, destination);
}
function total(inputName1, inputName2, inputName3, destination) {
    document.getElementById(destination).innerHTML=
    destiny(inputName1.value, "fat")+destiny(inputName2.value)+destiny(inputName3.value);
}
