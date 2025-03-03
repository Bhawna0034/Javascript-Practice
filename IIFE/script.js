(function javascript(){
    console.log("chai aur code");
})();

// javascript();

((name) => {
    console.log(`My name is ${name}`);
})('Bhawna');


let ans = (function(){
    let a = 10;
    return {
        getter: function(){
            console.log(a);
        },
        setter: function(input){
            a = input;
        }
    }
})();

console.log(ans);

ans.getter();
ans.setter(32);
ans.getter();