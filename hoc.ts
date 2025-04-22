//Step 1: Define the Data Structures

type Point = { x: number; y: number };

interface Shape {
  getArea(): number;
}

//Step 2: Polygon Class with OOD
class Polygon implements Shape {
    private coordinates: Point[];
  
    constructor(coords: Point[]) {
      if (coords.length < 3) throw new Error("A polygon needs at least 3 points.");
      this.coordinates = coords;
    }
  
    getArea(): number {
      return calculateArea(this.coordinates);
    }
  }

  //Step 3: Functional Area Calculator (Shoelace Formula)

  const calculateArea = (points: Point[]): number => {
    const n = points.length;
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      const current = points[i];
      const next = points[(i + 1) % n];
      sum += (current.x * next.y - next.x * current.y);
    }
  
    return Math.abs(sum / 2);
  };

  //Step 4: Higher-Order Function to Generate Area Function

  const createAreaFunction = (points: Point[]): (() => number) => {
    const polygon = new Polygon(points);
    return () => polygon.getArea();
  };

  const triangle: Point[] = [
    { x: 0, y: 0 },
    { x: 4, y: 0 },
    { x: 4, y: 3 }
  ];
  
  const areaFn = createAreaFunction(triangle);
  console.log("Area of triangle:", areaFn());