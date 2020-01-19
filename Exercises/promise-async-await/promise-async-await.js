const wait = time => new Promise((resolve) => setTimeout(resolve, time));

const fakeAjax = async () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.1) {
            resolve(console.log('200'))
        } else {
            reject(new Error('Server error'));
        }
    });
};

(async () => {
    try {
        await Promise.all([
            fakeAjax().catch(err => {
                console.log(err);
                return null;
            }),
            fakeAjax().catch(err => {
                console.log(err);
                return null;
            }),
            fakeAjax().catch(err => {
                console.log(err);
                return null;
            })
        ]);
    } catch (err) {
        console.log(err);
    }
})();

console.log('-----------');

(async () => {
    let i = 0;
    while (i < 3) {
        try {
            await fakeAjax();
            await wait(1000);
        } catch (err) {
            console.log(err);
        }
        i++;
    }
})();