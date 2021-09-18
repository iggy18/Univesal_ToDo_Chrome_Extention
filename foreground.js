function StrikeHandler(e) {
    let selected = window.getSelection().anchorNode.parentNode;
    if (selected.classList.contains("strike")) {
        selected.classList.remove("strike");
    } else{
        selected.classList.add("strike");
    }
}

function GetKeyValue() {
    document.addEventListener('keydown',(e) => {
        if (e.code === "KeyM" && e.ctrlKey === true) {
            StrikeHandler(e);
        }
    });
}

document.onselect = GetKeyValue();
