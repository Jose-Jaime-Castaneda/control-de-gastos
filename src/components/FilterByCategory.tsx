import { ChangeEvent } from "react"
import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"

export default function FilterByCategory() {
    const { dispatch } = useBudget()

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'add-filter-category', payload: { id: e.target.value } })
    }
    return (
        <div className=" bg-white shadow-lg rounded-lg p-10">
            <form>
                <div className=" flex flex-col md:flex-row md:items-center gpa-5">
                    <label htmlFor="category">Filtar Gastos</label>
                    <select id="category" className=" bg-slate-100 p-3 rounded flex-1" onChange={handleChange}>
                        <option value={''}>-- Todas las cetegorias</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}