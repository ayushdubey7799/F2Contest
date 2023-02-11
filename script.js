/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  const ans = arr.filter(student => student.marks > 50)
                 .map(student => student);

  console.log(ans);

}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student => {
    if(student.marks > 50){
      console.log(student.name);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newStudent = {id: 4, name: "susan", age: 20, marks: 45};
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter(student => student.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const anotherArray = [
    {id: 4, name: "alice", age: "22", marks: 75 },
    {id: 5, name: "bob", age: "21", marks: 60 },
    {id: 6, name: "carol", age: "20", marks: 90 }
  ];

  function concatenate() {
    const concatenatedArray = arr.concat(anotherArray);
    console.log(concatenatedArray);
  }
  concatenate();
}
