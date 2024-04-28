import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

const headerName = "Mini-Project"
const imageURL = "https://media.licdn.com/dms/image/C4D03AQELWJ3PqpQT9Q/profile-displayphoto-shrink_200_200/0/1656969693857?e=1720051200&v=beta&t=GmbrdBIdYuktSK5jau6h6OLOwHVFdZW7QcxzgTAe-w8"
const aboutText = "My name is Gideon Mutai. I am an aspiring A1 software engineer, and have a keen interest in AI/ML which endevour to pursue. I raise the sails, man the board, and let God control the gust of the wind. Onwards and upwards!"
const articles = [
  {
    title: "Origami",
    date: "August 30, 2023",
    preview: "Of Japanese origin, an art of paper folding..."
  },
  {
    title: "Terms & Conditions",
    date: "August 12, 2023",
    preview: "As you mind your Ps and Qs, be sure to mind your Ts and Cs..."
  }
]

function App() {
  return (
    <div className="App">
      <Header name= {headerName}/>
      <About image= {imageURL} about={aboutText}/>
      <ArticleList articles= {articles}/>
    </div>
  );
}

export default App;
