import classNames from 'classnames'
import { useTodoStore } from '../store/todoStore/todoStore'

export interface ITodoItem {
	id: number
	title: string
	completed: boolean
}

interface TodoItemProps {
	item: ITodoItem
}

const TodoItem = ({ item }: TodoItemProps) => {
	const completeTodo = useTodoStore(state => state.completeTodo)
	const deleteTodo = useTodoStore(state => state.deleteTodo)

	const textClasses = classNames('text-lg w-full', { 'line-through': item.completed })

	return (
		<div className='flex w-full border border-blue-300 rounded-xl p-2 hover:bg-blue-300 hover:text-white transition-colors text-gray-600'>
			<div className={textClasses}>{item.title}</div>
			<div className='flex items-center'>
				<input
					type='checkbox'
					id={item.id.toString()}
					checked={item.completed}
					disabled={item.completed}
					onChange={() => completeTodo(item.id)}
					className={classNames(
						'h-6',
						'w-6',
						'border-red-400',
						{ 'cursor-pointer': !item.completed },
						'focus:ring-4',
						'focus:ring-blue-300'
					)}
				/>
				<label htmlFor='check'></label>
			</div>
			<button
				onClick={() => deleteTodo(item.id)}
				className={classNames('shrink-0 px-3 bg-red-500 rounded-md text-white text-sm font-semibold ms-4')}>
				X
			</button>
		</div>
	)
}

export default TodoItem
