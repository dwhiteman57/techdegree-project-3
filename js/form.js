
/*----------USING jQuery FOR ALL PROGRAMMING----------*/

//1. PAGE LOADING:

//Set focus on the first text field
$("#name").focus();

//Hide 'other field'.
$(".other").hide();

/* 2. Job role section:
      - Include a text field that will reveal when 'other' is selected from job role drop down.
      - Give the field an ID of 'other-title' and add placeholder text 'Your Job Role'
      - Add 'other' input directly into the HTML.
      - Added class selector in HTML to target 'other title and input field' at once
*/

$('#title').change(function() {
       if ($(this).val() === "other") {
       $(".other").show()
       } else {
       $(".other").hide()
       }
   });


/* 3. T-Shirt Section:
      - Disply colors consistent with the design selection and hide colors that are not consistent with design selection.
*/

$('#colors-js-puns').hide();

$(document).ready(function() {
    $("#design").change(function(event) {
        tshirt();
    });
});

function tshirt() {
  let selPuns = $('#design option[value="js puns"]');
  let selHeart = $('#design option[value="heart js"]');
  let selTheme = $('#design option[value="select theme"]');
  if (selPuns.is(':selected')) {
    $('#colors-js-puns').show();
    $("#puns").show();
    $("#heart").hide();
  }
  if (selHeart.is(':selected')) {
    $('#colors-js-puns').show();
    $("#heart").show();
    $("#puns").hide();
  }
  if (selTheme.is(':selected')) {
    $('#colors-js-puns').hide();
  }
}


/* 4. Register for Activities:
      - Some events overlap in time. If user selects a workshop, disable the checkbox and visually indicate workshop in the competing time slot isn't available
      - When user unchecks an activity, make sure tha tcompeting activities are no longer disabled
      - As a user selects activities, total should update according to selections
*/

/*----------COST TOTAL FUNCTION----------*/

$(document).ready(function() {
    $("input").click(function(event) {
        updateTotal();
    });
});

function updateTotal() {
    let total = 0;
    $("#reg-activity input:checked").each(function() {
        total += parseFloat(this.value);
    });
    $('#total').val("$" + total.toFixed(2));
}


/*----------ELIMINATING COMPETING EVENTS FUNCTION----------*/


$(document).ready(function() {
    $("input").click(function(event) {
        activityReg();
    });
});

function activityReg() {
  let frame = $('#reg-activity input[name="js-frameworks"]').is(":checked");
  let exp = $('#reg-activity input[name="express"]').is(":checked");
  let libs = $('#reg-activity input[name="js-libs"]').is(":checked");
  let nodeJs = $('#reg-activity input[name="node"]').is(":checked");
  if (frame == true) {
      $("#exp").css("color", "grey");
      $("input.exps").prop("disabled", true);
    } else {
      $("#exp").css("color", "#000");
      $("input.exps").prop("disabled", false);
    }
  if (exp == true) {
      $("#js-frame").css("color", "grey");
      $("input.frame").prop("disabled", true);
    } else {
      $("#js-frame").css("color", "#000");
      $("input.frame").prop("disabled", false);
    }
  if (libs == true) {
      $("#nodejs").css("color", "grey");
      $("input.njs").prop("disabled", true);
    } else {
      $("#nodejs").css("color", "#000");
      $("input.njs").prop("disabled", false);
    }
  if (nodeJs == true) {
      $("#js-libs").css("color", "grey");
      $("input.libs").prop("disabled", true);
    } else {
      $("#js-libs").css("color", "#000");
      $("input.libs").prop("disabled", false);
    }
}


/* 5. Payment Info:
      - Display payment options based on the payment option chosen in the menu
      - Credit card option should be selected by default. Display the #credit-card div and hide 'PayPal' and 'bitcoin' Info
      - When a user selects paypal or bitcoin, alternate payment forms should be hidden
      - Hide 'select payment method' from drop down menu leaving payment options only
*/

// HIDE PayPal AND Bitcoin INSTRUCTIONS ON PAGE LOAD
$(".instructions").hide();

// HIDE PAMENT SELECT METHOD ON PAGE LOAD
$('#payment option[value="select_method"]').remove();

// FUNCTION FOR SELECTING PAYMENT METHOD & HIDING ALTERNATE PAYMENT FORMS
function paymentSelect() {
    let select_status = $('#payment').val();
    if (select_status == 'paypal') {
          $('.paypal').show();
          $('#credit-card, .bitcoin').hide();
       }
    if (select_status == 'bitcoin') {
          $('.bitcoin').show();
          $('#credit-card, .paypal').hide();
       }
    if (select_status == 'credit card') {
         $('#credit-card').show();
         $('.instructions').hide();
      }
}


/* 6. Form Tool Tips & Validation: (RegEx) */

//Declare Regular Expressions Variables:
const namePattern = /^[a-z]+[\s]?[a-z]+$/i;
const emailPattern = /^[^@]+@[^@.]+\.[a-z]+$/i;
const ccPattern = /^\d{13,16}$/;
const zipPattern = /^\d{5}$/;
const cvvPattern = /^\d{3}$/;


