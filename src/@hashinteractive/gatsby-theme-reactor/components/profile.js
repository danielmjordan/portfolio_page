/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
const Profile = () => {
	const { allFile } = useStaticQuery(graphql`
		query MyQuery {
			allFile(filter: { name: { glob: "profile*" } }) {
				edges {
					node {
						id
						publicURL
						name
						childImageSharp {
							fluid(quality: 50) {
								aspectRatio
								base64
								sizes
								src
								srcSet
							}
						}
					}
				}
			}
		}
	`);

	const profile = allFile.edges.find(
		({ node: { name } }) => name === 'profile'
	);
	const profileAlt = allFile.edges.find(
		({ node: { name } }) => name === 'profile-alt'
	);

	const [imageSource, setImageSource] = useState(
		profile.node.childImageSharp.fluid
	);

	return (
		<div
			sx={{
				bg: (theme) => theme.colors.gray[3],
				boxShadow: '2xl',
				borderRadius: 'lg',
				mb: '50px',
			}}
		>
			<div
				role="img"
				onMouseEnter={() => {
					setImageSource(profileAlt.node.childImageSharp.fluid);
				}}
				onMouseLeave={() => {
					setImageSource(profile.node.childImageSharp.fluid);
				}}
			>
				<Img
					sx={{
						top: ['15px', '30px'],
						right: ['-15px', '-35px'],
						boxShadow: 'lg',
						borderRadius: 'lg',
						position: 'relative',
						maxWidth: 'full',
					}}
					fluid={imageSource}
					alt="Profile"
				/>
			</div>
		</div>
	);
};

export default Profile;
