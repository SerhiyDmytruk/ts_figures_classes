export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape,
  color: Color,
}

export class Triangle implements Figure {
  public area: number;

  constructor(
    public shape: Shape.Triangle,
    public color: Color,
    public a: number,
    public b: number,
    public c: number
  ){
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be positive numbers');
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }

    const s: number = (a + b + c) / 2

    this.area = Math.sqrt( s * (s - a) * (s - b) * (s - c));
  }

  getArea(): number {
    return this.area;
  }
}

export class Circle implements Figure {
  public area: number;

  constructor(
    public shape: Shape.Circle,
    public color: Color,
    public radius: number,
  ){
    if (radius <= 0) {
      throw new Error('Radius should be more then 0');
    }

    this.area = Math.PI * radius;
  }

  getArea(): number {
    return this.area
  }
}

export class Rectangle implements Figure {
  public area: number;

  constructor(
    public shape: Shape.Rectangle,
    public color: Color,
    public width: number,
    public height: number
  ){
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be positive numbers');
    }


    this.area = width * height;
  }

  getArea(): number {
    return this.area
  }
}

export function getInfo(figure): string {
  const { color, shape } = this;

  return `A ${color} ${shape} - ${typeof figure}` ;
}