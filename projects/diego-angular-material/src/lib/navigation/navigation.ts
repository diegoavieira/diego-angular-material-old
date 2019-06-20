export interface Navigation {
  title?: string;
  logo64?: string;
  sidenav?: {
    path: string,
    label: string,
    icon?: string
  };
}
