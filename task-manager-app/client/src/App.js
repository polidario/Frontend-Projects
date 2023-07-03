import ListItem from "./components/ListItem";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";
import Auth from "./components/Auth";

import { getData } from "./services/taskApi";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { AuthContext } from "./context/AuthContext.ts";

function App() {
	const [cookies] = useCookies(null);
	const username = cookies.username ?? '';
	const authToken = cookies.authToken ?? '';

	const [user, setUser] = useState(null);
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
		if(authToken) {
			fetchTasks();
		}
	}, []);

	const sortedTasks = tasks.sort((a, b) => {
		return a.id - b.id;
	});
		
	return (
		<>
			<AuthContext.Provider value={{ user, setUser }}>
				<div className='main'>
					<div className='gradient'/>
				</div>

				{!authToken && <Auth />}
				{authToken && (
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
				)}
			</AuthContext.Provider>
			
		</>
		
	);
}

export default App;
