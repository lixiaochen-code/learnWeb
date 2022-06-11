const a = 1;
const fun = () => {
    console.log(a);
}
new Promise(resolve => {
    resolve();
})