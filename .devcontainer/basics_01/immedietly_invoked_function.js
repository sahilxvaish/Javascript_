//IIFE

(function chai(){
    //named IIFE
    console.log('DB CONNECTED');
})();

((name)=>{
    //UNNAMED IIFE
    console.log('DB CONNECTED TWO $(name)');
})('sahil')