import { useState } from 'react'
import { useTodoStore } from '../store/todoStore/todoStore'

const AddTodoForm = () => {
	const addTodo = useTodoStore(state => state.addTodo)
	const [todoText, setTodoText] = useState('')

	const onAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (!todoText) return
		addTodo({ id: 0, title: todoText, completed: false })
		setTodoText('')
	}

	return (
		<form className='bg-blue-100 shadow-md rounded px-8 pt-3 pb-4 mb-4 max-sm:w-11/12 md:w-2/3 lg:w-1/3'>
			<label htmlFor='todo' className='block text-gray-500 text-sm font-bold mb-2'>
				Add todo
			</label>
			<input
				id='todo'
				type='text'
				className='shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
				value={todoText}
				onChange={e => setTodoText(e.target.value)}
			/>
			<button
				type='submit'
				className='mt-3 bg-blue-400 hover:bg-blue-500 px-4 py-2 transition-all rounded-md text-white font-semibold disabled:bg-gray-400'
				disabled={!todoText}
				onClick={onAddTodo}>
				Add
			</button>
		</form>
	)
}

export default AddTodoForm
