import ListItem from "./components/ListItem";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";
import { getData } from "./services/taskApi";
import { useEffect, useState } from "react";

function App() {
	const username = "example";
	const [completed, setCompleted] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [tasks, setTasks] = useState([]);

	const fetchTasks = async () => {
		await getData(username).then((res) => {
			setTasks(res);
			setIsLoading(false);
		});
	};

	useEffect(() => {
		setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 1000);
		fetchTasks();
	}, []);

	const sortedTasks = tasks.sort((a, b) => {
		return a.id - b.id;
	});
		
	return (
		<>
			<div className='main'>
				<div className='gradient'/>
			</div>

			<main className="app">
				<Navigation />
				{isLoading && <ProgressBar progress={completed}/>}
				<div className="container">
					{sortedTasks.map((task) => {
						return (
							<ListItem key={task.id} id={task.id} title={task.title} description={task.description} />
						);
					})}
				</div>
				
			</main>
		</>
		
	);
}

export default App;
