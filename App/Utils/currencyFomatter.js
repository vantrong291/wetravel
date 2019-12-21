export const formatter = (price) => {
    return price.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
}