import './App.css';
import React from 'react';
const desserts = ['tiramisu', 'ice cream', 'cake'];

const buttonElement = {
  type: "submitbutton",
  props: {
    color: "green",
    children: "submit",
    count: true
  }
}
const output = React.cloneElement(
  buttonElement, { count: false, rang: "red" },
); {/*react.cloneelement(element , props)*/ }


const pRint = () => { console.log("print"); console.log(buttonElement); console.log(output) }
const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }} onClick={pRint}>{children}</button>;
}
function Dessert(props) {
  return <li>{props.title}</li>;
}

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay"></div>
      <div className="Alert">
        {children}
      </div>
    </>
  );
}

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;
}

const Button1 = ({ onClickfun, children }) => (<button onClick={onClickfun}>{children}</button>)


const onClickfun = () => console.log("hello");

const Row = () => {

}
function App() {
  return (
    <div className="App">
      <Button1 onClickfun={onClickfun}>Click Me</Button1>
      <ul>
        {
          desserts.map(
            (dessert) =>
              <Dessert key={dessert} title={dessert} />
          )
        }
      </ul>
      <Alert>
        <h4>wanna delete</h4>
        <p>warning wanna deleta</p>
        <DeleteButton />
      </Alert>
    </div>
  );
}
export default App;
