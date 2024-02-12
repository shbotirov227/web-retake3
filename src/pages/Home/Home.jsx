import React from 'react'
import About from "../About/About";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import HeroSection from "../../containers/HeroSection/HeroSection";
import Services from "../../containers/Services/Services";
import Packages from "../../containers/Packages/Packages";
import Location from "../../containers/Location/Location";
import GiftCard from "../../components/GiftCard/GiftCard";
import Forums from "../../containers/Forums/Forums";
import Discussion from "../../containers/Discussion/Discussion";

import "./Home.scss";
import Books from "../../containers/Books/Books";

const Home = () => {
	return (
		<div className="Home">
			<Header />
			<HeroSection />
			<Books />
			<Forums />
			<GiftCard />
			<Discussion />
			<Location />
			<Services />
			<Packages />
			<About />
			<Footer />
		</div>
	)
}

export default Home;