import React from "react";
import blog from "./blog";

import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

function App() {
  const articles = blog.articles;

  return (
    <div>
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={articles} />
    </div>
  );
}

export default App;