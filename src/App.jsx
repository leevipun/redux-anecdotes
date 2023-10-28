import { useState } from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";

const App = () => {
  const [filter, setFilter] = useState("");
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter setFilter={setFilter} />
      <AnecdoteForm filter={filter} />
      <AnecdoteList />
    </div>
  );
};

export default App;
