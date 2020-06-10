import React, {useState} from 'react'

import { useParams } from '@reach/router'

import Nav from './../../components/organisms/nav'
import Form from './../../components/organisms/form'
import Footer from './../../components/molecules/footer'

import './updatePage.scss'

const UpdatePage = ({places, setPlaces}) => {

	const params = useParams()

	const [update, setUpdate] = useState(places[params.id])

	const updateFields = (e) =>{
		setUpdate({
			...update,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) =>{
		let arrays = [...places]
		arrays[params.id] = update
		e.preventDefault()
		setPlaces(arrays)
	}
	return (
		<div className="updatePage">
			<Nav />
			<Form state={update} handleSubmit={handleSubmit} fields={updateFields} submitValue="Zaktualizuj" />
			<Footer />
		</div>
	)
}

export default UpdatePage
