import { v4 as uuidv4 } from "uuid";
import { DraftExpense, Expense, Category } from "../types";

const initialBudget = (): number => {
  const localBudget = localStorage.getItem("budget");
  return localBudget ? +localBudget : 0;
};

const initialExpenses = (): Expense[] => {
  const localExpenses = localStorage.getItem("expenses");
  return localExpenses ? JSON.parse(localExpenses) : [];
};

export type BudgetActions =
  | { type: "add-budget"; payload: { budget: number } }
  | { type: "show-modal" }
  | { type: "hide-modal" }
  | { type: "add-expense"; payload: { expense: DraftExpense } }
  | { type: "remove-expense"; payload: { id: Expense["id"] } }
  | { type: "get-expense-by-id"; payload: { id: Expense["id"] } }
  | { type: "update-expense"; payload: { expense: Expense } }
  | { type: "reset-app" }
  | { type: "add-filter-category"; payload: { id: Category["id"] } };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
  editingId: Expense["id"];
  currentCategory: Category["id"];
};

export const InitialState: BudgetState = {
  budget: initialBudget(),
  modal: false,
  expenses: initialExpenses(),
  editingId: "",
  currentCategory: "",
};

export const budgetReducer = (
  state: BudgetState = InitialState,
  action: BudgetActions
) => {
  if (action.type === "add-budget") {
    return {
      ...state,
      budget: action.payload.budget,
    };
  }

  if (action.type === "show-modal") {
    return {
      ...state,
      modal: true,
    };
  }

  if (action.type === "hide-modal") {
    return {
      ...state,
      modal: false,
      editingId: "",
    };
  }

  if (action.type === "add-expense") {
    const expense = { ...action.payload.expense, id: uuidv4() };

    return {
      ...state,
      expenses: [...state.expenses, expense],
      modal: false,
    };
  }

  if (action.type === "remove-expense") {
    return {
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.payload.id),
    };
  }

  if (action.type === "get-expense-by-id") {
    return {
      ...state,
      editingId: action.payload.id,
      modal: true,
    };
  }

  if (action.type === "update-expense") {
    return {
      ...state,
      expenses: state.expenses.map((exp) =>
        exp.id === action.payload.expense.id ? action.payload.expense : exp
      ),
      modal: false,
      editingId: "",
    };
  }

  if (action.type === "reset-app") {
    localStorage.removeItem("budget");
    localStorage.removeItem("expenses");
    return {
      budget: initialBudget(),
      modal: false,
      expenses: initialExpenses(),
      editingId: "",
    };
  }

  if (action.type === "add-filter-category") {
    return {
      ...state,
      currentCategory: action.payload.id,
    };
  }

  return state;
};
