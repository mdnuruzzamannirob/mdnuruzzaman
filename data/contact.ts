import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

export const contactMethods = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'hello@adeneken.com',
    link: 'mailto:hello@adeneken.com',
  },
  {
    icon: FaPhoneAlt,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'San Francisco, CA',
    link: '#',
  },
]
