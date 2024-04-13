<br>
<h1 align="center">ZippyX Backend</h1>

<h3 align="center">

<img src = "../assets/docs.gif" width = 32px align="top"/>&nbsp;[API Docs](https://documenter.getpostman.com/view/31850881/2sA3BuXpVE) &nbsp;» &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; «[&nbsp; Source Code &nbsp;](../server/)<img src = "https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width = 23px align="top"/>

</h3>
<br>

- This codebase contains the backend logic for the **ZippyX** application.

- Dive into the codebase to explore the inner workings of Zippy's backend.

<br>

~ Endpoints ~

## Server Health 🛠️

### - Health Check

- Endpoint: `/api/healthcheck`

- Method: `GET`

- Description: Verifies the health status of the server.

<br>

## User Authentication &nbsp; 🔐

### - Sign Up

- Endpoint: `/api/v1/auth/signup`

- Method: `POST`

- Description: Register a new account with required information.

### - Sign In

- Endpoint: `/api/v1/auth/signin`

- Method: `POST`

- Description: Authenticate and sign in with credentials.

### - Sing Out

- Endpoint: `/api/v1/auth/signout`

- Method: `GET`

- Description: Sign out the authenticated user session.

### - Authentication Status

- Endpoint: `/api/v1/auth/status`

- Method: `GET`

- Description: Check the authentication status of the user.

### - Refresh Token

- Endpoint: `/api/v1/auth/refresh`

- Method: `POST`

- Description: Refreshes the access token.

### - Google SSO (Single Sign-On)

- Endpoint: `/api/v1/auth/google`

- Method: `GET`

- Description: Initiate authentication with Google OAuth.

### - Google Auth Callback

- Endpoint: `/api/v1/auth/google/callback`

- Method: `GET`

- Description: Callback route after Google authentication.

<br>

## User Management &nbsp;👤

### - Get All Users

- Endpoint: `/api/v1/users`

- Method: `GET`

- Description: Retrieve all users.

- Query Parameters:

  - `page`: Page number (default: 1)

  - `limit`: Number of items per page (default: 10)

  - `filter`: Optional filter criteria (by name)

### - Get Current User

- Endpoint: `/api/v1/users/me`

- Method: `GET`

- Description: Get a current user.

### - Update Current User

- Endpoint: `/api/v1/users/me`

- Method: `PATCH`

- Description: Update a current user.

<br/>

## Wallet Management &nbsp;💰

### - Get Balance

- Endpoint: `/api/v1/wallet/balance`

- Method: `GET`

- Description: Retrieves the wallet balance for the authenticated user.

### - Doposite Ammount

- Endpoint: `/api/v1/wallet/deposit`

- Method: `POST`

- Description: Allows authenticated users to add funds to their wallet.

### - Transfer Ammount

- Endpoint: `/api/v1/wallet/transfer`

- Method: `POST`

- Description: Allows authenticated users to transfer funds to another wallet.

<br>

## Transactions History &nbsp;🧾

### - Get All Transactions

- Endpoint: `/api/v1/transactions/`

- Method: `GET`

- Description: Allowed authenticated users to see their past transactions.

- Query Parameters:

  - `page`: Page number (default: 1)

  - `limit`: Number of items per page (default: 10)

<br>

<h2 >🖥️&nbsp;&nbsp; Local Development</h2>

1. **Navigate to the Backend Codebase:**

   ```bash
   cd server/
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Add Environment Variables:**

   Create .env file in the root folder and copy paste the content of .env.sample.

   ```bash
   cp .env.sample .env
   ```

   If required, add necessary credentials.

4. **Start the Server:**

   ```bash
   npm start
   ```

5. **Explore the API:**

   Access the project APIs at the specified endpoints using [API Docs](https://documenter.getpostman.com/view/31850881/2sA3BuXpVE).

<br><br>

Feel free to explore backend APIs implementation and run it locally to verify it's correctness. Happy coding!
