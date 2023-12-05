let blockComment = document.querySelector('#block-comment');
const btnSend = document.getElementById('btn-send');
let btnAnswers = document.querySelectorAll('#btn-answer');
const input = document.querySelector('#text-comment')
let responseText;
let btnSendResponse;
const output = document.querySelector('output')
const p = document.querySelector('#number-characters')
let textComment;
//Счетчик символов и доступ к кнопке отправить.
input.addEventListener('input', function () {
    if (input.value.length < 1000) {
        output.style.color = '#000';
        output.style.opacity = '0.4';
        p.style.display = 'none';
        output.textContent = `${0 + input.value.length}/1000`;
    } else {
        output.style.color = 'red';
        output.style.opacity = '1';
        output.textContent = `${0 + input.value.length}/1000`;
        p.style.display = 'block';
        p.style.color = 'red';
        p.style.opacity = '1';
    }
    output.textContent = `${0 + input.value.length}/1000`;
    if (input.value.length > 0) {
        btnSend.style.backgroundColor = '#ABD873';
    } else {
        btnSend.style.backgroundColor = '#cccbcb';
    }
});
if (localStorage.getItem("Commenting") != undefined) {
    let doc = new DOMParser().parseFromString(localStorage.getItem("Commenting"), "text/html");
    let com = doc.querySelectorAll('.comment');
    com.forEach((element) => blockComment.append(element));
    let btnAnswers = blockComment.querySelectorAll('#btn-answer');
    btnAnswers.forEach((element) => element.addEventListener('click', () => {Answer(element)}));
}
//Добавление нового комментария
btnSend.addEventListener('click', () => {
    if (input.value.length > 0) {
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

        if (window.screen.width <= 320) {
            blockCommentBtn.append(btnAnswer);
            blockCommentBtn.append(btnFavorites);
            textCommentBlock.append(textComment);
            textCommentBlock.append(blockCommentBtn);
            blockNicknameDate.append(name);
            blockNicknameDate.append(date);
            mainBox.append(textCommentBlock);
            comment.append(cat);
            comment.append(blockNicknameDate);
            comment.append(mainBox);
            blockComment.append(comment);
        } else {
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
        }
        textComment.textContent = text.value;
        text.value = '';
        btnSend.style.backgroundColor = '#cccbcb';
        output.textContent = `${0 + input.value.length}/1000`;
        btnAnswers = document.querySelectorAll('#btn-answer');
        cat.src = `https://loremflickr.com/320/240?random=${Math.ceil(Math.random() * 10)}`;
        inner();
    }
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
//Изменение размера
if (window.screen.width <= 320) {
    let n = document.querySelector('.name');
    let imgP = document.createElement('div');
    let imgOs = document.querySelector('img');
    imgP.append(imgOs);
    imgP.append(n);
    let div = document.querySelector('.block-filling');
    div.prepend(imgP);
    imgP.style.display = 'flex';
    imgP.style.gap = '20px';
    let comm = document.querySelectorAll('.comment');
    comm.forEach((element) => {
        let bnd = element.querySelector('.block-nickname-date');
        let commImg = element.querySelector('img');
        element.prepend(bnd);
        element.prepend(commImg);
    });
}