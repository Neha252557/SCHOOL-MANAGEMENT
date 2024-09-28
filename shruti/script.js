body {
    font-family: 'Georgia', serif;
    margin: 0;
    padding: 20px;
    background-image: url('https://th.bing.com/th/id/R.c81ec32df4384b017214fc4184aaa39a?rik=N3mAPeclNEK2kQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fCdHg5pJ.jpg&ehk=Hz4Z3HN%2bcfrtiCQ1GYlE3L7ZzWJmusAku68ioHzgfnU%3d&risl=&pid=ImgRaw&r=0');
    background-size: cover;
    background-position: center;
    color: #333;
}

h2 {
    color: #4a90e2;
    margin-bottom: 15px;
}

#loginOptions, .form-section {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

input, button, select {
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    background-color: #4a90e2;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #357ab8;
}

.hidden { display: none; }

#resultsChart {
    max-width: 600px;
    margin: auto;
    display: block;
}

.rating-question {
    margin-top: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

.error {
    color: red;
    font-size: 0.9em;
}

@media (max-width: 600px) {
    input, button, select {
        width: calc(100% - 20px);
    }
}
