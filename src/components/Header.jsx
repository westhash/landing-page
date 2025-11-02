export default function Header({ headerRef, brandFontSize, headerBlur, headerScrolled, tagVisible }) {
  return (
    <header 
      ref={headerRef} 
      className={`header ${headerScrolled ? 'header-scrolled' : ''}`} 
      style={{ backdropFilter: `blur(${headerBlur})` }}
    >
      <div className="brand" style={{ fontSize: brandFontSize }}>
        <b>West<span><b>#</b></span></b>
      </div>
      <p className={`tag ${tagVisible ? 'tag-visible' : 'tag-hidden'}`}>web technologies</p>
    </header>
  )
}
