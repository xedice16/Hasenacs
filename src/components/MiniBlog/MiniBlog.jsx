import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './miniBlog.css'
import collectionImg1 from "../../photos/photo7.jpg"
import collectionImg2 from "../../photos/photo11.jpg"
import collectionImg3 from "../../photos/photo10.jpg"


const MiniBlog = ()=>{
    return(
        <div className='miniblog'>
<Splide
              options={{
                type: "loop",
                rewind: true,
                autoplay: true,
                interval: 3000,
                pauseOnHover: false,
                arrows: true,
                pagination: true,
              }}
              aria-label="My Favorite Images"
            >
              <SplideSlide className="slide">
                <div className="slider-content">
                  <p className="red">
                    {" "}
                    "Yeni kolleksiyanı təqdim edirik! Mövsümün ən gözəl parçaları burada sizi gözləyir."
                  </p>
                </div>
                <div className="author">
                  <img className='collection1'
                    src={collectionImg1}
                    alt="collection"
                  />
                 
                </div>
              </SplideSlide>
              <SplideSlide className="slide">
                <div className="slider-content">
                  <p className="red">
                  "Sevənlər üçün endirimli qiymətlər! Seçdiyiniz məhsullarda 30%-ə qədər endirim."
                  </p>
                </div>
                <div className="author">
                  <img className='collection2'
                    src="https://en.cms.monaonline.com/wp-content/uploads/sites/8/2024/12/fw-collection-mobile-banner.jpg"
                    alt="Pope Francis"
                  />
                  
                </div>
              </SplideSlide>

              <SplideSlide className="slide">
                <div className="slider-content">
                  <p className="red">
                  ""Həyatın rəngini HASEN ilə tap!""{" "}
                  </p>
                </div>
                <div className="author">
                  <img className='collection3'
                    src={collectionImg2}
                    alt="collection"
                  />
                  
                </div>
              </SplideSlide>
              
              <SplideSlide className="slide">
                <div className="slider-content">
                  <p className="red">
                  "Stilinizi tamamlayan ən gözəl aksessuarlar burada!
Kiçik detallarla böyük fərqlilik yaradın!{" "}
                  </p>
                </div>
                <div className="author">
                  <img className='collection4'
                    src={collectionImg3}
                    alt="Albert Einstein"
                  />
                </div>
              </SplideSlide>
            </Splide>
           
        </div>
    )
}
export default MiniBlog