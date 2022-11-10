function menuNums(){
    let menuNum = document.getElementById('lunchName').value;
    let parent = document.getElementById('lunchList');
    let parents = parent.children;

    if(menuNum>10||menuNum<0){
        alert("1~9사이의 숫자를 입력해주세요!");
        return 1;
    }

    //console.log(menuNum);
    //console.log(parents.length);

    if(parents.length==0){
        for(let i=1;i<=menuNum;i++){
            let input = document.createElement('input');
            input.setAttribute('id','id'+i);
            input.setAttribute('class','newInput');
            input.setAttribute('type','text');
            input.setAttribute('placeholder','please input your lunch');
            input.setAttribute('onchange','checkMenu('+i+')');
            parent.appendChild(input);
        }
    }else{

        if(menuNum>parents.length){
            //console.log("upper_called");
            for(let i=parents.length+1;i<=menuNum;i++){
                let input = document.createElement('input');
                input.setAttribute('id','id'+i);
                input.setAttribute('class','newInput');
                input.setAttribute('type','text');
                input.setAttribute('placeholder','please input your lunch');
                parent.appendChild(input);
            }
        }else if(menuNum<parents.length){
            for(let i=parents.length;i>menuNum;i--){
                parent.removeChild(parents[i-1]);
            }
        }
    }
}



function getLunch(){
    let entire = document.getElementById('lunchList');
    let entireChildren = entire.children;


    console.log(entireChildren.length);

    let randomNumber = Math.floor(Math.random() * entireChildren.length) + 1;

    console.log(randomNumber);

    let selectedElement = document.getElementById("id"+randomNumber);

    //console.log(selectedElement);
    //console.log(selectedElement.value);

    alert('당신이 먹을 음식은 ' +selectedElement.value+ '입니다! ');
}