// question 3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

//   question 4

function areaRec(){
    let length = 5;
    function innerFucntion(){
        let width = 4;
        let area = length * width;
        console.log(area);
    }
   return innerFucntion();
}
let areaResult = areaRec();
areaResult();

// question 5

function outer(){
    let counter = 0;
    function inner(){
       return counter+=1;
        
    }
    return inner();
}
let result = outer();
console.log(result());