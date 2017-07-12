document.addEventListener("DOMContentLoaded", function() {

  $.ajax({
    url:"https://bb-election-api.herokuapp.com/",
    method:"GET",
    dataType:"JSON"
  })
  .done(function(data){

    for(var i = 0; i < data.candidates.length; i++){
      var candidates = document.createTextNode(data.candidates[i].name + "  :  "  + data.candidates[i].votes);
      var li = document.createElement("li");
      li.append(candidates);
      var election = document.querySelector("#election");
      election.append(li);
      var form = document.createElement("form");
      form.setAttribute("method", "POST");
      form.setAttribute("action", "https://bb-election-api.herokuapp.com/vote");
      li.append(form);

      var button = document.createElement("button");
      button.setAttribute("type", "submit");
      var buttonText = document.createTextNode("vote");
      button.append(buttonText);
      form.append(button);

      var input = document.createElement("input");

        input.setAttribute("type", "hidden");
        input.setAttribute("value", data.candidates[i].name);
        input.setAttribute("name", "name");
        form.append(input);

    }
  })

  function submit(e){
    e.preventDefault();
    var vote = $(this).children('input[type=hidden]').val()
      console.log(vote);
      $.ajax({
        url: 'https://bb-election-api.herokuapp.com/vote?id=' + idVal,
        method: 'POST',
        dataType: 'JSON'
      })
      .done(function(response) {
        console.log('you voted');
      }).fail(function() {
        console.log('not complete');
      })

  }


});
