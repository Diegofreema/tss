export interface ListItem {
  id: string;
  title: string;
  subtitle?: string;
  leadingIcon: React.ReactNode;
  trailingIcon?: React.ReactNode;
  type?: 'default' | 'danger' | 'success' | 'warning';
  badge?: string | number;
  isActive?: boolean;
}
