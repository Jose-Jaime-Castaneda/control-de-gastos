import { useBudget } from "../hooks/useBudget"

export default function BudgetTracker() {
    const { state } = useBudget()

    return (
        <>
            <h2>Budget Tracker: {state.budget}</h2>
        </>
    )
}