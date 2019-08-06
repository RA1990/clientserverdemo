$(document).ready(startApp);

function startApp(){
getData();
}

function getData(){
  var settings = {
    url:'http://localhost:3001/names',
    method:'GET',
    dataType:'json',
    success:handleDataFromServer,
  }
$.ajax(settings);
}


function handleDataFromServer(response){
  console.log(response);
  for(var arrayIndex=0;arrayIndex<response.length;arrayIndex++){
    var nameDiv = $('<div>').text(response[arrayIndex].name);
    $('body').append(nameDiv);
  }
}
