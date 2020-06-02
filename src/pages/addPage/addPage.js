import React, { useState } from 'react'

import Nav from './../../components/organisms/nav'
import Form from './../../components/organisms/form'
import Footer from './../../components/molecules/footer'

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
			title: add.title,
			description: add.description,
			foto_url: add.foto_url,
			price: add.price,
			city: add.city,
			address: add.address,
			category: add.category
		}])
	}
	return (
		<div>
			<Nav />
			<Form state={add} handleSubmit={handleSubmit} fields={addFields} submitValue="Dodaj"  />
			<Footer />
		</div>
	)
}

export default AddPage
