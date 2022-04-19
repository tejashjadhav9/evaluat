$(document).ready(function () {
  $("#myform").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      fname: {
        required: true,
        minlength: 3,
        lettersonly: true,
      },
      lname: {
        required: true,
        minlength: 3,
        lettersonly: true,
      },
      age: {
        required: true,
        number: true,
        min: 18
      },
      email: {
        required: true,
        email: true
      }

    },

    messages: {
      fname: {
        minlength: "Name should be at least 3 characters"
      },
      age: {
        required: "Please enter your age",
        number: "Please enter your age as a numerical value",
        min: "You must be at least 18 years old"
      },
      email: {
        email: "The email should be in the format: abc@domain.tld"
      }
    }
  });
});

jQuery.validator.addMethod("lettersonly", function (value, element) {
  return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please");
//validator function


$(function () {
  $("#nxtdaypick").click(function () {
    if ($(this).is(":checked")) {
      $(".maindisable").removeAttr("disabled");
      $(".maindisable").focus();
    } else {
      $(".maindisable").attr("disabled", "disabled");
    }
  });
});



$(function () {
  $("#Sunday").click(function () {
    if ($(this).is(":checked")) {
      $("#SundayDrpdown").removeAttr("disabled");
      $("#SundayDrpdown").focus();
    } else {
      $("#SundayDrpdown").attr("disabled", "disabled");
    }
  });
});

$(function () {
  $("#Monday").click(function () {
    if ($(this).is(":checked")) {
      $("#MondayDrpdown").removeAttr("disabled");
      $("#MondayDrpdown").focus();
    } else {
      $("#MondayDrpdown").attr("disabled", "disabled");
    }
  });
});

$(function () {
  $("#Tuesday").click(function () {
    if ($(this).is(":checked")) {
      $("#TuesdayDrpdown").removeAttr("disabled");
      $("#TuesdayDrpdown").focus();
    } else {
      $("#TuesdayDrpdown").attr("disabled", "disabled");
    }
  });
});

$(function () {
  $("#Wednesday").click(function () {
    if ($(this).is(":checked")) {
      $("#WednesdayDrpdown").removeAttr("disabled");
      $("#WednesdayDrpdown").focus();
    } else {
      $("#WednesdayDrpdown").attr("disabled", "disabled");
    }
  });
});

$(function () {
  $("#Thursday").click(function () {
    if ($(this).is(":checked")) {
      $("#ThursdayDrpdown").removeAttr("disabled");
      $("#ThursdayDrpdown").focus();
    } else {
      $("#ThursdayDrpdown").attr("disabled", "disabled");
    }
  });
});

$(function () {
  $("#Friday").click(function () {
    if ($(this).is(":checked")) {
      $("#FridayDrpdown").removeAttr("disabled");
      $("#FridayDrpdown").focus();
    } else {
      $("#FridayDrpdown").attr("disabled", "disabled");
    }
  });
});

$(function () {
  $("#Saturday").click(function () {
    if ($(this).is(":checked")) {
      $("#SaturdayDrpdown").removeAttr("disabled");
      $("#SatudayDrpdown").focus();
    } else {
      $("#SaturdayDrpdown").attr("disabled", "disabled");
    }
  });
});

function passvalue()//function to
{

  //value get from elements
  //credintials
  var firstname = document.getElementById("fname").value;
  var lastname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  //maincheckbox
  var maincheck = document.getElementById("nxtdaypick").value
  //checkbox


  // var markedcheckbox = document.getElementsByClassName('maindisable');
  //   for (let checkbox of markedcheckbox) {
  //     if (checkbox.checked) {
  //       val=" "
  //       var val =document.getElementsByClassName('maindisable').value;
  //     }
  //   }

  var mon = document.getElementById("Monday").value
  var tue = document.getElementById("Tuesday").value
  var wed = document.getElementById("Wednesday").value
  var thur = document.getElementById("Thursday").value
  var fri = document.getElementById("Friday").value
  var sat = document.getElementById("Saturday").value
  var sun = document.getElementById("Sunday").value
  //dropdown
  var mond = document.getElementById("MondayDrpdown").value
  var tued = document.getElementById("TuesdayDrpdown").value
  var weddrop = document.getElementById("WednesdayDrpdown").value
  var thurdrop = document.getElementById("ThursdayDrpdown").value
  var fridrop = document.getElementById("FridayDrpdown").value
  var satdrop = document.getElementById("SaturdayDrpdown").value
  var sundrop = document.getElementById("SundayDrpdown").value

  //saved to local storage
  //dropdown

  localStorage.setItem("ddmond", mond);
  localStorage.setItem("ddtues", tued);
  localStorage.setItem("ddwednes", weddrop);
  localStorage.setItem("ddthurs", thurdrop);
  localStorage.setItem("ddfrid", fridrop);
  localStorage.setItem("ddsatur", satdrop);
  localStorage.setItem("ddsund", sundrop);


  //maincheckbox
  localStorage.setItem("maincheckbox", maincheck);
  //checkbox
  localStorage.setItem("mond", mon);
  localStorage.setItem("tues", tue);
  localStorage.setItem("wednes", wed);
  localStorage.setItem("thurs", thur);
  localStorage.setItem("frid", fri);
  localStorage.setItem("satur", sat);
  localStorage.setItem("sund", sun);
  //credintials
  localStorage.setItem("firstName", firstname);
  localStorage.setItem("lastName", lastname);
  localStorage.setItem("emaill", email);
  localStorage.setItem("agee", age);
}