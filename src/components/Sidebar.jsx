import Searcher from "./Searcher";
import Categories from "./Categories";
import "./styles/Sidebar.css";

export default function Sidebar({ input, setInput, category, setCategory }) {
  return (
    <div className="sidebar">
      <Searcher input={input} setInput={setInput}></Searcher>
      <Categories input={category} setInput={setCategory}></Categories>
    </div>
  );
}
