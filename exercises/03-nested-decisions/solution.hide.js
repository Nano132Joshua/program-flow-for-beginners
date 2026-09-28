/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    start("Start") --> A["Age"]
    A --> B["Check age"]
    B --> C{"APPROVED?"}
    C -->|yes| D["Can rent"]
    D --> E["Finish"]
    C -->|no| F{"Can rent?"}
    F -->|yes| D
    F -->|no| G["Rejected"]
    G --> E

    input["Age"]
    valid["Can rent"]
    invalid["rejected"]
    end("End")
`;

module.exports = answer.trim();