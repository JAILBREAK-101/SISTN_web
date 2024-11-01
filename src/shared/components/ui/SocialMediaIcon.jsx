import React from 'react';

const SocialMediaIcon = ({ href, icon, iconColor, label }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sistn-dark-blue hover:text-blue-500"
            aria-label={label}
            style={{fontSize: "20px", color: `${iconColor}`}}
        >
            {icon}
        </a>
    );
};

export default SocialMediaIcon;
