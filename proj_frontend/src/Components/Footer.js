import React from "react";
import {Box,Container,Row,Column,FooterLink,Heading,} from "./FooterStyles";

const Footer = () => {
return (
	<Box style={{backgroundColor:"#1976D2"}}>
	<h1 style={{ color: "#0000",
				textAlign: "center",
				marginTop: "-120px" }}>
		GeeksforGeeks: A Computer Science Portal for Geeks
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">We Pioneers</FooterLink>
			<FooterLink href="#">Know the importance </FooterLink>
			<FooterLink href="#">of your Innovations</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Preventing Theft</FooterLink>
			<FooterLink href="#">Digital Assests</FooterLink>
			<FooterLink href="#">NFT</FooterLink>
			<FooterLink href="#">Intellectual Property prevention</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">FAST NUCES</FooterLink>
			<FooterLink href="#">Email</FooterLink>
			<FooterLink href="#">Phone Number : 03494734586</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
