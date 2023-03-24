var open_gameplay_cont_id = "cont-category";
var gameplay_cont_class = "cont-gameplay";
var gameplay_conts = document.getElementsByClassName(gameplay_cont_class);
const OPEN_ATTRIBUTE = "open";
const styles = `
[open] {
    flex: 7;
}
`

var styleSheet = document.createElement("style");
styleSheet.innerText = styles


window.onload = () => {
    document.head.appendChild(styleSheet);
    addAttribute(open_gameplay_cont_id, OPEN_ATTRIBUTE);

    Array.prototype.forEach.call(gameplay_conts, (e) => {
        e.addEventListener("click", (e) => {
            console.log(e.srcElement.id);
            openGamePlayContainer(e.srcElement.id);
        })
    });
}

function openGamePlayContainer(source_element_id) {
    if(source_element_id == open_gameplay_cont_id) return;
    removeAttribute(open_gameplay_cont_id, OPEN_ATTRIBUTE);
    addAttribute(source_element_id, OPEN_ATTRIBUTE);
}

function addAttribute(element_id, attribute) {
    console.log("Opening []", element_id);
    console.log(document.getElementById(element_id));
    document.getElementById(element_id).setAttribute(attribute, "");
    open_gameplay_cont_id = element_id;
    console.log("New Gameplay Container: []", element_id);

}

function removeAttribute(element_id, attribute) {
    let element_to_close = document.getElementById(element_id);
    if(element_to_close.getAttribute(OPEN_ATTRIBUTE) == null) return;
    console.log("Closing []", element_id);
    document.getElementById(element_id).removeAttribute(attribute);
}

