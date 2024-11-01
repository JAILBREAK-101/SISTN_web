import React from 'react';
import { useParams } from 'react-router-dom';
import LinkComponent from '../../../shared/components/ui/LinkComponent';
import { Button } from '../../../shared/components/form/Button';

const membershipDetails = {
  'Professional Member': {
    title: 'Professional Member',
    content: (
      <>
        <p>
          A person, who may not have been previously a Student Member of SISTN, may apply for admission to the Professional Member grade of SISTN provided he/she had obtained a tertiary-level qualification relevant to occupation or professional practice in any aspect of the Information Science and Technology industry. The industry is defined for this purpose to include (alphabetically): Archives Studies/Management, Communication Arts/Science, Computer Science, Information Management, Information Science, Information Services, Information Systems, Information Technology, Innovation Management, Library Management, Library Science, Media Science, Media Studies, Records Management, Research and Development Management, Telecommunications, and other related fields, occupations and professions. 
        </p>
        <p>
          Tertiary-level educational qualification is defined for this purpose to include bachelor’s, master’s and doctoral degrees, higher and ordinary national diplomas, national certificates of education, professional information industry certificates endorsed by SISTN, and equivalent qualifications. 
        </p>
        <p>
          Professional Members vote on general Society business, may hold office or committee chairmanships, may sit on committees and vote on committee matters. Professional Members are entitled to use the letters PSISTN (Professional Member of the Society for Information Science and Technology of Nigeria) after their names. Associate Members receive all publications of SISTN, and are not exempt from participation fees in any SISTN activity.
        </p>
      </>
    ),
  },
  'Associate Member': {
    title: 'Associate Member',
    content: (
      <>
        <p>
          A Professional Member of SISTN may apply for upgrade of their membership status to Associate Member provided he/she has accumulated not less than ten years experience in Information Science and Technology occupations or professional practice since attaining the qualifications that qualifies him/her for Professional Member grade, and has been Professional Member of SISTN for at least 5 years immediately preceding the date of the application for upgrade.
        </p>
        <p>
          Associate Members vote on general Society business, may hold office or committee chairmanships, may sit on committees and vote on committee matters. Associate Members are entitled to use the letters ASISTN (Associate of the Society for Information Science and Technology of Nigeria) after their names. Associate Members receive all publications of SISTN, and are not exempt from participation fees in any SISTN activity.
        </p>
      </>
    ),
  },
  'Corporate Membership': {
    title: 'Corporate Membership',
    content: (
      <>
        <p>
          Corporate organisations that are in the information business have a right to apply for the status of corporate member provided that they fulfil all of the requirements.
        </p>
      </>
    ),
  },
  'Student Member': {
    title: 'Student Member',
    content: (
      <>
        <p>
          Student Members are currently in formal, full-time training programs in tertiary educational institutions in or in Professional Certification Programmes in the field of Information Science and Technology recognized by SISTN and have an interest in the work of SISTN. 
        </p>
        <p>
          Student members receive copies of e-magazines and e-newsletters of SISTN, reduced registration fees for SISTN meetings and discounted subscription rates for the SISTN journals. Student Members are required to upgrade to the appropriate Active Membership category one year post-training completion. Student Members do not hold office or vote.
        </p>
        <p>
          An applicant for Student member must provide letter of attestation of the applicant’s status written on the headed paper of the relevant tertiary institution, and the institution shall be contacted to validate the letter, which must contain the following information: name of applicant, institution and program/department name, date of program completion, contact name and address of sponsor, attestation.
        </p>
      </>
    ),
  },
  'Fellows': {
    title: 'Fellows',
    content: (
      <>
        <p>
          The SISTN Fellow membership grade is given to a person in recognition of his/her lifetime professional or supportive contribution to the development of the Information Science and Technology professions, industry or occupations in Nigeria and any other African country.
        </p>
        <p>
          A Professional Member or Associate Member may apply for upgrade of membership status to SISTN Fellow, provided he/she has attained the age of 45 years, been active in the information industry and related sectors for at least 15 years, and been Professional Member or Associate Member for at least 5 years. 
        </p>
        <p>
          Also, other persons who may not satisfy the above conditions may be recommended for admission to SISTN Fellow membership by the SISTN Executive to the SISTN Council. The SISTN Council approves and admits all SISTN Fellows. Fellows do not vote on general Society business, do not hold office or committee chairmanships, but may sit on committees and vote on committee matters.
        </p>
        <p>
          Fellows are entitled to use the letters FSISTN (Fellow of the Society for Information Science and Technology of Nigeria) after their names. Fellows receive all publications of SISTN, and are exempt from participation fees in any SISTN activity.
        </p>
      </>
    ),
  },
  'Honorary Fellowship': {
    title: 'Honorary Fellowship',
    content: (
      <>
        <p>
          The SISTN Honourary Fellowship is bestowed to a person in honorary recognition of his/her lifetime professional or supportive contribution to the development of the Information Science and Technology professions, industry or occupations in Nigeria and any other African country.
        </p>
        <p>
          A Professional Member or Associate Member may apply for upgrade of their membership status to SISTN Fellow, provided he/she has attained the age of 55 years, been active in the information industry and related sectors for at least 20 years. 
        </p>
        <p>
          Also, other persons who may not satisfy the above conditions may be recommended for admission to SISTN Fellow membership by the SISTN Executive to the SISTN Council. The SISTN Council approves and admits all SISTN Fellows.
        </p>
      </>
    ),
  },
};

const LearnMore = () => {
  const { membershipType } = useParams();
  const membershipKey = membershipType.replace(/-/g, ' ');
  const membership = membershipDetails[membershipKey];

  console.log(membershipType);
  console.log(membershipKey);
  console.log('membership:', membership);
  
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {membership ? (
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-4xl font-bold mb-4">{membership.title}</h1>
          <div className="text-gray-700 leading-relaxed">
            {membership.content}
          </div>
        </div>
      ) : (
        <p className="text-red-500">Membership type not found.</p>
      )}

      <div className='flex gap-2 items-center'>

        <LinkComponent 
          label={
            <Button 
            body="Back to Membership Categories"
            size="large"
            btnClass="text-xl bg-sistn-blue"
            />
          }
          href="/membership-categories"
          />
 
        <LinkComponent 
          label={
            <Button 
            body="Register as a new member"
            size="large"
            btnClass="text-xl bg-sistn-dark-blue"
            />
          }
          href="/membership-form"
          />
      </div>

    </div>
  );
};

export default LearnMore;
