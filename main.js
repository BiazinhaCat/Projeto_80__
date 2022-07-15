    menuListArray = ["Pizza Vegetariana",
                        "Pizza de Frango",
                        "Pizza Portuguesa",
                        "Pizza Quatro Queijo",
                        "Pizza de Calabresa",
                        "Pizza Extravaganza"];

    function getMenu(){
        var htmldata = "";
        menuListArray.sort();

        for (var i = 0; i<menuListArray.length;i++) {
            htmldata = htmldata + menuListArray[i] + '<br>';        
        }

        document.getElementById("displayMenu").innerHTML = htmldata;
    }

    function addItem(){
        var imgtags = '<img id = "img" src = "images/pizzaImg.png"/>';
        var htmldata = "";
        var item = document.getElementById("addItem").value;
        menuListArray.sort();
        htmldata ="";

        for (var i = 0; i<menuListArray.length; i++) {
            htmldata = htmldata + imgtags + menuListArray[i] + '<br>';
        }

        document.getElementById("displayAddedMenu").innerHTML = htmldata;
        }

    function addTop(){
        var item = document.getElementById("addItem").value;
        menuListArray.sort();
        addItem();
    }