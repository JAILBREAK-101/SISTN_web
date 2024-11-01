import React from 'react';
import LinkComponent from '../../../shared/components/ui/LinkComponent';
import { Button } from '../../../shared/components/form/Button';

const MembershipFormPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-14">
        Choose Your Membership Form
      </h1>
      
      <p className="text-2xl text-gray-700 text-center max-w-2xl mb-12">
        You can register as a new member by completing either the online or offline membership forms. 
        Please select your preferred option below to proceed.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-md">
        {/* Online Form Button */}
        <div className="flex justify-center">
          {/* PHP Form */}
          <a href="https://sistn.org/membership-form/memberform.php">
            <Button
              body={"Online Form"}
              size='large'
              btnClass={"w-full max-md:text-3xl py-4 bg-sistn-dark-blue text-white text-center rounded-lg font-semibold hover:bg-sistn-blue transition-colors text-2xl"}
            />
          </a>
        </div>

        {/* Offline Form Button */}
        <div className="flex justify-center">
          <LinkComponent
            label={
              <Button
                body={"Offline Form"}
                size='large'
                btnClass={"w-full max-md:text-3xl py-4 bg-sistn-dark-blue text-white text-center rounded-lg font-semibold hover:bg-sistn-blue transition-colors text-2xl"}
              />
            }
            href="/membership-offline-form"
          />
        </div>
      </div>
    </div>
  );
};

export default MembershipFormPage;
