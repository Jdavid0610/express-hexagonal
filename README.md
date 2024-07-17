# Express TypeScript Backend with Hexagonal Architecture

This project is a backend application built with Express.js and TypeScript, following the principles of Hexagonal Architecture.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher) or [yarn](https://yarnpkg.com/) (version 1.22 or higher)

### Installation

1. Install the dependencies:

   \`\`\`bash
   npm install
   \`\`\`

   or

   \`\`\`bash
   yarn install
   \`\`\`

### Running the Application

- To build and start the app with docker:

  \`\`\`bash
  docker build -t express-hexagonal .
  \`\`\`

  \`\`\`bash
  docker run -it -d -p 3080:3080 express-hexagonal
  \`\`\`

- To start the application in development mode with live reloading:

  \`\`\`bash
  npm run dev
  \`\`\`

  or

  \`\`\`bash
  yarn dev
  \`\`\`

- To start the application in production mode:

  \`\`\`bash
  npm start
  \`\`\`

  or

  \`\`\`bash
  yarn start
  \`\`\`

## Project Structure

The project follows the principles of Hexagonal Architecture. Here is an overview of the main directories and files:

\`\`\`
src/
├── context/
│ └── shared/
│ └── domain/
│ └── infrastructure/
│ └── user/
│ └── application/useCases/signIn/
│ └── domain/
│ └── repository/
│ └── service/
├── controllers/
│ └── user/
│ └── user.controller.ts
├── models/
├── requests/
│ └── user/
│ └── SignInUserRequest.ts
├── routes/
│ └── api.ts
├── .env
├── .gitignore
├── package.json
├── README.md
├── server.ts
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
\`\`\`

### Description of Key Folders and Files

- **context/**: Contains the application context and configurations.
- **shared/**: Shared utilities and types used across the application.
- **domain/**: Domain layer, including entities and domain services.
- **infrastructure/**: Infrastructure layer, handling external dependencies and implementations.
  - **user/**: User-related infrastructure components.
    - **application/useCases/signIn/**: Use cases related to user sign-in.
    - **domain/**: Domain-specific logic for users.
    - **repository/**: User repository implementations.
    - **service/**: User-related services.
- **controllers/**: API controllers handling HTTP requests.
  - **user.controller.ts**: Controller for user-related endpoints.
- **models/**: Data models used in the application.
- **requests/**: Request validation and transformation logic.
  - **SignInUserRequest.ts**: Validation logic for user sign-in requests.
- **routes/**: Application routes.
  - **api.ts**: Main API routes file.
- **.env**: Environment variables.
- **.gitignore**: Git ignore file.
- **package.json**: Project metadata and dependencies.
- **README.md**: This file.
- **server.ts**: Server setup and configuration.
- **tsconfig.json**: TypeScript configuration.
- **yarn-error.log**: Yarn error log.
- **yarn.lock**: Yarn lock file.

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [Julian David Ortiz Alviar](mailto:jdavidortizy2k@gmail.com).
