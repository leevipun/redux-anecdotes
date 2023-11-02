import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { voteNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const anecdotes = useSelector((state) => {
    const filter = state.filter.toLowerCase();
    return state.anecdotes.filter(
      (anecdote) =>
        typeof anecdote.content === "string" &&
        anecdote.content.toLowerCase().includes(filter)
    );
  });
  const dispatch = useDispatch();

  const voteAnecdote = (id, content) => {
    console.log(id);
    console.log(content);
    dispatch(vote(id));
    dispatch(voteNotification(content));
    dispatch({ type: "SORT" });
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteAnecdote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteForm;
