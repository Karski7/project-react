import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import shortid from 'shortid';
import initialState from './initialState';
import { strContains } from '../utils/strContains';

const ADD_COLUMN = 'ADD_COLUMN';
const ADD_CARD = 'ADD_CARD';
const UPDATE_SEARCHSTRING = 'UPDATE_SEARCHSTRING';

export const getAllColumns = ({ columns }) => columns;

export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, searchString)
  );

export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });

export const addCard = (payload) => ({ type: ADD_CARD, payload });

export const updateSearchString = (payload) => ({
  type: UPDATE_SEARCHSTRING,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }],
      };
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }],
      };
    case UPDATE_SEARCHSTRING:
      return {
        ...state,
        searchString: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState, devToolsEnhancer());

export default store;
