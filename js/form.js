
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
       }
       else {
       $(".other").hide()
       }
   });


/* 3. T-Shirt Section:
      - For color menu, only display the color options that match the design selected in the design menu
      - When a new theme is selected from the design menu, 'color' field and drop down menu is updated
*/

function showtextbox() {
     let select_status = $('#design').val();
     /* if select puns or heart from select box, show correct color options */
 if (select_status == 'js puns') {
        $('#color, #puns').show();
     } else {
        $('#puns').hide();
     }
 if (select_status == 'heart js') {
        $('#heart').show();
     } else {
        $('#heart').hide();
     }
 if (select_status == 'select theme') {
        $('#color').hide();
     } else {

     }
 }


/* 4. Register for Activities:
      - Some events overlap in time. If user selects a workshop, disable the checkbox and visually indicate workshop in the competing time slot isn't available
      - When user unchecks an activity, make sure tha tcompeting activities are no longer disabled
      - As a user selects activities, total should update according to selections
*/


/* 5. Payment Info:
      - Display payment options based on the payment option chosen in the menu
      - Credit card option should be selected by default. Display the #credit-card div and hide 'PayPal' and 'bitcoin' Info
      - When a user selects paypal or bitcoin, alternate payment forms should be hidden
      - Hide 'select payment method' from drop down menu leaving payment options only
*/


/* 6. Form Validation: (RegEx)
      - Setup RegEx validations on name (not empty), email (proper formatting), checkbox (at least one seleciton), CC (13-16 digits, zip 5 digits, CVV 3 digits)
      - Validation on payment for CC only; not paypal or bitcoin
*/


/* 7. Validation Messages:
      - Provide indication when there's a validation error on the above fields. Should not be visible by default.
*/


/* 8. Form works without JavaScript:
      - User should have access to all form fields and payment info if JS isn't working
*/
