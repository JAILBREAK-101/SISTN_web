<?php
require 'vendor/autoload.php';

use Mpdf\Mpdf;

function createPDF($data, $text) {
    try {
        $mpdf = new Mpdf();

        // Write content to PDF
        $mpdf->SetFontSize(14);
        $mpdf->WriteHTML("<div style='text-align: center;'>{$text}</div>");
        $mpdf->Ln();
        $mpdf->SetFontSize(12);

        // Add the data from the request body to the PDF
        foreach ($data as $key => $value) {
            $mpdf->WriteHTML("{$key}: {$value}<br>");
        }

        // Output the PDF as a string
        return $mpdf->Output('', 'S');
    } catch (\Mpdf\MpdfException $e) {
        // Handle exception
        return "An error occurred while generating the PDF: " . $e->getMessage();
    }
}

// Save the PDF to a file or send it as a response
file_put_contents('output.pdf', $pdfContent);
?>
