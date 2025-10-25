export { makeHeader, makeParagraph, makeImage };

function makeHeader(text) {
    const h = document.createElement("h1");
    h.textContent = text;
    return h;
}

function makeParagraph(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
}

function makeImage(src) {
    const i = document.createElement("img");
    i.src = src;
    return i;
}