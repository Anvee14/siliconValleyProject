class EnterProb{
    constructor(){
       this.greeting =createElement('h5')
    }
    
    diplay(){
        
        this.greeting.html("Hello " + document.getElementById("nickName").value)
        this.greeting.position(displayWidth/2 , displayHeight/4);
    }
}