var bel = require('bel')

/*******************************************************************************
  ASSETS 
*******************************************************************************/
var base = 'https://raw.githubusercontent.com/EnochMbaebie/webproject/master/image/'

var menubackground = 'marine_navbg4.jpg'
var logo = 'Anabel-Group-Logo.png'
var img1 = 'dreamstime_m_26715818.jpg'
var img2 = 'dreamstimelarge_11506280.jpg'
var img3 = 'dreamstimelarge_12628328.jpg'
var img4 = 'dreamstimelarge_19440797.jpg'
var img5 = 'dreamstimelarge_29000630.jpg'
var img6 = 'dreamstimelarge_38754330.jpg'
var img7 = 'dreamstimelarge_39551803.jpg'
var img8 = 'dreamstimelarge_51791878.jpg'
var img9 = 'dreamstimelarge_53728429.jpg'
var img10 = 'dreamstimelarge_56914984.jpg'
var img11 = 'dreamstimelarge_59356200.jpg'
var img12 = 'dreamstimelarge_60831384.jpg'
var img13 = 'dreamstimelarge_85739545.jpg'
var img14 = 'dreamstimelarge_91081967.jpg'
var img15 = 'shutterstock_178724246-2.jpg'
var img16 = 'bckgrod.jpg'
var img17 = 'logo-anabel-energy.png'
var img18 = 'logo-anabelcapital.png'
var img19 = 'logo-anabelleadershipacademy.png'
var img20 = 'logo-empower-nigeria.png'
var img21 = 'logo-jobs-for-nigeria.png'
var img22 = 'logo-manifesto.png'
var img23 = 'logo-nigeria-leadership-aummit.png'


/*******************************************************************************
  STYLE (css)
*******************************************************************************/
var style = bel`
  <style>
  @import 'http://fonts.googleapis.com/css?family=Alegreya+sans';
  * {
     margin: 0;
      padding: 0;
      border: 0;
  }
  body {
      background color:#F5F5F5;
      fonts-family: 'Alegreya', sans-serif;
      margin: 0;
      min-height: 100%;
    }
  h2 {
    font-size: 250;
    font-weight: 700;
    text-align: center;
    padding-top: 5% 2% 2% 1%;
    color: #0000A0;
  }
  p {
    font-size: 150%
    line-height: 160%;
    padding: 2%;
    text-indent: 2%;
    text-align: justify;
  }
  img {
    max-width: 100;
    height: auto;
    width: auto;
    margin-bottom: -4px;
  }
    html {
      height: 100%;
      background color: #0000A0;
    }
    .Menu {
      margin: 0;
      padding: 15px 15px 0 0;
      width: 15%;
      background-image: url(${base + menubackground});
      position: fixed;
      height: 100%;
      right: 0;
      overflow: auto;
      overflow-x: hidden;
      padding-top: 60px;
      border: 0;
    }
    Anabel-Group-Logo {
      max-width: 200px;
      margin: auto;
      height: 100px;
      float: right;
    }

    li a {
      display: block;
      color: #000;
      padding: 8px 16px;
      width: 100px;
      text-decoration: none;
      float: center;
      margin-top: 30 px;
      font-family: "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
      text-align: center;
      border-bottom: 1px solid #555;
    }
  li a:hover:not(.active) {
      background-color: #a6a8a6;
      transition:0.6s
      color: blue;
      width: 150%
    }
  a {
    width: 150 px;
    color: white;
    display: block;
    font-size: 15px;
    text-align: center;
    padding:10px;
    border-radius: 10px;
    font-family:Century Gothic;
    font-weight:bold;

  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    position:absolute;
    }
  ul li {
      display: inline-block;
      margin: auto;
      padding: 10px
      float: center;
      text-align: right
    }
  .inner {
    width: 100;
    float: none;
    text-align: left;
    text font-size: 150%;
    background-image: url(${base + img16});
  }
  .anabelsocial {
    list-style-type: none;
    text-align: center;
    display: inline;
    font-size: 460%;
    margin: 5%;
    padding: 7% 7% 5% 4%;

  }

  .bottom-logo{min-height: 100px;}
  .bottom-logo img{
    filter: none;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
    cursor:pointer;
    opacity: 1.0;
    margin-top: 50%;
    margin-left: auto;
}

.bottom-logo img:hover{
    filter: grayscale;
    -webkit-filter: grayscale(1);
    opacity: 1;
}

.footer-logos li{
    list-style: none;
    display: inline-block;
    margin: 2% 3.5%;
    Width: 5%;
}

.footer-logos li img {
    Width: 150%;
}
</style>
`

