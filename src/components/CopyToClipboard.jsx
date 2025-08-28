import React, { useState } from 'react';

export const CopyToClipboard = (props) => {
    const link = props.link;
    const [copySuccess, setCopySuccess] = useState('');

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(link);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
            console.error('Failed to copy text: ', err);
        } finally {
            // Reset the success message after a short delay
            setTimeout(() => setCopySuccess(''), 2000);
        }
    };

    return (
        <div className='click'>
            <h3 onClick={handleCopyClick}>{link}</h3>
            {copySuccess && <span style={{ marginLeft: '10px' }}>{copySuccess}</span>}
        </div>
    );
}
