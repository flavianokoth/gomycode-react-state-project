React Class-Based Profile Toggle App
This is a simple React application built with create-react-app. It demonstrates the use of class-based components, component state, lifecycle methods, and conditional rendering. The app displays a user's profile and tracks the time elapsed since the component was mounted.

🚀 Features
Built using create-react-app

Class-based App component

State includes:

Person: an object with fullName, bio, imgSrc, and profession

show: a boolean that toggles profile visibility

A button to toggle the display of the profile

A timer showing how long the component has been mounted (in seconds)

🛠️ Technologies Used
React (class components)

JavaScript (ES6)

JSX

CSS (basic styling)

📁 Project Structure
java
Copy
Edit
my-app/
├── public/
├── src/
│   ├── App.js          // Main class-based component
│   ├── index.js        // Entry point
│   └── App.css         // Optional styling
├── package.json
└── README.md
📦 Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/flavianokoth/gomycode-react-state-profile-toggle-project.git
cd react-profile-toggle
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm start
🔍 How It Works
The App component holds the state for a Person object and a show boolean.

Clicking the Toggle Profile button switches the visibility of the person's profile.

When the profile is shown, it displays the person’s:

Full Name

Bio

Image

Profession

A timer (in seconds) updates every second to show how long the component has been mounted, using setInterval in componentDidMount.


📄 License
This project is licensed under the MIT License. Feel free to use and modify it for learning or development purposes.
