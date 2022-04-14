import { configureStore } from "@reduxjs/toolkit";
import words_Reducer from "./slices/all_words";
import score_Reducer from "./slices/score"

export const store = configureStore({
    reducer:{
        all_words: words_Reducer,
        score: score_Reducer,
    },
});