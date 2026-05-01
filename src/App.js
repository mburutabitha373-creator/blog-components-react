import React from "react";
import blog from "./blog";

import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div>
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.articles} />
    </div>
  );
}

export default App;