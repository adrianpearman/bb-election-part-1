$(document).ready(function() {

  // Imagination!
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json',
  }).done(function(responseData){
      for (var i = 0; i < responseData.candidates.length; i++) {
          candidate = responseData.candidates[i];

          var candidateInformation =  (' has recieved ' + candidate.votes + 'votes.');
          var strongTag = $('<strong>').html(candidate.name);
          var liTag = $('<li>').append(strongTag).append(candidateInformation);
          $('#candidateContainer').append(liTag);
        }
  });
});
