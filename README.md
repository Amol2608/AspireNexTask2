# Quiz Maker App

The Quiz Maker App allows users to create, publish, and share their quizzes. Users can generate a unique code for each quiz, enabling others to play it easily.

## Features

- **Create Quizzes**: Build your own quizzes with multiple-choice questions.
- **Publish Quizzes**: Make your quizzes available to others.
- **Share Quizzes**: Generate unique codes to share your quizzes.
- **Play Quizzes**: Play quizzes created by others using their unique codes.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/quiz-maker-app.git
    cd quiz-maker-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following:

    ```plaintext
    MONGODB_URI=your_mongodb_uri
    PORT=your_preferred_port
    ```

4. **Run the app:**

    ```bash
    npm start
    ```

    The app should now be running on `http://localhost:your_preferred_port`.

## Usage

### Creating a Quiz

1. Go to the "Home" section.
2. Add your quiz title and description.
3. Add multiple-choice questions and options.
4. Save your quiz to generate a unique code.

### Publishing a Quiz

1. After saving your quiz, click on the "Publish" button.
2. Share the generated code with others so they can play your quiz.

### Playing a Quiz

1. Go to the "Play Quiz" section.
2. Enter the unique code provided by the quiz creator.
3. Start the quiz and submit your answers.
4. Generate your Quiz Score.

## Contributing

We welcome contributions to the Quiz Maker App. Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
