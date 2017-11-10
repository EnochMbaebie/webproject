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
      background: #f1f1f1;
      background-image: #202024 url(${base + menubackground});
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
  </style>
`

/*******************************************************************************
  MARKUP (html) 
*******************************************************************************/
var menu = bel`
  <div class="Menu">
    <ul>
      <div class="Anabel-Group-Logo">
        <li><a href="#"><img src=${base + logo}></a></li>
      </div>
      <li><a href="index.html" class="over">Home</a></li>
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
  <footer class="x-colophon top" role="contentinfo">
    <div class="x-container-fluid max width">
      <div class="x-row-fluid">
        <div class="x-span4">
          <div id="text-4" class="widget widget_text">
            <h4 class="h-widget">About Us</h4>
            <div class="textwidget"> </div>
          </div>
        </div>
        <div class="x-span4">
          <div id="text-3" class="widget widget_text">
            <h4 class="h-widget">Contact Us</h4>
            <div class="textwidget">
              Anabel Leadership Academy
              <br> 17B Dan Ogbeide Close Off Oyibo Adjarho Street, Off Ayimade Street off Admiralty Way, Lagos
              <br> Lekki Phase 1
              <br> Lagos Nigeria
              <br> P.O. Box 50802, Washington DC 20091, United States Of America
              <br> Tel: +234 1 2771388
              <br> Email : info@anabelleadershipacademy.com
              <br> Website : www.anabelleadershipacademy.com</div>
          </div>
        </div>
        <div class="x-span4">
          <div id="text-2" class="widget widget_text">
            <h4 class="h-widget">Certifications</h4>
            <div class="textwidget">
              <div class="cbg">
                <div class="pad20">
                  <img src="http://www.anabelleadershipacademy.com">
                  <br>Test
                </div>
              </div>
            </div>
          </div>
        </div>
      <!-- end .x-row-fluid --></div>
    <!-- end .x-container-fluid.max.width --></div>
  <!-- end .x-colophon.top --></footer>
`
var footer2 = bel`
  <footer class="x-colophon bottom" role="contentinfo">
    <div class="x-container-fluid max width">
      <ul class="x-nav">
        <li>
          <a href="http://www.anabelleadershipacademy.com/wp-admin/nav-menus.php">Assign a Menu</a>
        </li>
      </ul>
      <div class="x-social-global"></div>
      <div class="x-colophon-content">
        ANABEL LEADERSHIP ACADEMY © 2017
      </div>
    </div>
  </footer>
`
/*******************************************************************************
  ASSEMBLE 
*******************************************************************************/
document.head.appendChild(style)
document.body.appendChild(menu)
document.body.appendChild(screen)
document.body.appendChild(footer1)
document.body.appendChild(footer2)
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
