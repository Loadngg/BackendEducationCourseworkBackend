# REST API for backend-education coursework using NestJs and PostgreSQL

This is a REST API written with NestJs and PostgreSQL as our
database.

## Requirements

- Nodejs
- PostgreSQL

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Loadngg/BackendEducationCoursework.git backend-education-coursework
   ```

2. Change to the project directory:

   ```bash
   cd backend-education-coursework
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in root dir with settings:

```env
DATABASE_URL="postgresql://user:password@host:port/db_name?schema=public"
JWT_SECRET="long-long-secret"
```

## Running

Run the application:

```sh
npm run start:dev
```

The API will be available at `http://localhost:3000`.

The SWAGGER will be available at `http://localhost:3000/api`.
