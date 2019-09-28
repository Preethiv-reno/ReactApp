import React,{ useReducer, useEffect, useContext } from "react";
import {MyContext, MyProvider} from './provider';

export const connect = (mapStateToProps, mapDispatchToProps) => {
    return function (Component) {
        return function () {
            const {state, dispatch} =  useContext(MyContext)
            const stateToProps = mapStateToProps(state)
            const dispatchToProps = mapDispatchToProps(dispatch)
            const props = {...props, ...stateToProps, ...dispatchToProps}
            return (
                <Component {...props} />
            )
        }
    }
}