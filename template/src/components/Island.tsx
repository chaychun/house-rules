import type { ReactNode } from 'react';

// Locked shell for a React carve-out. The dashed frame + header are the theme's;
// everything INSIDE is the island author's freedom. Use in MDX with a client
// directive, e.g. `<Island client:load>...</Island>`.
export default function Island({
  title = 'Interactive island · React',
  children,
}: {
  title?: string;
  children?: ReactNode;
}) {
  return (
    <div className="hr-island">
      <div className="hr-island__label">{title}</div>
      <div className="hr-island__body">{children}</div>
    </div>
  );
}
