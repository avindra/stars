import React from "react";

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
	return (
		<Container>
			{data.map((node) => {
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
	);
}
