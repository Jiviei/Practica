import React, { useState } from "react";
import "./App.css";
import Tooltip from "./Tooltip";

interface PartOfContent {
	content: string;
	advices?: string[];
}

const ContentRenderer = ({ data }: { data: PartOfContent[] }) => {
	const [partsOfContent, re] = useState<PartOfContent[]>(data);

	return (
		<pre>
			{partsOfContent.map((content) => (
				<span>
					{content.advices ? (
						<Tooltip
							children={<span>{content.content}</span>}
							content={content.advices.map((advice) => (
								<div>
									<button
										onClick={() => {
											content.content = advice;
											delete content.advices;
											re([...partsOfContent]);
										}}
									>
										{advice}
									</button>
								</div>
							))}
							hideInMobile={false}
							interactive={true}
						/>
					) : (
						content.content
					)}
				</span>
			))}
		</pre>
	);
};

function App() {
	const partsOfContent: PartOfContent[] = [
		{
			content: "Очень ",
		},
		{
			content: "провильное",
			advices: ["правильно", "провальное", "профильное"],
		},
		{
			content: "\n",
		},
		{
			content: "преложение",
			advices: ["приложение", "проложение", "предложение"],
		},
	];

	return (
		<div className="App">
			<ContentRenderer data={partsOfContent} />
		</div>
	);
}

export default App;
