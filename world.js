/*$(document).ready(function(){

    var lookbtn=$('#lookup');
    var result=$('#result');


    //var url="world.php";
    //httpR.onreadystatechange=searchC();
    //httpR.open('POST', url);
    //httpR.send();

    lookbtn.on('click', function (){//searchC(){
        var httpR=new XMLHttpRequest();
        if (httpR.readyState===XMLHttpRequest.DONE){
            if(httpR.status===200){
                var resp=httpR.responseText;
                result.innerHTML=resp;
                console.log(resp);
            }
        }
    });

$(document).ready(function() {
  var lookBtn = $('#lookup');
  var result = $('#result');

  lookBtn.on('click', function(elem) {
      elem.preventDefault();
    $.ajax('world.php', {
      method: 'POST'
    }).done(function(response) {
      result.html(response);
    }).fail(function() {
      alert('There was a problem with the request.');
    });
  });
});


    /*$.ajax("world.php", {
        type:"POST",
        data:"action="+resultv;
        
    }).done(fucntion(resp){
        $('#result').html(resp);
    });*/

//})

window.onload = function() {

    var lookBtn = document.querySelector('#lookup');
    var httpRequest;
  
    lookBtn.addEventListener('click', function(element) {
      element.preventDefault();
        console.log(document.querySelector('#country').value);
  
      httpRequest = new XMLHttpRequest();
  
      // GET Request
      var url = "world.php";
      httpRequest.onreadystatechange = loadResult;
      httpRequest.open('GET', url);
      httpRequest.send();
    });
  
    function loadResult() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var response = httpRequest.responseText;
          var result = document.querySelector('#result');
          result.innerHTML = response;
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
  
  }
  