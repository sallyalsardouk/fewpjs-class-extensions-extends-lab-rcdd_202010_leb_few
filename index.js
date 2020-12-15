// Your code here
class Polygon{
  constructor(arr){
    this.arr=arr
  }
  get countSides(){ return this.arr.length
}
get perimeter(){
  let sum=0
  forEach (count in this.arr)
    sum+=count

  return sum
}
}
class Triangle extends Polygon{
  get isValid(){
    let arr1=this.arr[0]
    let arr2=this.arr[1]
    let arr3=this.arr[2]
    return ( (arr1+arr2>arr3) &&(arr1+arr3>arr2) &&(arr2+arr3>arr1))
    }
  }
class Square extends Polygon{
  get isValid(){
    let arr1=this.arr[0]
    let arr2=this.arr[1]
    let arr3=this.arr[2]
    let arr4=this.arr[3]
    retun (arr1=arr2=arr3=arr4)
  }
  get area(){
    return this.arr[0]*this.arr[1]
  }
}