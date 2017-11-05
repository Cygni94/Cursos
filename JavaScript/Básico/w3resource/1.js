function procedure() {

    let today = new Date();
    let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let result = weekDays[today.getDay()];
    return result;
}

console.log(procedure());

let task = document.querySelector('#one');
task.addEventListener("load", one);

function one() {
    task.innerHTML = procedure();
};

/*    console.log('Today is:'(weekDay)'.'<br>'Current time is:'(hour):(minutes):(seconds)); 
    function result(task) {

    }
    

       for (let task = 1; task < array.length; task++) {
        let today = array[task];
        


        let today = 1 + 4;
        return tasks;
    };
    console.log(one);



for (var index = 0; index < array.length; index++) {
    var element = array[index];
    
}
*/