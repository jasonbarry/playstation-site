export default function ResponsiveGrid({ children }) {
  return (
    <div className="gdk root container responsivegrid" id="gdk__content">
      <div className="cmp-container">{children}</div>
    </div>
  );
}
