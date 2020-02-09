const _x = Symbol('x');
const _y = Symbol('y');
const _z = Symbol('z');


/**
 * @class Vec3 is a class that handles 3 dimentional vectors
 */
// 
class Vec3 {
    constructor(x = 0, y = 0, z = 0){
        this[_x] = x
        this[_y] = y
        this[_z] = z
    }
    get x() {
        return this[_x]
    }
    get y() {
        return this[_y]
    }
    get z() {
        return this[_z]
    }
    /**
     * Creates a new vector with the given properties.
     * @return Vec3
     */
    copy() {
        var newVec = new Vec3(this.x, this.y, this.z)
        return newVec;
    }
    /**
     * Returns a new vector instance with the same property values as this instance.
     * @return Vec3
     */
    add(v) {
        if(v instanceof Vec3 === false){
            throw new TypeError('The given parameter for the add function was not of type Vec3');
        }
        
        var newVecX = this.x + v.x;
        var newVecY = this.y + v.y;
        var newVecZ = this.z + v.z;

        var newVec = new Vec3(newVecX, newVecY, newVecZ)
        return newVec;
    }
    /**
     * This method must return a new vector equal to the difference between this vector and the given vector.
     * @return Vec3
     */
    sub(v) {
        if(v instanceof Vec3 === false){
            throw new TypeError('The given parameter for the add function was not of type Vec3');
        }
        var newVecX = this.x - v.x;
        var newVecY = this.y - v.y;
        var newVecZ = this.z - v.z;

        var newVec = new Vec3(newVecX, newVecY, newVecZ)
        return newVec;
    }
    /**
     * Scales the properties of this vector by the given number and returns the result as a new vector.
     * @return Vec3
     */
    scale(s) {
        if(typeof(s) !== 'number') {
            throw new TypeError('The given parameter for the scale function was not of type Number');
        }
        var newVecX = this.x * s;
        var newVecY = this.y * s;
        var newVecZ = this.z * s;

        var newVec = new Vec3(newVecX, newVecY, newVecZ)
        return newVec;
    }
    /**
     * This method must compute the dot product of this vector and the given vector, returning the resulting Number.
     * @return Number
     */
    dot(v){
        if(v instanceof Vec3 === false){
            throw new TypeError('The given parameter for the add function was not of type Vec3');
        }
        var dotProd = (this.x * v.x) + (this.y * v.y) + (this.z * v.z);
        return dotProd;
    }
    /**
     * This method must compute the cross product of this vector and the given vector.
     * @return Vec3
     */
    cross(v){
        if(v instanceof Vec3 === false){
            throw new TypeError('The given parameter for the cross function was not of type Vec3');
        }
    }
    /**
     * Returns the angle between this vector and the x axis.
     * @return Number
     */
    angle(){

    }
    /**
     * Returns the angle in radians between this vector and the given vector.
     * @return Number
     */
    angleBetween(v){
        if(v instanceof Vec3 === false){
            throw new TypeError('The given parameter for the angleBetween function was not of type Vec3');
        }
        var lenA = v.length()
        var lenB = this.length()
        var angleTemp = Math.cos(this.dot(v) / (lenA * lenB))
        var angle = Math.acos(angleTemp)
        return angle

    }
    /**
     * This method must compute the length of this vector.
     * @return Number
     */
    length(){
        var xVal = this.x * this.x
        var yVal = this.y * this.y
        var zVal = this.z * this.z
        var lengthVal = Math.sqrt(xVal + yVal+ zVal)
        return lengthVal
    }
    /**
     * Returns the distance between this vector and the given vector.
     * @return Number
     */
    distance(v){
        if(v instanceof Vec3 === false){
            throw new TypeError('The given parameter for the distance function was not of type Vec3');
        }
        var xVal = v.x - this.x
        var yVal = v.y - this.y
        var zVal = v.z - this.z
        var distanceVal = Math.sqrt(xVal*xVal + yVal*yVal + zVal*zVal)
        return distanceVal
    }
    /**
     * This method should return a vector in the same direction as this vector but with a length of one.
     * @return Vec3
     */
    normalize(){

    }
    /**
     * Returns true if all the components of this vector and the given vector are equal, false otherwise.
     * @return Vec3
     */
    equals(v){
        if(v instanceof Vec3 === false){
            throw new TypeError('The given parameter for the equals function was not of type Vec3');
        }
        var equalBool = true
        if(v.x == this.x &&  v.y == this.y && v.z == this.z){
            return equalBool
        }
        else {
            equalBool = false
            return equalBool
        }
    }
    toPrimitive(hint) {
        if(typeof(hint) !== "string") {
            throw new TypeError('The given parameter for the toPrimative function was not of type String');
        }
        var vecString = "Vec3[x:" + this.x + ",y:" + this.y + ",z:" + this.z + "]"
        return vecString
    }
}

var testString = "test"

var a = new Vec3(4,6,8);
var b = a.copy();
var c = a.add(b);
var d = a.sub(c);
var e = a.scale(3);
var f = a.dot(b);
var testEqual = a.equals(b)
var testEqualf = a.equals(d)
var testLength = a.length()
var toPrim = e.toPrimitive("string")
var angleBet = a.angleBetween(c)
d.y = 4;



console.log("A: ",a)
console.log("C: ",c)
console.log("D: ",d)
console.log("E: ",e)
console.log("F: ",f)
console.log("Equal1: ",testEqual)
console.log("Equal2: ",testEqualf)
console.log("Length: ",testLength)
console.log("angleBet: ", angleBet)