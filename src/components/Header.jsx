/**
 * Header layout is static. All visual properties — brand font-size, padding,
 * background, backdrop blur, and the horizontal slide from center to top-left —
 * are driven 1:1 by scrollY in App.jsx via direct DOM manipulation. This keeps
 * the animation perfectly reactive to the scroll position.
 */
export default function Header({ headerRef }) {
  return (
    <header
      className="header"
      ref={headerRef}
      style={{
        background: 'rgba(29, 29, 29, 0.9)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="brand-block">
        <div className="brand" style={{ fontSize: '8rem' }}>
          <b>West<span><b>#</b></span></b>
        </div>
        <p className="tag tag-hidden">web technologies</p>
      </div>
    </header>
  )
}
