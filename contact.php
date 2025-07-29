<?php
header('Content-Type: text/plain'); // Prevent HTML execution
$file = __DIR__ . '/private/form_submissions.txt'; // Store in private folder
// File where data will be saved (relative to this PHP file)
$file = 'form_submissions.txt';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize form data
    $name = strip_tags(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST['phone']);
    $message = strip_tags(trim($_POST['message']));
    
    // Validate required fields
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Please fill all required fields correctly!");
    }
    
    // Format the data
    $data = "=== New Submission ===\n";
    $data .= "Timestamp: " . date('Y-m-d H:i:s') . "\n";
    $data .= "Name: $name\n";
    $data .= "Email: $email\n";
    $data .= "Phone: $phone\n";
    $data .= "Message: $message\n\n";
    
    // Save to file
    if (file_put_contents($file, $data, FILE_APPEND | LOCK_EX)) {
        echo "Thank you! Your message has been saved.";
    } else {
        echo "Error: Unable to save your message.";
    }
} else {
    die("Invalid request method!");
}
?>