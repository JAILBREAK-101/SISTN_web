const ContactInformation = () => {
    return (
        <div>
          <h2 className="text-2xl text-sistn-dark-blue font-bold mb-4 max-md:text-4xl">CONTACT</h2>
          <p className="mb-4 text-sistn-blue max-md:text-2xl">
            <strong>Office Address:</strong> <br />
            Department of Data and Information Science, <br />
            6 Benue Road, University of Ibadan, Ibadan, Oyo State, Nigeria.
          </p>
          <p className="mb-4 text-sistn-blue max-md:text-2xl">
            <strong>Email Address:</strong> <br />
            <a href="mailto:infodesk@sistn.org" className="text-blue-600 hover:underline">
              infodesk@sistn.org
            </a>
          </p>
          <p className="mb-4 text-sistn-blue max-md:text-2xl">
            <strong>Membership Enquiries:</strong> <br />
            <a href="mailto:membership@SISTN.com" className="text-blue-600 hover:underline">
              membership@SISTN.com
            </a>
          </p>
          <p className="mb-4 text-sistn-blue max-md:text-2xl">
            <strong>Seminar and Webinar Enquiries:</strong> <br />
            <a href="mailto:sistninfo@gmail.com" className="text-blue-600 hover:underline">
              sistninfo@gmail.com
            </a>
          </p>
          <p className="mb-4 text-sistn-blue max-md:text-2xl">
            <strong>Website:</strong> <br />
            <a
              href="http://www.sistn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.sistn.org
            </a>{" "}
          </p>
        </div>
    )
}

export default ContactInformation;