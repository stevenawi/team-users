import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import searchIcon from "./images/search.svg";
import "./App.css";

function App() {
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((e) => console.log(e));
	}, []);

	useEffect(() => {
		const filtered = data.filter(({ name, username, email, company }) =>
			search ? [name, username, email, company.name].join(" ").toLowerCase().includes(search.toLowerCase()) : true
		);
		setUsers(filtered);
	}, [search, data]);

	return (
		<div className="app">
			<div className="app__search">
				<img className="app__searchIcon" src={searchIcon} alt="search icon" />
				<input
					className="app__searchInput"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search Name / Username / Email / Company"
				/>
			</div>
			{users.map((user) => (
				<Card key={user.id} user={user} />
			))}
		</div>
	);
}

export default App;
