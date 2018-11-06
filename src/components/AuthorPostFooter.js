import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default props => (
	<div className='AuthorPostFooter'>
		<div className="AuthorPostFooter__header">
			<Img className="AuthorPostFooter__image" sizes={ props.avatar.sizes } />
		</div>
		<div className="AuthorPostFooter__body">
			<p className="AuthorPostFooter__writtenby">{ props.make ? 'Hecho' : 'Escrito'} por</p>
			<Link to="/#about" className="AuthorPostFooter__name">Danang Setyawan</Link>
			<p className="AuthorPostFooter__about">Contributor of blahblah(@linux, @git). Web Developer using React, Node and Mongo. I also like to develop video games, you can see the ones I created in my <Link to="/portfolio">Portfolio</Link>.</p>
			<div className="AuthorPostFooter__social">
				<a href="https://www.github.com/dsetyawan">
					<img alt="img" src="https://icongr.am/fontawesome/github.svg?color=646464&size=21" />
				</a>
				<a href="https://twitter.com/dsetyawan">
					<img alt="img" src="https://icongr.am/fontawesome/twitter.svg?color=646464&size=21" />
				</a>
				<a href="https://www.linkedin.com/in/danang-setyawan-b8b26642">
					<img alt="img" src="https://icongr.am/fontawesome/linkedin.svg?color=646464&size=21" />
				</a>
				<a href="https://www.instagram.com/dsetyawan">
					<img alt="img" src="https://icongr.am/fontawesome/instagram.svg?color=646464&size=21" />
				</a>
			</div>
		</div>
	</div>
)