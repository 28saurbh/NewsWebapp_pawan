import React from 'react'

function Header() {
    return (
        <div className="bg-black">
            <div className="flex items-center justify-between mx-3">
                <div>
                    <h1 className="text-white text-xl select-none">NEWSLETTER</h1>
                </div>
                <div>
                    <div className="flex items-center justify-center p-5">
                        <div className="flex select-none">
                            <input
                                type="text"
                                className="w-full  px-2 text-sm text-white outline-0"
                                placeholder="search for headlines"
                                id=""
                                style={{ backgroundColor: "#04594D" }}
                            />
                            <button
                                type="button"
                                // onClick={() => handleSearch()}
                                style={{ backgroundColor: "#8E4042" }}
                                className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white text-sm hover:bg-blue-800 transition-colors"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header