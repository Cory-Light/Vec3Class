const _x = Symbol('x');
const _y = Symbol('y');
const _z = Symbol('z');


/**
 * @class Vec3 is a class that handles 3 dimentional vectors
 */
// 
class Vec3 {
    /**
    * Construct a vec3
    *
    * @param {vec3} x an X coordinate
    * @param {vec3} y an y coordinate
    * @param {vec3} z an z coordinate
    * @returns {vec3} a constructed Vec3 with values (x,y,z)
    */
    constructor(x = 0, y = 0, z = 0){
        this[_x] = x
        this[_y] = y
        this[_z] = z
    }
    /**
    * get the x value of a vec3 object
    * @const {Number} x value of a vec3 object
    */
    get x() {
        return this[_x]
    }
    /**
    * get the y value of a vec3 object
    * @const {Number}  y value of a vec3 object
    */
    get y() {
        return this[_y]
    }
    /**
    * get the z value of a vec3 object
    * @const {Number} z value of a vec3 object
    */
    get z() {
        return this[_z]
    }
    /**
    * Copy a vec3 object
    *
    * @returns {vec3} a copy of a given Vec3 object
    */
    copy() {
        var newVec = new Vec3(this.x, this.y, this.z)
        return newVec;
    }
    /**
    * Add 2 vec3 objects together
    *
    * @param {vec3} v A vec3 object
    * @returns {vec3} The sum of the two vectors
    * @throws {TypeError} If the paramater is not of type Vec3
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
    * Subtract 2 vec3 objects together
    *
    * @param {vec3} v A vec3 object
    * @returns {vec3} The difference of the two vectors
    * @throws {TypeError} If the paramater is not of type Vec3
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
    * Scale a vec3 object by a given amount  
    *
    * @param {number} s A number
    * @returns {vec3} A scaled vec3 object
    * @throws {TypeError} If the paramater is not of type Number
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
    * Generate the dot product between two vec3 objects  
    *
    * @param {vec3} v A vec3 object
    * @returns {number} The dot product result of two vectors
    * @throws {TypeError} If the paramater is not of type Vec3
    */
    dot(v){
        if(v instanceof Vec3 === false){
            throw new TypeError('The given parameter for the add function was not of type Vec3');
        }
        var dotProd = (this.x * v.x) + (this.y * v.y) + (this.z * v.z);
        return dotProd;
    }
    /**
    * Generate the cross product of two vectors  
    *
    * @param {vec3} v A vector
    * @returns {vec3} The cross product between the two given vectors
    * @throws {TypeError} If the paramater is not of type Vec3
    */
    cross(v){
        if(v instanceof Vec3 === false){
            throw new TypeError('The given parameter for the cross function was not of type Vec3');
        }
        var newX = (this.y * v.z) - (this.z * v.y)
        var newY = (this.z * v.x) - (this.x * v.z)
        var newZ = (this.x * v.y) - (this.y * v.x)

        var newVec = new Vec3(newX,newY,newZ)
        return newVec
    }
    /**
    * Measure the angle between this vector and the x-axis  
    *
    * @returns {Number} The angle value
    */
    angle(){
        var angle = Math.atan2(this.y,this.x)
        return angle
        
    }
    /**
    * Measure the angle between this vector and the given vector 
    *
    * @param {vec3} v A vector
    * @returns {vec3} The angle value
    * @throws {TypeError} If the paramater is not of type Vec3
    * @throws {Error} If the parameter is a zero vector
    */
    angleBetween(v){
        if(v instanceof Vec3 === false){
            throw new TypeError('The given parameter for the angleBetween function was not of type Vec3');
        }
        if(this.x == 0 && this.y == 0  && this.z == 0 || v.x == 0 && v.y == 0 && v.z == 0) {
            throw new Error("Since one of the Vectors are zero vector, is it impossible to measure the angle between them")
        }
        var normA = this.normalize()
        var normB = v.normalize()
        var dotVal = normA.dot(normB)

        if(dotVal > 1) {
          return 0
        }
        else if(dotVal < -1) {
          return Math.PI
        }
        else {
          return Math.acos(dotVal)
        }

    }
    /**
    * Measure the length of this vector
    * @returns {Number} The length value
    */
    length(){
        var xVal = this.x * this.x
        var yVal = this.y * this.y
        var zVal = this.z * this.z
        var lengthVal = Math.sqrt(xVal + yVal+ zVal)
        return lengthVal
    }
    /**
    * Calculate the distance between two vector's endpoints
    * @param {vec3} v A vector
    * @returns {vec3} The distance value
    * @throws {TypeError} If the paramater is not of type Vec3
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
    * Normalize a vector so that it's length is 1
    * @returns {Vec3} The normalized Vector
    */
    normalize(){
        var vecLength = this.length()
        var newX = this.x / vecLength
        var newY = this.y / vecLength
        var newZ = this.z / vecLength

        var newVec = new Vec3(newX,newY,newZ)
        return newVec
    }
    /**
    * Checks if the this vector is equal to the given vector  
    *
    * @param {vec3} v A vector
    * @returns {Boolean} True if equal, false if not
    * @throws {TypeError} If the paramater is not of type Vec3
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
    }/**
    * Generate the cross product of two vectors  
    *
    * @param {vec3} v A vector
    * @returns {vec3} The cross product between the two given vectors
    */
    [Symbol.toPrimitive](hint) {
        if(typeof(hint) !== "string") {
            throw new TypeError('The given parameter for the toPrimative function was not of type String');
        }
        var vecString = "Vec3[x:" + this.x + ",y:" + this.y + ",z:" + this.z + "]"
        return vecString
    }
}

module.exports = Vec3