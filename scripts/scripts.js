

'use strict';



  // TUTAJ UMIESCIC HANDLERY POSZCZEGOLNYCH OBIEKTÓW PO ICH KLIKNIECIU
    /*
    var listOfObjects = ["mountains", "road", "paka"];
    var bubbleText = ["ale góry no no", "piękna droga ho ho", "niemiec płakał jak sprzedawał"];
    
    var clickTarget;
    
     
    $("#mountains").click(function(){
        
        alert("góry!");
        clickTarget = listOfObjects[0];
    }); 
    
    
     $("#1-plan").click(function(){
        
        alert("droga!");
         clickTarget = listOfObjects[1];
    }); 
  
     $("#paka").click(function(){
        
        alert("paka!");
        clickTarget = listOfObjects[2];
    }); 
    
    
    //svg-main - powinno byc glownym wylacznikiem/wlacznikiem animacji i dopiero potem brac pod uwage CO zostalo klikniete
  // lub zrobic funckje stop everything po kliknieciu na konretną rzecz
    //najpierw poza funkcją svg.click umiescić logikę odpowiadającą za klikanie posszczególnych obiektów
 
    
        var svg = $('#svg-main'),
        bubble = $('.bubble'),
        mountains = $("#mountains"),
        classBig = $(".big").css("animation-play-state");
       
    
    
    
    // FUNKCJA PRZYGOTOWUJĄCA DYMEK
    
    function GetBubble(clickTarget){
        bubble.toggle();
        
        var i = listOfObjects.indexOf(clickTarget);
        bubble.append("<p>" + bubbleText[i] + "</p>");
    };
    
    
    
    
    // FUNKCJA ZATRZYMUJĄCA ANIMACJE
    svg.click(function(){ GetBubble(clickTarget);
                         
                         
                         $("#paka").toggleClass("vibrate-1");
                         if ($(".big").css("animation-play-state") === "paused") {
                               //console.log("jest pauza");
                               $(".big").css("animation-play-state", "running");
                                bubble.empty();
                           } else {
                               console.log("nie pauza");
                               var classBig2 = $(".big").css("animation-play-state");
                              // console.log(classBig2);
                               $(".big").css("animation-play-state", "paused");
                              // console.log(mountains);
                           }
                        });
    */
    
    //próba upakowania tego wszystkiego w moduł

// var theApp = (function() {

    var animationModule = (function() {
        var listOfObjects = ["mountains", "road", "paka"];
        var bubbleText = "Kliknij coś co się porusza";
        var svgMain = $('#svg-main');
        var bubble = $('.bubble');
        var bubbleContent = $(".bubble-content");
        var mountains = $("#mountains");
        var trees = $('#trees');
        var road = $("#road");
        var classRotate = $(".rotate").css("animation-play-state");
        var van = $("#van");
        var grass = $("#grass");
        
        var _getClickTarget = function() {
            var clickTarget;
     
            mountains.click(function(event){
                        clickTarget = $(this).attr("id");
                        _bubbleTextGen(clickTarget);
                    });
            trees.click(function(event){
                        clickTarget = $(this).attr("id");
                        _bubbleTextGen(clickTarget);
                    });
            road.click(function(event){
                        clickTarget = $(this).attr("id");
                        _bubbleTextGen(clickTarget);
                    });
            van.click(function(event){
                        clickTarget = $(this).attr("id");
                        _bubbleTextGen(clickTarget);
                    });
            grass.click(function(event){
                        clickTarget = $(this).attr("id");
                        _bubbleTextGen(clickTarget);
                    });
            svgMain.click(function(event){
                        clickTarget = "notme";
                       _bubbleTextGen(clickTarget);
                   });
        };
        
        var _bubbleTextGen = function(eventTarget) {
            switch (eventTarget) {
                case "mountains":
                    bubbleText = "tak jest góry som tutej";
                    break;
                case "trees":
                    bubbleText = "kocham drzewno";
                    break;
                case "road":
                    bubbleText = "In Peru, where the term Combi was similarly adopted, the term Combi Asesina (Murdering Combi) is often used for buses of similar size, because of the notorious recklessness and competition of bus drivers in Lima to get passengers.";
                    break;
                case "van":
                    bubbleText = "wan van łao!!";
                    break;
                case "grass":
                    bubbleText = "trawa mmm";
                    break;
                case "notme":
                    bubbleText = "nottie";
                    break;
                default:
                    bubbleText = "Kliknij coś co się porusza";
            }
        };
 
        
        var _getBubble = function() {
            bubble.toggle();
            bubbleContent.append("<p>" + bubbleText + "</p>"); 
        };
        
        var _pauseAnimation = function() {
            van.toggleClass("vibrate-1");
            
                         if ($(".rotate").css("animation-play-state") === "paused") {
                                $(".rotate").css("animation-play-state", "running");
                                bubble.toggle();
                                bubbleContent.empty();
                           } else {
                               $(".rotate").css("animation-play-state", "paused");
                               _getBubble();
                           }
        };
            
        var _bindEvents = function() {
            svgMain.click(_pauseAnimation);
        };
        
        var _displayVar = function() {
            console.log(_getClickTarget);
        };
        
        var _init = function() {
            _bindEvents();
            _getClickTarget();  
        };
        
        return {init : _init,
               displayVar : _displayVar
               }
        }());
                           
       animationModule.init();

                           
                           
  