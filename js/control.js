var teapotSlider = document.getElementById("teapotRange");
var teapotOutput = document.getElementById("teapotValue");
var plantSlider = document.getElementById("plantRange");
var plantOutput = document.getElementById("plantValue");
var kangarooSlider = document.getElementById("kangarooRange");
var kangarooOutput = document.getElementById("kangarooValue");

function sliderNumber(sliderId,outputId){
  var slider=document.getElementById(sliderId);
  var output=document.getElementById(outputId);
  output.innerHTML = slider.value;
}
teapotOutput.innerHTML = teapotSlider.value;
teapotSlider.oninput = function() {
  teapotOutput.innerHTML = this.value;
}
plantOutput.innerHTML = plantSlider.value;
plantSlider.oninput = function() {
  plantOutput.innerHTML = this.value;
}
kangarooOutput.innerHTML = kangarooSlider.value;
kangarooSlider.oninput = function() {
  kangarooOutput.innerHTML = this.value;
}
// function sliderNumberX(){
    //     var teapotSlider = document.getElementById("teapotTranslationX");
    //     var teapotOutput = document.getElementById("teapotTranslationValueX");
    //     var plantSlider = document.getElementById("plantTranslationX");
    //     var plantOutput = document.getElementById("plantTranslationValueX");
    //     var kangarooSlider = document.getElementById("kangarooRange");
    //     var kangarooOutput = document.getElementById("kangarooValue");
    //     teapotOutput.innerHTML = teapotSlider.value;
    //     teapotSlider.oninput = function() {
    //     teapotOutput.innerHTML = this.value;
    //     }
    //     plantOutput.innerHTML = plantSlider.value;
    //     plantSlider.oninput = function() {
    //     plantOutput.innerHTML = this.value;
    //     }
    //     kangarooOutput.innerHTML = kangarooSlider.value;
    //     kangarooSlider.oninput = function() {
    //     kangarooOutput.innerHTML = this.value;
    //     }
    // }
    // function sliderNumberY(){
    //     var teapotSlider = document.getElementById("teapotTranslationY");
    //     var teapotOutput = document.getElementById("teapotTranslationValueY");
    //     var plantSlider = document.getElementById("plantTranslationY");
    //     var plantOutput = document.getElementById("plantTranslationValueY");
    //     var kangarooSlider = document.getElementById("kangarooRange");
    //     var kangarooOutput = document.getElementById("kangarooValue");
    //     teapotOutput.innerHTML = teapotSlider.value;
    //     teapotSlider.oninput = function() {
    //     teapotOutput.innerHTML = this.value;
    //     }
    //     plantOutput.innerHTML = plantSlider.value;
    //     plantSlider.oninput = function() {
    //     plantOutput.innerHTML = this.value;
    //     }
    //     kangarooOutput.innerHTML = kangarooSlider.value;
    //     kangarooSlider.oninput = function() {
    //     kangarooOutput.innerHTML = this.value;
    //     }
    // }
    // function sliderNumberZ(){
    //     var teapotSlider = document.getElementById("teapotTranslationZ");
    //     var teapotOutput = document.getElementById("teapotTranslationValueZ");
    //     var plantSlider = document.getElementById("plantTranslationZ");
    //     var plantOutput = document.getElementById("plantTranslationValueZ");
    //     var kangarooSlider = document.getElementById("kangarooRange");
    //     var kangarooOutput = document.getElementById("kangarooValue");
    //     teapotOutput.innerHTML = teapotSlider.value;
    //     teapotSlider.oninput = function() {
    //     teapotOutput.innerHTML = this.value;
    //     }
    //     plantOutput.innerHTML = plantSlider.value;
    //     plantSlider.oninput = function() {
    //     plantOutput.innerHTML = this.value;
    //     }
    //     kangarooOutput.innerHTML = kangarooSlider.value;
    //     kangarooSlider.oninput = function() {
    //     kangarooOutput.innerHTML = this.value;
    //     }
    // }
    // function sliderNumber(){
    //     sliderNumberX();
    //     sliderNumberY();
    //     sliderNumberZ();
    // }
    
