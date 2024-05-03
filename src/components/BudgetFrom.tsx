import { useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget";

export default function BudgetForm() {
    const [budget, setBudget] = useState(0);
    const { dispatch } = useBudget();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget])

    const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();

        dispatch({ type: 'add-budget', payload: { budget: budget } })
        setBudget(0);
    }

    return (
        <form className="space-y-5">
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                    Definir presupuesto
                </label>
                <input
                    id="budget"
                    type="number"
                    className="w-full bg-white border-gray-200 p-2"
                    placeholder="Define tu presupuesto"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                />
            </div>
            <input type="submit"
                value='Definir presupuesto'
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-bold uppercase disabled:opacity-40"
                disabled={isValid}
                onClick={handleSubmit}
            />
        </form>
    )
}