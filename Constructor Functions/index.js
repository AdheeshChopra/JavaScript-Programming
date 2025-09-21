// const circle={
//   radius:1,
//   location:{
//     x:1,
//     y:1
//   },
//   isVisible: true,
//   draw: function(){
//     console.log('draw');
//   }
// };

// Factory functions

function createCircle(radius){
  return{
    radius,
    draw(){
      console.log('draw');
    }
  };
}

const myCircle=createCircle(1);
console.log(myCircle);

// Constructor Functions

function Circle(radius){
  this.radius=radius;
  this.draw=function(){
    console.log('draw');
  }
}
const circle =new Circle(1);
