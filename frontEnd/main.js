function closeAlert() {
    document.getElementById("warning").style.display = "none";
    document.getElementById("success").style.display = "none";
}


/* function myAlert() {
    document.getElementById("warning").style.display = "block";
    document.getElementById("success").style.display = "block";
} */


$("#myEnter").on("click", function() {

    let sendData = {
        userName: $("#userName").val(),
        passWord: $("#passWord").val()
    }

    $.post("http://127.0.0.1:5000", JSON.stringify(sendData),
        function(data) {
            if (data.result) {
                closeAlert();
                $("#success").slideDown(1000);
            } else {
                closeAlert();
                $("#warning").slideDown(1000);
            }
        }
    );

});

console.log(125);