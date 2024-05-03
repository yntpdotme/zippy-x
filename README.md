<h1 align="center">ZippyX</h1>

<p align="center">
	Your Payments Made Lightning Fast
</p>
</p>

<p align=center>
  <img width = "900px" alt="Jio Network blocking the view? Network switch reveals the magic!" src="./assets/zippyx-stack.png">
<p>

<div align= "center">

[![Twitter Badge](https://img.shields.io/badge/-@KadlagAkash-1ca0f1?style=flat&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/KadlagAkash)](https://twitter.com/KadlagAkash) &nbsp; [![Linkedin Badge](https://img.shields.io/badge/-KadlagAkash-0e76a8?style=flat&labelColor=0e76a8&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kadlagakash/) &nbsp; [![Mail Badge](https://img.shields.io/badge/-akashkadlag14-c0392b?style=flat&labelColor=c0392b&logo=gmail&logoColor=white)](mailto:akashkadlag14@gmail.com) &nbsp; [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)&nbsp; [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

</div>

<h2 align="center">

<img src = "./assets/eyes-to-see.gif" width = 26px align="top"/> &nbsp;[See it in Action](https://zippy-x.vercel.app/) &nbsp;»

</h2>

<h3 align="center">

[🗂️&nbsp; Frontend](./client/README.md)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Backend &nbsp;📂](./server/README.md)

</h3>

<br>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> 
	·&nbsp;<a href="#features"><strong>Features</strong></a> 
	·&nbsp;<a href="#tech-stack"><strong>Tech Stack</strong></a>
	·&nbsp;<a href="#docker-setup"><strong>Quick Start</strong></a> 
	·&nbsp;<a href="#manual-setup"><strong>Manual Setup</strong></a> 
</p>
<br>

## <a name="introduction">❄️&nbsp; Introduction</a>

Experience seamless transactions and effortless money transfers with ZippyX. Delve into the codebase to explore more.

<br>
<a href="https://zippy-x.vercel.app/">
  <p align=center>
    <img width = "650px" alt="Jio Network blocking the view? Network switch reveals the magic!" src="./assets/zippy-x.png">
  <p>
</a>
<br>

## <a name="features">🔋&nbsp; Features</a>

- Organized File and Folder Structure

- Fully Responsive Design

- Well-organized & intuitive UI

- Server Side State Management & Caching using React Query.

- Client Side States Management with Recoil

- Custom Hooks

- Schema Validation using zod.

- Robus Authentication

- Google SSO (Single Sign-On)

- Security Measures like rate limiting and referesh tokens.

- Documentation with local development setup guide.

- Dark and Light Mode

<br>

## <a name="tech-stack">⚙️&nbsp; Tech Stack</a>

- [MongoDB](https://www.mongodb.com/) – database

- [Express](https://expressjs.com/) – framework

- [React](https://react.dev/) – frontend

- [Node.js](https://nodejs.org/) – JavaScript runtime

- [Tailwind CSS](https://tailwindcss.com/) – CSS

- [Recoil](https://recoiljs.org/) – state management

- [Tanstack Query](https://tanstack.com/query/latest) – asynchronous state management

- [Mongoose](https://mongoosejs.com/) – ODM

- [Git](https://git-scm.com/) – versioning

- [Docker](https://www.docker.com/) – containerziation

- [Vite](https://vitejs.dev/) – building

- [Vercel](https://vercel.com/) – deployments

<br>

## <a name="docker-setup"> 🐳&nbsp;&nbsp; Quick Start with Docker</a>

0. **Prerequisites**

   Make sure you have the [Docker](https://www.docker.com/) installed on your machine.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KadlagAkash/zippy-x.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd zippy-x
   ```

3. **Add Environment Variables:**

   Create `.env` files in the server and client folder and copy paste the content of `.env.sample`

   ```bash
   # server side
   cd server
   cp .env.sample .env # then update `.env` with your creadentials.
   cd ..

   # client side
   cd client
   cp .env.smaple .env # then update `.env` if required.
   cd ..
   ```

4. **Start all services using Docker Compose:**

   ```bash
   docker-compose up --watch

   # --watch to Enable Watch (For Live Update aka Hot Reloading)
   ```

<br>

## <a name="manual-setup"> 🖥️&nbsp;&nbsp; Manual Setup</a>

0.  **Prerequisites** <br>
    Make sure you have the following installed on your machine:

    - [Git](https://git-scm.com/)
    - [Node.js](https://nodejs.org/en)
    - [npm](https://www.npmjs.com/) (Node Package Manager)

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/KadlagAkash/zippy-x.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd zippy-x
    ```

3.  **Setup Backend:**

    - **Navigate to the Backend Codebase:**

      ```bash
      cd server/
      ```

    - **Install dependencies:**

      ```bash
      npm install
      ```

    - **Add Environment Variables:**

      Create `.env` file in the root folder and copy paste the content of `.env.sample`

      ```bash
      cp .env.sample .env
      ```

      Update credentials in `.env` with your creadentials.

    - **Start the Server:**

      ```bash
      npm start
      ```

    - **Explore the API:**

      Access the project APIs at the specified endpoints using [API Docs](https://documenter.getpostman.com/view/31850881/2sA3Bn7srM).

4.  **Setup Frontend:**

    - **Navigate to the Frontent Codebase:**

      ```bash
      cd client/
      ```

    - **Install dependencies:**

      ```bash
      npm install
      ```

    - **Add Environment Variables:**

      Create `.env` file in the root folder and copy paste the content of `.env.sample`

      ```bash
      cp .env.sample .env
      ```

      If required, update necessary credentials.

    - **Start the frontend app:**

      ```bash
      npm run dev
      ```

    - **Start the backend server:**

      ```bash
      cd ../server
      npm start
      ```

    - **Open app in browser:**

      Visit [https://localhost:5173](https://localhost:5173) to access frontent.

<br>

<br>

## 🤝&nbsp;&nbsp;Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for ways to get started.
</br></br>

## 🪪&nbsp;&nbsp; License

ZippyX is open-source under the [MIT License](./LICENSE).
Feel free to learn, add upon, and share!
