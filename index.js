function search(){
    window.alert("i'm working!")   
};

const input = document.querySelector('input');

const log = document.getElementById('user-input');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}


//Part i did not fully understand 

var coll = document.getElementsByClassName('menu');
var i; 

for(i=0; i< coll.length; i++){
  coll[i].addEventListener('click', function(){
    // if toggle is active, remove it, otherwise set it. 
    this.classList.toggle("active");
    var content = this.nextElementSibling; 
    if(content.style.display === "flex"){
      content.style.display= 'none'
    } else {
      content.style.display = "flex"
    }
  })
}
