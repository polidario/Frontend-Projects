import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
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
		setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 100);
		fetchTasks();
	}, []);

	const sortedTasks = tasks.sort((a, b) => {
		return a.id - b.id;
	});
		
	return (
		<div className="App">
			<ListHeader />
			{isLoading && <ProgressBar progress={completed}/>}
			{sortedTasks.map((task) => {
				return (
					<ListItem key={task.id} id={task.id} title={task.title} description={task.description} />
				);
			})}
		</div>
	);
}

export default App;
