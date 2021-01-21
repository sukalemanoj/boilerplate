$(window).bind('load', function() {
  setTimeout(function() {
    $('.loader').fadeOut();
  }, 1000);
});
$(document).ready(function() {

  $("input[type='tel']").on('keypress', function(event) {
    var charCode = event.which;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  });


  $(".header--placeholder").height($("header").outerHeight());

  function formSumitfun() {
    firstName = $("#contactForm #name").val();
    mobileNumber = $("#contactForm #mobile").val();
    emailID = $("#contactForm #email").val();
    emailregax = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    mobileval = $("#mobile").length <= 10;
    valid = true;
    if (firstName == "" || firstName == null) {
      $("#contactForm #name_error").html("Please enter your Name").show();
      valid = false
    } else {
      $("#contactForm #name_error").html("").hide()
    }

    if (mobileNumber == "" || mobileNumber == null || mobileNumber.length < 10) {
      $("#contactForm #mobile_error").html("Please enter your Number or Number is invalid").show();
      valid = false
    } else {
      $("#contactForm #mobile_error").html("").hide()
    }
    if (emailID == "" || emailID == null || !emailregax.test(emailID)) {
      $("#contactForm #email_error").html("Please enter valid email id").show();
      valid = false
    } else {
      $("#contactForm #email_error").html("").hide()
    }
    if (valid) {
      window.location.href = "test.html";
    }
  }
  $('#form-submit').click(function() {
    formSumitfun();
    return false
  })
  $('#reset').click(function() {
    firstName = $("#contactForm #name").val("");
    mobileNumber = $("#contactForm #mobile").val("");
    emailID = $("#contactForm #email").val("");
  })
  // console.log(mobileNumber);

  $('.accordion-head').click(function() {
    $(".accordion-body").not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);
    $(".accordion-wrap").not($(this).closest(".accordion-wrap")).removeClass("open-accordion");
    $(this).closest(".accordion-wrap").toggleClass("open-accordion");
  });


}); //ready function ends

function mycal() {
    var amount = document.getElementById("amount");
    var apr = document.getElementById("apr");
    var years = document.getElementById("years");
    var payment = document.getElementById("payment");
    var total = document.getElementById("total");
    var totalinterest = document.getElementById("totalinterest");

    var principal = (amount.value);
    var interest = (apr.value) / 100 / 12;
    var payments = (years.value) * 12;

    var x = Math.pow(1 + interest, payments);
    var monthly = (principal*x*interest)/(x-1);

    if (isFinite(monthly)){
      payment.innerHTML = monthly.toFixed(2);
      total.innerHTML = (monthly * payments).toFixed(2);
      totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
     }
     else {
     payment.innerHTML = "";
     total.innerHTML = ""
     totalinterest.innerHTML = "";
     }
}
