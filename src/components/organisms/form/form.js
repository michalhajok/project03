import React from 'react'

const Form = ({ handleSubmit, state, fields, submitValue}) => {

	const { title, description, foto_url, price, city, address, category} = state

	return (
		<form onSubmit={(e)=>handleSubmit(e)}>
			<table>
				<tbody>
					<tr>
						<td>
							<label htmlFor="title">
								Tytuł: 
							</label>
						</td>
						<td>
							<input required={true} id="title" name="title" value={title} onChange={fields} type="text"/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="description">
								Opis: 
							</label>
						</td>
						<td>
							<input required={true} id="description" name="description" value={description} onChange={fields} type="text"/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="url">
								Link do zdjęcia: 
							</label>
						</td>
						<td>
							<input required={true} id="url" name="foto_url" value={foto_url} onChange={fields} type="text"/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="price">
								Cena: 
							</label>
						</td>
						<td>
							<input required={true} id="price" name="price" value={price} onChange={fields} type="number"/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="city">
								Miasto: 
							</label>
						</td>
						<td>
							<input required={true} id="city" name="city" value={city} onChange={fields} type="text"/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="address">
								Adres: 
							</label>
						</td>
						<td>
							<input required={true} id="address" name="address" value={address} onChange={fields} type="text"/>
						</td>
					</tr>
					<tr>
						<td>
							<label htmlFor="category">
								Kategoria: 
							</label>
						</td>
						<td>
							<select value={category} id="category" name="category" onChange={fields}>
								<option value="castle">Zamki</option>
								<option value="museum">Muzea</option>
								<option value="other">Inne</option>
								<option value="market">Rynki</option>
							</select>
						</td>
					</tr>
					<tr>
						<td></td>
						<td>
							<label>
								<input className="btn-submit" type="submit" value={submitValue} />
							</label>
						</td>
					</tr>
				</tbody>
			</table>								
		</form>
	)
}

export default Form
