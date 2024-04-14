import { create } from 'zustand'
import { ITodoItem } from '../../components/TodoItem'

interface ITodoState {
	todos: ITodoItem[]
	addTodo: (todo: ITodoItem) => void
	deleteTodo: (id: number) => void
	completeTodo: (id: number) => void
	fetchTodos: () => void
	loading: boolean
}

export const useTodoStore = create<ITodoState>((set, get) => ({
	todos: [],
	loading: false,
	addTodo: (todo: ITodoItem) => set({ todos: [...get().todos, { ...todo, id: get().todos.length + 1 }] }),
	deleteTodo: (id: number) => set({ todos: get().todos.filter(todo => todo.id !== id) }),
	completeTodo: (id: number) =>
		set({
			todos: get().todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: true,
					}
				}
				return todo
			}),
		}),
	fetchTodos: async () => {
		set({ loading: true })
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
			const todos = await response.json()
			set({ todos: todos })
		} finally {
			set({ loading: false })
		}
	},
}))
