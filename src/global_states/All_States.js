import React, { useReducer, useState } from 'react';
import mainContext from '../context/mainContext';
const AllStates = (props) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem("authToken") ? localStorage.getItem("authToken") : '');
    const [search, setSearch] = useState('');
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                return [...state, { ...action }];
            case "UPDATE":
                let updateArr = [...state];
                updateArr.find((food, index) => {
                    if (food._id === action._id) {
                        updateArr[index] = { ...food, qty: action.qty, size: action.size, finalPrice: action.finalPrice }
                    }
                })
                return updateArr;
            case "DROP":
                return [];
            case "REMOVE":
                let newArr = [...state];
                newArr.splice(action.index, 1);
                return newArr
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
