import { Form } from './components/Form'
import { List } from './components/List'

export const App = () => {
	const tasks = [
		{
			task: 'React',
			time: '01:00:00',
		},
		{
			task: 'JavaScript',
			time: '01:30:00',
		},
		{
			task: 'TypeScript',
			time: '02:00:00',
		},
		{
			task: 'PHP',
			time: '02:00:00',
		},
	]

	return (
		<main>
			<Form />

			<List.Root title="Estudos do dia">
				{tasks.map((task, index) => (
					<List.Item key={index} item={task} />
				))}
			</List.Root>
		</main>
	)
}