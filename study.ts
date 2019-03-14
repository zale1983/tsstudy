class Student {
  fullName:string
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName=firstName+ " "+ middleInitial+ " "+ lastName;
  }
}

interface Person {
  firstName:string;
  lastName:string;
}
function hello(person:Person) {
  return "hello, "+person.firstName+" "+person.lastName;
}

function fill(color:string) {

  return "fill "+color;
}

function fillany(notsure:any) {
  return "fill" +notsure;
}

function warnMessage():void {
  console.log("this is message from fvoid()")
}

function errorMessage(message:string):never {
  throw new Error(message);
}

//var message="I am out of function";

function printVar(isInit:boolean)
{
  if(!isInit){
    var message="I am in if {}";
  }

  if(message==undefined||message==null)
  {
    var message="I am still null";
    return message;
  }

  return message;
}


for(var i=0;i<10;i++){
  setTimeout(
    function(){
       console.log(i);
    },100*i);
}

for(var i=0;i<10;i++){
  (function(i){
    setTimeout(function(){console.log(i)},100*i);
  })(i);
}
//var person={firstName:"zale",lastName:"zhao"};
//var student=new Student("zale","z","zale");
//document.body.innerHTML=hello(student);

//declare function create(o:object|null):void;
//create({prop:0});
//create(null);


//enum Color {Red=1, Green, Blue};
//let c:Color=Color.Red
//let cn:string=Color[1]
//
//let notsure:any='';
//let list:any[]=[,1,true,"free"]
////list[1].ifItExists();
//notsure=20190311
//
//let u:undefined=undefined;
//



