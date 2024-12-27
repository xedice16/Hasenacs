import { Link } from 'react-router-dom';
import './home.css'
import UpIcon from '../../components/Up/UpIcon';
import MiniBlog from '../../components/MiniBlog/MiniBlog';
import Gallery from '../../components/Gallery/Gallery';
const Home = ()=>{
    return(
      <div >
        <MiniBlog/>
        <Link to="/">
            
      <div className='image-container'>

          <Link to="/shop">
          <div className='content-button'>
           <button class="beautiful-button">
              SHOP NOW!
            </button>
            </div>
            </Link>

          </div>
          </Link>
          <Gallery/> 
          <UpIcon/>
        </div>
    )
}
export default Home;