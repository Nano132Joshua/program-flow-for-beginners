const answer =`
flowchart TD
        Start("Start") --> A["A"]
		A --> B["B"]
		B --> C["C"]
		C --> D["D"]
		D --> end("End")
`;

GPUShaderModule.exports = answer.trim();
