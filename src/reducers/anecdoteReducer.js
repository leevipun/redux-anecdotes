import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload);
    },
    vote(state, action) {
      console.log("päästiin tänne");
      console.log(action.type);
      console.log(action.payload);
      const id = action.payload;
      const anecdoteToChange = state.find((anecdote) => anecdote.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdote(state, action) {
      return action.payload;
    },
  },
});

export const { createAnecdote, vote, appendAnecdote, setAnecdote } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
