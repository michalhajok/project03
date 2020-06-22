import React, { useState } from 'react'

import Nav from './../../components/organisms/nav'
import Form from './../../components/organisms/form'
import Footer from './../../components/molecules/footer'

import './addPage.scss'

const AddPage = ({places, setPlaces}) => {

	const [add, setAdd] = useState({
		id:"",
		title:"",
		description:"",
		foto_url: "",
		price: 0,
		city: "",
		address: "",
		category: ""
	})

	const { title, description, foto_url, price, city, address, category} = add

	const addFields = (e) =>{
		setAdd({
			...add,
			[e.target.name]: e.target.value
		})
	}
	const handleSubmit = (e) =>{
		e.preventDefault()
		setPlaces([...places, {
			id:places.length,
			title: title,
			description: description,
			foto_url: foto_url,
			price: price,
			city: city,
			address: address,
			category: category
		}])
	}
	return (
		<div className="addPage">
			<Nav />
			<h2>
				Dodaj miejsce:
			</h2>
			<Form state={add} handleSubmit={handleSubmit} fields={addFields} submitValue="Dodaj"  />
			<Footer />
		</div>
	)
}

export default AddPage
