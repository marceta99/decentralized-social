
---

# **Let’s VIBE** &middot; ![License](https://img.shields.io/badge/License-MIT-brightgreen.svg) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

A **decentralized social media network** that stores posts on the Ethereum blockchain using smart contracts. Build a censorship-resistant platform where user posts truly belong to the users.

---
## **Table of Contents**
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Development](#development)
6. [Contributing](#contributing)
7. [License](#license)

---

## **Overview**
**Let’s VIBE** is an experimental DApp (Decentralized Application) aiming to:
- Store all posts on the Ethereum network via smart contracts.
- Give users **full ownership** of their content.
- Provide a simple, React-based frontend to interact with the contracts.

If you’ve ever wanted a social media platform where **you** control your data—this is it.

---

## **Prerequisites**
- **Node.js** (v14+ recommended)
- **npm** (v6+ recommended)
- **Metamask** or equivalent Ethereum wallet extension installed in your browser
- A test Ethereum network (e.g., **Rinkeby**, **Goerli**, or local Ganache/Hardhat node) if you want to test blockchain interactions

> *Note:* If you’re deploying to a production Ethereum mainnet, ensure you handle **gas costs** and **wallet configurations** properly.

---

## **Installation**

1. **Clone the Repository**  
   Choose or create a directory, then run:
   ```bash
   git clone https://github.com/marceta99/decentralized-social
   ```

2. **Navigate to the `vibe` folder**  
   ```bash
   cd decentralized-social/vibe
   ```

3. **Install Dependencies**  
   ```bash
   npm install
   ```

You’re all set! Next, we’ll run the development server and interact with the dApp locally.

---

## **Usage**

### **Starting the Development Server**
```bash
npm start
```
- Opens the application in **development mode** at [http://localhost:3000](http://localhost:3000).  
- The page **auto-reloads** if you edit source files.  
- Lint errors and logs appear in your console for easy debugging.

### **Smart Contract Interaction**
- Make sure your **Ethereum wallet (e.g., Metamask)** is connected to the same network your contracts are deployed on.
- Adjust the **contract address** in your code if needed, or deploy your own version using your chosen Ethereum test net.

---

## **Development**

1. **Smart Contracts**:  
   - You can manage and deploy contracts in the `contracts` folder (if applicable).  
   - Use frameworks like **Hardhat** or **Truffle** for easy compilation, testing, and deployment.

2. **Frontend**:  
   - Built with **React**, found in the `vibe` folder.  
   - Update **ABI** and **contract addresses** in the frontend to match your deployed contracts.

3. **Env Variables** (optional):  
   - If you have environment-dependent configurations (e.g., Infura or Alchemy keys), store them in a `.env` file.  
   - Example:
     ```bash
     REACT_APP_INFURA_API_KEY=yourKeyHere
     REACT_APP_CONTRACT_ADDRESS=0x123456...
     ```

---

## **Contributing**
Contributions are welcome! If you’d like to improve the project:
1. Fork the repo
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add a cool new feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a **Pull Request**

> **Let’s build a truly decentralized social experience together!**  