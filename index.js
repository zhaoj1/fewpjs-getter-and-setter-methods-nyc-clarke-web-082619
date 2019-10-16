let pi = Math.PI

class Circle{

    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return this.diameter * pi 
    }

    get area(){
        return pi * this.radius ** 2
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2
    }

    set circumference(newCircumference){
        this.radius = newCircumference/(2 * pi)
    }

}