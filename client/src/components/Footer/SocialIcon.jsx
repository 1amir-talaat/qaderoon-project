const SocialIcon = ({ platform, href, color, children }) => (
  <>
    <div className="f-icon" style={{ "--color": color }}>
      <a rel="noopener noreferrer" target="_blank" href={href} title={platform}>
        <span className="sr-only">{platform}</span>
        {children}
      </a>
    </div>
  </>
);

export default SocialIcon;
