import React from 'react'

import './filterBar.scss'

const FilterBar = ({ setFilter, filter  }) => {

	const { city, name, category} = filter

	const addFilter = (e) =>{
		setFilter(({
			...filter,
			[e.target.name]: e.target.value
		}))
	}

	return (
		<div className="filterBar">
			<label>Miasto: 
				<input value={city} name="city" onChange={addFilter} type="text"/>
			</label>
			<label>Nazwa: 
				<input value={name} name="name" onChange={addFilter}  type="text"/>
			</label>
			<label>
			Kategoria:
				<select value={category} name="category" onChange={addFilter}>
					<option value="all">Wszystkie</option>
					<option value="castle">Zamki</option>
					<option value="museum">Muzea</option>
					<option value="other">Inne</option>
					<option value="market">Rynki</option>
				</select>
			</label>
		</div>
	)
}

export default FilterBar
