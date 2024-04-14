import classNames from 'classnames'
import { useEffect } from 'react'
import { useTodoStore } from '../store/todoStore/todoStore'
import TodoItem from './TodoItem'

const TodoList = () => {
	const todos = useTodoStore(state => state.todos)
	const isLoading = useTodoStore(state => state.loading)
	const fetchTodos = useTodoStore(state => state.fetchTodos)

	useEffect(() => {
		fetchTodos()
	}, [])

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<div
			className={classNames('flex flex-col gap-2 drop-shadow-xl max-sm:w-11/12 md:w-2/3 bg-blue-100 rounded-lg', {
				'p-3': todos.length,
			})}>
			{todos.map(item => (
				<TodoItem key={item.id} item={item} />
			))}
		</div>
	)
}

export default TodoList
