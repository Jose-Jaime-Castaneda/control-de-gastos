import BudgetForm from "./components/BudgetFrom"
import { useBudget } from "./hooks/useBudget"

function App() {
  const { state, dispatch } = useBudget();

  console.log(state);
  console.log(dispatch);
  


  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="text-center text-white font-bold text-3xl">Planificador de gastos</h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  )
}

export default App
