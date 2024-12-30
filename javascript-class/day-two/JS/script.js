var mainImage = document.getElementById('mainImage');

var img1 = document.getElementById('img1');
img1.onclick = function(){
    var imageUrl = img1.getAttribute('src');
    mainImage.setAttribute('src', imageUrl);
}


var img2 = document.getElementById('img2');
img2.onclick = function(){
    var imageUrl = img2.getAttribute('src');
    mainImage.setAttribute('src', imageUrl);
}


var img3 = document.getElementById('img3');
img3.onclick = function(){
    var imageUrl = img3.getAttribute('src');
    mainImage.setAttribute('src', imageUrl);
}


var img4 = document.getElementById('img4');
img4.onclick = function(){
    var imageUrl = img4.getAttribute('src');
    mainImage.setAttribute('src', imageUrl);
}


// var fName = document.getElementById('fName');
// fName.onkeyup = function(){
//     document.getElementById('rest-1').innerText = fName.value;
// }

// var lName = document.getElementById('lName');
// lName.onkeyup = function(){
//     document.getElementById('rest-2').innerText = lName.value;
// }

// lName.onblur = function(){
//     document.getElementById('rest-3').innerText = fName.value + ' '+ lName.value;
// }



// var fullNameBtn = document.getElementById('fullNameBtn');
// fullNameBtn.onclick = function(){
//     var firstNameValue = document.getElementById('firstName').value;
//     var lastNameValue = document.getElementById('lastName').value;
//     var fullName = firstNameValue + ' ' + lastNameValue;
//     document.getElementById('fullName').value = fullName;
// }



// function makeDiv(){
//     var div = document.createElement('div');
//     div.className = 'div-one';
//     // div.style.height = '300px';
//     // div.style.width = '400px';
//     // div.style.margin = '40px';
//     // div.style.backgroundColor = 'red';

//     document.getElementById('resultDiv').append(div);
    
// }

// makeDiv();



// // function add(x=10, y=50)
// // {
// //     var z = x + y;
// //     //return z;
// //     document.write(z);
// // }

// // document.write("<br/>==============<br/>");
// // add(10,20);

// // document.write("<br/>==============<br/>");
// // add(10);

// // document.write("<br/>==============<br/>");
// // add(100,500);

// // var student = ['Sojib','sojib@gmail.com','0181475698'];


// // //json object
// // var student = {
// //     name: 'sojib',
// //     email: 'sojib@gmail.com', 
// //     mobile: {
// //         personal: '0125478547',
// //         gurdian: '654654564'
// //     },
// //     marks: [10, 20, 30],
// //     add: function(){
// //         var x = 10;
// //         var y = 20;
// //         var z = x + y;
// //         return z;
// //     }
// // };


// // document.write(student.add());


// // //json array
// // // var students = [
// // //     {name: 'sojib', email: 'sojib@gmail.com', mobile: '0154789654'},
// // //     {name: 'sakib', email: 'sakib@gmail.com', mobile: '0155474136'},
// // //     {name: 'rakib', email: 'rakib@gmail.com', mobile: '0154784754'}
// // // ];

// // // var index;
// // // for(index in students){
// // //     document.write(students[index].name +' '+ students[index].email + '<br/>');
// // // }

// // //document.write(students[2].email);


// // // var data = ['Savar', 'JavaScript',100, 10.20, true];

// // // var key;
// // // for(key in data){
// // //     document.write(data[key]+' ');
// // // }

// // //document.write(data[1]);

