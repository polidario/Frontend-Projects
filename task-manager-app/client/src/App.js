import ListItem from "./components/ListItem";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";
import { getData } from "./services/taskApi";
import { useEffect, useState } from "react";

function App() {
	const username = "example";
	const [completed, setCompleted] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [tasks, setTasks] = useState([]);
	const [selectedTask, setSelectedTask] = useState(null);

	const openModal = (task) => {
		setSelectedTask(task);
		setIsModalOpen(true);
	};

	const fetchTasks = async () => {
		await getData().then((res) => {
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
							<ListItem key={task.id} task={task} fetchTasks={fetchTasks} openModal={openModal} />
						);
					})}
				</div>
				{isModalOpen && (<Modal setIsModalOpen={setIsModalOpen} mode={'edit'} task={selectedTask} fetchTasks={fetchTasks} />)}
			</main>
		</>
		
	);
}

export default App;
