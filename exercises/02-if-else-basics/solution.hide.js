/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/

const answer = `
flowchart TD
    start("start") --> A["Input"]
    A --> B["Validate"]
    B --> C{"Valid?"}
    C -->|Yes| D["valid"]
    C -->|No| E["Invalid"]
    D --> F["Finish"]
    E --> F
    E --> end("end")
`;

// Do not modify this
module.exports = answer.trim();