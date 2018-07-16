
function myFunction(){


let email = document.querySelector("#email").value;
//console.log(email);

  if(!email || email === "")
  {
    alert("no value supplied");
    return;
  }
  let queryURL = "https://localhost:3000/"+email;
//alert(queryURL);
/*
  fetch(queryURL).then((response) => {
    if (response.ok) {
      alert("res");
      return response.json();
    } else {
      alert("thro");
      throw new Error('Something went wrong');
    }
  })
  .then((responseJson) => {
    alert("call");
          displayEmailResult(result);
    // Do something with the response
  })
  .catch((error) => {
    alert("err");
    console.log(error)
  });

*/

  fetch(queryURL)
    .then(function(response){
      return response.json();
    })
    .then(function (result){
      displayEmailResult(result);
    })
    .catch(function(error){
      alert("Error Occured");
      //displayEmailResult(result);
    });

}
function displayEmailResult(result){

  let msgdiv = document.querySelector("#message");
  let rsdiv = document.querySelector("#result");

  if(result.message == "Your email is secure"){
    rsdiv.innerHTML = "";
   alert("SECURE");
    msgdiv.innerHTML = `<div class="alert-success alert-dismissible">\
                        <button type="button" class="close"data-dismiss="alert" aria-label="close"><spam aria-hidden="true">&time;</spam></button>\
                        <strong> Good News...!</strong> sjsxsxhsxjsjxs  xjn j
                        </div>`



  }
else {
  msgdiv.innerHTML = `<div class="alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="close"><spam aria-hidden="true">&times;</spam></button>\
                        <strong>Hacked...!</strong> xcjxcxjc jjjjjjjjjjjjjjjjj
                        </div>`
  rsdiv.innerHTML = "";
  var i = 0;
    alert("else");
  result.forEach(function(currentResult){
  let hackedHTMLDiv = `<div class="jumbotron" id="id_${i}">\
                            <div class="row">
                              <div class="col-xs-12 col-sm-4">
                                <h5>${currentResult.TiTle} : <small> <a target="_blank" href= ${currentResult.Domain} >website </a></h5>
                                <h5>Breach Date : <small> ${currentResult.Breachdate}</small></h5>
                                <h5> Added : <small> ${currentResult.Addeddate}</small></h5>
                                <h5> Modified : <small> ${currentResult.Modifieddate}</small></h5>
                              </div>
                              <div class="col-xs-12 col-sm-8">
                                  <h5>${currentResult.Name}</h5>
                                  <p>${currentResult.data}</h5>
                              </div>
                              <div class="col-xs-12 col-sm-8" id="data_id_${i}">
                                  <h5>Compromised data</h5>
                              </div>
                            </div>
                          </div>`;

    $('#result').append(hackedHTMLDiv);
    currentResult.DataClasses.foreach(function(currentDataClass){
      $(`#data_id_$(i)`).append(`<span class="label label-danger danger-label">${currentDataClass}</spam>`);
    });
i++;
  });
console.log(result);
}

}
