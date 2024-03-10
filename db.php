<?
$servername = "sql304.infinityfree.com"; // Change this if your MySQL server is on a different host
$username = "rif0_36133719"; // MySQL username (default is "root" for XAMPP)
$password = "UgZ00uWA7n2Nw"; // MySQL password (default is empty for XAMPP)
$dbname = "if0_36133719_hue_db"; // Name of your database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

