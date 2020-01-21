const wait = time => new Promise((resolve) => setTimeout(resolve, time));

const fakeAjax = async () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Pass');
        } else {
            reject();
        }
    });
};

(async () => {
    try {
        const resultParallel = await Promise.all([
            fakeAjax().catch(err => {
                return 'Fail';
            }),
            fakeAjax().catch(err => {
                return 'Fail';
            }),
            fakeAjax().catch(err => {
                return 'Fail';
            })
        ]);
        console.log(resultParallel);
    } catch (err) {
        console.log(err);
    }
})();

(async () => {
    let i = 0;
    while (i < 3) {
        try {
            let resultSerial = await fakeAjax();
            await wait(1000);
            console.log(resultSerial)
        } catch (err) {
            console.log('Fail');
        }
        i++;
    }
})();