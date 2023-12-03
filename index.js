let numberСomments = document.getElementsByClassName('number-comments');
let numberFavorites = document.getElementsByClassName('number-favorites');
let blockComment = document.querySelector('#block-comment');
const btnSend = document.getElementById('btn-send');
let btnAnswers;
let btnFavoritesS;
let textComment;

btnSend.addEventListener('click', () => {
    let stDate = new Date();
    text = document.querySelector('#text-comment');
    let comment = document.createElement('div');
    let cat = document.createElement('img');
    let mainBox = document.createElement('div');
    let blockNicknameDate = document.createElement('div');
    let name = document.createElement('p');
    let date = document.createElement('p');
    let textCommentBlock = document.createElement('div');
    let textComment = document.createElement('p');
    let blockCommentBtn = document.createElement('div');
    let btnAnswer = document.createElement('button');
    let btnFavorites = document.createElement('button');

    comment.classList = 'comment';
    mainBox.classList = 'main-box';
    blockNicknameDate.classList = 'block-nickname-date'
    name.classList = 'name';
    name.textContent = 'Пользователь';
    date.classList = 'date';
    date.textContent = `${stDate.getDate()}.${stDate.getMonth()+1}.${stDate.getFullYear()} ${stDate.getHours()}:${stDate.getMinutes()}`;
    textCommentBlock.classList = 'text-comment-block';
    textComment.classList = 'text-comment';
    blockCommentBtn.classList = 'block-comment-btn';
    btnAnswer.classList = 'btn-answer';
    btnAnswer.textContent = 'Ответить';
    btnFavorites.classList = 'btn-favorites';
    btnFavorites.textContent = '❤ В избранном';

    blockCommentBtn.append(btnAnswer);
    blockCommentBtn.append(btnFavorites);
    textCommentBlock.append(textComment);
    textCommentBlock.append(blockCommentBtn);
    blockNicknameDate.append(name);
    blockNicknameDate.append(date);
    mainBox.append(blockNicknameDate);
    mainBox.append(textCommentBlock);
    comment.append(cat);
    comment.append(mainBox);
    blockComment.append(comment);
    cat.src = `https://loremflickr.com/320/240?random=${Math.ceil(Math.random() * 10)}`;
    textComment.textContent = text.value;
    btnAnswers = document.querySelectorAll('#btn-answer');
    btnFavoritesS = document.querySelectorAll('#btn-favorites')
});