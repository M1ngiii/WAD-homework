document.addEventListener("DOMContentLoaded", function() {  //Ootame kuni content on laetud, enne kui koodi jooksutame

    var dropdownContent = document.querySelector(".dropdownContent");
    var headerImage = document.querySelector(".headerImage");
    
    headerImage.addEventListener("click", function() {
        if (dropdownContent.style.display === "flex") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "flex";
        }
    });

});