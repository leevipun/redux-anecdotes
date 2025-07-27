import { useEffect, useState } from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, []); // Add empty dependency array

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter setFilter={setFilter} />
      <Notification />
      <AnecdoteForm filter={filter} />
      <AnecdoteList />
    </div>
  );
};

export default App;
