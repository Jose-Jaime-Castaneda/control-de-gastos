import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { BudgetActions, budgetReducer, BudgetState, InitialState } from "../reducers/budgetReducer"

type BudgetContextProp = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProp>(null!)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, InitialState)

    return (
        < BudgetContext.Provider
            value={{
                state,
                dispatch
            }}>
            {children}
        </BudgetContext.Provider >
    )
}