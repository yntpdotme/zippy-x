# Backend

The server provides follwing API endpoints:

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

<br>
