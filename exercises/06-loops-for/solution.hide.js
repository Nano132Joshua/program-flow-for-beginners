/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[Start] --> B[Input: Task List]
    B --> C{More Tasks}
    C -->|Yes| D[loop]
    D --> E[Process Task]
    E --> C
    C -->|No| F[output]
    F --> G[end]
`;

module.exports = answer.trim();