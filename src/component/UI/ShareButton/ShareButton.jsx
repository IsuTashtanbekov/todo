// import React, { useState } from 'react';

// function shareButton() {
//   const [link, setLink] = useState('https://example.com');
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     setCopied(true);
//     setTimeout(() => setCopied(false), 3000);
//   }

//   return (
//     <div>
//       <p>{link}</p>
//       <CopyToClipboard text={link} onCopy={handleCopy}>
//         <button>{copied ? 'Copied!' : 'Copy'}</button>
//       </CopyToClipboard>
//     </div>
//   );
// }

// rafce
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '../Button/Button';


export const ShareButton = () => {
    const [link, setLink] = React.useState('https://isutashtanbekov.github.io/todo/')
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);}
  return (
    <div>
     <CopyToClipboard text={link} onCopy={handleCopy}>
         <button>{copied ? 'Ссылка скопирована!' : 'Поделиться '}</button>
     </CopyToClipboard>
    </div>
  )
}
