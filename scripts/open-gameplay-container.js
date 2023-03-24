var open_gameplay_cont_id = "cont-category";
var gameplay_cont_class = "card-gameplay";
var gameplay_conts = document.getElementsByClassName(gameplay_cont_class);
const OPEN_ATTRIBUTE = "open";
const styles = `
[open] {
    flex: 12;
}

.card-gameplay {
    transition: flex 1s;
    transition-timing-function: ease;
}
`

var styleSheet = document.createElement("style");
styleSheet.innerText = styles


window.onload = () => {
    document.head.appendChild(styleSheet);
    addAttribute(open_gameplay_cont_id, OPEN_ATTRIBUTE);

    Array.prototype.forEach.call(gameplay_conts, (e) => {
        e.addEventListener("click", (e) => {
            let gameplay_card_id = e.srcElement.id;
            if(nullOrEmpty(gameplay_card_id)) {
                console.error("Source Element ID is Null")
                gameplay_card_id = getParentGamePlayCard(e.srcElement);
                if(nullOrEmpty(gameplay_card_id)) return;
            }
            if(gameplay_card_id == open_gameplay_cont_id) return;
            openGamePlayContainer(gameplay_card_id);
        })
    });
}

function openGamePlayContainer(source_element_id) {
    removeAttribute(open_gameplay_cont_id, OPEN_ATTRIBUTE);
    addAttribute(source_element_id, OPEN_ATTRIBUTE);
}

function addAttribute(element_id, attribute) {
    // console.log("Opening []", element_id);
    document.getElementById(element_id).setAttribute(attribute, "");
    open_gameplay_cont_id = element_id;
    console.log("New Gameplay Container: [" + element_id + "]", document.getElementById(element_id));

}

function removeAttribute(element_id, attribute) {
    let element_to_close = document.getElementById(element_id);
    if(element_to_close.getAttribute(OPEN_ATTRIBUTE) == null) return;
    // console.log("Closing []", element_id);
    document.getElementById(element_id).removeAttribute(attribute);
}

function nullOrEmpty(value) {
    return (value == null || value == "");
}


function getParentGamePlayCard(child_element) {
    // console.log("Looking for gameplay card...")
    let node = child_element.parentNode;
    while (node) {
        if (node.classList.contains(gameplay_cont_class)) {
            return node.id;
        }
        node = node.parentNode;
    }
    return null;
};