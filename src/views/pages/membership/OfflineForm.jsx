import React, {useState} from 'react';
import { Button } from '../../../shared/components/form/Button';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import SISTNApplicationForm from "../../../assets/pdf/SISTN Membership-Application Form-Final 2024.pdf";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const OfflineForm = () => {
  const [isPDFVisible, setIsPDFVisible] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = SISTNApplicationForm;
    link.download = 'SISTN-Membership-Form.pdf';
    link.click();
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-4xl text-center text-sistn-dark-blue font-bold mb-6">Membership Offline Form</h2>
        
        <div className="text-sistn-blue mb-6">
          <p className='max-md:text-2xl'>
            Please download, print, and fill out this application form. After completing the form, submit it via email following the instructions below.
          </p>
          <p className='max-md:text-2xl'>
            This form is required for registering as a new member of the Society for Information Science and Technology of Nigeria (SISTN).
          </p>
        </div>

        {/* Submission Instructions */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner mb-8">
          <h2 className="text-2xl font-semibold mb-4 max-md:text-3xl">Submission of Application</h2>
          <ol className="list-decimal list-inside max-md:text-3xl">
            <li>
              Download, fill out completely, affix a passport photo, and sign the SISTN Application Form.
            </li>
            <li>
              Scan and save in PDF format the following documents:
              <ul className="list-disc ml-6 max-md:text-3xl">
                <li>Completed Application Form</li>
                <li>Photocopies of all certificates for educational qualifications listed in the form (mandatory for all applications)</li>
                <li>Photocopies of evidence of professional/work experience (e.g., letters of appointment) (mandatory for Associate Member and Fellow applications)</li>
                <li>Curriculum Vitae (CV)</li>
              </ul>
            </li>
            <li>
              Get your curriculum vitae ready in PDF format.
            </li>
            <li>
              Prepare your passport photograph in JPEG format.
            </li>
            <li>
              Send an email with your full names, physical address, phone number, and statement of intent, along with the files mentioned above, to <strong>sistn2015plus@gmail.com</strong>. Your email will be acknowledged within 72 hours.
            </li>
          </ol>
        </div>

        {/* Payment Instructions */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment of Fees</h2>
          <ol className="list-disc">
            <li>
              <strong>Important:</strong> You can only pay the application and annual fees after your membership application has been approved.
            </li>
            <li>
              Upon receiving the approval email, pay the Membership and Annual fees into the following bank account:
              <ul className="ml-6">
                <li><strong>Account Name:</strong> Society for Information Science and Technology of Nigeria</li>
                <li><strong>Account Number:</strong> 0171598523</li>
                <li><strong>Bank Name:</strong> Guaranty Trust Bank (GTB)</li>
                <li><strong>Branch Name:</strong> Bodija, Ibadan, Nigeria</li>
                <li><strong>Bank Swift Code/BIC:</strong> GTBINGLA</li>
              </ul>
            </li>
            <li>
              After payment, email the payment details along with a scanned copy of the payment receipt to <strong>sistn2015plus@gmail.com</strong>. Your email will be acknowledged within 72 hours.
            </li>
          </ol>
        </div>

         {/* Preview and Download Section */}
         <div className="bg-gray-100 p-6 rounded-lg shadow-inner mb-8">
          <h2 className="text-2xl font-semibold mb-4">Preview of Application Form</h2>
          <p className="text-md mb-4">This is a preview of the form. To submit, download the form and fill it out.</p>

          {/* Toggle to show/hide the PDF preview */}
          <div className="flex justify-center mb-4">
            <Button
              body={<a href={SISTNApplicationForm} target='_blank'>Show PDF Preview</a>}
              // body={isPDFVisible ? "Hide Preview" : "Show PDF Preview"}
              size="large"
              btnClass="py-2 max-md:text-2xl px-4 bg-blue-500 text-white rounded-lg"
              // onClick={() => setIsPDFVisible(!isPDFVisible)}
            />
          </div>
                    
          {/* PDF Preview Section */}
          {isPDFVisible && (
            <div className="w-full h-[500px] border rounded-lg overflow-hidden">
              <Document file={SISTNApplicationForm}></Document>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <Button
            body="Download Application Form"
            size="large"
            btnClass="py-3 max-md:text-2xl px-6 bg-sistn-dark-blue text-white rounded-lg font-semibold hover:bg-sistn-blue transition-colors"
            onClick={handleDownload}
          />
        </div>
      </div>
    </div>
  );
};

export default OfflineForm;
