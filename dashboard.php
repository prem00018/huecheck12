<DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Hue Check</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="Login Form Template" name="keywords">
        <meta content="Login Form Template" name="description">

        <link href="images/logo - Copy.jpg" rel="icon">
        <link href="dashboard_style.css" rel="stylesheet">
    </head>
    <body>
        <div class="wrapper login-3" id="page-1">
            <div class="container">
                <div class="col-left">
                    <div class="login-text">
                        <h2><img src="images/logo - Copy.jpg" class="images"></h2>
                        <h2>HUE CHECK</h2>
                        <p>
                            Hue check is designed to check whether they have colour vision deficiency or not. It basically used by Ishihara plates. It totally consists of 38 slides. By answering those slides you may come to know whether the user has colour vision deficiency or not.
                        </p>
                        <a class="btn1" href="https://en.wikipedia.org/wiki/Ishihara_test" target="_blank">Read More</a>
                    </div>
                </div>
                <div class="col-right">
                    <div id="dashboard">
                        <h1>Color Vision Tester</h1>
                        <h2 class="head">Instructions:</h2>
                        <p>LOOK AT THE FOLLOWING IMAGES AND SELECT THE VISIBLE OPTION THAT YOU CAN SEE IN THE IMAGE</p>
                        <button class="dashboard-btn" onclick="showQuiz()">Take Test</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="quiz-container">
            <div class="app">
                <h1>Color Vision Test</h1>
                <div class="quiz">
                    <div class="img-container">
                        <img src="" id="question">
                    </div>
                    <div id="answer-buttons">
                        <button class="btn" onclick="optionSelected(this)">Answer 1</button>
                        <button class="btn" onclick="optionSelected(this)">Answer 2</button>
                        <button class="btn" onclick="optionSelected(this)">Answer 3</button> 
                    </div>
                    <button id="next-btn" onclick="next()">Next</button>
                    <button id="score-btn" onclick="showResults()">Check Results</button>
                </div>
                <div class="score-container">
                    <h2 id="score"></h1>
                    <p id="red-green"></p>
                    <p id="protanopia"></p>
                    <p id="deuteranopia"></p>
                    <a href="dashboard.php"><button id="check_again-btn">Check Again</button></a>
                </div>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
</html>
