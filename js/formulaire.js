$(document).ready(() => {
    var form_control = document.getElementsByClassName('form-control');
    var pattern = new Regex
    for (let i = 0; i < form_control.length; i++) {
        const element = form_control[i];
        element.addEventListener('change', (event) => {
            console.log(event.target.value);
            
        })
    }

})