if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',)
}

var removeCartItemButton = document.getElementByIdClassName('btn-danger')
console.log(removeCartItemButton)
for (var i = 0; i < removeCartItemButton.length; i++) {
    var button = removeCartItemButton[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    
}