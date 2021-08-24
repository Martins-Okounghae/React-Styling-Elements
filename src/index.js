import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";
//const img2 = "https://nigeriankitchenbarrie.com/wp-content/uploads/2021/03/images-13-450x450.jpeg";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false" spellCheck="true">
      My Favourite Foods
    </h1>

    <img alt="" src={img + "?grayscale"} />
    <div>
      <img
        alt=""
        className="food-img"
        src="https://nigeriankitchenbarrie.com/wp-content/uploads/2021/03/images-13-450x450.jpeg"
      />
      <img
        alt=""
        className="food-img"
        src="https://africanvillage.ca/wp-content/uploads/2020/08/1g.jpg"
      />
      <img
        alt=""
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6CUCYmJKSvX-5QlCi5lL9562MeMHFOytgw&usqp=CAU"
      />
    </div>
  </div>,
  document.getElementById("root")
);
