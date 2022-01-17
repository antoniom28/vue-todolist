var app = new Vue(
    {
        el: "#root",
        data: {
            testo: null,
            toDoList: [],
        },
        methods: {
            addText: function () {
                //console.log(this.testo);
                if (this.testo != "" && this.testo != null) {
                    let newItem = { //CREA UN NUOVO ITEM PER LA LISTA
                        text: this.testo,
                        done: false,
                    };
                    this.toDoList.push(newItem); //AGGIUNGE IL NUOVO ELEMENTO
                    //console.log(this.toDoList);
                    this.testo = null; //CANCELLA IL TESTO DALL'INPUT
                }
            },
            togli: function (indice) { //TOGLIE L'ELEMENTO AL CLICK SULLA X
                this.toDoList.splice(indice, 1);
                //console.log(this.todolist[indice]);
            },
            doneOrNot: function (indice) { //CAMBIA LA CLASSE
                if (this.toDoList[indice].done)
                    this.toDoList[indice].done = false;
                else
                    this.toDoList[indice].done = true;
                //console.log('dovrbbe cambiare classe');
            },
        }
    }
);