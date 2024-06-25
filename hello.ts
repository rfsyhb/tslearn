function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Brendan', new Date());

let msg = 'hello';

interface printCoords {
  x: number;
  y: number;
  z?: number; // optional
} // gunakan interface ketika digunakan di banyak hal

// The parameter's type annotation is an object type
function printCoord(pt: printCoords) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

interface Options {
  width: number;
}
function configure(x: Options | 'auto') {
  // ...
}
configure({ width: 100 });
configure('auto');

declare function handleRequest(url: string, method: 'GET' | 'POST'): void;

// const req = { url: 'https://example.com', method: 'GET' as 'GET' }; // pakai assertion
const req = { url: 'https://example.com', method: 'GET' } as const; // ype literal
handleRequest(req.url, req.method);
