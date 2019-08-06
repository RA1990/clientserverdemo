$(document).ready(startApp);

function startApp(){
getData();
}

function getData(){
  var settings = {
    url:'../server/favfoodage.json',
    method:'GET',
    dataType:'json',
    success:handleDataFromServer,
  }
$.ajax(settings);
}


function handleDataFromServer(response){
  console.log(response);
}
