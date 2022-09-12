
const main = document.querySelector(".main");
const main2 = document.querySelector(".main2");



function createBoards(){


    let boxes = 64;
    boardFirst(boxes);
    boardSecond(boxes);

    

    

    function boardFirst(boxes) {
        for(let i = 0;i<boxes;i++){
            const boxs = document.createElement("div");
            boxs.id = "boxMain";



            main.appendChild(boxs);


        }

        

};

function boardSecond(boxes){

    
    for(let i = 0;i<boxes;i++){
        const boxs = document.createElement("div");
        boxs.id = "boxMain2";



        main2.appendChild(boxs);


    }

    
}

};


createBoards();




const look = document.getElementById("boxMain");

look.addEventListener("click", logIt());




function logIt(){
  

}



