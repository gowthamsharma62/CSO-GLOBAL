import React, { useEffect } from "react";
import Image from "next/image";
import about from "../../public/hero/about.png";

export default function About() {
    useEffect(() => {
        // Leadfeeder tracking code goes here
        (function(ss, ex) {
            window.ldfdr = window.ldfdr || function() {
                (ldfdr._q = ldfdr._q || []).push([].slice.call(arguments));
            };
            (function(d, s) {
                const fs = d.getElementsByTagName(s)[0];

                function ce(src) {
                    const cs = d.createElement(s);
                    cs.src = src;
                    cs.async = 1;
                    fs.parentNode.insertBefore(cs, fs);
                }
                ce('https://sc.lfeeder.com/lftracker_v1_' + ss + (ex ? '_' + ex : '') + '.js');
            })(document, 'script');
        })('lAxoEaKqRkv7OYGd');
    }, []);

    return ( <
        > { /* ... (the rest of your component code) ... */ } <
        />
    );
}