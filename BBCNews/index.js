function exit(){
    window.alert('Are you sure you want to exit?')
}

function articleOne(){
    // window.alert('im working')
    let seeMore = document.createElement('p');
    seeMore.textContent = 'This is so extra';
    seeMore.style.cssText = 'color: red; position: absolute; left: 215px'
    document.body.appendChild(seeMore);
}

function articleTwo(){
    // window.alert('im working')
    let seeMore = document.createElement('p');
    seeMore.textContent = 'USA in the Olymics';
    seeMore.style.cssText = 'color: red; position: absolute; left: 465px'
    document.body.appendChild(seeMore);
}

function articleThree(){
    // window.alert('im working')
    let seeMore = document.createElement('p');
    seeMore.textContent = 'Whoop Whoop';
    seeMore.style.cssText = 'color: red; position: absolute; left: 750px'
    document.body.appendChild(seeMore);
}

function articleFour(){
    // window.alert('im working')
    let seeMore = document.createElement('p');
    seeMore.textContent = 'run run baby!';
    seeMore.style.cssText = 'color: red; position: absolute; right: 335px'
    document.body.appendChild(seeMore);
}
