import './App.css'

export default function App() {
  return (
    <div className="landing minimal">
      <div className="center-block">
        <div className="brand">West<span>#</span></div>
        <p className="tag">web3 technologies</p>
        <a className="contact-btn" href="mailto:hello@westhash.dev">team@westhash.io</a>
        <p className="mini">© {new Date().getFullYear()} West#</p>
      </div>
    </div>
  )
}
