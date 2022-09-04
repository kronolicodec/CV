        //Get the button:
        mybutton = document.getElementById("myBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        $(window).on('load', function() {
            $('.navbar-nav li a').click(function() {
              
                  $('.navbar-nav li a').removeClass('active');
                  $(this).addClass('active'); 
                  $('.main div').removeClass('active');
                  $('.main .'+ $(this).attr('id')).addClass('active');
              
            }); 
        }); 
        const btn = document.getElementById('button');

        document.getElementById('form')
        .addEventListener('submit', function(event) {
          event.preventDefault();

          btn.value = 'Sending...';

          const serviceID = 'default_service';
          const templateID = 'template_iufb2vr';

          emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
              btn.value = 'Send Email';
              alert('Sent!');
            }, (err) => {
              btn.value = 'Send Email';
              alert(JSON.stringify(err));
            });
        });
      
        