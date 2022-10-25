



function menuNums(){
    let menuNum = document.getElementById('lunchName').value;
    let parent = document.getElementById('lunchList');
    let parents = parent.children;
    if(parents.length>0){
        if(menuNum-parents.length>0){
            for(let i=parents.length+1;i<=menuNum;i++){
                parent.removeChild(parent.lastChild);
            }
        }
    }else{
        for(let i=1;i<=menuNum;i++){
            let input = document.createElement('input');
            input.setAttribute('id','id'+i);
            input.setAttribute('class','newInput');
            input.setAttribute('type','text');
            input.setAttribute('placeholder','please input your lunch');
            parent.appendChild(input);
        }
    }



    
}