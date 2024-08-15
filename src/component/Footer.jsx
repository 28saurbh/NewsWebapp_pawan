import React from "react";

function Footer() {
	return (
		<div className="bg-black text-white flex gap-5 py-5 px-3 mt-4">
			<div>
				<div>
					<h1 className="text-white text-xl select-none">NEWSLETTER</h1>
				</div>
			</div>
			<div className="text-xs">
                <div className="flex gap-x-3 gap-y-1 flex-wrap font-thin">
                    <span>Privacy Policy</span>
                    <span>Terms of Service </span>
                    <span>Copyright Policy</span>
                    <span>Data Policy</span>
                    <span>Accessibility</span>
                    <span>Help</span>
                </div>
                <div className="mt-4">
                    <span>© 2023 Newsletter, All rights reserved</span>
                </div>
            </div>
			{/* <div>
                <div>
                    <ul>
                        <li>Politics</li>
                        <li>World</li>
                        <li>Economy</li>
                        <li>Science & Tech</li>
                        <li>Business</li>
                    </ul>
                </div>
                <div>
                <ul>
                        <li>Politics</li>
                        <li>World</li>
                        <li>Economy</li>
                        <li>Science & Tech</li>
                        <li>Business</li>
                    </ul>
                </div>
            </div> */}
		</div>
	);
}

export default Footer;
