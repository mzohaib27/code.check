
class details  {
    constructor(namess,agess,formNumberss){
        this.name = namess;
        this.age = agess;
        this.formNumber = formNumberss;
    }
    submit(){
        document.write(`${this.name} Your Admission Form form num ${this.formNumber} is Submited
        because your age is ${this.age} `)
    }
          cancel(){
         document.write(`${this.name} Your Admission Form form num ${this.formNumber} is Cancelled
         because your age is ${this.age} that is under 18`)
         }
   }

class GPGCJ extends details {
    welcome(){
        document.write(`Welcome to Govt Post Graduate College Jhelum`);
    }
    AdmissionSuccess(){
        document.write(`Your Admission is successfully Approved`);
        
    }
    AdmissionDenied(){
          document.write(`Your Admission is Denied`)  
    }
}
 
let names = prompt("Enter your name : ")
let ages = prompt("Enter your age : ")
let formNumbers = prompt("Enter your formNumber : ")

let EnterDetails = new details(names,ages,formNumbers)   

let clg = new GPGCJ();
 
 const a =()=>{
    if(ages>18){
        document.write(clg.welcome())
        document.write(EnterDetails.submit())
        document.write(clg.AdmissionSuccess())
    }
}
   const b = () => {
    if(ages<18){
        document.write(clg.AdmissionDenied())
        document.write(EnterDetails.cancel())
    } 
}

(ages>18)?a():b();




