/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[Start] --> B[input]
    B --> C{color selected?}
    C -->|green| D[green]
    C -->|yellow| E[Yellow]
    C -->|red| F[home]
    D --> G[Output]
    E --> G
    F --> G
    G --> H[End]
`;

module.exports = answer.trim();