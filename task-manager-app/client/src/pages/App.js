import ListItem from "../components/ListItem";
import Modal from "../components/Modal";
import Navigation from "../components/Navigation";
import Loading from "../components/Loading";
import Auth from "../components/Auth";

import { getUserTasks } from "../services/taskApi";
import { useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function App() {
	const { user } = useContext(AuthContext);
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
	}, [user]);

	const sortedTasks = tasks.sort((a, b) => {
		return a.id - b.id;
	});
		
	return (
		<>
			<div className='main'>
				<div className='gradient'/>
			</div>

			{!user ? <Auth /> : (
				<main className="app">
					<Navigation fetchTasks={fetchTasks}/>
					{isLoading && <Loading />}

					<div className="flex flex-col gap-5 w-full md:w-1/2">
						<h2 className="text-xl md:text-3xl font-bold pb-5 border-dotted border-gray-700 border-b-2 text-center">Hello, {user.username} 👋</h2>
						{
						tasks.length > 0 ? 
							<p className="text-center text-gray-500">You have {tasks.length} pending tasks.</p>
							: 
							(
								<div className="flex flex-col items-center gap-5">
									<p className="text-center text-gray-500">You have no tasks yet. Create one by clicking the button below!</p>
									<button
										onClick={() => {
											setIsModalOpen(true);
										}}
										className="button button-primary">
										<span className="button-body">
											<span className="button-text">Create Task</span>
										</span>
									</button>
								</div>
							)
						}
					</div>
					


					<div className="container">
						{sortedTasks.map((task) => {
							return (
								<ListItem key={task.id} task={task} fetchTasks={fetchTasks} openModal={openModal} />
							);
						})}
					</div>
					{(isModalOpen && tasks.length < 1) && (<Modal mode="create" setIsModalOpen={setIsModalOpen} fetchTasks={fetchTasks}/>)}
					{(isModalOpen && tasks.length > 0) && (<Modal setIsModalOpen={setIsModalOpen} mode={'edit'} task={selectedTask} fetchTasks={fetchTasks} />)}
				</main>
			)}
			
		</>
		
	);
}

export default App;
