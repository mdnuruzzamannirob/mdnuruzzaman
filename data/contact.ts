import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

export const contactMethods = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'dev.mdnuruzzaman@gmail.com',
    link: 'mailto:dev.mdnuruzzaman@gmail.com',
  },
  {
    icon: FaPhoneAlt,
    label: 'Phone',
    value: '+880 1973 875893',
    link: 'tel:+8801973875893',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    link: 'https://www.google.com/maps?q=Dhaka,+Bangladesh',
  },
]
