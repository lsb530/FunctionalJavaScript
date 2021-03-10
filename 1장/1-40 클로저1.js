function parent() {
    const a = 5;
    function myfn() {
        console.log(a);
    }
}
// 혹은
function parent2() {
    const a = 5;
    function parent1() {
        function myfn() {
            console.log(a);
        }
    }
}