//Hide error/tool-tip flash messages by default
const nameFlash = $(".nameflsh ").hide();
const mailFlash = $(".mailflsh ").hide();
const actFlash = $(".act ").hide();
const ccFlash = $(".ccnum ").hide();
const zipFlash = $(".zip ").hide();
const cvvFlash = $(".cvv ").hide();

/*-----------TOOL TIP NOTIFICATIONS & VALIDATORS FUNCTION---------------*/

$(document).ready(function() {
  $('.submit-btn').click(function() {
        //Field value getters
        let nameInput = $('#name').val();
        let emailInput = $('#mail').val();
        let checkboxes = (!$("input:checkbox").is(":checked"));
        let ccInput = $('#cc-num').val();
        let zipInput = $('#zip').val();
        let cvvInput = $('#cvv').val();

        //Name field tool tip
        if (!namePattern.test(nameInput) ) {
            $("#name").css("border-color", "#FFBB00");
            nameFlash.slideDown().show(1000);
            }
        else if (namePattern.test(nameInput) ) {
            $("#name").css("border-color", "#c1deeb");
            nameFlash.slideUp().hide(1000);
            }

        //Email field tool tip
        if (!emailPattern.test(emailInput) ) {
            $("#mail").css("border-color", "#FFBB00");
            mailFlash.slideDown().show(1000);
            }
        else if (emailPattern.test(emailInput) ) {
            $("#mail").css("border-color", "#c1deeb");
            mailFlash.slideUp().hide(1000);
            }

        //Activity field tool tip
        if (checkboxes == true) {
            $("input.submit-btn").prop("disabled", true);
            actFlash.slideDown().show(1000);
        } else {
            $("input.submit-btn").prop("disabled", true);
            actFlash.slideUp().hide(1000);
            }

        //Credit Card field tool tip
        if (!ccPattern.test(ccInput) ) {
            $("#cc-num").css("border-color", "#FFBB00");
            $(".col-3").css("margin-bottom", "82px"); //This is to correct the expiration date label from shifting out of position when help menu appears
            $("#marg-fix").css("margin-right", "88px"); //This is to correct the expiration date label from shifting out of position when help menu appears
            ccFlash.slideDown().show(1000);
            }
        else if (ccPattern.test(ccInput) ) {
            $("#cc-num").css("border-color", "#c1deeb");
            $(".col-3").css("margin-bottom", "1em");
            ccFlash.slideUp().hide(1000);
            }

        //Zip field tool tip
        if (!zipPattern.test(zipInput) ) {
            $("#zip").css("border-color", "#FFBB00");
            $("#marg-fix").css("margin-right", "88px"); //This is to correct the expiration date label from shifting out of position when help menu appears
            zipFlash.slideDown().show(1000);
            }
        else if (zipPattern.test(zipInput) ) {
            $("#zip").css("border-color", "#c1deeb");
            $("#marg-fix").css("margin-right", "88px"); //This is to correct the expiration date label from shifting out of position when help menu appears
            zipFlash.slideUp().hide(1000);
            }

        //CVV field field tool tip
        if (!cvvPattern.test(cvvInput) ) {
            $("#cvv").css("border-color", "#FFBB00");
            $(".col-3").css("margin-bottom", "1em"); //This is to correct the expiration date label from shifting out of position when help menu appears
            cvvFlash.slideDown().show(1000);
            }
        else if (cvvPattern.test(cvvInput) ) {
            $("#cvv").css("border-color", "#c1deeb");
            $(".col-3").css("margin-bottom", "1em"); //This is to correct the expiration date label from shifting out of position when help menu appears
            cvvFlash.slideUp().hide(1000);
            }
      });
});


/* 7. Form Validator:
      - Check that all fields match required input before submission can pass.
*/

$(document).ready(function() {
    $(".submit-btn").click(function() {
        let nameInput = $('#name').val();
        let emailInput = $('#mail').val();
        let checkboxes = (!$("input:checkbox").is(":checked"));
        let ccInput = $('#cc-num').val();
        let zipInput = $('#zip').val();
        let cvvInput = $('#cvv').val();
        let payInfo = $('#payment').val();
        let errors = false;

        if (nameInput == '' ||  !namePattern.test(nameInput)) {
            errors = true;
        }
        if (emailInput == '' ||  !emailPattern.test(emailInput)) {
            errors = true;
        }
        if (checkboxes == true) {
            errors = true;
        }
        if (payInfo == 'credit card') {
            if (ccInput == '' ||  !ccPattern.test(ccInput)) {
                errors = true;
            }
            if (zipInput == '' ||  !zipPattern.test(zipInput)) {
                errors = true;
            }
            if (cvvInput == '' ||  !cvvPattern.test(cvvInput)) {
                errors = true;
            }
        }
        if (errors == true) {
            alert('Please review required fields');
            return false;
        } else {
            return true;
        }
    });
});



/* 8. Form works without JavaScript:
      - User should have access to all form fields and payment info if JS isn't working
*/
