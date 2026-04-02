type Project = {
  id: number
  title: string
  description: string
  image: string
  category: string // Design, Projects, Dev Tools, Open Source
  tags: string[]
  link: string
  heightClass: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Pigment',
    description: 'The gradients and colors for the next smart creator.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=680&fit=crop',
    category: 'Design',
    tags: ['React', 'Sass & CSS', 'Javascript', 'Contrast'],
    link: '#',
    heightClass: 'h-[310px] sm:h-[350px]',
  },
  {
    id: 2,
    title: 'Manage all your properties in one place',
    description: 'Property management made simple and efficient.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=680&fit=crop',
    category: 'Projects',
    tags: ['React', 'NodeJS', 'MongoDB'],
    link: '#',
    heightClass: 'h-[310px] sm:h-[350px]',
  },
  {
    id: 3,
    title: 'Navigation is hard, lets automate it',
    description: 'Automated route optimization and navigation tools.',
    image:
      'https://images.unsplash.com/photo-1460925895917-adf4e11526eb?w=900&h=760&fit=crop',
    category: 'Dev Tools',
    tags: ['NextJS', 'TypeScript', 'React Query'],
    link: '#',
    heightClass: 'h-[340px] sm:h-[390px]',
  },
  {
    id: 4,
    title: 'usable Query',
    description:
      'A streamlined and centralized approach to managing queries and mutations.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=760&fit=crop',
    category: 'Open Source',
    tags: ['React', 'TypeScript', 'Open Source'],
    link: '#',
    heightClass: 'h-[340px] sm:h-[390px]',
  },
  {
    id: 5,
    title: 'Empty Canvases Interior',
    description: 'Minimal interior layouts and visual language system.',
    image:
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=900&h=680&fit=crop',
    category: 'Design',
    tags: ['UI/UX', 'Interior', 'Design'],
    link: '#',
    heightClass: 'h-[310px] sm:h-[350px]',
  },
  {
    id: 6,
    title: 'Enjoy this summer trends',
    description: 'Fashion and lifestyle campaign direction.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&h=680&fit=crop',
    category: 'Design',
    tags: ['Fashion', 'Trends', 'Marketing'],
    link: '#',
    heightClass: 'h-[310px] sm:h-[350px]',
  },
]
