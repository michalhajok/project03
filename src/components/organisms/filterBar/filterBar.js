import React from 'react'

import './filterBar.scss'

const FilterBar = ({ setFilter, filter  }) => {
	return (
		<div className="filterBar">
			<label>Miasto: <input type="text"/></label>
			<label>Cena: <input value={filter.price} onChange={(e)=>{setFilter({price:e.target.value, category: filter.category, name: filter.name})}} type="text"/></label>
			<label>Nazwa: <input type="text"/></label>
			<label>
			Kategoria:
				<select value={filter.category} onChange={(e)=>{setFilter({price:filter.price, category: e.target.value, name: filter.name})}}>
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
