/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart LR
    A[Start] --> B[Locked]
    B -->|Event: coin| C[Unlocked]
    B -->|Event: push| B
    C -->|Event: push| D[Output: allow pass / rotate]
    C -->|Event: coin| C
    D --> B
    B --> E[End]
`;

module.exports = answer.trim();