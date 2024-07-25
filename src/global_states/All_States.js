import React, { useReducer, useState } from 'react';
import mainContext from '../context/mainContext';
const AllStates = (props) => {
    const [authToken, setAuthToken] = useState('');
    const [search, setSearch] = useState('');
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                return [...state, { ...action }];

            default:
                console.log("Error in Reducer");
                break;
        }

    }
    const [state, dispatch] = useReducer(reducer, []);
    console.log(state)
    return (
        <mainContext.Provider value={{ authToken, setAuthToken, search, setSearch, state, dispatch }}>
            {props.children}
        </mainContext.Provider>
    );
}

export default AllStates;
