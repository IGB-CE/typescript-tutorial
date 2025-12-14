import './App.css'
import InputField from './components/InputField'

// let name: string;
// // union type for age = number or string
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// // Tuple type for role = fixed-length array with specific types
// let role: [number, string];

// let printName: (name: string) => never;
// // function printName(name:string) {
// //   console.log("Name is: " + name);
// // }

// // type Person = {
// //   name: string;
// //   age?: number;
// // }

// // let person: Person = {
// //   name: "Alice",
// // }

// // let lotsOfPeople: Person[];

// interface Person {
//   name: string;
//   age?: number;
// }

// interface Guy extends Person {
//   profession: string;
// }

// type X = Person & {
//   a: string;
//   b: number;
// } 

// type Y =  {
//   c: number;
//   d: boolean;
// }

// let y: Y ={
//   c: 100,
//   d: true
// };

// let personName: unknown;

const App: React.FC = () => {
  return (
    <div className="App">
     <span className="heading">Taskify</span>
     <InputField />
    </div>
  )
}

export default App
