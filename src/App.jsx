import { useEffect, useState } from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import { setAnecdote } from "./reducers/anecdoteReducer";
import anecdoteService from "./services/anecdotes";

const App = () => {
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService
      .getAll()
      .then((anecdotes) => dispatch(setAnecdote(anecdotes)));
  });

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
