import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'

const App = () => {
	return (
		<main className='flex flex-col items-center mt-7 gap-5 w-full justify-center'>
			<h1 className='text-5xl font-semibold text-gray-600'>My Todos</h1>
			<AddTodoForm />
			<TodoList />
		</main>
	)
}

export default App

// sfc - create arrow func component
// usf - useState
// uef - useEffect
