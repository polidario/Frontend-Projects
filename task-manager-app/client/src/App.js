import ListItem from "./components/ListItem";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";
import Auth from "./components/Auth";

import { getUserTasks } from "./services/taskApi";
import { useEffect, useState } from "react";

import { AuthContext } from "./context/AuthContext.ts";

function App() {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [tasks, setTasks] = useState([]);
	const [selectedTask, setSelectedTask] = useState(null);

	const openModal = (task) => {
		setSelectedTask(task);
		setIsModalOpen(true);
	};

	const fetchTasks = async () => {
		await getUserTasks(user.username).then((res) => {
			setTasks(res);
			setIsLoading(false);
		});
	};

	useEffect(() => {
		if(user) {
			fetchTasks();
		}
	});

	const sortedTasks = tasks.sort((a, b) => {
		return a.id - b.id;
	});
		
	return (
		<>
			<AuthContext.Provider value={{ user, setUser }}>
				<div className='main'>
					<div className='gradient'/>
				</div>

				{!user ? <Auth /> : (
					<main className="app">
						<Navigation fetchTasks={fetchTasks}/>
						{isLoading && <ProgressBar />}
						<div className="container">
							{sortedTasks.map((task) => {
								return (
									<ListItem key={task.id} task={task} fetchTasks={fetchTasks} openModal={openModal} />
								);
							})}
						</div>
						{isModalOpen && (<Modal setIsModalOpen={setIsModalOpen} mode={'edit'} task={selectedTask} fetchTasks={fetchTasks} />)}
					</main>
				)}
			</AuthContext.Provider>
			
		</>
		
	);
}

export default App;
