function throwErrorRandomly() {
    if (Math.random() > 0.5) {
        throw new Error("Error-r-r");
    }
}

function throwErrorRandomlyWithCounter() {
    let count = 0;
    return function () {
        try {
            ++count;
            throwErrorRandomly();
        } catch (e) {
            console.log(e.message);
        }
        console.log(count);
    }

}
const a = throwErrorRandomlyWithCounter();
a();
a();