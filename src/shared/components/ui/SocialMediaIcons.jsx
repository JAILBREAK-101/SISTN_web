import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import SocialMediaIcon from './SocialMediaIcon';

const SocialMediaIcons = () => {
    const socialLinks = [
        {
            href: 'https://www.facebook.com',
            icon: <FaFacebookF />,
            label: 'Facebook',
            iconColor: "darkblue"
        },
        {
            href: 'https://www.twitter.com',
            icon: <FaTwitter />,
            label: 'Twitter',
            iconColor: "lightblue"
        },
        {
            href: 'https://www.linkedin.com',
            icon: <FaLinkedinIn />,
            label: 'LinkedIn',
            iconColor: "blue"
        },
        {
            href: 'https://www.instagram.com',
            icon: <FaInstagram />,
            label: 'Instagram',
            iconColor: "pink"
        },
    ];

    return (
        <div className="flex justify-center space-x-4">
            {socialLinks.map((link) => (
                <SocialMediaIcon
                    key={link.label}
                    href={link.href}
                    icon={link.icon}
                    iconColor={link.iconColor}
                    label={link.label}
                />
            ))}
        </div>
    );
};

export default SocialMediaIcons;
