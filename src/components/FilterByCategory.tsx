import { categories } from "../data/categories"

export default function FilterByCategory() {
    return (
        <div className=" bg-white shadow-lg rounded-lg p-10">
            <form>
                <div className=" flex flex-col md:flex-row md:items-center gpa-5">
                    <select name="" id="">
                        <option value={''}>-- Todas las cetegorias</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.name}>{cat.name}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}