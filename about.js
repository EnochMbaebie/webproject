var bel = require('bel')

/*******************************************************************************
  ASSETS 
*******************************************************************************/
var base = 'https://raw.githubusercontent.com/EnochMbaebie/webproject/master/image/'

var img1 = 'Gas_Station_415853.jpg'
var img2 = 'Offshore-oil-rig.jpg'
var img3 = 'chinaoilrig.jpg'
var img4 = '253154164.jpg'
var img5 = '178724.jpg'


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
  
  header {
    background-color: url(${base + img3});
    height: 200px;
    width:  400px;
    border: 1px solid black;
  }

  body {
    background-color: #d7e5f2;
    fonts-family: 'Alegreya', sans-serif;
    margin: 0;
    min-height: 100%;
  }

  h3 {
    background-color: green;
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
      text-decoration: none;
      float: center;
      margin-top: 30 px;
      font-family: "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
      border-bottom: 1px solid #555;
    }
  li a:hover:not(.active) {
      background-color: #a6a8a6;
      transition:0.6s
      color: blue;
      width: 150%
    }
  a {
    font-size: 15px;
    text-align: center;
    padding:10px;
    border-radius: 10px;
    font-family:Century Gothic;
    font-weight:bold;

  }

  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    position:absolute;
    }

  ul li {
      display: inline-block;
      margin: auto;
      padding: 1px
      float: left;
      text-align: center
      width: none;
      height: none;
      background-color: none;
      opacity: none;
      font-size: none;
    }

  ul li ul li {
    display: none;
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
      </div>
        <a href="index.html"><img src=${base + logo}></a>
      <ul>
	      <li><a href="index.html" class="current">HOME</a>
        </li>
	      <li><a href="#" >ABOUT US </a>
      		  <ul>
    			    <li><a href="about.html">ABOUT ANABEL GROUP</a>
              </li>
    	        <li><a href="vision.html">ANABEL GROUP VISION</a>
              </li>
              <li><a href="mission.html" >ANABEL GROUP MISSION</a>
              </li>
            </ul>   
        </li>
	      <li><a href="strategy.html">STRATEGY</a>
        </li>
	      <li><a href="capital.html">GLOBAL CAPITAL</a>
        </li>
	      <li><a href="leadership.html">LEADERSHIP</a>
        </li>
	      <li><a href="entreprenuers.html">ENTREPRENUERSHIP</a>
        </li>
	      <li><a href="modular.html">MASTER CLASS</a>
        </li>
	      <li><a href="business.html">BUSINESS EXCELLENCE</a>
        </li>
      </ul>
  </div>
`
var footer1 = bel`
<div class="inner">
  <h3> ABOUT ANABEL GROUP </h3>
  <h1> VISION </h1>
  <p> To provide the Leadership of emerging markets’ private and public sector institutions the strategic support, the tools, the networks <br>
  and the capital they need to develop local value chains and local capacity to prosper locally and to compete globally.</p>
  <h1> MISSION </h1>
  <p>To be the premier global partner for Leaders, Entrepreneurs and Business People seeking to invest, build ecosystems, <br> extend value chains and to build capacity in the emerging markets

  <h3> Anabel Group Focus and Values:<h3>
  <ul>
    <li>Global Capital Strategy</li>
    <li>National Development Strategy</li>
    <li>Business Development Strategy</li>
    <li>Entrepreneurship Strategy </li>
    <li>Leadership Strategy</li>
    <li>Global Business Excellence</li>
    <li>Personal Development Strategy and Peak Performance</li>
  </ul>
 </div>
`


  <div class="imgcontainer">
         <img src="image/309-IMG_3915.jpg" width="400" height="250" align="left" padding:10px;/>
      </div>
   

      <div class="imgcontaine">
          <img src="image/DSC_0716.jpg" width="400" height="250" align="left" padding:5px;/>
      </div>
    </div>


/*******************************************************************************
  ASSEMBLE 
*******************************************************************************/
document.head.appendChild(style)
document.body.appendChild(menu)
document.body.appendChild(footer1)
/*document.body.appendChild(footsocial)*/
