import { useMemo } from "react";
import BudgetForm from "./components/BudgetFrom"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker";

function App() {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="text-center text-white font-bold text-3xl">Planificador de gastos</h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
    </>
  )
}

export default App
