var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import Facebook from '@assets/img/facebook.svg';
import House from '@assets/img/house.svg';
import Info from '@assets/img/info.svg';
import Instagram from '@assets/img/instagram.svg';
import Lightning from '@assets/img/lightning.svg';
import Linkedin from '@assets/img/linkedin.svg';
import Plus from '@assets/img/plus.svg';
import Logo from '@assets/img/span-logo-r.svg';
import Tiktok from '@assets/img/tiktok.svg';
import Twitter from '@assets/img/twitter.svg';
import Youtube from '@assets/img/youtube.svg';
const IconsDictionary = {
    Logo,
    House,
    Lightning,
    Instagram,
    Facebook,
    Twitter,
    Youtube,
    Tiktok,
    Linkedin,
    Plus,
    Info
};
const Icon = (_a) => {
    var { icon } = _a, rest = __rest(_a, ["icon"]);
    const Icon = IconsDictionary[icon];
    return React.createElement(Icon, Object.assign({}, rest));
};
export default Icon;
