<?php

use Dotenv\Dotenv;

$allowed_origins = [
  "http://localhost:5173",
  "https://sistn.org"
];

// if (in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
//   header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
// }

header("Access-Control-Allow-Origin: http://localhost:5173");
// header("Access-Control-Allow-Origin: https://sistn.org/membership-online-form");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS requests for CORS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  http_response_code(204);
  exit;
}

// Include required files
require 'vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

require 'config/database.php';
require 'controller/registerController.php';

// Route handling for registration
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_SERVER['REQUEST_URI'] === '/register') {
  $requestData = json_decode(file_get_contents('php://input'), true);  
  $response = registerUser($requestData);
//   echo $response;
} else {
  // Return 404 for not found requests
  jsonResponse(404, ["message" => "Not Found"]);
}
?>