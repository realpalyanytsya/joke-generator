import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { type Joke } from './jokesInterfaces';
import { JOKES_LS_KEY } from '@/config';

const jokesFromLS = JSON.parse(localStorage.getItem(JOKES_LS_KEY) ?? '[]');

export interface jokesState {
    jokes: Joke[];
    pool: Joke[];
}

const initialState: jokesState = {
    jokes: jokesFromLS,
    pool: jokesFromLS
};

export const jokesSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {
        setJokes: (state, action: PayloadAction<Joke[]>) => {
            state.jokes = action.payload;
        },
        setPool: (state, action: PayloadAction<Joke[]>) => {
            state.pool = action.payload;
        }
    }
});

export const { setJokes, setPool } = jokesSlice.actions;

export const selectJokes = (state: RootState) => state.jokes;

export default jokesSlice.reducer;
