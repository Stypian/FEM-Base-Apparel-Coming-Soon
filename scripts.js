onload = function() {

    const submitButton = document.querySelector(".base-app__email-button");
    const errorIcon = document.querySelector(".base-app__error-icon");
    const emailInput = document.querySelector(".base-app__email");
    const errorMessage = document.querySelector(".base-app__error-message");
    let emailEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const showErrors = [errorIcon, errorMessage];

    function errorShow() {
        for (let i = 0; i < showErrors.length; i++) {
            showErrors[i].setAttribute("style", "visibility: visible;");
        }
        emailInput.setAttribute("style", "border-color: hsl(0, 93%, 68%);");
    }

    submitButton.addEventListener("click", function(e) {
        if (emailEx.test(emailInput.value)) {
            e.submit();
        } else {
            e.preventDefault();
            errorShow();
        }
    })

    
    































}
