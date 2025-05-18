# Random Useless Facts API

This project is a RESTful API for storing and retrieving random useless facts. It uses Node.js, Express, and Firebase Firestore as the backend database.

## Features

- Add a new useless fact
- Get a random useless fact
- Get all facts
- Get a fact by ID
- Update a fact by ID
- Delete a fact by ID

## Project Structure

```
.
├── api/
│   ├── app.js
│   ├── config/
│   │   ├── firebase.js
│   │   └── firebase-service-account.json
│   ├── controllers/
│   │   └── facts.js
│   ├── routes/
│   │   └── facts.js
│   └── services/
│       └── facts.js
├── useless_facts.txt
├── random-facts.js
├── .env
├── .gitignore
├── package.json
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- Firebase project and service account credentials

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/taufanAli65/random-useless-facts.git
   cd random-useless-facts
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up your environment variables in `.env`:

   ```
   PORT=8006
   ```

4. Place your Firebase service account JSON in `api/config/firebase-service-account.json`.

### Running the Server

Start the API server:

```sh
npm start
```

Or for development with auto-reload:

```sh
npm run dev
```

The server will run on the port specified in `.env` (default: 8006).

### API Endpoints

- `GET /` - Get a random fact
- `GET /all` - Get all facts
- `GET /fact/:id` - Get a fact by ID
- `POST /add` - Add a new fact (expects JSON body)
- `PUT /edit/:id` - Update a fact by ID (expects JSON body)
- `DELETE /delete/:id` - Delete a fact by ID

### Bulk Upload Facts

You can use `random-facts.js` to upload facts from `useless_facts.txt` to the API:

```sh
node random-facts.js
```

## License

ISC

## Author

[taufanAli65](https://github.com/taufanAli65)