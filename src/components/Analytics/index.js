import React from 'react';
const Analytics = () => (React.createElement(React.Fragment, null,
    React.createElement("script", { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING}` }),
    React.createElement("script", { dangerouslySetInnerHTML: {
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING}', {
              page_path: window.location.pathname,
            });
          `
        } })));
export default Analytics;
