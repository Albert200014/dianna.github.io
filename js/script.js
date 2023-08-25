$(document).ready(function (){
    const dateInput = document.getElementById('dateInput');

    // Open the calendar when clicking anywhere inside the date input field
    $('.search_block').on('click', function() {
        $(dateInput).focus();
    });

    // Listen to changes in the date input
    $(dateInput).on('change', function() {
        const selectedDate = this.value;

        // Check if a date is selected
        if (selectedDate !== "") {
            // Set a new placeholder text
            $(this).css("width", "100%");
            $(this).attr('placeholder', selectedDate);
        } else {
            // If no date is selected, set the default placeholder text
            $(this).css("width", ""); // Reset the width
            $(this).attr('placeholder', 'Search by date');
        }
    });

    //========================================= mobile nav open and close =========================================//
    let bool = true

    $(".menu_open_btn").click(function (){
        if(bool){
            $(".mobile_menu").slideDown(300)
            bool= false
        } else {
            $(".mobile_menu").slideUp(300)
            bool = true
        }
    })

    $(".open_broduct_btn").click(function (){
        if(bool){
            $(".product_list").slideDown(300)
            bool= false
        } else {
            $(".product_list").slideUp(300)
            bool = true
        }
    })
    //========================================= Popup index html =========================================//
    $(".btn_open_delete_block").click(function (){
        $(".open_and_close_container_delete").fadeIn()
    })

    $(".btn_close_delete_block").click(function (){
        $(".open_and_close_container_delete").fadeOut()
    })

    $(".delete_order_btn_block_cancelBtn").click(function (){
        $(".open_and_close_container_delete").fadeOut()
    })

    //========================================= Popup orders =========================================//
    $(".container_details_open_btn").click(function (){
        $(".container_details").fadeIn()
    })

    $(".btn_close_details_order").click(function (){
        $(".container_details").fadeOut()
    })


    //========================================= Popup  history =========================================//
    $(".container_details_open_btn_history").click(function (){
        $(".container_details_history").fadeIn()
    })

    $(".container_details_open_btn_return").click(function (){
        $(".open_and_close_container_return").fadeIn()
    })

    $(".btn_close_block").click(function (){
        $(".container_details_history").fadeOut()
    })

    $(".btn_close_block").click(function (){
        $(".open_and_close_container_return").fadeOut()
    })

    $(".container_details_open_btn_return").click(function (){
        $(".return_container").fadeIn()

    })


    //========================================= Popup  return =========================================//
    let x =""
    $(".radio").click(function (){
        x = $(this).attr("id")
    })

    $(".container_return_btn").click(function (){
        $(".return_container").fadeIn()
    })

    $(".btn_close_block_return").click(function (){
        $(".return_container").fadeOut()
    })

    $(".return_order_btn_block_returnSuccessful").click(function (){
        console.log(x)
        if(x != "") {
            $(".return_container_successful").fadeIn();
            $(".return_container").fadeOut();
        }
    })

    $(".btn_close_block").click(function (){
        $(".return_container").fadeOut()
    })

    $(".btn_close_block").click(function (){
        $(".return_container_successful").fadeOut()
    })

    //========================================= Popup  preferences =========================================//
    $(".btn_popUp1").click(function (){
        $(".preferences_popUp1").fadeIn(300)
    })

    $(".btn_popUp2").click(function (){
        $(".preferences_popUp2").fadeIn(300)
    })

    $(".btn_close_block").click(function (){
        $(".preferences_popUp1").fadeOut(300)
    })

    $(".btn_close_block").click(function (){
        $(".preferences_popUp2").fadeOut(300)
    })

    //========================================= Popup  information =========================================//
    $(".add_to_card").click(function (){
        $(".card_add_container").fadeIn(300)
    })

    $(".btn_close_block").click(function (){
        $(".card_add_container").fadeOut(300)
    })

    $(".add_new_card").click(function (){
        $(".card_add_container").fadeIn(300)
    })

    $(".btn_close_block").click(function (){
        $(".card_add_container").fadeOut(300)
    })

    $(".update_addres_book").click(function (){
        console.log("hjayer jan")
        $(".update_addres_book_block").fadeIn(300)
    })

    $(".btn_close_block").click(function (){
        $(".update_addres_book_block").fadeOut(300)
    })


    $(".add_new_book").click(function (){
        $(".add_new_bok").fadeIn(300)
    })

    $(".btn_close_block").click(function (){
        $(".add_new_bok").fadeOut(300)
    })



    //========================================= Popup  settings =========================================//
    $(".account_delete_btn").click(function (){
        $(".settings_delete_container").fadeIn(300)
    })

    $(".btn_close_block").click(function (){
        $(".settings_delete_container").fadeOut(300)
    })

    $(".cancel_delete_account").click(function (){
        $(".settings_delete_container").fadeOut(300)
    })



    // $(".btn_close_block").click(function (){
    //     $(".cancel").fadeOut(300)
    // })

    $(".change_password_btn").click(function (){
        $(".change_password_block").fadeIn(300)
    })

    $(".btn_close_block").click(function (){
        $(".change_password_block ").fadeOut(300)
    })


    $(".sign_in_btn").click(function(){
        $(".change_password_block").fadeOut(300)
        $(".helloo_name").fadeIn(300)
    
    })

    $(".btn_close_block").click(function (){
        $(".helloo_name ").fadeOut(300)
    })


    $(".btn_popUp2").click(function(){
       $(".change_info_container").fadeIn(300)
    })
    
    
    $(".btn_close_block").click(function(){
        $(".change_info_container").fadeOut(300)
     })


    //========================================= Popup  settings =========================================//
    $(".delete_btn_brands").click(function (){
       $(this).parent().css("display", "none")
    })

    //========================================= choose block settings =========================================//

    $(".btn_block_open_chosse_block_header").click(function (){

        if(bool){
            $(".choose_block_header").slideDown(300)
            bool= false
            $(".btn_block_open_chosse_block_header").css('transform', "rotate(180deg)")
        } else {
            $(".choose_block_header").slideUp(300)
            bool = true
            $(".btn_block_open_chosse_block_header").css('transform', "rotate(360deg)")
        }
    })

    $(".choose_block_header  button").click(function (){

        let text = $(this).html()

        $(".choose_block_title p ").html(text)
    })


    //========================================= choose block preferences =========================================//

    $(".btn_block_open_chosse_block_header1").click(function (){

        if(bool){
            $(".choose_block_header1").slideDown(300)
            bool= false
            $(".btn_block_open_chosse_block_header1").css('transform', "rotate(180deg)")
        } else {
            $(".choose_block_header1").slideUp(300)
            bool = true
            $(".btn_block_open_chosse_block_header1").css('transform', "rotate(360deg)")
        }
    })

    $(".choose_block_header1  button").click(function (){

        let text = $(this).html()

        $(".choose_block_title1 p ").html(text)
    })

    $(".btn_block_open_chosse_block_header2").click(function (){

        if(bool){
            $(".choose_block_header2").slideDown(300)
            bool= false
            $(".btn_block_open_chosse_block_header2").css('transform', "rotate(180deg)")
        } else {
            $(".choose_block_header2").slideUp(300)
            bool = true
            $(".btn_block_open_chosse_block_header2").css('transform', "rotate(360deg)")
        }
    })

    $(".choose_block_header2  button").click(function (){

        let text = $(this).html()

        $(".choose_block_title2 p ").html(text)
    })

    // ==================//
    $(".btn_block_open_chosse_block_header3").click(function (){

        if(bool){
            $(".choose_block_header3").slideDown(300)
            bool= false
            $(".btn_block_open_chosse_block_header3").css('transform', "rotate(180deg)")
        } else {
            $(".choose_block_header3").slideUp(300)
            bool = true
            $(".btn_block_open_chosse_block_header3").css('transform', "rotate(360deg)")
        }
    })

    $(".choose_block_header3  button").click(function (){

        let text = $(this).html()

        $(".choose_block_title3 p ").html(text)
    })

    $(".btn_block_open_chosse_block_header4").click(function (){

        if(bool){
            $(".choose_block_header4").slideDown(300)
            bool= false
            $(".btn_block_open_chosse_block_header4").css('transform', "rotate(180deg)")
        } else {
            $(".choose_block_header4").slideUp(300)
            bool = true
            $(".btn_block_open_chosse_block_header4").css('transform', "rotate(360deg)")
        }
    })

    $(".choose_block_header4  button").click(function (){

        let text = $(this).html()

        $(".choose_block_title4 p ").html(text)
    })

    $(".btn_block_open_chosse_block_header5").click(function (){

        if(bool){
            $(".choose_block_header5").slideDown(300)
            bool= false
            $(".btn_block_open_chosse_block_header5").css('transform', "rotate(180deg)")
        } else {
            $(".choose_block_header5").slideUp(300)
            bool = true
            $(".btn_block_open_chosse_block_header5").css('transform', "rotate(360deg)")
        }
    })

    $(".choose_block_header5  button").click(function (){

        let text = $(this).html()

        $(".choose_block_title5 p ").html(text)
    })

    $(".btn_block_open_chosse_block_header6").click(function (){

        if(bool){
            $(".choose_block_header6").slideDown(300)
            bool= false
            $(".btn_block_open_chosse_block_header6").css('transform', "rotate(180deg)")
        } else {
            $(".choose_block_header6").slideUp(300)
            bool = true
            $(".btn_block_open_chosse_block_header6").css('transform', "rotate(360deg)")
        }
    })


})