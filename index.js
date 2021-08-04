function search(){
    window.alert("i'm working!")   
};

const input = document.querySelector('input');

const log = document.getElementById('user-input');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}