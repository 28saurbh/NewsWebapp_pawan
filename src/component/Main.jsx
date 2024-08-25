import React, { useState } from "react";
import Card, { ImgCard } from "./Card";
// import { Button, Modal } from "flowbite-react";
// import UserImg from "./Images/userpng.png";
// import MsgPng from "./Images/msg.png";
// import SavePng from "./Images/save.png";
// import SharePng from "./Images/share.png";
import { useNavigate } from "react-router-dom/dist";


function Main() {
	const [openModal, setOpenModal] = useState(false);
	const navigate = useNavigate();

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
				<ImgCard id={"02"} navigate={navigate}/>
				<Card id={"01"} navigate={navigate} />
						
			</div>

			{/* <Modal
				show={openModal}
				onClose={() => setOpenModal(false)}
				className={`transition-opacity duration-800 ease-in-out transform ${
					openModal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
				}`}
			>
				<Modal.Header>
					<div>
						<h1 className="text-black text-xl select-none">NEWSLETTER</h1>
					</div>
				</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<div>
							<img
								src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/YFCMGVFJTVL2NJB4WPQZZHEEY4.jpg"
								alt=""
								style={{
									maxHeight: "255px",
									display: "block",
									maxWidth: "400px",
									overflow: "hidden",
									width: "100%",
								}}
							/>
						</div>
						<div>
							<div>
								<h1
									style={{ fontFamily: "Georgia" }}
									className="text-base font-bold"
								>
									Furor Over Chinese Spy Balloon Leads to a Diplomatic Crisis
								</h1>
								<div>
									<div
										style={{ color: "#1A1A1A", fontFamily: "sans-serif" }}
										className="flex gap-2 text-xs mt-3 items-center justify-between"
									>
										<span>
											<img src={UserImg} alt="" />
										</span>
										<span>By Bruce Marlow</span>
										<span>30 mins ago</span>
										<span>2 min read</span>
									</div>
									<div className="flex gap-2 justify-end mt-3 h-6">
										<img src={MsgPng} alt="" />
										<img src={SharePng} alt="" />
										<img src={SavePng} alt="" />
									</div>
								</div>
							</div>
							<div className="mt-3 text-base " style={{ fontFamily: "Georgia" }}>
								<p>
									The Pentagon called the object, which has flown from Montana
									to Kansas, an “intelligence gathering” balloon. Beijing said
									it was used mainly for weather research and had strayed off
									course. WASHINGTON — Secretary of State Antony J. Blinken on
									Friday canceled a weekend trip to Beijing after a Chinese spy
									balloon was sighted above the Rocky Mountain state of Montana,
									igniting a frenzy of media coverage and political commentary
									over a machine that the Pentagon said posed no threat to the
									United States. Mr. Blinken called the Chinese surveillance an
									“irresponsible act” and a “clear violation of U.S. sovereignty
									and international law.” China’s “decision to take this action
									on the eve of my planned visit is detrimental to the
									substantive discussions that we were prepared to have,” he
									said at a news conference on Friday afternoon. Mr. Blinken
									canceled the trip after civilians in Montana this week began
									spotting the balloon, which the Pentagon said was an
									“intelligence-gathering” airship. Military officials had been
									monitoring the balloon for days, and Mr. Blinken and a deputy
									secretly confronted Chinese diplomats in Washington on
									Wednesday. But it became a diplomatic crisis only as media
									attention mounted on Thursday night and Republican politicians
									called for President Biden and Mr. Blinken to act. The
									balloon’s presence and Mr. Blinken’s announcement added to the
									rising tensions between the two superpowers. The situation
									also underscored the sensitive politics in the United States
									as both Democratic and Republican leaders vie to be seen as
									sufficiently hawkish on China. Mr. Blinken had planned to
									leave Friday night for the trip, the first visit by a U.S.
									secretary of state to China since 2018. He had been expected
									to meet with President Xi Jinping and discuss a wide range of
									issues. But Mr. Blinken said he called Wang Yi, China’s top
									foreign policy official, on Friday and said he was postponing
									his trip because of the balloon.
								</p>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal> */}
		</>
	);
}

export default Main;
