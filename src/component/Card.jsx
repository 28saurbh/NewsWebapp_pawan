import React, { useState } from "react";



function Card(props) {
	return (
		<div>
			{/* content */}
			<div
				className="bg-white mt-5 p-3 tracking-wide"
				style={{
					boxShadow: "-webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.32)",
				}}
				onClick={() => props.navigate(`/news/${props.id}`)}
			>
				<div>
					<h3 className="text-base">
						London to Istanbul by train: This 10-day rail adventure is a slow
						traveller’s dream
					</h3>
				</div>
				<div
					style={{ fontFamily: "Helvetica", color: "#676767", opacity: 0.9 }}
				>
					<span className="text-xs">By Ginny Dennis</span>
					<span className="text-xs ms-5">Feb. 4, 2023</span>
				</div>
				<hr className="my-4" />
				<div
					style={{ color: "#04594D", fontFamily: "Georgia" }}
					className="text-sm"
				>
					<p>
						Romantic cross-European train journeys have long been associated
						with the Orient Express. But you no longer need to fork out
						thousands to make this fabled journey. From Byway to Tailor Made
						Rail, companies are cropping up to meet renewed demand for long
						distance train travel. An epic trip with the latter takes you all
						the way...
					</p>
				</div>
			</div>
		</div>
	);
}

export default Card;

export function ImgCard(props) {
	return (
		<>
			{/* image */}
			<div
				className="relative"
				style={{
					boxShadow: "-webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.32)",
				}}
				onClick={() => props.navigate(`/news/${props.id}`)}
			>
				<div>
					<img
						src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/YFCMGVFJTVL2NJB4WPQZZHEEY4.jpg"
						alt=""
						style={{
							height: "255px",
							display: "block",
							maxWidth: "400px",
							overflow: "hidden",
							width: "100%",
						}}
					/>
				</div>
				<div
					className="absolute  bottom-0 left-0 flex p-3 flex-col justify-end"
					style={{
						fontFamily: "Georgia",
						backgroundColor: "#00000080",
						height: "100%",
					}}
				>
					<h2 style={{ color: "#FDFDFD" }}>
						Pervez Musharraf, Former Military Ruler of Pakistan, Dies at 79
					</h2>

					<div
						style={{
							fontFamily: "Helvetica",
							color: "#FDFDFD",
							opacity: 0.9,
						}}
					>
						<span className="text-xs">By Ginny Dennis</span>
						<span className="text-xs ms-5">Feb. 4, 2023</span>
					</div>
				</div>
			</div>
		</>
	);
}
