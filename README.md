# Quiz for Anything

Quiz for Anything is pretty much what it sounds like it is. You can take a 10
question quiz on any topic that you want, literally any topic.

> After deployement you'll get the link to interact with the project here

## Features

-   Ability to take quiz on any topic
-   Ability to check your scores
-   More features on the way...

## Technologies Used

-   API Integration and Developement: The server of Quiz for anything directly
    communicates with the frontend using endpioints made using Flask
-   AI Integration: Integrated OPEN AI API to fetch questions data in a parsed
    json format
-   JavaScript: The core programming language used to build the application.
-   Python [Flask Framework] : Used for making the backend and the API endpoints

## Installation

To run Quiz For Anything locally, follow these steps:

### Frontend

1. Clone the repository:

    ```
    git clone https://github.com/labhansh2/Quiz-Pop.git
    ```

2. Navigate to frontend Directory:
    ```
    cd frontend
    ```
3. Install the node modules after entering the root directory of the repo

    ```
    npm i
    ```

4. run on local port

    ```
    npm run dev
    ```

### Backend (Server)

1. Add your Open AI API key in the .env.template file and rename it to .env
   which you can fine [here](https://platform.openai.com/account/api-keys).

2. Navigate to server/src Directory:

    ```
    cd server/src
    ```

3. Run the Server File:

    ```
    python server1.py
    ```

<br>

> There you go, now you are running both frontend and the server on your local
> machine and you should be able to tinker with the project

## ToDo

-   [ ] Add a database for questions for question reusibility
-   [ ] Add Authentication to save user's metadata to save their progress,
        already solved questions, etc.
-   [ ] Upgrade the UI and UX
-   [ ] Deploy

## Contributing

Contributions to this project are welcome! If you encounter any issues or have
ideas for improvements, please open an issue on the
[GitHub repository](https://github.com/labhansh2/QuizOnAnything.com) or submit a
pull request. You can also refer #ToDo for ideas to contribute.
