import React from 'react'

import './filterBar.scss'

const FilterBar = ({ setFilter, filter  }) => {
	return (
		<div className="filterBar">
			<label>Miasto: 
				<input value={filter.city} onChange={(e)=>{setFilter({price:e.target.value, category: filter.category, name: filter.name, city: e.target.value})}} type="text"/>
			</label>
			<label>Nazwa: 
				<input value={filter.name} onChange={(e)=>{setFilter({price:filter.price, category: filter.category, name: e.target.value, city: filter.city})}}  type="text"/>
			</label>
			<label>
			Kategoria:
				<select value={filter.category} onChange={(e)=>{setFilter({price:filter.price, category: e.target.value, name: filter.name, city: filter.city})}}>
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
