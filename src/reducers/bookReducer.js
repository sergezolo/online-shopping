const initialState = {
    books: [
        {
            id: 0,
            title: "MYTHOS",
            author: "Stephen Fry"
        },
        {
            id: 1,
            title: "HEROES",
            author: "Stephen Fry"
        },
        {
            id: 2,
            title: "TROY",
            author: "Stephen Fry"
        },
        {
            id: 3,
            title: "FAHRENHEIT 451",
            author: "Ray Bradbury"
        },
        {
            id: 4,
            title: "SAPIENS",
            author: "Yuval Noah Harari"
        },
        {
            id: 5,
            title: "HOMO DEUS",
            author: "Yuval Noah Harari"
        },
    ],
    ids: [],
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case('GET_BOOKS'):
            return {...state, books: action.payload};
        case('ADD_BOOK'):
            return {...state, books: [...state.books, action.payload]};
        default:
            return state;
    }
}

export default bookReducer;