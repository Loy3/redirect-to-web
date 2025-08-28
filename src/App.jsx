import './App.css'
import { CopyToClipboard } from './components/CopyToClipboard'

function App() {
  
  const handleLink = () => {
    const composeUrl = "https://theoneaboutloy.vercel.app/";
    // window.location.href = composeUrl;
    window.open(composeUrl, '_blank');
  };

  return (
    <div className="page-wrap">
      <div className="text-wrap">
        <h1>Site Not Available</h1>
        <p><span>loy's portfolio</span> is no longer available on this link. click and copy <span>the link or click the button</span> bellow to be redirected to the <span>loy's portfolio</span>.</p>
        <CopyToClipboard link="theoneaboutloy.vercel.app" />
        <button onClick={handleLink}>visit site</button>
      </div>
    </div>
  )
}

export default App
