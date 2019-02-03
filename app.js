// Setting up the modules for data - data encapsulation

/************ Budget Module ********
 *********************************/
var budgetController = (function () {
    // Some code
})();

/************ UI Module **********
 *********************************/
var UIController = (function() {
    // Some code
})();
 
/******* Global App Module *******
 *********************************/
var controller = (function (budgetCtrl, UICtrl) {
    
    var ctrlAddItem = function() {
        // 1. Get the field input data 
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI

        console.log('ENTER or CLICK was pressed.');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) { // '.which' is used for older browser instead of '.keyCode'
            ctrlAddItem();   
        }
    });
})(budgetController, UIController);





