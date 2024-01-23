import '~/components/Badge.css';

interface BadgeProps {
  children: string;
  type: 'success' | 'error' | 'warning';
}

function Badge({ children, type = 'success' }: BadgeProps) {
  return <span className={`Badge ${type}`}>{children}</span>;
}

export { Badge };
