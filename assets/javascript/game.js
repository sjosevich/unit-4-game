$(document).ready(function(){
    
/* Global Variables  
===========================================================================*/
 $("#textBox").hide();
 var min = 19;
 var max = 120; 
 var minCrys = 1;
 var maxCrys = 12;    
 var showRanNum = $("#randomNum"); 
 var obj = $(".image");
 var myimgId;   
 var arr = $.makeArray( obj );
 var resultSum=0; 
 var initNumber;  
 var wins=0;  
 var losses=0;
 //var randomNumArray=[];    
 //testing    
 //console.log(arr[0].id);   
 
    
/* Functions  and methods
===========================================================================*/  
    
 //Makes the info swing        
 $("#toggle").click(function(){
    $("#textBox").toggle(2000,"swing");
 });
    
 $(".image").click(function(){
    myimgId= $(this).attr("id");
    myimgId = myimgId.match(/\d/g);
   // console.log("el numero final es: " + myimgId);
    if  (resultSum <= initNumber){
        resultSum += imageRandomValue[myimgId-1]; 
        document.getElementById('totalNumScore').innerHTML = resultSum;
        console.log(resultSum); 
    }
     
    if  (resultSum === initNumber){
        wins += 1;
        document.getElementById('wins').innerHTML = "wins: "+ wins;
        document.getElementById('losses').innerHTML = "losses: " + losses;
        createImageObjects();
        initNumber = randomIntFromInterval(min,max)
        showRanNum.html("<h1 class = 'setup'>" + initNumber + "</h1>");  
        document.getElementById('totalNumScore').innerHTML= 0;
        resultSum = 0;
    }
     
    if  (resultSum > initNumber){
        
        losses += 1;
        document.getElementById('wins').innerHTML = "wins: "+wins;
        document.getElementById('losses').innerHTML = "losses: " + losses;
        createImageObjects();
        initNumber = randomIntFromInterval(min,max)
        showRanNum.html("<h1 class = 'setup'>" + initNumber + "</h1>");  
        document.getElementById('totalNumScore').innerHTML= 0;
        resultSum = 0;
    } 
    
 });
      
    
    
     
    
 //This function generates a random value between 19 and 120      
 function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
  
 }   
 
//This function generates a random value between 1-12
 function randomIntForCrystals(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
  
 }   
    
 
//This function is to where a define my object   
function imageRandomValue(randomValue) {
  
  this.randomValue = randomValue;
  
}  
 //This function is where a create my objects and I assign to each of them a random value between 1-12   
function createImageObjects()  {
   for (var i=1; i<5; i++){
       var imagesValues = new imageRandomValue(randomIntForCrystals(minCrys, maxCrys) ); 
        imageRandomValue[i-1]=imagesValues.randomValue;
        console.log(imagesValues.randomValue);
        
    } 
}  

   
/* Main 
===========================================================================*/     
  
    initNumber = randomIntFromInterval(min,max)
    showRanNum.html("<h1 class = 'setup'>" + initNumber + "</h1>"); 
    //randomIntForCrystals(minCrys, maxCrys);
    
    //console.log(initNumber)
   
    createImageObjects();

    
                 
});