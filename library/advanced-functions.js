async function awaitAll(...promises) {
    for (let promise of promises) {
        await promise;
    }
}

function* evens() {
    let i = 2;
    while (true) {
        yield i;
        i += 2;
    }
}

async function* dribble(interval, ...values) {
    for (let value of values) {
        await new Promise(resolve => setTimeout(resolve, interval));
        yield value;
    }
}

class Utils {
    async awaitAll(...promises) {
        for (let promise of promises) {
            await promise;
        }
    }

    * evens() {
        let i = 2;
        while (true) {
            yield i;
            i += 2;
        }
    }

    async * dribble(interval, ...values) {
        for (let value of values) {
            await new Promise(resolve => setTimeout(resolve, interval));
            yield value;
        }
    }
}
