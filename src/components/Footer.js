import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 200px;
	background: #f8f8f9;
	* {
		margin: 0;
		padding: 0;
	}
`

const Social = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const Icon = styled.a`
	margin: 0 15px;
	//@include breakpoint(xs) {
	//	margin: 0 10px;
	//}
	img {
		width: 27px;
	}
`

const Copy = styled.p`
	font-size: 13px;
	font-weight: 600;
	color: #848687;
	text-align: center;
	span {
		color: #ff7763;
	}
	a {
		color: #282a2d;
		text-decoration: none;
	}
`

export default props => (
	<Container>
		<Social>
			<Icon target="_blank" href="https://www.github.com/dsetyawan">
				<img alt="Facebook Danang Setyawan" src="https://icongr.am/fontawesome/github.svg?size=20&color=282a2d"/>
			</Icon>
			<Icon target="_blank" href="https://twitter.com/dsetyawan">
				<img alt="Twitter Danang Setyawan" src="https://icongr.am/fontawesome/twitter.svg?size=20&color=282a2d"/>
			</Icon>
			<Icon target="_blank" href="https://www.linkedin.com/in/danang-setyawan-b8b26642">
				<img alt="Linkedin Danang Setyawan" src="https://icongr.am/fontawesome/linkedin.svg?size=20&color=282a2d"/>
			</Icon>
			<Icon target="_blank" href="https://www.instagram.com/dsetyawan">
				<img alt="Instagram Danang Setyawan" src="https://icongr.am/fontawesome/instagram.svg?size=20&color=282a2d"/>
			</Icon>
		</Social>
		<Copy>© 2018 - All rights reserved. Made with <span>❤</span> by <a href="https://twitter.com/dsetyawan" target="_blank" rel="noopener noreferrer">Danang Setyawan</a></Copy>
	</Container>
)