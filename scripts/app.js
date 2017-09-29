$(function() {
  var $text = $('#emails');
  var $btn  = $('#btn');
  var $taken = $('#taken');
  var $available = $('#available');
  
  // var reqUrl = 'https://accounts.google.com/InputValidator?resource=SignUp&service=mail';
  // var url = 'http://www.gmailavailability.com/_validate_email?email=';
  
  var data = {"input01":{"Input":"GmailAddress","GmailAddress":"anazard","FirstName":"","LastName":""},"Locale":"en"};
  
  
  $btn.click(function() {
    $('li').remove();
    var emails = $text.val().split('\n');
    emails.forEach(function(item) {
      if (item != '') {
        $.ajax({
          method: 'POST',
          url: 'https://techstroke.com/email-availability-checker/',
          data: {emailid: item + '@gmail.com'}
        }).done(function(response) {
          var newItem = '<li>' + item + '</li>';
          if (response.includes('Not Available')) {
            $taken.append(newItem);
          } else {
            $available.append(newItem);
          }
        });
      }
    });
  });
});