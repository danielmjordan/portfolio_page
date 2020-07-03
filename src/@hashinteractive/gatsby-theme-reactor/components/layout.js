/* eslint-disable no-unused-vars */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
	const {
		bio: { description, title, location, name },
	} = useStaticQuery(graphql`
		query {
			bio {
				description
				title
				name
				skills
			}
		}
	`);

	return (
		<>
			<Helmet>
				<title>Daniel M. Jordan</title>
				<meta name="description" content={description}></meta>
				<meta name="author" content={name}></meta>
				<meta charset="utf-8"></meta>
				<html lang="en-US"></html>
				<link rel="icon" href={'/images/favicon.ico'} />
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={'/images/favicon-16x16.png'}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={'/images/favicon-32x32.png'}
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={'/images/apple-touch-icon.png'}
				/>
			</Helmet>
			<div
				sx={{
					display: 'flex',
					flexDirection: 'column',
					// set this to `minHeight: '100vh'` for full viewport height
					minHeight: '100vh',
				}}
			>
				<Header
					sx={{
						borderBottom: 4,
						borderColor: 'light',
						borderStyle: 'solid',
						width: '100%',
					}}
				/>
				<main
					sx={{
						width: '100%',
						flex: '1 1 auto',
					}}
				>
					{children}
				</main>
				<Footer
					sx={{
						bg: 'primary',
						color: 'white',
						width: '100%',
					}}
				/>
			</div>
		</>
	);
};
export default Layout;
