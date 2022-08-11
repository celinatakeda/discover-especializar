type Point = {
  x: number,
  y: number
}

function printCoord(points: Point) {
  console.log(points.x);
  console.log(points.y);
}

printCoord({x:101, y: 50})

/* Outro exemplo */
type User = {
  name: string;
  email: string;
  age: number;
  isAdmin: boolean;
}

