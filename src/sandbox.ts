let greet: Function;

greet = () => {
    console.log("Hello World!");
}

greet();

const add = (a: number, b: number, c?: number | string) => {
    console.log(a+b);
    console.log(c);
}

add(5, 10);


