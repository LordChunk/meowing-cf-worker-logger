
export const NAVITEMS: NavItem[] = [
  { name: 'login', path: 'login', icon: 'person_add' },
  // { name: 'Upload Pictures', path: 'upload', icon: 'publish' },
  // { name: 'View Pictures', path: 'view', icon: 'view_list' },
];

interface NavItem {
  name: string;
  path: string;
  icon: string;
}
