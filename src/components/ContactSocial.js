import React from 'react'
import styled from 'styled-components'
import { AwesomeButton } from 'react-awesome-button'

const ContactSocialWrapper = styled.div`
	text-align: center;
`

const Button = styled(AwesomeButton)`
	margin: 0 3px !important;
	.aws-btn__content {
		padding: 0 15px !important;
	}
	img {
		width: 25px;
		height: 25px;
		margin: 0;
		position: relative;
		top: 2px;
	}
`

export default props => (
	<ContactSocialWrapper>
		<Button			
			type="github"
			size="small"
			href="https://www.github.com/dsetyawan"
			title="Github - Danang Setyawan"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/github.svg?color=ffffff"
				title="Github - Danang Setyawan"
				alt="img"/>
		</Button>
		<Button			
			type="twitter"
			size="small"
			href="https://twitter.com/dsetyawan"
			title="Twitter - Danang Setyawan"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/twitter.svg?color=ffffff"
				title="Twitter - Danang Setyawan"
				alt="img"/>
		</Button>
		<Button			
			type="linkedin"
			size="small"
			href="https://www.linkedin.com/in/danang-setyawan-b8b26642/"
			title="Linkedin - Danang Setyawan"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/linkedin.svg?color=ffffff"
				title="Linkedin - Danang Setyawan"
				alt="img"/>
		</Button>
		<Button			
			type="instagram"
			size="small"
			href="https://www.instagram.com/dsetyawan/"
			title="Instagram - Danang Setyawan"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/instagram.svg?color=ffffff"
				title="Instagram - Danang Setyawan"
				alt="img"/>
		</Button>
	</ContactSocialWrapper>
)