import React from "react";
import Card, { ImgCard } from "./Card";

function Main() {
	return (
		<>
			<div className="px-3 my-4">
				<div className="flex items-center gap-3">
					<h2
						style={{
							fontFamily: "Georgia",
							textWrap: "nowrap",
							letterSpacing: 1,
						}}
						className="text-lg"
					>
						Latest News
					</h2>
					<div
						style={{ borderColor: "#1A1A1A" }}
						className="border border-solid w-full h-fit "
					></div>
				</div>
			</div>

			<div className="px-3 flex gap-4 flex-col">
				<ImgCard />
				<Card />
				<Card />
				<ImgCard />
				<Card />
				<ImgCard />
				<ImgCard />
			</div>
		</>
	);
}

export default Main;
