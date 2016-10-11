$(function() {  
    window.setInterval(function() {
        $("#energy-hive, #drone-footage").slideToggle("fast");
    }, 138000);

});

//     function toNetMetering(i) {          
//     setTimeout(function () {     
//         $("#drone-footage").attr('src', "netMetering.mp4");
//             if (--i) toKtj(i); 
//     }, 240000)
//     }

//     function toKtj (i) {          
//     setTimeout(function () {   
//         $("#drone-footage").attr('src', "ktj.mp4");               
//         if (--i) toVideo(i);
//     }, 240000)
//     };  

//     function toVideo(i) {
//         setTimeout(function() {
//             $("#drone-footage").attr('src', "video.mp4");
//         if (--i) toNetMetering(i); 
//         console.log(i);   
//         }, 240000);
//     }

//     toNetMetering(10000);    

