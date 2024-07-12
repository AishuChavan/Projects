const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]");

const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copyBtn=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg]");
const uppercaseCheck=document.querySelector("#uppercase");
const lowercaseCheck=document.querySelector("#lowercase");
const numbersCheck=document.querySelector("#numbers");
const symbolsCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicator]");
const generationBtn=document.querySelector(".generateButton");
const allCheckBox=document.querySelectorAll("input[type=checkbox]");
const symbols='@!#$%^&*()~?><:"`,.=-+_\|;][}{';

let password="";
let passwordLength=10;
let checkCount=1;
//set strength circle color is grey
handleSlider();
setIndicator("#ccc");
//set password length
//password slider ko ui per reflect karwata hai
function handleSlider()
{
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
    const min=inputSlider.min;
    const max=inputSlider.max;
    inputSlider.style.backgroundSize=((passwordLength-min)*100/(max-min)) +"% 100%"
}
function setIndicator(color)
{
    indicator.style.backgroundColor=color;
    //shadow
    indicator.style.boxShadow=`0px 0px 12px 1px ${color}`;

}
function getRndInteger(min,max)
{
    return Math.floor(Math.random()*(max-min))+min;
}
function generaterandomNumber()
{
    return getRndInteger(0,9);
}
function getLowerCase()
{
    return String.fromCharCode(getRndInteger(97,123));
}
function getUpperCase()
{
    return String.fromCharCode(getRndInteger(65,91));
}
function generateSymbol()
{
    const randnum=getRndInteger(0,30);
    return symbols.charAt(randnum);
}
function calcstrength()
{
    let hasUpper=false;
    let hasLower=false;
    let hasNum=false;
    let hasSym=false;
    if(uppercaseCheck.checked)hasUpper=true;
    if(lowercaseCheck.checked)hasLower=true;
    if(numbersCheck.checked)hasNum=true;
    if(symbolsCheck.checked)hasSym=true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength>=8)
    {
        setIndicator("#0f0");
    }
    else if((hasLower||hasUpper) && (hasNum||hasSym) && passwordLength>=6) 
    {
        setIndicator("#ff0");
    }
    else
    {
        setIndicator("#f00");
    }
}
async function copycontent()
{
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText="copied";
    }
    catch(e)
    {
        copyMsg.innerText="Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( ()=>{
        copyMsg.classList.remove("active");
    },3000);
}

inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
})
copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value)
    {
        copycontent();
    }
})
function handleCheckBoxChange(){
    console.log("handle");
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
            checkCount++;
    });
    //special condition
    if(passwordLength<checkCount)
    {
        passwordLength=checkCount;
        handleSlider();
    }
}
allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
})
function shufflePassword(array)
{
    //fisher yates method
    for(let i=array.length-1;i>0;i--)
    {
        const j=Math.floor(Math.random()*(i+1));
        const temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    let str="";
    array.forEach((el)=>(str+=el));
    return str;
}
generationBtn.addEventListener('click',()=>{
    //none of the checkbox selected
    if(checkCount<=0)return;
    console.log("check coutnt");
    if(passwordLength<checkCount)
    {
        passwordLength=checkCount;
        handleSlider();
    }
    console.log("slider ke pass");
    //lets start to find generate new password
    password="";

    //put the stuff mentioned by checkoxes

    /*if(uppercaseCheck.checked)
    {
        password+=getUpperCase();
    }
    if(lowercaseCheck.checked)
    {
        password+=getLowerCase();
    }
    if(symbolsCheck.checked)
    {
        password+=generateSymbol();
    }
    if(numbersCheck.checked)
    {
        password+=generaterandomNumber();
    }*/
    let funArr=[];
    if(uppercaseCheck.checked)
    {
        funArr.push(getUpperCase);
    }
    if(lowercaseCheck.checked)
    {
        funArr.push(getLowerCase);
    }
    if(symbolsCheck.checked)
    {
        funArr.push(generateSymbol);
    }
    if(numbersCheck.checked)
    {
        funArr.push(generaterandomNumber);
    }
    console.log("check compulsary ")
    //compulsary addition
    for(let i=0;i<funArr.length;i++)
    {
        password+=funArr[i]();
    }
    console.log("check remaining");
    //remaining addition
    for(let i=0;i<passwordLength-funArr.length;i++)
    {
        let radIndex=getRndInteger(0,funArr.length-1);
        password+=funArr[radIndex]();
    }
    console.log("checkk shuffle");
    //shuffle the password
    password=shufflePassword(Array.from(password));
    //show in ui
    console.log("after shuffle");
    passwordDisplay.value=password;
    //calculate strength
    console.log("display");
    calcstrength();
});