$(document).ready(function() {
  //associar o evento de click ao botao
  $('#btn_tweet').click( function() {
    $('#texto_tweet').val();

    if($('#texto_tweet').val().length > 0 ){

      $.ajax({
        url: 'inclui_tweet.php',
        method: 'post',
        data: $('#form_tweet').serialize(),
        success: function(data) {
          $('#texto_tweet').val('');
          atualizaTweet();
        }
      });
    }
  });
  function atualizaTweet() {
    //carregar os tweets
    $.ajax({
      url: 'get_tweet.php',
      success: function(data) {
        $('#tweets').html(data);     
      }
    });
  }
  atualizaTweet();
});