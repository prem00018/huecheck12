<?php
// Include database connection
include 'db.php';

// Initialize error variable
$error = "";

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if 'email' key is set in the $_POST array
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // Check if user exists
    $sql = "SELECT * FROM user_form WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Verify password
        $row = $result->fetch_assoc();
        if ($password == $row['password']) {
            session_start();
            $_SESSION['user_id'] = $row['id'];
            header("Location: dashboard.php");
            exit(); // Ensure that the script stops execution after redirecting
        } else {
            $error = "Invalid email or password!";
        }
    } else {
        $error = "User not found!";
    }
}

// Close database connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Hue Check</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="Login Form Template" name="keywords">
    <meta content="Login Form Template" name="description">
    <link href="images/logo - Copy.jpg" rel="icon">
    <link href="style.css" rel="stylesheet">
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
                <div class="login-form">
                    <h2>Login</h2>
                    <form action="signin.php" method="post">
                        <input type="email" name="email" placeholder="Email" required>
                        <input type="password" name="password" placeholder="Password" required>
                         <?php if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($error)): ?>
                            <div style="color: red;"><?php echo $error; ?></div>
                        <?php endif; ?>
                        <input class="btn1" type="submit" name="submit" value="Sign In"/>                                           
                        <a href="signup.php">Create an account</a>
                    </form>
                </div>
            </div>
        </div>
    </div>


</body>
</html>
