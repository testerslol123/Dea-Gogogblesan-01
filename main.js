var inputColorName = ""

function ubahWarnaBoss() {
    document.getElementById("targetObject").style.backgroundColor = inputColorName;
}

function ubahLatar() {
    inputColorName = document.getElementById("inputHexa").value;
    ubahWarnaBoss();
}