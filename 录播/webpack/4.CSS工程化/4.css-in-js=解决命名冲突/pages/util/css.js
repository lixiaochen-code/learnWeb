export function applyStyles(dom, styles) {
    for (const key in styles) {
        dom.style[key] = styles[key]
    }
}