$(document).ready(function() {
  //verificar se os campos de usuario e senha foram devidamente preenchidos
  $('#btn_login').click(function() {
   var campo_vazio = false;

   if($('#campo_usuario').val() == ''){
     $('#campo_usuario').css({'border-color': '#A94442'});
     campo_vazio = true;
   } else {
     $('#campo_usuario').css({'border-color': '#ccc'});
   }
   if($('#campo_senha').val() == ''){
     $('#campo_senha').css({'border-color': '#A94442'});
     campo_vazio = true;
   } else{
     $('#campo_senha').css({'border-color': '#ccc'});
   }
   //impedindo que formulario seja enviado, caso nao seja preenchido
   if(campo_vazio) return false;
  });
});