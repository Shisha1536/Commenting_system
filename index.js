var blockComment = document.querySelector('#block-comment');
var btnSend = document.getElementById('btn-send');
var btnAnswers = document.querySelectorAll('#btn-answer');
var input = document.querySelector('#text-comment');
var output = document.querySelector('output');
var p = document.querySelector('#number-characters');
//Счетчик символов и доступ к кнопке отправить.
input.addEventListener('input', function () {
    if (input.value.length < 1000) {
        output.style.color = '#000';
        output.style.opacity = '0.4';
        p.style.display = 'none';
        output.textContent = "".concat(0 + input.value.length, "/1000");
    }
    else {
        output.style.color = 'red';
        output.style.opacity = '1';
        output.textContent = "".concat(0 + input.value.length, "/1000");
        p.style.display = 'block';
        p.style.color = 'red';
        p.style.opacity = '1';
    }
    output.textContent = "".concat(0 + input.value.length, "/1000");
    if (input.value.length > 0) {
        btnSend.style.backgroundColor = '#ABD873';
    }
    else {
        btnSend.style.backgroundColor = '#cccbcb';
    }
});
if (localStorage.getItem("Commenting") != undefined) {
    var doc = new DOMParser().parseFromString(localStorage.getItem("Commenting"), "text/html");
    var com = doc.querySelectorAll('.comment');
    com.forEach(function (element) { return blockComment.append(element); });
    var btnAnswers_1 = blockComment.querySelectorAll('#btn-answer');
    btnAnswers_1.forEach(function (element) { return element.addEventListener('click', function () { Answer(element); }); });
}
//Добавление нового комментария
btnSend.addEventListener('click', function () {
    if (input.value.length > 0) {
        var stDate = new Date();
        var comment = document.createElement('div');
        var cat = document.createElement('img');
        var mainBox = document.createElement('div');
        var blockNicknameDate = document.createElement('div');
        var name_1 = document.createElement('p');
        var date = document.createElement('p');
        var textCommentBlock = document.createElement('div');
        var textComment = document.createElement('p');
        var blockCommentBtn = document.createElement('div');
        var btnAnswer_1 = document.createElement('button');
        var btnFavorites = document.createElement('button');
        comment.classList.add('comment');
        mainBox.classList.add('main-box');
        blockNicknameDate.classList.add('block-nickname-date');
        name_1.classList.add('name');
        name_1.textContent = 'Пользователь';
        date.classList.add('date');
        date.textContent = "".concat(stDate.getDate(), ".").concat(stDate.getMonth() + 1, ".").concat(stDate.getFullYear(), " ").concat(stDate.getHours(), ":").concat(stDate.getMinutes());
        textCommentBlock.classList.add('text-comment-block');
        textComment.classList.add('text-comment');
        blockCommentBtn.classList.add('block-comment-btn');
        btnAnswer_1.classList.add('btn-answer');
        btnAnswer_1.id = 'btn-answer';
        btnAnswer_1.textContent = 'Ответить';
        btnAnswer_1.addEventListener('click', function () { Answer(btnAnswer_1); });
        btnFavorites.classList.add('btn-favorites');
        btnFavorites.id = 'btn-favorites';
        btnFavorites.textContent = '❤ В избранном';
        if (window.screen.width <= 320) {
            blockCommentBtn.append(btnAnswer_1);
            blockCommentBtn.append(btnFavorites);
            textCommentBlock.append(textComment);
            textCommentBlock.append(blockCommentBtn);
            blockNicknameDate.append(name_1);
            blockNicknameDate.append(date);
            mainBox.append(textCommentBlock);
            comment.append(cat);
            comment.append(blockNicknameDate);
            comment.append(mainBox);
            blockComment.append(comment);
        }
        else {
            blockCommentBtn.append(btnAnswer_1);
            blockCommentBtn.append(btnFavorites);
            textCommentBlock.append(textComment);
            textCommentBlock.append(blockCommentBtn);
            blockNicknameDate.append(name_1);
            blockNicknameDate.append(date);
            mainBox.append(blockNicknameDate);
            mainBox.append(textCommentBlock);
            comment.append(cat);
            comment.append(mainBox);
            blockComment.append(comment);
        }
        textComment.textContent = input.value;
        input.value = '';
        btnSend.style.backgroundColor = '#cccbcb';
        output.textContent = "".concat(0 + input.value.length, "/1000");
        btnAnswers = document.querySelectorAll('#btn-answer');
        cat.src = "https://loremflickr.com/320/240?random=".concat(Math.ceil(Math.random() * 10));
        inner();
    }
});
// Для добавленых элементов после загрузки 
function Answer(btnAnswer) {
    var parent = btnAnswer.parentElement;
    var parentAdd = parent.parentElement;
    var responseСomment = document.createElement('div');
    var responseText = document.createElement('input');
    var btnSendResponse = document.createElement('button');
    responseСomment.classList.add('input-sending');
    responseText.id = 'response-text';
    responseText.type = 'text';
    responseText.maxLength = 1000;
    responseText.placeholder = 'Введите текст сообщения...';
    btnSendResponse.classList.add('btn-send');
    btnSendResponse.id = 'btn-send-response';
    btnSendResponse.textContent = 'Ответить';
    parent.style.display = 'none';
    responseСomment.append(responseText);
    responseСomment.append(btnSendResponse);
    parentAdd.append(responseСomment);
    btnSendResponse.addEventListener('click', function () { SendResponse(btnSendResponse, parent); });
    inner();
}
//Добавление ответа на комментарий
function SendResponse(btnSendResponse, par) {
    var stDate = new Date();
    var parent = btnSendResponse.parentElement;
    var textCommentBlockParent = parent.parentElement;
    var mainBoxParent = textCommentBlockParent.parentElement;
    var commentParent = mainBoxParent.parentElement;
    var text = parent.querySelector('#response-text');
    var responseToAComment = document.createElement('div');
    var img = document.createElement('img');
    var mainBox = document.createElement('div');
    var blockNicknameDate = document.createElement('div');
    var name = document.createElement('p');
    var data = document.createElement('p');
    var textCommentBlock = document.createElement('div');
    var textResponseComment = document.createElement('p');
    var blockCommentBtn = document.createElement('div');
    var btnFavorites = document.createElement('button');
    btnFavorites.classList.add('btn-favorites');
    btnFavorites.id = 'btn-favorites';
    btnFavorites.textContent = '❤ В избранном';
    blockCommentBtn.classList.add('block-comment-btn');
    textResponseComment.classList.add('text-response-comment');
    textCommentBlock.classList.add('text-comment-block');
    data.classList.add('data');
    data.textContent = "".concat(stDate.getDate(), ".").concat(stDate.getMonth() + 1, ".").concat(stDate.getFullYear(), " ").concat(stDate.getHours(), ":").concat(stDate.getMinutes());
    name.classList.add('name');
    name.textContent = 'Пользователь';
    blockNicknameDate.classList.add('block-nickname-date');
    mainBox.classList.add('main-box');
    responseToAComment.classList.add('response-to-a-comment');
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
    img.src = "https://loremflickr.com/320/240?random=".concat(Math.ceil(Math.random() * 10));
    inner();
}
function inner() {
    var blockComment = document.querySelector('#block-comment');
    localStorage.setItem('Commenting', blockComment.innerHTML);
}
//Изменение размера
if (window.screen.width <= 320) {
    var n = document.querySelector('.name');
    var imgP = document.createElement('div');
    var imgOs = document.querySelector('img');
    imgP.append(imgOs);
    imgP.append(n);
    var div = document.querySelector('.block-filling');
    div.prepend(imgP);
    imgP.style.display = 'flex';
    imgP.style.gap = '20px';
    var comm = document.querySelectorAll('.comment');
    comm.forEach(function (element) {
        var bnd = element.querySelector('.block-nickname-date');
        var commImg = element.querySelector('img');
        element.prepend(bnd);
        element.prepend(commImg);
    });
}
