// console.log(Array.from(document.getElementsByTagName("a")).filter((e) => { return e.href.startsWith("magnet"); }).map((e) => { return e.href; }).join("\n"))
const button = document.createElement("button")
button.onclick = function setClipBoard() {
    const link_elements = Array.from(document.getElementsByTagName("a"));
    const magnet_link_elements = link_elements.filter((e) => { return e.href.startsWith("magnet"); });
    const magnet_links = magnet_link_elements.map((e) => { return e.href; })
    const to_copy = magnet_links.join("\n")
    navigator.clipboard.writeText(to_copy)
}
button.textContent = "Copy Links"

const table = document.evaluate(
    "//body/div",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
).singleNodeValue

if (table != null) {
    table.insertBefore(button, table.firstChild)
}