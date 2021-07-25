

      (function () {
       
        emailjs.init("user_gCwhW1iicCisFZ78KBrQP");
      })();

     

      function validate() {
        let loader = document.querySelector(".loader");
        let name = document.querySelector(".username");
        let email = document.querySelector(".email");
        let msg = document.querySelector(".message");
        let btn = document.querySelector(".submit");

        btn.addEventListener("click", (e) => {
          e.preventDefault();
          if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
          } else {
            loader.style.display = "flex";
            sendmail(name.value, email.value, msg.value);
            success();
            loader.style.display = "none";
          }
        });
      }
      validate();

      function sendmail(name, email, msg) {
        emailjs.send("service_op6iq7o", "template_eya98u4", {
          to_name:  name,
          from_name: email,
          message: msg,
        });
      }

      function emptyerror() {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Message non Envoyé",
        });
      }

      function error() {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }

      function success() {
        Swal.fire({
          icon: "success",
          title: "Valider...",
          text: "Message Envoyé",
        });
      }
   