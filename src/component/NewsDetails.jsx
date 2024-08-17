import React, { useState } from 'react'
import UserImg from "./Images/userpng.png";
import MsgPng from "./Images/msg.png";
import SavePng from "./Images/save.png";
import SharePng from "./Images/share.png";
import { ArrowBack } from '@mui/icons-material';
import Card, { ImgCard } from "./Card";
import { useNavigate } from 'react-router-dom/dist';

function NewsDetails() {

    const [load, setload] = useState(false);
    const navigate = useNavigate()

    setTimeout(() => {
        setload(true);
    }, 1000)


    return (
        load &&
        <div className='p-3'>
            <div className="space-y-6">
                <div className='flex gap-2 items-center'>
                    <span className='pointer ' onClick={() => navigate(-1)}>
                        <ArrowBack />
                    </span>
                    <h1 className="text-black text-xl select-none">NEWSLETTER</h1>
                </div>
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
                <div className='p-2'>
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
                    <div className="mt-3 text-sm " style={{ fontFamily: "Georgia" }}>
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
        </div>
    )
}

export default NewsDetails