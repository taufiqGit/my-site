import { createContext, useReducer } from "react";
import DataPortofolio from "../dataPortofolio/data";
import Reducer from "./reducer";

const INIT_STATE = {
    portofolio: DataPortofolio,
    currentTag: 'All',
    currentSlide: 1,
    showPerSlide: 3,
    totalPortofolio: DataPortofolio.length
}

export const Context = createContext(INIT_STATE)

function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(Reducer, INIT_STATE)

    return (
        <Context.Provider value={{
            dispatch,
            portofolio: state.portofolio,
            currentSlide: state.currentSlide,
            showPerSlide: state.showPerSlide,
            totalPortofolio: state.totalPortofolio
        }}>
            { children }
        </Context.Provider>
    )
}

export default ContextProvider