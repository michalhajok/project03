import React from 'react'

import Nav from './../../components/organisms/nav'
import Footer from './../../components/molecules/footer'

import './aboutPage.scss'

const AboutPage = () => {
	return (
		<div className="aboutPage">
			<Nav />
				<div className="about">
					<h2>O stronie</h2>
					<div>
						<p>
							Strona poświęcona ciekawym miejscą, oprócz wyświetlania miejsc, można dodawać oraz aktualizować miejsca.
						</p>
						<p>Strona napisana w <b>ReactJs</b>. 
							Biblioteka wykotzystana w projekcie
							<b> MirageJs. </b> Układ komponentów jest oparty o <b>Atomic Design. </b> 
						</p>
						<p>Kolory aplikacji są inspirowane stroną<i> flatuicolors.com.</i></p>
					</div>
				</div>
			<Footer />
		</div>
	)
}

export default AboutPage
