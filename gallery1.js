

<script src="jssor.slider.min.js"></script>
<script>
    jssor_slider1_init = function (containerId) {
        var options = { $AutoPlay: 1 };
        var jssor_slider1 = new $JssorSlider$(containerId, options);
    };
</script>

<div id="slider1_container" style="position: relative; top: 0px; left: 0px; width: 600px; height: 300px;">
                            <!-- Slides Container -->
    <div u="slides" style="cursor: move; position: absolute; overflow: hidden; left: 0px; top: 0px; width: 600px; height: 300px;">
        <div><img u="image" src="image1.jpg" /></div>
        <div><img u="image" src="image2.jpg" /></div>
    </div>
    <!-- Trigger -->
    <script>jssor_slider1_init('slider1_container');</script>
</div>

