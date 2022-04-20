
function sliderNumber(sliderId,outputId){
  var slider=document.getElementById(sliderId);
  var output=document.getElementById(outputId);
  output.innerHTML = slider.value;
}
