import React from "react";
import "./Card.css";

function Card({ user }) {
	const { name, username, email, address, phone, website, company } = user;
	const { street, suite, city, zipcode } = address;
	const { catchPhrase, bs } = company;

	const getInitial = () => {
		return name
			.split(" ")
			.map((text) => text.charAt(0))
			.join("");
	};

	const getFullAddress = () => {
		return `${suite} ${street}, ${city} ${zipcode}`;
	};

	const info = [
		{
			label: "Email",
			value: email,
		},
		{
			label: "Address",
			value: getFullAddress(),
		},
		{
			label: "Phone",
			value: phone,
		},
		{
			label: "Website",
			value: website,
		},
		{
			label: "Company",
			value: company.name,
		},
	];

	return (
		<div className="card">
			<div className="card__header">
				<div className="card__image">{getInitial()}</div>
				<div>
					<h2 className="card__name">{name}</h2>
					<p className="card__username">{username}</p>
				</div>
			</div>
			<hr />
			{info.map(({ label, value }) => (
				<div key={label} className="card__body">
					<span className="card__body__label">{label}</span>
					<span className="card__body__value">{value}</span>
				</div>
			))}
			<hr />
			<div className="card__footer">
				<h3>{catchPhrase}</h3>
				<p>{bs}</p>
			</div>
		</div>
	);
}

export default Card;
