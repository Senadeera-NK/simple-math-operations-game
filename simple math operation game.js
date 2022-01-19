var result;
var GlobalScopeObject = {}; 
function mathcal()
{
  result = Math.floor((Math.random()*1000)+1);
  document.getElementById("result").innerText=result;

  var l = "---";
  var m = "---";
  var n = "---";
  var o = "---";

  var numberList = [l,m,n,o];

  var i = Math.floor((Math.random()*4));
  var u = Math.floor((Math.random()*4));
  while(i==u){
    var u = Math.floor((Math.random()*4));
  }

  numberList[i] = Math.floor((Math.random()*result)+1);
  gap = result - numberList[i];
  numberList[u] = Math.floor((Math.random()*gap)+1);

  GlobalScopeObject.addedGeneretedNumber1 = numberList[i];
  GlobalScopeObject.addedGeneretedNumber2 = numberList[u];

  GlobalScopeObject.displayNumberResultsList = numberList; //- - - - - newly added - - - - - - //

  //--------displaying formula on UI--------//
   
     var t = 0;
     while (t<= 3){
       document.getElementById(t.toString()).innerText = numberList[t];
       t++;
      }
     }

mathcal();

//---------------range function to output [start, start+1,start+1+1,.....end]----------//
function range(start,end){
  var list = [];
  for(i=start;i<=end;i++){
    list.push(i);
  }
  return list;
}

//----------function to pick given no of items from a list and return as another list------------//
function outUniquePicks(numberOfItems,list){
var outList = [];
var listRange = list.length -1;


var outNumber = Math.floor((Math.random()*listRange)+1);
outList.push(list[outNumber]);

var i =1;
while(i<=(numberOfItems-1)){
var outNumber2 = Math.floor((Math.random()*listRange)+1);
if(!outList.includes(list[outNumber2])){
    outList.push(list[outNumber2]);
    i++;
}else{
  continue;
}
}
return outList;
}
//--------------------result values--------------//
function resultNumValues(){

var resultNumList = [];
var result1 = GlobalScopeObject.addedGeneretedNumber1;
var result2 = GlobalScopeObject.addedGeneretedNumber2;

var realResultRange = result - (result1 + result2);
var result3 = Math.floor((Math.random()*realResultRange)+1);
resultNumList.push(result3);

var result4 = result - (result1 + result2 + result3);
resultNumList.push(result4);

GlobalScopeObject.addedGeneretedNumber3 = result3;
GlobalScopeObject.addedGeneretedNumber4 = result4;

i = 1;
while(i<=4){
var randomResult = Math.floor((Math.random()*result)+1);
if(!resultNumList.includes(randomResult)){
  resultNumList.push(randomResult);
  i++;
}else{
  continue;
}
}
return resultNumList;
}
//--------------putting values and displaying to according to that ids-------------//
function displayValues(l, m) {
var i = 0;
while (i <= 5) {
  document.getElementById(l[i].toString()).innerText = m[i];
  document.getElementById(l[i]).style.border="1px solid black";                 //---css fixing-----//
  //console.log(DocumentTimeline.getElementById(l[i]).style.position);
  i++;
}
}

//---------------function to popup numbers in table----------------// 
 function numberPops(){
   var idslist = range(10,39);
   var example = outUniquePicks(6,idslist);
   return example;
 }

//-----------this is the main function, becareful playing--------------//
 displayValues(numberPops(),resultNumValues());

function realFormulaNumbersInList(){
var realFormulaNumbersList = [];
var result1 = GlobalScopeObject.addedGeneretedNumber1;
var result2 = GlobalScopeObject.addedGeneretedNumber2;
var result3 = GlobalScopeObject.addedGeneretedNumber3;
var result4 = GlobalScopeObject.addedGeneretedNumber4;
realFormulaNumbersList.push(result1,result2,result3,result4);

return realFormulaNumbersList;
}
//-------------------getting user results-----------------------//
const userClickedNumberList = [];
const spacesIDList = [];
function userClicked(item){

//--------replacing "---" with user entered numbers---------//
var displayList = GlobalScopeObject.displayNumberResultsList;
for(var i =0; i <= displayList.length-1;i++){
if(displayList[i] === "---"){
spacesIDList.push(i);
}
}
document.getElementById(spacesIDList[0].toString()).innerText = item.innerText;
document.getElementById(spacesIDList[0].toString()).style.color = "rgb(59, 59, 187)";
spacesIDList.splice(0,1);
console.log(spacesIDList); //display no of items that has in spacesIDSList

console.log(resultNumValues());


//---------including user entered two numbers to a list----------//
if(userClickedNumberList.length<2){
if(item.innerText!=""){
userClickedNumberList.push(item.innerText);
item.style.display = "none";
}
}

//-------checking whether user has won or not-------------------//

//to work only after user entered 2 numbers 
if(userClickedNumberList.length===2){
var displayOnlyNumList = [];
var resultNumberList = GlobalScopeObject.displayNumberResultsList;
for(var i = 0; i <= resultNumberList.length-1;i++){
if(resultNumberList[i] !== "---"){
  displayOnlyNumList.push(resultNumberList[i]);
}
}console.log("displayed only numbers: "+displayOnlyNumList);
     let confirmAction = displayOnlyNumList[0]+displayOnlyNumList[1]+parseInt(userClickedNumberList[0])+parseInt(userClickedNumberList[1]) === result;
    if (confirmAction) {
      document.getElementById("main").style.filter="blur(5px)";
      document.getElementById("won-popupBox").style.display="block";
    } else {
      document.getElementById("main").style.filter="blur(5px)";
      document.getElementById("lost-popupBox").style.display="block";
    }
}
}

function userClickedWonYes(){
window.location.reload();
}
function userClickedLostYes(){
//-----------do after functions properly fixed ------------------//
}
function userClickedWonNo(){
document.getElementById("main").style.filter="none";
document.getElementById("won-popupBox").style.display="none";
}
function userClickedLostNo(){
document.getElementById("main").style.filter="none";
document.getElementById("lost-popupBox").style.display="none";
}


function newGame(){
document.getElementById("main").style.display="block";
document.getElementById("main-menu").style.display="none";
}


//---------------function quit----------------//
function quit(){
window.close();
}