
export const NAVITEMS: NavItem[] = [
  { name: 'login', path: 'login', icon: 'person_add' },
  { name: 'Recent Data', path: 'recent', icon: 'publish' },
  // { name: 'View Pictures', path: 'view', icon: 'view_list' },
];

interface NavItem {
  name: string;
  path: string;
  icon: string;
}
