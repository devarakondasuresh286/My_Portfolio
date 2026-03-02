export const skillDetails = {
  html: {
    name: "HTML",
    overview: "I use HTML to create semantic, accessible page structures that are clean, maintainable, and SEO-friendly.",
    projects: ["Portfolio Website", "NestChange"],
    challenges: [
      "Keeping markup semantic while building visually complex layouts.",
      "Balancing content hierarchy and responsive structure across devices."
    ],
    solutions: [
      "Used meaningful elements like header, section, article, and nav for clearer structure.",
      "Designed reusable layout blocks and tested in multiple breakpoints early."
    ],
    learnings: [
      "Strong semantic HTML improves accessibility and long-term maintainability.",
      "A solid document structure makes CSS and JS development faster."
    ]
  },
  css: {
    name: "CSS",
    overview: "I design responsive interfaces with modern CSS using layout systems, transitions, and reusable style patterns.",
    projects: ["Portfolio Website", "About the People"],
    challenges: [
      "Maintaining consistent spacing and alignment in complex sections.",
      "Handling responsive behavior for translated content and long text labels."
    ],
    solutions: [
      "Applied clear spacing tokens and flexible layout rules.",
      "Used media queries, wrapping strategies, and adaptive sizing for resilience."
    ],
    learnings: [
      "Design consistency comes from predictable spacing and component structure.",
      "Responsive design should be planned early, not patched later."
    ]
  },
  javascript: {
    name: "JavaScript",
    overview: "I use JavaScript to add interactivity, dynamic rendering, and behavior logic for modern web experiences.",
    projects: ["Portfolio Website", "NestChange"],
    challenges: [
      "Managing UI state transitions without introducing regressions.",
      "Ensuring smooth interactions across browsers and screen sizes."
    ],
    solutions: [
      "Separated concerns into focused functions and reusable handlers.",
      "Tested interaction flows step-by-step after each feature addition."
    ],
    learnings: [
      "Small, clear functions make dynamic UI behavior easier to debug.",
      "Event handling and state changes should always be predictable."
    ]
  },
  react: {
    name: "React",
    overview: "I build component-driven interfaces in React with reusable UI sections, state management, and clean composition.",
    projects: ["Portfolio Website", "About the People"],
    challenges: [
      "Preventing re-render side effects when integrating animation and translation.",
      "Keeping components reusable while scaling page complexity."
    ],
    solutions: [
      "Isolated state logic with hooks and guarded side effects in useEffect.",
      "Split UI into focused components and shared data models."
    ],
    learnings: [
      "Well-structured components make feature growth much faster.",
      "Hook dependencies and side effects need careful design for stability."
    ]
  },
  java: {
    name: "Java",
    overview: "I use Java to implement reliable backend logic, object-oriented design, and service-driven application workflows.",
    projects: ["NestChange", "About the People"],
    challenges: [
      "Designing maintainable service layers with clean separation of concerns.",
      "Handling validation and error flows without duplicating logic."
    ],
    solutions: [
      "Used layered architecture patterns and centralized utility methods.",
      "Added clear DTO and validation flow between controller and service layers."
    ],
    learnings: [
      "Strong architecture decisions reduce long-term code complexity.",
      "Readable backend code is critical for team collaboration."
    ]
  },
  "spring-boot": {
    name: "Spring Boot",
    overview: "I build REST APIs and backend modules in Spring Boot, focusing on clean architecture, data handling, and deployment readiness.",
    projects: ["NestChange", "About the People"],
    challenges: [
      "Configuring application properties and environments safely.",
      "Integrating APIs with frontend while maintaining consistent contracts."
    ],
    solutions: [
      "Structured environment configuration and externalized sensitive settings.",
      "Defined stable API response formats and validated them with frontend flows."
    ],
    learnings: [
      "API consistency is essential for smooth full-stack integration.",
      "Configuration management is as important as business logic quality."
    ]
  },
  "node-js": {
    name: "Node.js",
    overview: "I use Node.js to build backend services, handle server-side logic, and support scalable API-driven applications.",
    projects: ["About the People"],
    challenges: [
      "Structuring backend modules to keep code maintainable as features grow.",
      "Handling async operations cleanly without introducing unstable flows."
    ],
    solutions: [
      "Organized server code by feature and separated route, service, and data access responsibilities.",
      "Used async patterns consistently with clear error handling across API endpoints."
    ],
    learnings: [
      "Consistent backend structure improves development speed and debugging.",
      "Clear async flow design makes APIs more reliable under real usage."
    ]
  },
  "express-js": {
    name: "Express.js",
    overview: "I use Express.js to create REST APIs, route requests cleanly, and connect frontend features to backend services.",
    projects: ["About the People"],
    challenges: [
      "Designing route and middleware layers that remain easy to scale.",
      "Keeping request validation and response formats consistent across endpoints."
    ],
    solutions: [
      "Applied modular routing and reusable middleware for authentication and validation.",
      "Standardized API responses and error patterns to simplify frontend integration."
    ],
    learnings: [
      "Middleware design has a big impact on API maintainability.",
      "Consistent endpoint contracts reduce integration bugs significantly."
    ]
  },
  sql: {
    name: "SQL",
    overview: "I use SQL for relational data modeling, querying, and performance-oriented data access patterns.",
    projects: ["NestChange"],
    challenges: [
      "Designing query logic that remains readable and performant.",
      "Managing joins and relationships as data models evolve."
    ],
    solutions: [
      "Optimized frequently used queries and simplified table relationships.",
      "Maintained naming consistency and clear schema evolution practices."
    ],
    learnings: [
      "Good schema design prevents many downstream performance issues.",
      "Readable SQL is easier to optimize and maintain."
    ]
  },
  mongodb: {
    name: "MongoDB",
    overview: "I use MongoDB for flexible document-based data storage in features that benefit from schema agility.",
    projects: ["About the People"],
    challenges: [
      "Choosing the right document structure for future feature growth.",
      "Avoiding over-nesting while preserving query efficiency."
    ],
    solutions: [
      "Modeled collections around access patterns and practical use cases.",
      "Kept documents focused and indexed key fields for frequent queries."
    ],
    learnings: [
      "Document design should follow read/write patterns, not assumptions.",
      "Indexes must be planned around real query usage."
    ]
  },
  git: {
    name: "Git",
    overview: "I use Git for version control, feature branching, and clean change tracking across portfolio and team projects.",
    projects: ["Portfolio Website", "About the People", "NestChange"],
    challenges: [
      "Avoiding merge conflicts in active parallel development.",
      "Keeping commit history clear and meaningful."
    ],
    solutions: [
      "Used focused branches and regular pull/rebase workflows.",
      "Wrote structured commit messages and grouped logical changes."
    ],
    learnings: [
      "Good Git hygiene speeds up collaboration and debugging.",
      "Small, focused commits are easier to review and revert."
    ]
  },
  github: {
    name: "GitHub",
    overview: "I use GitHub for repository hosting, collaboration, issue tracking, and deployment workflows.",
    projects: ["Portfolio Website", "About the People", "NestChange"],
    challenges: [
      "Organizing project updates clearly for collaborators.",
      "Maintaining high visibility of progress and feature status."
    ],
    solutions: [
      "Used clear README updates, pull requests, and issue linking.",
      "Created clean branch and merge routines for safer releases."
    ],
    learnings: [
      "Transparent collaboration improves both speed and code quality.",
      "Documentation and pull request quality matter for team efficiency."
    ]
  }
};

export const skillOrder = [
  "html",
  "css",
  "javascript",
  "react",
  "java",
  "spring-boot",
  "node-js",
  "express-js",
  "sql",
  "mongodb",
  "git",
  "github"
];
