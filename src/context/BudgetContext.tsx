import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"
import { BudgetActions, budgetReducer, BudgetState, InitialState } from "../reducers/budgetReducer"

type BudgetContextProp = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExpenses: number
    remainingBudget: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProp>(null!)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, InitialState)

    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    const remainingBudget = state.budget - totalExpenses

    return (
        < BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                remainingBudget
            }}>
            {children}
        </BudgetContext.Provider >
    )
}