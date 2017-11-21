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
    body {
      margin: 0;
      min-height: 100%;
    }
    html {
      height: 100%;
    }
    .Menu {
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 17%;
      background: rgb(0, 0, 255);
      background-image: url(${base + menubackground});
      position: fixed;
      height: 100%;
      right: 0;
      overflow: auto;
      overflow-x: hidden;
      padding-top: 60px;
      border: 1px solid #555;
    }
    li a {
      display: block;
      color: #000;
      padding: 8px 16px;
      width: 100px;
      text-decoration: none;
      background-color: font-family: "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
      text-align: center;
      border-bottom: 1px solid #555;
    }
    li a:hover:not(.active) {
      background-color: #4CAF50;
      color: red;
      width: 70%
    }
    li a:hover:not(.active) {
      background-color: #a6a8a6;
      color: red;
      width: 70%
    }

  div {
      list-style-type: none;
    }
    li {
      display: inline-block;
      margin: according to the image size;
    }
  </style>
`

/*******************************************************************************
  MARKUP (html) 
*******************************************************************************/
var menu = bel`
  <div class="Menu">
    <ul>
      <div class="Anabel-Group-Logo">
        <a href="#"><img src=${base + logo}></a>
      </div>
      <li><a href="index.html" class="over">HOME</a></li>
      <li><a href="strategy.html" >STRATEGY</a></li>
      <li><a href="capital.html">CAPITAL</a></li>
      <li><a href="leadership.html">LEADERSHIP</a></li>
      <li><a href="entreprenuers.html">ENTREPRENUERS</a></li>
      <li><a href="modular.html">ME1000</a></li>
      <li><a href="business.html">BUSINESS EXCELLENCE</a></li>
    </ul>
    <div class="clear"></div>
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
<div>
  <h2 align="left"> Our Mission </h2>
  <p class="Profile">
    We are educating Leaders with our leadership academy, engaging future leaders.
  </p>
  <h2 align="left"> Our Vision </h2>
  <p>

To be the most trusted and respected professional services firm recognized by our clients for delivering excellence.</p>
 </div>


`
var footer2 = bel`
    <footer>
    <div class="wrapper">
      <nav>
        <ul>
          <li><a href="about.html">ABOUT US</a></li>
        </ul>
      </nav>
     </div>
  </footer>
`
var foot1 = bel`
	<foot>
	<div class="anabel">
	  <li>
	    <img src=${base + img17}>
	  </li>
	  <li>
        <img src=${base + img18}> 
	  </li>
	  <li>
	    <img src=${base + img19}>
	  </li>
	  <li>
	    <img src=${base + img20}>
	  </li>
	  <li>
	    <img src=${base + img21}>
	  </li>
	  <li>
	    <img src=${base + img22}>
	  </li>
	  <li>
	    <img src=${base + img23}>
	  </li>
	 </div>

`
/*******************************************************************************
  ASSEMBLE 
*******************************************************************************/
document.head.appendChild(style)
document.body.appendChild(menu)
document.body.appendChild(screen)
document.body.appendChild(footer1)
document.body.appendChild(footer2)
document.body.appendChild(foot1)
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



var str1 = src = image/bckgrod.jpeg;
document.getElementById("divtest").style.backgroundImage = str1 ;

var str2 = src = image/bckgrod.jpeg;
document.getElementById("imgtest").src = str2;


