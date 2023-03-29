import React, { useState } from "react";

import { styled } from "@compiled/react";

const Container = styled.div`
  display:flex;
	flex-flow: wrap column;
`;

const Item = styled.div`
	background-color: #2e3f32;
	border-radius: 3px;
	padding: 2em;
	margin: 15px;
`;

export default function RepoList({ data }) {
	const [sort, setSort] = useState(0);
	let relData = data;
	if (sort == 1) {
		relData = data.sort((a, b) => a.stars < b.stars);
	} else if (sort == 2) {
		relData = data.sort((a, b) => a.slug.toLowerCase() > b.slug.toLowerCase());
	}
	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
				}}
			>
				<select value={sort} onChange={(evt) => setSort(evt.target.value)}>
					<option value={0}>by Date Added</option>
					<option value={1}>by Stars</option>
					<option value={2}>by Name</option>
				</select>
			</div>
			{relData.length} items
			<Container>
				{relData.map((node) => {
					return (
						<Item>
							<h3>
								<a href={`https://github.com/${node.slug}`}>{node.slug}</a> (⭐{" "}
								{node.stars})
							</h3>
							<div>
								{node.desc} ({node.lang})
							</div>
						</Item>
					);
				})}
			</Container>
		</div>
	);
}
