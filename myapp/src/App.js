import spectacles from "./asset/images.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons'

import './App.css';


function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="img">
          <img src={spectacles} alt="" />
        </div>

        <div className="article">
          <div class="info">
            <h1>
              Have the courage to follow your heart and intuition.
            </h1>
            <p>
              Steve Jobs was is one of the most respected entrepreneurs and inventors of his time. In 1976 he founded Apple together with his friend Steve Wozniak. They created their first computer, the Apple I, in the garage of Jobs’ parents.
            </p>
          </div>
          <div class="author">
            <span className="icon"><FontAwesomeIcon icon={faAppleWhole} /></span>
            <div class="author-info">
              <span class="name"><b>Steven Paul Jobs</b></span>
              <span class="date">28 Jun 2020</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
