<?php
// Include the PHPMailer library
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\Exception;
require __DIR__ . '/../vendor/autoload.php';

// Function to handle the registration
function registerUser($requestData) {
    $membershipCategory = $requestData['membershipCategory'] ?? '';
    $surname = $requestData['surname'] ?? '';
    $firstName = $requestData['firstName'] ?? '';
    $otherName = $requestData['otherName'] ?? '';
    $streetAddress = $requestData['streetAddress'] ?? '';
    $state = $requestData['state'] ?? '';
    $telephone = $requestData['telephone'] ?? '';
    $email1 = $requestData['email1'] ?? '';
    $email2 = $requestData['email2'] ?? '';
    $passport = $requestData['passport'] ?? '';
    $institution = $requestData['institution'] ?? '';
    $otherInstitution = $requestData['otherInstitution'] ?? '';
    $occupation = $requestData['occupation'] ?? '';
    $workOrganization = $requestData['workOrganization'] ?? '';
    $rank = $requestData['rank'] ?? '';
    $qualifications = $requestData['qualifications'] ?? '';
    $graduationYear = $requestData['graduationYear'] ?? '';
    $paymentType = $requestData['paymentType'] ?? '';


    $dbConfig = new DatabaseConfig();


    // Validate required fields
    if (empty($firstName) || empty($email1)) {
        return jsonResponse(400, ["message" => "All required fields must be filled."]);
    }

    try {
        // Establish a database connection using PDO
        $pdo = $dbConfig->getConnection();

        // Insert the data into the database
        $stmt = $pdo->prepare("
            INSERT INTO Membership_reg (
                membershipCategory, surname, firstName, otherName, streetAddress, state, telephone, email1, email2, passport, occupation, institution, otherInstitution, workOrganization, rank, qualifications, graduationYear, paymentType, paymentStatus
            ) VALUES (
                :membershipCategory, :surname, :firstName, :otherName, :streetAddress, :state, :telephone, :email1, :email2, :passport, :occupation, :institution, :otherInstitution, :workOrganization, :rank, :qualifications, :graduationYear, :paymentType, 'Pending'
            )
        ");

         // Create the Membership_reg table if it doesn't exist
        $sql = "CREATE TABLE IF NOT EXISTS Membership_reg (
            id INT AUTO_INCREMENT PRIMARY KEY,
            membershipCategory VARCHAR(50) NOT NULL,
            surname VARCHAR(100) NOT NULL,
            firstName VARCHAR(100) NOT NULL,
            otherName VARCHAR(100),
            streetAddress TEXT,
            state VARCHAR(50),
            telephone VARCHAR(20),
            email1 VARCHAR(100) NOT NULL,
            email2 VARCHAR(100),
            passport VARCHAR(50),
            institution VARCHAR(200),
            otherInstitution VARCHAR(200),
            occupation VARCHAR(100),
            workOrganization VARCHAR(200),
            rank VARCHAR(50),
            qualifications TEXT,
            graduationYear INT,
            paymentType VARCHAR(50),
            paymentStatus VARCHAR(20) DEFAULT 'Pending'
        )";

        $pdo->exec($sql);

      // Ensure $paymentType is an array before imploding
      $paymentTypeValue = is_array($paymentType) ? implode(',', $paymentType) : $paymentType;
      
      $stmt->execute([
          ':membershipCategory' => $membershipCategory,
          ':surname' => $surname,
          ':firstName' => $firstName,
          ':otherName' => $otherName,
          ':streetAddress' => $streetAddress,
          ':state' => $state,
          ':telephone' => $telephone,
          ':email1' => $email1, 
          ':email2' => $email2,
          ':passport' => $passport,
          ':institution' => $institution,
          ':otherInstitution' => $otherInstitution,
          ':occupation' => $occupation,
          ':workOrganization' => $workOrganization,
          ':rank' => $rank,
          ':qualifications' => $qualifications,
          ':graduationYear' => $graduationYear,
          ':paymentType' => $paymentTypeValue
      ]);

            // ':paymentType' => is_array($paymentType) ? implode(',', $paymentType) : $paymentType
            // ':qualifications' => implode(',', $qualifications),
        // ]);

        var_dump($institution);
        var_dump($otherInstitution);
        var_dump($occupation);
        var_dump($workOrganization);
        var_dump($rank);
        var_dump($qualifications);
        var_dump($graduationYear);
        var_dump($paymentType);


        // Insert the data into the database
        $stmt = $pdo->prepare("
            INSERT INTO Membership_reg (
                membershipCategory, surname, firstName, otherName, streetAddress, state, telephone, email1, email2, passport, occupation, institution, otherInstitution, workOrganization, rank, qualifications, graduationYear, paymentType, paymentStatus
            ) VALUES (
                :membershipCategory, :surname, :firstName, :otherName, :streetAddress, :state, :telephone, :email1, :email2, :passport, :occupation, :institution, :otherInstitution, :workOrganization, :rank, :qualifications, :graduationYear, :paymentType, 'Pending'
            )
        ");

        // Execute the statement with the extracted request data
        $stmt->execute([
            ':membershipCategory' => $membershipCategory,
            ':surname' => $surname,
            ':firstName' => $firstName,
            ':otherName' => $otherName,
            ':streetAddress' => $streetAddress,
            ':state' => $state,
            ':telephone' => $telephone,
            ':email1' => $email1, 
            ':email2' => $email2,
            ':passport' => $passport,
            ':institution' => $institution,
            ':otherInstitution' => $otherInstitution,
            ':occupation' => $occupation,
            ':workOrganization' => $workOrganization,
            ':rank' => $rank,
            ':qualifications' => $qualifications,
            ':graduationYear' => $graduationYear,
            ':paymentType' => $paymentType
        ]);

        // Send confirmation email to the user
        $userMailBody = "Dear $firstName,\n\nThank you for submitting your membership application. Your membership is currently pending.\n\n
To complete your membership, please make payment to the account number below and send proof of payment (EOP) to membership@SISTN.com.\n\n
Bank Account Details:\nAccount Name: SISTN\nAccount Number: 1234567890\nBank: ABC Bank\n\n
Your membership number and further details will be confirmed once payment is verified.\n\nBest regards,\nSISTN Membership Team";
        
        sendMail($email1, 'SISTN Membership Team', 'Membership Application Pending', $userMailBody, [
            [
                'name' => 'membership-details.txt',
                'content' => "Membership Details:\nName: $firstName $surname\nEmail: $email1\nMembership Category: $membershipCategory"
            ]
        ]);

        // Send notification email to the admin
        $adminMailBody = "A new membership application has been submitted.\n\n
Details:\nName: $firstName $surname\nMembership Category: $membershipCategory\nEmail: $email1\nTelephone: $telephone\n\n
Awaiting proof of payment.\n\nRegards,\nSISTN Membership Team";

        sendMail('infodesk@sistn.org', 'SISTN Membership Team', 'New Membership Application Submitted', $adminMailBody, [
            [
                'name' => 'membership-details.txt',
                'content' => "Membership Details:\nName: $firstName $surname\nEmail: $email1\nMembership Category: $membershipCategory\nTelephone: $telephone"
            ]
        ]);

        // Return a success response
        return jsonResponse(201, [
            "message" => "Registration successful! Please check your email for payment instructions.",
            "redirect" => "/thank-you"
        ]);
    } catch (PDOException $e) {
        return jsonResponse(500, ["message" => "Registration failed. Please try again later. Error: " . $e->getMessage()]);
    }
}

// Function to send an email using PHPMailer
function sendMail($to, $fromName, $subject, $body, $attachments = []) {
    $mail = new PHPMailer(true);

    try {
        // Server (Email) settings
        $mail->isSMTP();
        $mail->Host = getenv('EMAIL_ADMIN');
        $mail->SMTPAuth = true;
        $mail->Username = getenv('EMAIL_USER');
        $mail->Password = getenv('EMAIL_PASSWORD');
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('infodesk@sistn.org', $fromName);
        $mail->addAddress($to);

        // Content
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body    = $body;

        // Attachments
        foreach ($attachments as $attachment) {
            $mail->addStringAttachment($attachment['content'], $attachment['name']);
        }

        $mail->send();
        return true;
    } catch (Exception $e) {
        throw new Exception("Message Hello, could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
}

// Function to return a JSON response
function jsonResponse($status, $data) {
    header('Content-Type: application/json');
    http_response_code($status);
    echo json_encode($data);
    exit();
}
?>
