function Fibonacci(num) {
    let i;
    let fib = [0,1,1];
    if (num === 1) return [0,1]
    if (num === 2) return [0,1,1]
    for(i=2; i<=num; i++) {
        fib.push(fib[i-1]+fib[i])
    }
    return fib
}

console.log(Fibonacci(10));











