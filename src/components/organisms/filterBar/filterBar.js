import React from 'react'

const FilterBar = ({ category, setCategory }) => {
	return (
		<div>
			<label>Miasto: <input type="text"/></label>
				<label>Cena: <input type="text"/></label>
				<label>Nazwa: <input type="text"/></label>
				<label>
				Kategoria:
					<select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
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
