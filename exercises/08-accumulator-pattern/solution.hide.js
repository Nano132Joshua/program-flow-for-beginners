/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart LR
    A[start] --> B[Input: price]
    B --> C{Continue?}
    C -->|Yes| D[loop]
    D --> B
    C -->|No| E[output]
    E --> F[End]
`;

module.exports = answer.trim();