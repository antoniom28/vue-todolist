var app = new Vue(
{
    el : "#root",
    data : {
        testo : null,
        toDoList : [],
    },
    methods:{
        addText : function(){
            //console.log(this.testo);
            if(this.testo != "" && this.testo != null){
                let newItem = {
                    text : this.testo,
                    done : false,
                };
                this.toDoList.push(newItem);
                //console.log(this.toDoList);
                this.testo = null;
            }
        },
        togli : function(indice){
            this.toDoList.splice(indice, 1);
            //console.log(this.todolist[indice]);
        },
        doneOrNot : function(indice){
            if(this.toDoList[indice].done)
                this.toDoList[indice].done = false;
            else
                this.toDoList[indice].done = true;
            //console.log('dovrbbe cambiare classe');
        },
    }
}
);