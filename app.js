// Setting up the modules for data - data encapsulation

/************ Budget Module ********
 *********************************/
var budgetController = (function () {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            // create new ID 
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
               ID = 0; 
            }
            
            // create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
                } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
                }
                // push it into data structure
                data.allItems[type].push(newItem);
                // return the new element
                return newItem;
        },
        testing: function() {
            console.log(data);
        }
    };

})();

/************ UI Module **********
 *********************************/
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputAddValue: '.add__value',
        inputBtn: '.add__btn',
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputAddValue).value
            };
        },
            getDOMstrings: function() {
                return DOMstrings;
            }
        };
})();
 
/******* Global App Module *******
 *********************************/
var controller = (function (budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) { // '.which' is used for older browser instead of '.keyCode'
                ctrlAddItem();
            }
        });
    };
    
    var ctrlAddItem = function() {
        var input, newItem;
        
        // 1. Get the field input data 
        var input = UICtrl.getInput();
        // 2. Add the item to the budget controller
        var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();



