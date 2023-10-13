const headingReact = React.createElement(
  "h3",
  { atr: "abc", id: "h3-id" },
  "Hello from React Js"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingReact);


// creating nested elements using React

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", {id: 'child'}, React.createElement("h1", {}, "I am h1 from nested div!!"))
  );

  const root1 = ReactDOM.createRoot(document.getElementById("rt"));
  root1.render(parent);
