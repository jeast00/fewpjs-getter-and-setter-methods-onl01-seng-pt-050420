// Add your Circle class here

const pi = Math.PI

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    return this.radius * 2;
  }
  
  get circumference() {
    return (this.radius * 2) * pi;
  }
  
  get area() {
    return Math.pow(this.radius * 2, 2) * pi;
  }
  
  set diameter() {
    
  }
  
  set circumference() {
    
  }  
  
  set diameter() {
    
  }
}





