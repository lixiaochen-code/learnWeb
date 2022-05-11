export function border(width=2, color="black", borderRadius=null) {
    if (borderRadius) {
        return {
            borderRadius,
            border : `${width}px solid ${color}`
        }
    } else {
        border : `${width}px solid ${color}`
    }
    
}
export function bg(color) {
    return {
        background : `${color}`
    }
}