/*******************************************************************************
  MARKUP (html) 
*******************************************************************************/
var menu = bel`
  <div class="Menu">
      <div class="Anabel-Group-Logo">
        <a href="index.html"><img src=${base + logo}></a>
       <ul>
      <li><a href="index.html" class="current">HOME</a></li>
      <li><a href="aboutus.html" >ABOUT US</a></li>
      <li><a href="strategy.html" >STRATEGY</a></li>
      <li><a href="capital.html">GLOBAL CAPITAL</a></li>
      <li><a href="leadership.html">LEADERSHIP</a></li>
      <li><a href="entreprenuers.html">ENTREPRENUERSHIP</a></li>
      <li><a href="modular.html">MASTER CLASS</a></li>
      <li><a href="business.html">BUSINESS EXCELLENCE</a></li>
      </ul>
  </div>
  </div>
`
var screen = bel`
  <div class="Screen">
    <img class="mySlides" src=${base + img1} style="width:85.5%">
    <img class="mySlides" src=${base + img2} style="width:85.5%">
    <img class="mySlides" src=${base + img3} style="width:120%">
    <img class="mySlides" src=${base + img4} style="width:85.5%">
    <img class="mySlides" src=${base + img5} style="width:85.5%">
    <img class="mySlides" src=${base + img6} style="width:85.5%">
    <img class="mySlides" src=${base + img7} style="width:85.5%">
    <img class="mySlides" src=${base + img8} style="width:85.5%">
    <img class="mySlides" src=${base + img9} style="width:85.5%">
    <img class="mySlides" src=${base + img10} style="width:85.5%">
    <img class="mySlides" src=${base + img11} style="width:85.5%">
    <img class="mySlides" src=${base + img12} style="width:120%">
    <img class="mySlides" src=${base + img13} style="width:85.5%">
    <img class="mySlides" src=${base + img14} style="width:85.5%">
    <img class="mySlides" src=${base + img15} style="width:85.5%">
    </div>
`
var footer1 = bel`
<div class="inner">
  <h2> ANABEL GROUP </h2>
  <h2>Mission: </h2>
  <p> To provide the Leadership of emerging markets’ private and public sector institutions the strategic support, the tools,
   the networks and the capital they need<br> to develop local value chains and local capacity to prosper locally and to compete globally.</p>
  <h2> Vision: </h2>
  <p>To be the premier global partner for Leaders, Entrepreneurs and Business People seeking to invest, build ecosystems,
  extend value chains and <br>to build capacity in the emerging markets  </p>
 </div>
`

var foot1 = bel`
<section class="bottom-logo">
    <div class="row">
         <div class="large-12 columns">
            <ul class="footer-logos">
                <li><img src="${base + img17}" alt="" />  </li>
                <li><img src="${base + img18}" alt="" /></li>
                <li><img src="${base + img19}" alt="" /> </li>
                <li><img src="${base + img20}" alt="" /> </li>
                <li><img src="${base + img21}" alt="" /> </li>
                <li><img src="${base + img22}" alt="" /></li>
                <li><img src="${base + img23}" alt="" /></li>
            </ul>
        </div> 
    </div>
</section>

`
var footsocial = bel`
  <div>
      <ul class="anabelsocial">
           <li><a href="https://web.facebook.com/anabelgroup" target="_blank"><i class="fa fa-facebook"></i></a></li>
           <li><a href="https://twitter.com/Anabelleader" target="_blank"><i class="fa fa-twitter"></i></a></li>  
      </ul>
  </div>
`
/*******************************************************************************
  ASSEMBLE 
*******************************************************************************/
document.head.appendChild(style)
document.body.appendChild(menu)
document.body.appendChild(screen)
document.body.appendChild(footer1)
document.body.appendChild(foot1)
/*document.body.appendChild(footsocial)*/
/*******************************************************************************
  MORE JAVASCRIPT
*******************************************************************************/
var counter = 0
var slides = [...screen.querySelectorAll(".mySlides")]
slides.forEach((slide) => slide.style.display = 'none')

function cycle() {
  slides[counter % slides.length].style.display = 'none'
  counter += 1
  slides[counter % slides.length].style.display = 'block'
  setTimeout(cycle, 3000)
}

cycle()


