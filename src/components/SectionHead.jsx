import RevealWords from './RevealWords'

/**
 * Centered section header: title with word-by-word intro + animated underline rule.
 * The rule grows from 0 → 56px once the parent gets `reveal-on`.
 */
export default function SectionHead({ title }) {
  return (
    <div className="section-head reveal">
      <h2 className="section-title"><RevealWords text={title} /></h2>
      <div className="section-rule"></div>
    </div>
  )
}
