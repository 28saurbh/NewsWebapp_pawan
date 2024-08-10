import React from "react";
import Header from "./Header";
import CategoryTab from "./CategoryTab";
import { CarouselWithContent } from "./CarouselWithContent";
// import {useNavigate} from 'react-router-dom'

function Home() {
	// const navigate = useNavigate()
	// function handleSearch(){
	//     navigate('/')
	// }
	return (
		<>
			<div>
				<Header />
				<CategoryTab/>
				<CarouselWithContent/>
			</div>
		</>
	);
}

export default Home;
