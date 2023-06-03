# Article Summarizer

Welcome to the Article Summarizer repository! This application is designed to help you summarize lengthy articles into shorter, concise summaries. With the use of natural language processing techniques, the Article Summarizer simplifies the task of extracting key information from articles, making it easier for you to grasp the main ideas quickly.

## Table of Contents
- [Clone the Repository](#clone-the-repository)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Adding Your Secret Key](#adding-your-secret-key)

## Clone the Repository

To get started with the Article Summarizer, you'll need to clone this repository to your local machine. Open your terminal and use the following command:

```bash
git clone https://github.com/srdarkseer/article-summarizer.git
```

## Installation

Before you can run the Article Summarizer, you need to install the required dependencies. To do this, navigate to the project directory and run the following command:

```bash
cd article-summarizer
npm install
```

## Running the Project

To run the Article Summarizer on your local machine, follow these steps:

1. Make sure you have completed the installation process mentioned above.
2. Start the development server by running the command:
```bash
npm run dev
```

Once the server is up and running, you can access the Article Summarizer by opening a web browser and navigating to http://localhost:5173.

## Adding Your Secret Key

To use the Article Summarizer, you need to add your secret key to the project. Follow the steps below:

1. In the project directory, create a file named `.env`.
2. Open the `.env` file and add the following line, replacing `your_secret_key_here` with your actual secret key:

   SECRET_KEY=your_secret_key_here

3. Save the `.env` file.

By adding your secret key to the `.env` file, the application will be able to access the necessary APIs and function properly.

Note: Make sure to keep your secret key confidential and never commit it to a public repository or share it with unauthorized individuals.

If you have any questions or encounter any issues while using the Article Summarizer, please feel free to reach out for assistance. Enjoy summarizing articles with ease!


