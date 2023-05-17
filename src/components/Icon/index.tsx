import React from 'react'

import Facebook from '@assets/img/facebook.svg'
import House from '@assets/img/house.svg'
import Info from '@assets/img/info.svg'
import Instagram from '@assets/img/instagram.svg'
import Lightning from '@assets/img/lightning.svg'
import Linkedin from '@assets/img/linkedin.svg'
import Plus from '@assets/img/plus.svg'
import Logo from '@assets/img/span-logo-r.svg'
import Tiktok from '@assets/img/tiktok.svg'
import Twitter from '@assets/img/twitter.svg'
import Youtube from '@assets/img/youtube.svg'

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
}

export type IconOptions = keyof typeof IconsDictionary

const Icon = ({ icon, ...rest }) => {
  const Icon = IconsDictionary[icon]
  return <Icon {...rest} />
}

export default Icon
