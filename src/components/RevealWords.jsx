/**
 * Splits a string into word spans for the word-by-word intro animation.
 * Each word is wrapped in `<span class="w"><i style="--d">word</i></span>`,
 * mirroring the CSS rules in App.css (.reveal-words).
 *
 * Activate by adding `reveal-on` to an ancestor — handled by the
 * IntersectionObserver in App.jsx that toggles `.reveal-on` on `.reveal` elements.
 */
export default function RevealWords({ text, step = 60, className = '' }) {
  const words = text.split(/\s+/)
  return (
    <span className={`reveal-words ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="w">
          <i style={{ '--d': `${i * step}ms` }}>{w}</i>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  )
}
