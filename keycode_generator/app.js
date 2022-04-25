// target.document.addEventListener($type, $listener);

const code = document.getElementById("codeInfo")
const key1 = document.getElementById("keyInfo1")
const key2 = document.getElementById("keyInfo2")
const type = document.getElementById("whichInfo")

document.addEventListener("keydown", (event) => {
    code.textContent = event.code;
    key1.textContent = event.key;
    key2.textContent = event.key;
    type.textContent = event.which;
});