import React from 'react'
import '../About/about.css'
import Gallery from '../../components/Gallery/Gallery'
import {Link} from 'react-router-dom'
import UpIcon from '../../components/Up/UpIcon.jsx'
import aboutImg from "../../photos/Designer.jpg"
const About = () => {
  return (
    <div>
  <div className='about-info-photo'>
<p className='contact-p'>About</p>
        </div>

<div className='about-text-1'>
<div className="about-text">
  <p className='sparking-text'>
  HASEN
  </p>
  <p className='font-cormor p-1-about-text'>
  HaSen - Həyatın Təkcə Ağ-Qara Olmadığını Kəşf Edin
  </p>
  <p className='join-us'>

HaSen, 2024-cü il iyulun 21-də qadın geyimləri, çantalar və aksesuarlarla moda dünyasına addım atdı. Bizim markamız, sadəlik və şıklığı birləşdirərək hər anınızı daha gözəl etməyə çalışır. Dizaynımızda ağ-qara tonları, həyatın təkdilliliyini simvollaşdırır, amma biz inanırıq ki, həyat yalnız iki rəngdən ibarət deyil.  

Əgər siz də həyatın zənginliyini və müxtəlifliyini qiymətləndirirsinizsə, HaSen sizin üçün doğru ünvandır. Hər məhsul, sizin özünəməxsus tərzinizi və fərqli dünyanızı ifadə etmək üçün hazırlanıb. HaSen ilə moda, yalnız geyim deyil, bir həyat tərzidir.
  </p>
  
    <Link to='/blogDetails'><button className='get-more-info'>Get More Info</button></Link>
</div>
<div className="about-1-img">
  <img src={aboutImg} alt="" />
</div>

</div>


<Gallery/>

<div className='thesiz'>
<div className='thesis-text'>
  <p  className='font-cormor trend'>
  "The aesthetics of fashion play a pivotal role in shaping how we perceive ourselves and others, as well as influencing societal trends."
  </p>
</div>
</div>
<div className='count-section'>
  <div className="count-all w-80 font-cormor">
    <div className="type-count-1">
      <p className='count'>
      84
      </p>
      <p className='count-for'>

      Radiant Ranunculus
      </p>
    </div>
    <div className="type-count-1">
      <p className='count'>
      12
      </p>
      <p className='count-for'>

      Golden Gleam
      </p>
    </div>
    <div className="type-count-1">
      <p className='count'>
      67
      </p>
      <p className='count-for'>

      Hibiscus Bloom
      </p>
    </div>
    <div className="type-count-1">
      <p className='count'>
      12
      </p>
      <p className='count-for'>

      Starry Jasmine
      </p>
    </div>
  </div>
</div>
<UpIcon/>
    </div>
  )
}

export default About