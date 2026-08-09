import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaSnapchat,
} from 'react-icons/fa6'

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  snapchat: FaSnapchat,
}

export default function SocialIcon({ name, size = 18, className = '' }) {
  const Icon = ICONS[name]

  if (!Icon) {
    return null
  }

  return <Icon size={size} className={className} aria-hidden="true" />
}
