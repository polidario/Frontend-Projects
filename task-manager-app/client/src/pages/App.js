import ListItem from "../components/ListItem";
import Modal from "../components/Modal";
import Navigation from "../components/Navigation";
import Loading from "../components/Loading";
import Auth from "../components/Auth";

import { ReactComponent as Search } from "../assets/images/search.svg";

import { getUserTasks } from "../services/taskApi";
import { getUserDetails } from "../services/userApi";
import { useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Footer from "../components/Footer";

function App() {
	const { user } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("all");

	const [tasks, setTasks] = useState([]);
	const [selectedTask, setSelectedTask] = useState(null);
	const [userDetails, setUserDetails] = useState(null);

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

	const fetchUserDetails = async () => {
        await getUserDetails(user.username).then((res) => {
            setUserDetails(res);
            setIsLoading(false);
        });
    };

	useEffect(() => {
		if(user) {
			fetchTasks();
			fetchUserDetails();
		}
	}, [user]);

	const filterBySearch = (tasks, searchWord) => {
		if (searchWord === "") {
			return tasks;
		}

		return tasks.filter((task) => {
			return task.title.toLowerCase().includes(searchWord.toLowerCase());
		});
	};

	const filterByUrgency = (tasks, filter) => {
		if (filter === "all") {
			return tasks;
		} else {
			return tasks.filter((task) => {
				return task.urgency.toLowerCase() === filter.toLowerCase();
			});
		}
	};

	const resetFilter = () => {
		setSearch("");
		setFilter("all");
		document.getElementById("defaultTaskOption").selected = true;
		document.getElementById("searchTaskInput").value = "";
	};

	const pendingTasks = tasks.filter((task, index) => {
		return !task.completed;
	});

	const completedTasks = tasks.filter((task, index) => {
		return task.completed;
	});

	const sortedTasks = pendingTasks.sort((a, b) => {
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

					<div className="flex flex-col gap-5 w-full">
						<h2 className="text-xl md:text-3xl font-bold pb-5 border-dotted border-gray-700 border-b-2 text-center">Hello, {userDetails?.first_name} 👋</h2>

						{
						pendingTasks.length > 0 ? 
							(
								<>
									<p className="text-center text-gray-500">You have {pendingTasks.length} pending tasks.</p>


									<div className="w-full md:w-2/3 mx-auto shadow p-5 rounded-lg bg-white">
										<div className="relative">
											<div className="absolute flex items-center ml-2 h-full">
												<Search className="w-4 h-4 fill-current text-primary-gray-dark" />
											</div>

											<input 
												onChange={(e) => {
													setFilter("all");
													document.getElementById("defaultTaskOption").selected = true;
													setSearch(e.target.value);
												}}
												id="searchTaskInput"
												type="text" 
												placeholder="Search by task title..." className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" />
										</div>

										<div className="flex items-center justify-between mt-4">
											<div>
												<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
													<select 
														onChange={(e) => {
															setFilter(e.target.value);
														}}
														className="px-4 py-3 w-full rounded-md bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
															<option value="all" id="defaultTaskOption">All Tasks</option>
															<option value="casual">Casual</option>
															<option value="urgent">Urgent</option>
															<option value="important">Important</option>
													</select>
												</div>
											</div>

											<button 
												onClick={resetFilter}
												className="w-fit px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200 text-sm font-medium rounded-md">
												Reset
											</button>
										</div>

										
									</div>	
									
									<div className="container">
										{filterBySearch(filterByUrgency(sortedTasks, filter), search).map((task) => {
											return (
												<ListItem key={task.id} task={task} fetchTasks={fetchTasks} openModal={openModal} />
											);
										})}
									</div>
								</>
							)
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

					<div className="container mt-20 opacity-30">
						<div>
							<h2 className="text-base md:text-lg font-bold pb-5 text-center">Compeleted Tasks</h2>
						</div>
						{completedTasks.map((task) => {
							return (
								<ListItem key={task.id} task={task} fetchTasks={fetchTasks} openModal={openModal} />
							);
						})}
					</div>

					{(isModalOpen && pendingTasks.length < 1) && (<Modal mode="create" setIsModalOpen={setIsModalOpen} fetchTasks={fetchTasks}/>)}
					{(isModalOpen && tasks.length > 0 && selectedTask) && (<Modal setIsModalOpen={setIsModalOpen} mode={'edit'} task={selectedTask} fetchTasks={fetchTasks} />)}
				</main>
			)}
			<Footer />
		</>
		
	);
}

export default App;
