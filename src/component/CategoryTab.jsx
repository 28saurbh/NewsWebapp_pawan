import React, { useState } from "react";
import './style.scss'

function CategoryTab() {
    const [category, setCategory] = useState("Politics");
	let data = [
		{
			id: 0,
			cat_name: "Politics",
		},
		{
			id: 1,
			cat_name: "World",
		},
		{
			id: 1.4,
			cat_name: "Local",
		},
		{
			id: 2,
			cat_name: "Economic",
		},
		{
			id: 3,
			cat_name: "Science & Tech",
		},
		
	];
	return (
		<div style={{backgroundColor: "#1A1A1A"}} className="text-white px-3 text-sm">
			 <div className="flex gap-2  overflow-x-auto">
                {data.map((item, index) => (
                    <div key={index} className={`flex-shrink-0 select-none py-2 px-2 ${item.cat_name == category ? "active" : ""}`} onClick={() => setCategory(item.cat_name)}>

                        {item.cat_name}
                    </div>
                ))}
            </div>
		</div>
	);
}

export default CategoryTab;
