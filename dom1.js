// examine the Document object
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title=123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.forms);
//console.log(document.links);

// GetElement by ID//

//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='Grocery List';// it does not pay attention to styling
//headerTitle.innerText='Something';//pays attention to styling
//headerTitle.innerHTML='<h3>Hello</h3>';
//headerTitle.innerHTML='Hello';
//header.style.borderBottom ='solid 3px black';

// Get Elements by Class Name //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';
// //items.style.backgroundColor='#f4f4f4'// this does not work as it is a collection
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';
//}
// Get Element by Tag Name
// var li = document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';
// //items.style.backgroundColor='#f4f4f4'// this does not work as it is a collection
// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }

// QuerySelector//
// var header = document.querySelector('#main-header');//grabbing id
// header.style.borderBottom="solid 4px black";
// var input= document.querySelector('input');//grabbing html element
// input.value='hello world';
// var submit = document.querySelector('input[type="submit"]');
// submit.value="Sent";
// var item = document.querySelector('.list-group-item');
// item.style.color='red';
// var litem = document.querySelector('.list-group-item:last-child');
// litem.style.color='blue';
// var secitem = document.querySelector('.list-group-item:nth-child(2)');
// secitem.style.color='green';

// QuerySelectorAll //
//  var titles = document.querySelectorAll('.title');
//  console.log(titles);//gives array
//  titles[0].textContent ='hello';
//  var odd = document.querySelectorAll('li:nth-child(odd)');
//  var even = document.querySelectorAll('li:nth-child(even)');
//  for(var i=0;i<odd.length;i++){
//      odd[i].style.backgroundColor='#f4f4f4';
//      even[i].style.backgroundColor='#ccc';
//  }

// Traversing the dom //
 //var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="#f4f4f4";
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="";
//Childnode
//console.log(itemList.childNodes);//text node reperesents blank space line brak
// console.log(itemList.children);//html collection
// itemList.children[1].style.backgroundColor ='yellow';
// //firstchild
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// there is also lastChild and lastElemntChild
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
//console.log(itemList.previousElementSibling);

// Create Element //
// var newDiv = document.createElement('div');
// newDiv.className='hello';
// newDiv.id='hello1';
// newDiv.setAttribute('title','Hello Div');
// var newDivText = document.createTextNode('Hello World');
// //Add text to div
// newDiv.appendChild(newDivText);
// var container =document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);
// newDiv.style.fontSize='30px';
// container.insertBefore(newDiv,h1);

// function buttonClick(e){
   // console.log("Clicked");
//    document.getElementById('header-title').textContent="Clicked";
//    document.querySelector('#main').style.backgroundColor="coral";
//console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
//var output = document.getElementById('output');
// // output.innerHTML='<h3>+e.target.id+</h3>';
// console.log(e.type);
// console.log(e.clientX);
// //clientY
// console.log(e.offsetX);
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }
//  var button = document.getElementById('button').addEventListener
//  ('click',buttonClick);
 //var button = document.getElementById('button');
// var box =document.getElementById('box');
//  button.addEventListener
//   ('dblclick',runEvent);
//   button.addEventListener('mousedown',runEvent);
//   button.addEventListener('mouseup',runEvent);
//   box.addEventListener('mouseleave',runEvent);
//   box.addEventListener('mouseout',runEvent);
//   box.addEventListener('mouseenter',runEvent);
//   box.addEventListener('mouseover',runEvent);
 // box.addEventListener('mousemove',runEvent);

// function runEvent(e){
//     e.preventDefault();
//     //console.log(e.target.value);
//     console.log('Event Type: '+e.type);
    //document.body.style.display='none';
    
    //document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>';
   // output.innerHTML='<h3>'+e.offsetX+'</h3>';
   // document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
//}
// var itemInput =document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
//itemInput.addEventListener('keydown',runEvent);
//itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);
//itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);
//itemInput.addEventListener('input',runEvent);
// var select = document.querySelector('select');
// select.addEventListener('change',runEvent);
// form.addEventListener('submit',runEvent);
var form = document.getElementById('addForm');
var itemList =document.getElementById('items');
var filter =document.getElementById('filter');
// filter event
filter.addEventListener('keyup',filterItems);
//form submit event
form.addEventListener('submit',addItem);
// delete event
itemList.addEventListener('click',removeItem)
function addItem(e){
    e.preventDefault();
    // get input value
    var newItem =document.getElementById('item').value;
    // create new li element
    var li =document.createElement('li');
    li.className='list-group-item';
    //console.log(li);
    //Add textnode with input value
    li.appendChild(document.createTextNode(newItem));
    // create del button elemnent
    var deleteBtn =document.createElement('button');
    // add classes 
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //append textnode
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    // append li to list
    itemList.appendChild(li);
    

}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are u Sure ?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);

        }
    }

}
function filterItems(e){
    //convert text to lower case
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text)!=-1){
           item.style.display='block'; 
        }
        else{
            item.style.display='none';
        }
    })
}