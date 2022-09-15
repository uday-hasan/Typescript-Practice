import React from 'react';

function App() {
  //Declaring Variable
  const name: string = "Uday";
  let age: number = 21;
  let isStudent: boolean = true;
  let favSubject_code: (string | number)[] = ['Mechanical Engineering', 101, 'Computer Science And Engineering'];
  let studyPosition: [string, string | number] = ['CSE', '1st Year(current)']

  interface Student {
    name: string,
    id: number;
    currentYear: number | string
  }

  const student1: Student = {
    name: 'Alex',
    id: 101,
    currentYear: 1
  }
  const student2: Student = {
    name: 'Alex',
    id: 101,
    currentYear: '1st Year'
  }
  return (
    <div>
      <h3>Name : {name}</h3>
      <h3>age : {age}</h3>
      <h3>isStudent : {isStudent ? 'true' : 'false'}</h3>
      <h3>Fav Subject{
        favSubject_code.map(s => <li>{s}</li>)
      }
      </h3>
      <h3>
        {
          studyPosition.map(sp => <li>{sp}</li>)
        }
      </h3>
      <h3>
        Student1
        <div>
          Name:{student1.name}
        </div>
        <div>
          currentYear:{student1.currentYear}
        </div>
      </h3>
      <h3>
        Student2
        <div>
          Name:{student2.name}
        </div>
        <div>
          currentYear:{student2.currentYear}
        </div>
      </h3>
    </div >
  );
}

export default App;
