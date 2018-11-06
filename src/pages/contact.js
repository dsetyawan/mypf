import React from 'react'
import { graphql } from "gatsby"
import get from 'lodash/get'
import styled from 'styled-components'

import ContactForm from '../components/ContactForm'
import ContactSocial from '../components/ContactSocial'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const ContactFormWrapper = styled.div`
	max-width: 690px;
	margin: 0 auto;
`

class Contact extends React.Component {
	render() {
   	const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
		return (
				<Layout location={ this.props.location }>
					<div className="Contact">
						<SEO
						  title="Contact"
						  url={`${siteUrl}/contact`}
						/>
						<section className="HeaderContact Page">
							<div className="container">
								<div className="row center-xs">
									<div className="HeaderContact__titlewrap Page__titlewrap text-center col-xs-12 col-md-10 col-lg-7">
										<h2 className="HeaderContact__title Page__title">Contact</h2>
										<p className="HeaderContact__description Page__description">First of all, thanks for visiting my blog. If you have any questions, do you want us to work together or do you want to leave me some words? I would love to hear you. You can follow me on my social networks or you can send me an email to <b>dsetyawan@gmail.com</b>:</p>
									</div>
								</div>
							</div>
						</section>
						<ContactSocial />
						<ContactFormWrapper>															
							<ContactForm/>								
						</ContactFormWrapper>
					</div>
				</Layout>
		)
	}
}

export const queryContact = graphql`
  	query QueryContact {
    	site {
      	siteMetadata {
         	title
         	siteUrl
      	}
    	}
  	}
`

export default Contact