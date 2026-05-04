import blog from "../blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

export default function App() {
  return (
    <div>
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.articles} />
    </div>
  );
}