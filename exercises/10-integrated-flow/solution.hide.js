/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[Start] --> B[Input: product / insert payment]
    B -->|yes| C[Select product] 
    C -->|No - loop| B
    C --> D[process payment]
    D --> E[check payment]
    E -->|No - loop| D
    E --> F[payment accepted]
    F --> G[dispense product]
    G --> H[output: return change]
    H --> I[End]
`;

module.exports = answer.trim();