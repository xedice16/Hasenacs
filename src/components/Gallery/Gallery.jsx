  import { Link } from "react-router-dom";
  import './gallery.css'
     const Gallery = () => {
            const scrollToTop = () => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              };
          return (
            <div>
                <div className="gallery-all w-100">
                    <div className="gallery-photo name-info">
                        <p className='font-cormor name'>Lamiye Eliyeva</p>
                        <p>Administrative Assistant</p>
                        <Link to={{}}> <button onClick={scrollToTop}>
                            Contact-me
                            </button>
                            </Link>
                    </div>
                    <div className="gallery-photo  gallery-photo-text ">
                        <img src="https://i.pinimg.com/564x/23/7a/c7/237ac7db23e733b9234a217788c34f7b.jpg" alt="" />
                    </div>
                    <div className="gallery-photo"><img src="https://rhiannon1280.wordpress.com/wp-content/uploads/2016/02/black_and_white_fashion_photography37.jpg" alt="" /></div>
                    <div className="gallery-photo"><img src="https://i.pinimg.com/564x/cf/13/1e/cf131ee7365db5d9379e4cbbe4a1008d.jpg" alt="" /></div>
                    <div className="gallery-photo"><img src="https://assets.vogue.com/photos/5f8716230ecb075fefdc96bc/master/w_2560%2Cc_limit/BALMAIN-HERITAGE44_LOOK5-0614.jpg" alt="" /></div>
                    <div className="gallery-photo "><img src="https://media.istockphoto.com/id/1458505719/photo/fashion-model-in-studio.jpg?s=612x612&w=0&k=20&c=Tg4IHMGfUKuaZCm6YF2c8JaSMoDcVNkHEQAwLUTof4E=" alt="" /></div>
                    <div className="gallery-photo"><img src="https://i.pinimg.com/736x/e8/34/cc/e834cc121465996af59fd357c1a06b3d.jpg" alt="" /></div>
                    <div className="gallery-photo name-info">
                        <p className='font-cormor name'>Khadija Mustafali</p>
                        <p>General Manger</p>
                        <Link to={{}}> <button onClick={scrollToTop}>
                            Contact-me
                            </button>
                        </Link>
                       
                    </div>
                </div>
            </div>
    )
}
export default Gallery