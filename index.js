let numberСomments = document.getElementsByClassName('number-comments');
let numberFavorites = document.getElementsByClassName('number-favorites');
let blockComment = document.getElementsByClassName('block-comment');
const btnSend = document.getElementById('btn-send');
let textComment;

btnSend.addEventListener('click', () => {
    debugger
    let stDate = new Date();
    console.log(stDate.getDate());
    console.log(stDate.getMonth()+1);
    console.log(stDate.getHours());
    console.log(stDate.getMinutes());
    textComment = document.getElementsByTagName('input');
    let comment = document.createElement('div');
    let cat = document.createElement('img');
    let mainBox = document.createElement('div');
    let blockNicknameDate = document.createElement('div');
    let name = document.createElement('p');
    let data = document.createElement('p');
    let textCommentBlock = document.createElement('div');
    
});