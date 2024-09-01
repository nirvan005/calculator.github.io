let output=document.querySelector("#display-area");
let icons=document.querySelectorAll(".icon");
let str="";
function clear(){
    output.textContent="0";
    str="";
}
function solve(str){
    try{
        let flag=0;
        let indx,indx2;
        let str2="";
        let a,i;
        for(i=0;i<str.length;i++){
            if(str[i]=="√"){
                flag=1;
                indx=i;
                break;
            }
        }
        if(flag==1){
        for(i=indx+1;i<str.length;i++){
            if(Number.isInteger(parseInt(str[i])))
                str2+=str[i];
            else{
                indx2=i;
                break;
            }
        }
        if(str2!=""){
            a=Math.sqrt(parseInt(str2));
            str2="";
            if(Number.isInteger(parseInt(str[indx-1])))
            str2=str.slice(0,indx)+"*"+a+str.slice(i,str.length);
            else
            str2=str.slice(0,indx)+a+str.slice(i,str.length);
            str=str2;
        }
        else{
            output.textContent="Invalid Expression!!";
            str="";
            return;
        }
    }
        let ans=eval(str);
        str=ans;
        output.textContent=ans;
    }
    catch(err){
        output.textContent="Invalid Expression!!";
        str="";
    }
}
icons.forEach((icon)=>{
    icon.onclick=(event)=>{
        let clickedDiv=event.target;
        let symbol=clickedDiv.getAttribute("value");
        if(symbol=="C"){
            clear();
        }
        else{
            if(symbol=="X"){
                if(str=="")
                    clear();
                else
                str=str.slice(0,-1);
            }
            else{
                str+=symbol;
            }
            if(str=="")
                clear();
            else
            output.textContent=str;
        }
    };
});
function keyInput(event){
    let symbol=event.key;
    if(symbol=="Backspace"){
        str=str.slice(0,-1);
        if(str=="")
            clear();
        else
        output.textContent=str;
    }
    else if(Number.isInteger(parseInt(symbol))){
        str+=symbol;
        output.textContent=str;
    }
    else if(symbol=="+"||symbol=="-"||symbol=="*"||symbol=="/"){
        str+=symbol;
        output.textContent=str;
    }
    else if(symbol=="="||symbol=="Enter"){
        solve(str);
        if(str=="")
                clear();
        str="";
    }        
}
let ops=document.querySelectorAll(".opsVal");
ops.forEach((op)=>{
    op.onclick=(event)=>{
        let clickedDiv=event.target;
        let symbol=clickedDiv.getAttribute("value");
        if(symbol!="="){
            str+=clickedDiv.getAttribute("value");
            output.textContent=str;
        }
        else{
            solve(str);
            if(str=="")
                clear();
            str="";
        }
    }
});
