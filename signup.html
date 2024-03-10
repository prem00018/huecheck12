<?php
// Include database connection
include 'db.php';

// Initialize errors array
$errors = [];

// Get form data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $phone_number = $_POST['phone_number'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the email already exists
    $email_check_sql = "SELECT * FROM user_form WHERE email='$email'";
    $email_check_result = $conn->query($email_check_sql);

    if ($email_check_result->num_rows > 0) {
        $errors[] = "Email already exists";
    } else {
        // Insert user data into the database
        $sql = "INSERT INTO user_form (name, phone_number, email, password) VALUES ('$name', '$phone_number', '$email', '$password')";

        if ($conn->query($sql) === TRUE) {
            header("Location: signin.php");
            exit();
        } else {
            $errors[] = "Error: " . $sql . "<br>" . $conn->error;
        }
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
    <link rel="stylesheet" href="reg_style.css">
</head>
<body>
    <div class="wrapper login-3" id="page-1">
        <div class="container">
            <div class="col-left">
                <div class="login-text">
                    <h2><img src="images/logo - Copy.jpg" class="images"></h2>
                    <h2>HUE CHECK</h2>
                    <p>
                        Hue check is designed to check whether they have colour vision deficiency or not. It basically used by Ishihara plates. It totally consists of 38 slides. By answering those slides you may come to know whether the user has colour vision deficiency or not.
                    </p>
                    <a class="btn1" href="https://en.wikipedia.org/wiki/Ishihara_test" target="_blank">Read More</a>
                </div>
            </div>
            <div class="col-right">
                <div id="register-form">
                    <h2>Register</h2>
                    <form action="signup.php" method="post">
                        <input type="text" name="name" placeholder="Name" required>
                        <input type="text" name="phone_number" placeholder="Phone Number" required>
                        <input type="email" name="email" placeholder="Email" required>
                        <input type="password" name="password" placeholder="Password" required>
                        <?php if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($errors)): ?>
                            <div style="color: red;">
                                <?php foreach ($errors as $error): ?>
                                    <?php echo $error; ?><br>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                        <input class="btn1" name="submit" type="submit" value="Sign up" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

