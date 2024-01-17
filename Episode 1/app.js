const f = React.createElement(
  "h1",
  {
    id: "philips",
    className: "pew", // Use className instead of class
    // style: { backgroundColor: "red" }, // Use an object for inline styles
  },
  "Namaste Everyone"
);

const h1 = React.createElement(
  "h1",
  {
    id: "i",
  },
  "Heading 1"
);
const h2 = React.createElement(
  "h2",
  {
    id: "i",
  },
  "Heading 2"
);

const container = React.createElement("div", { id: "container" }, [f, h1, h2]);
const s = ReactDOM.createRoot(document.getElementById("root"));
// s.render(f);
s.render(container);
