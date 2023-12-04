let numberСomments = document.getElementsByClassName('number-comments');
let numberFavorites = document.getElementsByClassName('number-favorites');
let blockComment : Element|null = document.querySelector('#block-comment');
const btnSend = document.getElementById('btn-send');
let btnAnswers = document.querySelectorAll('#btn-answer');
let btnFavoritesS = document.querySelectorAll('#btn-favorites');
let textComment;
if (localStorage.getItem("Commenting") != undefined) {
    let doc: Document = new DOMParser().parseFromString(localStorage.getItem("Commenting"), "text/html");
    let com = doc.querySelectorAll('.comment');
    com.forEach((element) => blockComment.append(element));
    let btnAnswers = blockComment.querySelectorAll('#btn-answer');
    btnAnswers.forEach((element) => element.addEventListener('click', () => {Answer(element)}));
}

//Добавление нового комментария
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
    btnAnswer.id = 'btn-answer';
    btnAnswer.textContent = 'Ответить';
    btnAnswer.addEventListener('click', () => {Answer(btnAnswer)});
    btnFavorites.classList = 'btn-favorites';
    btnFavorites.id = 'btn-favorites';
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
    btnFavoritesS = document.querySelectorAll('#btn-favorites');
    inner();
});
// Для добавленых элементов после загрузки 
function Answer(btnAnswer) {
    let parent = btnAnswer.parentElement;
    let parentAdd = parent.parentElement;

    let responseСomment = document.createElement('div');
    let responseText = document.createElement('input');
    let btnSendResponse = document.createElement('button');

    responseСomment.classList = 'input-sending';
    responseText.id = 'response-text';
    responseText.type = 'text';
    responseText.maxLength = '1000';
    responseText.placeholder = 'Введите текст сообщения...';
    btnSendResponse.classList = 'btn-send';
    btnSendResponse.id = 'btn-send-response';
    btnSendResponse.textContent = 'Ответить';
    parent.style.display = 'none';
    responseСomment.append(responseText);
    responseСomment.append(btnSendResponse);
    parentAdd.append(responseСomment);
    btnSendResponse.addEventListener('click', () => {SendResponse(btnSendResponse, parent)});
    inner();
}
//Оброботчик для созданных элементов при загрузки
for (let btn of btnAnswers){
    btn.addEventListener('click', () =>{
        Answer(btn);
    });
};
//Добавление ответа на комментарий
function SendResponse(btnSendResponse, par) {
    let stDate = new Date();
    let parent = btnSendResponse.parentElement;
    let textCommentBlockParent = parent.parentElement;
    let mainBoxParent = textCommentBlockParent.parentElement;
    let commentParent = mainBoxParent.parentElement;
    text = parent.querySelector('#response-text');
    
    let responseToAComment = document.createElement('div');
    let img = document.createElement('img');
    let mainBox = document.createElement('div');
    let blockNicknameDate = document.createElement('div');
    let name = document.createElement('p');
    let data = document.createElement('p');
    let textCommentBlock = document.createElement('div');
    let textResponseComment = document.createElement('p');
    let blockCommentBtn = document.createElement('div');
    let btnFavorites = document.createElement('button');

    btnFavorites.classList = 'btn-favorites';
    btnFavorites.id = 'btn-favorites';
    btnFavorites.textContent = '❤ В избранном';
    blockCommentBtn.classList = 'block-comment-btn';
    textResponseComment.classList = 'text-response-comment';
    textCommentBlock.classList = 'text-comment-block';
    data.classList = 'data';
    data.textContent = `${stDate.getDate()}.${stDate.getMonth()+1}.${stDate.getFullYear()} ${stDate.getHours()}:${stDate.getMinutes()}`;
    name.classList = 'name';
    name.textContent = 'Пользователь';
    blockNicknameDate.classList = 'block-nickname-date';
    mainBox.classList = 'main-box';
    responseToAComment.classList = 'response-to-a-comment';

    parent.remove();
    par.style.display = 'flex';
    blockCommentBtn.append(btnFavorites);
    textCommentBlock.append(textResponseComment);
    textCommentBlock.append(blockCommentBtn);
    blockNicknameDate.append(name);
    blockNicknameDate.append(data);
    mainBox.append(blockNicknameDate);
    mainBox.append(textCommentBlock);
    responseToAComment.append(img);
    responseToAComment.append(mainBox);
    commentParent.append(responseToAComment);

    textResponseComment.textContent = text.value;
    img.src = `https://loremflickr.com/320/240?random=${Math.ceil(Math.random() * 10)}`;
    inner();
}
function inner() {
    let blockComment = document.querySelector('#block-comment');
    localStorage.setItem('Commenting', blockComment.innerHTML);
}