import React from 'react'

const Form = ({ handleSubmit, state, fields, submitValue}) => {
	return (
		<form onSubmit={(e)=>handleSubmit(e)}>
				<label>
					Tytuł: <input required={true} name="title" value={state.title} onChange={fields} type="text"/>
				</label>
				<label>
					Opis: <input required={true} name="description" value={state.description} onChange={fields} type="text"/>
				</label>
				<label>
					Link do zdjęcia: <input required={true} name="foto_url" value={state.foto_url} onChange={fields} type="text"/>
				</label>
				<label>
					Cena: <input required={true} name="price" value={state.price} onChange={fields} type="number"/>
				</label>
				<label>
					Miasto: <input required={true} name="city" value={state.city} onChange={fields} type="text"/>
				</label>
				<label>
					Adres: <input required={true} name="address" value={state.address} onChange={fields} type="text"/>
				</label>
				<label>
					Kategoria: <select value={state.category} name="category" onChange={fields}>
						<option value="castle">Zamki</option>
						<option value="museum">Muzea</option>
						<option value="other">Inne</option>
						<option value="market">Rynki</option>
					</select>
				</label>
				<label>
					<input type="submit" value={submitValue}/>
				</label>
			</form>
	)
}

export default Form
