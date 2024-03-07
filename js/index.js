
console.log("Your index.js file is loaded correctly!");
$('#myform').on('submit', function(ev) {
    $('#my-modal').modal({
        show: 'false'
    }); 


    var data = $(this).serializeObject();
    json_data = JSON.stringify(data);
    $("#results").text(json_data); 
    $(".modal-body").text(json_data); 

    // $("#results").text(data);

    ev.preventDefault();
});