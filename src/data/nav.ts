export interface NavItem {
  icon: string;
  label: string;
  href: string;
  section: string;
}

export const navItems: NavItem[] = [
  { icon: 'ri-user-line', label: 'Sobre mí', href: '#about', section: 'about' },
  { icon: 'ri-briefcase-line', label: 'Experiencia', href: '#experience', section: 'experience' },
  { icon: 'ri-book-line', label: 'Educación', href: '#qualification', section: 'qualification' },
  { icon: 'ri-code-s-slash-line', label: 'Proyectos', href: '#projects', section: 'projects' },
  { icon: 'ri-chat-1-line', label: 'Contacto', href: '#contact', section: 'contact' },
];
