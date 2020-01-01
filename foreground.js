function AddClassHandler(e, ElementClassString) {
    let selected = window.getSelection().anchorNode.parentNode;
    if (selected.classList.contains(ElementClassString)) {
        selected.classList.remove(ElementClassString);
    } else {
        selected.classList.add(ElementClassString);
    }
}

function GetKeyValue() {
    document.addEventListener('keydown',(e) => {
        if (e.code === "Keyu" && e.ctrlKey === true) {
            AddClassHandler(e, "strike");
        }
        if (e.code === "Keyk" && e.ctrlKey === true) {
            AddClassHandler(e, "highlight");
        }
    });
}

document.onselect = GetKeyValue();
