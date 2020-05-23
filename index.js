// Lexical this in arrow function

// ES5 version
var box = {
    color: 'red',
    position: 1,
    clickMe: function(){
        document.querySelector('.red').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};
box.clickMe();
/* 
    clickMe is the method of the box function 
    but the function inside the event handler is just a normal function
    so this keyword doesn't point to the Window object

 */

// ES6 version

const box6 = {
    color: 'blue',
    position: '3',
    clickMe: function() {
        document.querySelector('.blue').addEventListener('click', () => {
            var str = `This is the box ${this.position} and has color ${this.color}`;
            alert(str);
        });
    }
};
box6.clickMe();
