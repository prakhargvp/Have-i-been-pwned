
function myFunction(){

var email = document.querySelector("#email").value;
//console.log(email);

  if(!email || email === "")
  {
    alert("no value supplied");
    return;
  }
  var queryURL = "http://localhost:4000/"+email;


  fetch(queryURL)
    .then(function(response){
      return response.json();
    })
    .then(function (result){
      displayEmailResult(result);
    })
    .catch(function(error){
       //alert(queryURL);
      //displayEmailResult(result);
    });

}
function displayEmailResult(result){

  var msgdiv = document.querySelector("#message");
  var div = document.querySelector("#result");

  if(result.message == "Your email is secure"){
    div.innerHTML = "";
   alert("SECURE");
    msgdiv.innerHTML = `<div class="alert-success alert-dismissible">\
                        <button type="button" class="close"data-dismiss="alert" aria-label="close"><spam aria-hidden="true">&time;</spam></button>\
                        <strong> Good News - </strong> no pwnage found...!
                        </div>`



  }
else {
  msgdiv.innerHTML = `<div class="alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="close"><spam aria-hidden="true">&times;</spam></button>\
                        <strong>Oh no — Hacked...!</strong>
                        </div>`
  div.innerHTML = "";
  var i = 0;
  result.forEach(function(currentResult){
  var hackedHTMLDiv = `<div class="jumbotron" id="id_${i}">\
                            <div class="row">
                              <div class="col-xs-12 col-sm-4">
                                <h5>${currentResult.Title} : <small> <a target="_blank" href= ${currentResult.Domain} >website </a></h5>
                                <h5>Breach Date : <small> ${currentResult.BreachDate}</small></h5>
                                <h5> Added : <small> ${currentResult.AddeDate}</small></h5>
                                <h5> Modified : <small> ${currentResult.ModifiedDate}</small></h5>
                              </div>
                              <div class="col-xs-12 col-sm-8">
                                  <h5>${currentResult.Name}</h5>
                                  <p>${currentResult.Description}</h5>
                              </div>
                              <div class="col-xs-12 col-sm-8" id="data_id_${i}">
                                  <h5>Compromised data</h5>
                              </div>
                            </div>
                          </div>`;
alert(i);
    $('#result').append(hackedHTMLDiv);
    currentResult.DataClasses.foreach(function(currentDataClass){
      $(`#data_id_$(i)`).append(`<span class="label label-danger danger-label">${currentDataClass}</spam>`);
    });
i++;
  });
console.log(result);
}
}
