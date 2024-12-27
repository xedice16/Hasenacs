import React from 'react'
import '../BlogDetails/blogDetails.css'
import './blogDetails.css'
import aboutImg1 from "../../photos/photo18.jpg"
import UpIcon from '../../components/Up/UpIcon.jsx'

const BlogDetails = () => {
  return (
    <div>
  <div className='about-info-photo'>
<p className='contact-p'>About</p>
        </div>

<div className='about-text-1'>
<div className="about-text">
  <p className='sparking-text'>
  SPARKING MEMORIES
  </p>
  <p className='font-cormor p-1-about-text'>
  Fragrance, the silent storyteller of personal allure.
  </p>
  <p className='join-us'>
  HaSen, 2024-cü il iyulun 21-də fəaliyyətə başlamış, qadın geyimləri, çantalar və aksesuarlar sahəsində özünəməxsus bir yer yaratmış markadır. Bizim məqsədimiz, hər qadının öz tərzini tapması və özünü ən yaxşı şəkildə ifadə etməsi üçün mükəmməl məhsullar təqdim etməkdir. HaSen, yalnız paltar və aksesuarları satmaqla kifayətlənmir; biz hər bir məhsulda qadınların həyatlarına şıklıq və komfort qatmağa çalışırıq.

Markamızın dizaynında ağ-qara tonları əsas yer tutur, çünki bu iki rəng həyatın sadə və mürəkkəb tərəflərini simvollaşdırır. Ağ, təmizliyi və sadəliyi, qara isə gücü və elegansı ifadə edir. Ancaq biz HaSen olaraq inanırıq ki, həyat təkcə ağ və qara deyil. Hər bir insanın içində fərqli rənglər, fərqli hekayələr və hisslər var. Bizim üçün moda, yalnız vizual bir ifadə deyil; hər qadının özünü daha güclü, gözəl və fərqli hiss etməsini təmin edən bir həyat tərzidir.

Nə təklif edirik?

HaSen, qadın geyimləri, çantalar və aksesuarlar sahəsində geniş bir məhsul çeşidi ilə xidmətinizdədir. İstər gündəlik istifadəyə uyğun rahat geyimlər, istərsə də xüsusi günlər üçün şık və zərif paltarlar, bizdə hər bir zövqə uyğun məhsul tapa bilərsiniz. Çantalarımız və aksesuarlarımız isə hər bir geyimi tamamlamaq və ona son nöqtəni qoymaq üçün ideal seçimdir.

HaSen-də Moda Yalnız Bir Trend Deyil, Bir Həyat Tərzidir

Bizim markamızda hər şey sizin rahatlığınız və özünüzü ifadə etməniz üçün dizayn edilir. HaSen, sadə və zərif üslubdan, modern və cəsarətli tərzə qədər geniş bir seçki təklif edir. Bizimlə, həyatın hər anında fərqli və parlaq olmağın mümkün olduğunu hiss edəcəksiniz.

Əgər siz də həyatın yalnız ağ və qara olmadığını düşünürsünüzsə, deməli HaSen-dən hələ alış-veriş etməmisiniz! Həyatın rəngli dünyasında, bizimlə hər addımda daha gözəl, daha şık və daha özünüz hiss edəcəksiniz. HaSen ilə moda dünyasına addım atın və hər gününüzü xüsusi hiss edin.
  </p>
  
  
</div>
<div className="about-1-img">
  <img src={aboutImg1} alt="" />
</div>

</div>



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

export default BlogDetails