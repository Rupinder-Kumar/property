document.addEventListener('DOMContentLoaded', function() {
  const verifyOtp = document.getElementById("verify-otp");
  const requestOtpBtn = document.getElementById("request-otp");
  const signIn = document.getElementById("sign-in");
  const backBtns = document.getElementsByClassName("fa-chevron-left");

  if (verifyOtp && requestOtpBtn && signIn && backBtns) {
    requestOtpBtn.addEventListener("click", function() {
       signIn.classList.remove("active");
      verifyOtp.classList.add("active");
    });

    for (let i = 0; i < backBtns.length; i++) {
      backBtns[i].addEventListener("click", function() {
		    signIn.classList.add("active");
      verifyOtp.classList.remove("active");
      });
    }
  }
});
