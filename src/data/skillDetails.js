export const skillDetails = {
  html: {
    name: "HTML",
    overview: "I use HTML to build semantic page structures that keep content accessible, organized, and easy to extend.",
    projects: ["NestChange", "Onride Rentals", "Invoice VAT System", "My Portfolio", "Smart Trip Planner", "About the People"],
    challenges: [
      "Structuring pages with clear hierarchy for different content types.",
      "Keeping markup flexible enough for responsive layouts and rich UI blocks."
    ],
    solutions: [
      "Used semantic elements to separate navigation, content, and supporting sections.",
      "Kept markup consistent so styles and component updates stayed predictable."
    ],
    learnings: [
      "Good structure makes every later UI change easier to manage.",
      "Semantic markup improves both accessibility and maintainability."
    ]
  },
  css: {
    name: "CSS",
    overview: "I use CSS to shape responsive layouts, visual hierarchy, and polished interactions across my projects.",
    projects: ["NestChange", "Onride Rentals", "Invoice VAT System", "My Portfolio", "About the People"],
    challenges: [
      "Maintaining visual consistency across varied sections and screen sizes.",
      "Balancing detailed styling with reusable component-based layouts."
    ],
    solutions: [
      "Used modular class patterns and spacing consistency to keep pages aligned.",
      "Applied flexible layout rules so each section adapted cleanly to the viewport."
    ],
    learnings: [
      "Consistent styling decisions improve the overall feel of a product.",
      "Responsive CSS works best when it is planned with the layout from the start."
    ]
  },
  javascript: {
    name: "JavaScript",
    overview: "I use JavaScript to power interactivity, state changes, and data flow in browser-based experiences.",
    projects: ["NestChange", "Onride Rentals", "My Portfolio", "About the People"],
    challenges: [
      "Coordinating dynamic UI updates without introducing unexpected behavior.",
      "Handling asynchronous logic cleanly across frontend and integration flows."
    ],
    solutions: [
      "Split logic into focused functions and reused shared helpers where possible.",
      "Kept data flow predictable so interface updates stayed easy to trace."
    ],
    learnings: [
      "Clear JavaScript structure reduces debugging time.",
      "Small functions and stable state transitions make interactive apps more reliable."
    ]
  },
  react: {
    name: "React",
    overview: "I use React to build reusable interfaces with component composition, state-driven rendering, and clean UI structure.",
    projects: ["Onride Rentals", "My Portfolio", "About the People"],
    challenges: [
      "Keeping components reusable while each page still felt tailored to the project.",
      "Managing state and props cleanly as the interface grew."
    ],
    solutions: [
      "Broke pages into focused components with clear responsibilities.",
      "Passed data through predictable props and kept side effects isolated."
    ],
    learnings: [
      "Component boundaries matter when a project starts to scale.",
      "Well-structured React code is easier to test, extend, and reason about."
    ]
  },
  java: {
    name: "Java",
    overview: "I use Java for object-oriented application logic, desktop tools, and backend services with strong structure.",
    projects: ["Invoice VAT System", "Smart Trip Planner"],
    challenges: [
      "Organizing business rules so they stayed readable as features expanded.",
      "Managing persistence and workflow logic without mixing responsibilities."
    ],
    solutions: [
      "Used layered design to separate UI, domain, and data access concerns.",
      "Kept service methods focused on one task at a time."
    ],
    learnings: [
      "Java rewards careful structure and consistent naming.",
      "Clear class responsibilities make larger applications easier to maintain."
    ]
  },
  "spring-boot": {
    name: "Spring Boot",
    overview: "I use Spring Boot to build backend APIs with organized configuration, clean routing, and service-driven structure.",
    projects: ["Invoice VAT System"],
    challenges: [
      "Keeping API setup manageable while the backend logic stayed modular.",
      "Balancing environment configuration with code that remained easy to deploy."
    ],
    solutions: [
      "Separated controllers, services, and repositories into clear layers.",
      "Used external configuration to keep the application easier to maintain."
    ],
    learnings: [
      "Spring Boot is strongest when conventions are followed consistently.",
      "A clean backend structure makes future feature work much safer."
    ]
  },
  "spring-security": {
    name: "Spring Security",
    overview: "I use Spring Security to protect backend routes and control access to sensitive application behavior.",
    projects: ["Invoice VAT System"],
    challenges: [
      "Defining secure access rules without making the API awkward to use.",
      "Keeping authentication and authorization logic easy to verify."
    ],
    solutions: [
      "Structured security rules so protected endpoints were explicit and predictable.",
      "Separated security concerns from business logic to keep the code readable."
    ],
    learnings: [
      "Security works best when it is designed into the architecture early.",
      "Clear access rules reduce both risk and maintenance effort."
    ]
  },
  "rest-api": {
    name: "REST API",
    overview: "I design REST APIs with clear resources, consistent responses, and practical contracts for frontend and backend integration.",
    projects: ["Invoice VAT System", "Onride Rentals"],
    challenges: [
      "Keeping endpoint behavior consistent across multiple features.",
      "Making request and response structures easy for clients to consume."
    ],
    solutions: [
      "Used resource-based routes and stable response shapes.",
      "Applied validation and clear status handling to reduce integration issues."
    ],
    learnings: [
      "Good API design is mostly about clarity and consistency.",
      "Small contract changes can affect the whole application flow."
    ]
  },
  python: {
    name: "Python",
    overview: "I use Python for backend development and application logic where concise, readable code helps move quickly.",
    projects: ["Onride Rentals"],
    challenges: [
      "Keeping backend modules organized as the feature set expanded.",
      "Handling request flow and validation cleanly in a service-oriented app."
    ],
    solutions: [
      "Grouped related logic into small modules with clear responsibilities.",
      "Kept functions direct so bugs were easier to isolate."
    ],
    learnings: [
      "Readable Python makes backend work faster to review and maintain.",
      "Simple module design helps prevent hidden coupling."
    ]
  },
  fastapi: {
    name: "FastAPI",
    overview: "I use FastAPI to build fast, typed backend services with clear validation and modern API workflows.",
    projects: ["Onride Rentals"],
    challenges: [
      "Structuring endpoints so they stayed easy to understand and extend.",
      "Making request validation and response models consistent across the API."
    ],
    solutions: [
      "Used typed request and response models to document behavior naturally.",
      "Kept route handlers focused and moved business logic into separate layers."
    ],
    learnings: [
      "Typed APIs make backend contracts much clearer.",
      "FastAPI is strongest when routes stay small and purposeful."
    ]
  },
  mysql: {
    name: "MySQL",
    overview: "I use MySQL for structured relational data, transactional workflows, and project data that needs reliable querying.",
    projects: ["Onride Rentals", "Invoice VAT System"],
    challenges: [
      "Designing tables that matched the way the applications actually read data.",
      "Keeping joins and lookups efficient as the dataset grew."
    ],
    solutions: [
      "Normalized related tables and used practical relationships for the domain.",
      "Added indexes around common queries to keep retrieval fast."
    ],
    learnings: [
      "A clear schema prevents many downstream application issues.",
      "Performance improves when the database design follows real usage patterns."
    ]
  },
  postgresql: {
    name: "PostgreSQL",
    overview: "I use PostgreSQL for structured backend data where strong relational features and reliable constraints matter.",
    projects: ["Invoice VAT System"],
    challenges: [
      "Keeping financial data accurate across inserts and updates.",
      "Maintaining predictable SQL behavior for business calculations."
    ],
    solutions: [
      "Used strong column types and consistent schema design for key entities.",
      "Kept SQL logic focused so tax and invoice rules stayed easy to follow."
    ],
    learnings: [
      "PostgreSQL is a strong fit for structured business data.",
      "Careful schema design supports both correctness and long-term flexibility."
    ]
  },
  "node-js": {
    name: "Node.js",
    overview: "I use Node.js for server-side logic, API support, and application layers that need asynchronous execution.",
    projects: ["About the People"],
    challenges: [
      "Keeping the backend codebase organized as the project evolved.",
      "Managing asynchronous operations without making the flow hard to follow."
    ],
    solutions: [
      "Separated responsibilities into route, service, and data access layers.",
      "Used consistent async patterns with explicit error handling."
    ],
    learnings: [
      "A clean Node structure makes APIs easier to extend.",
      "Async code stays maintainable when each layer has a clear job."
    ]
  },
  "express-js": {
    name: "Express.js",
    overview: "I use Express.js to build routing layers and REST endpoints with modular server structure.",
    projects: ["About the People"],
    challenges: [
      "Keeping route definitions readable as the API grew.",
      "Handling errors and request validation in a consistent way."
    ],
    solutions: [
      "Organized routes into feature-based modules for clarity.",
      "Used shared middleware patterns to keep endpoint behavior uniform."
    ],
    learnings: [
      "Express becomes easier to manage when routes stay small.",
      "Middleware design has a big impact on backend maintainability."
    ]
  },
  mongodb: {
    name: "MongoDB",
    overview: "I use MongoDB for flexible document storage in projects that benefit from schema agility.",
    projects: ["About the People"],
    challenges: [
      "Choosing document structures that supported publishing workflows.",
      "Keeping reads efficient without over-complicating nested data."
    ],
    solutions: [
      "Modeled collections around the actual article and user access patterns.",
      "Kept documents focused and indexed fields used often in queries."
    ],
    learnings: [
      "Document design should follow how the app reads data.",
      "Indexes are most effective when they match real usage."
    ]
  },
  php: {
    name: "PHP",
    overview: "I use PHP for server-side functionality in web applications that need simple, direct backend logic.",
    projects: ["NestChange"],
    challenges: [
      "Keeping legacy-style server code organized and readable.",
      "Separating form handling, logic, and persistence cleanly."
    ],
    solutions: [
      "Split the code into focused sections for data handling and page flow.",
      "Kept the backend logic straightforward so changes were easier to test."
    ],
    learnings: [
      "PHP can stay maintainable when responsibilities are kept simple.",
      "Clear structure matters even in smaller server-side projects."
    ]
  },
  sql: {
    name: "SQL",
    overview: "I use SQL for relational modeling, queries, and data access in projects that depend on structured storage.",
    projects: ["NestChange"],
    challenges: [
      "Writing queries that stayed readable while still doing the job well.",
      "Managing relationships and joins without making the data layer confusing."
    ],
    solutions: [
      "Kept queries focused and used consistent naming across the schema.",
      "Optimized only the parts of the data flow that were used often."
    ],
    learnings: [
      "Good SQL is both precise and easy to revisit later.",
      "Schema choices strongly affect application performance and clarity."
    ]
  },
  javafx: {
    name: "JavaFX",
    overview: "I use JavaFX to build desktop interfaces with event-driven controls and interactive layouts.",
    projects: ["Smart Trip Planner"],
    challenges: [
      "Managing multiple screens and interactive states in a desktop app.",
      "Keeping the interface responsive while handling travel-planning logic."
    ],
    solutions: [
      "Used focused views and event handlers to keep the UI organized.",
      "Separated presentation logic from trip data and calculations."
    ],
    learnings: [
      "Desktop apps benefit from small, well-defined UI sections.",
      "Event-driven design works best when logic stays modular."
    ]
  },
  sqlite: {
    name: "SQLite",
    overview: "I use SQLite for lightweight local persistence in desktop applications that need simple and reliable storage.",
    projects: ["Smart Trip Planner"],
    challenges: [
      "Keeping local storage simple while supporting app features cleanly.",
      "Structuring queries for fast access inside a desktop workflow."
    ],
    solutions: [
      "Designed a compact schema around the planner’s core entities.",
      "Used direct queries that matched the application’s real usage patterns."
    ],
    learnings: [
      "SQLite is a practical choice for focused local applications.",
      "Simple schemas make desktop persistence easier to maintain."
    ]
  },
  git: {
    name: "Git",
    overview: "I use Git to track changes, manage branches, and keep project history clean across every project I build.",
    projects: ["NestChange", "Onride Rentals", "Invoice VAT System", "My Portfolio", "Smart Trip Planner", "About the People"],
    challenges: [
      "Keeping work isolated while features were moving in parallel.",
      "Making commit history easy to understand when projects changed quickly."
    ],
    solutions: [
      "Worked in focused branches and merged only when changes were ready.",
      "Used small, descriptive commits to keep the history easy to follow."
    ],
    learnings: [
      "Good Git habits make collaboration and recovery much easier.",
      "Branch discipline helps protect unfinished work."
    ]
  },
  github: {
    name: "GitHub",
    overview: "I use GitHub to host repositories, share progress, and manage collaboration across my portfolio projects.",
    projects: ["NestChange", "Onride Rentals", "Invoice VAT System", "My Portfolio", "Smart Trip Planner", "About the People"],
    challenges: [
      "Keeping project history and repository updates easy to review.",
      "Presenting work clearly across multiple repos and feature sets."
    ],
    solutions: [
      "Used repository structure and commits that made changes easy to inspect.",
      "Kept project information organized so progress was easier to track."
    ],
    learnings: [
      "Public repository hygiene improves both collaboration and presentation.",
      "Good repo organization makes portfolio work easier to trust."
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
  "spring-security",
  "rest-api",
  "python",
  "fastapi",
  "mysql",
  "postgresql",
  "node-js",
  "express-js",
  "mongodb",
  "php",
  "sql",
  "javafx",
  "sqlite",
  "git",
  "github"
];
