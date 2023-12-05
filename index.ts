let blockComment: HTMLElement  = document.querySelector('#block-comment')!;
const btnSend: HTMLElement  = document.getElementById('btn-send')!;
let btnAnswers: NodeListOf<Element> = document.querySelectorAll('#btn-answer');
const input: HTMLInputElement  = document.querySelector('#text-comment')!;
const output: HTMLElement = document.querySelector('output')!;
const p: HTMLElement = document.querySelector('#number-characters')!;

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
    let doc: Document = new DOMParser().parseFromString(localStorage.getItem("Commenting")!, "text/html");
    let com: NodeListOf<Element> = doc.querySelectorAll('.comment');
    com.forEach((element) => blockComment.append(element));
    let btnAnswers: NodeListOf<Element> = blockComment.querySelectorAll('#btn-answer');
    btnAnswers.forEach((element) => element.addEventListener('click', () => {Answer(element as HTMLElement)}));
}
//Добавление нового комментария
btnSend.addEventListener('click', () => {
    if (input.value.length > 0) {
        let stDate: Date = new Date();
        let comment: HTMLElement = document.createElement('div');
        let cat: HTMLImageElement = document.createElement('img');
        let mainBox: HTMLElement = document.createElement('div');
        let blockNicknameDate: HTMLElement = document.createElement('div');
        let name: HTMLElement = document.createElement('p');
        let date: HTMLElement = document.createElement('p');
        let textCommentBlock: HTMLElement = document.createElement('div');
        let textComment: HTMLElement = document.createElement('p');
        let blockCommentBtn: HTMLElement = document.createElement('div');
        let btnAnswer: HTMLElement = document.createElement('button');
        let btnFavorites: HTMLElement = document.createElement('button');

        comment.classList.add('comment');
        mainBox.classList.add('main-box');
        blockNicknameDate.classList.add('block-nickname-date');
        name.classList.add('name');
        name.textContent = 'Пользователь';
        date.classList.add('date');
        date.textContent = `${stDate.getDate()}.${stDate.getMonth()+1}.${stDate.getFullYear()} ${stDate.getHours()}:${stDate.getMinutes()}`;
        textCommentBlock.classList.add('text-comment-block');
        textComment.classList.add('text-comment');
        blockCommentBtn.classList.add('block-comment-btn');
        btnAnswer.classList.add('btn-answer');
        btnAnswer.id = 'btn-answer';
        btnAnswer.textContent = 'Ответить';
        btnAnswer.addEventListener('click', () => {Answer(btnAnswer)});
        btnFavorites.classList.add('btn-favorites');
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
        textComment.textContent = input.value;
        input.value = '';
        btnSend.style.backgroundColor = '#cccbcb';
        output.textContent = `${0 + input.value.length}/1000`;
        btnAnswers = document.querySelectorAll('#btn-answer');
        cat.src = `https://loremflickr.com/320/240?random=${Math.ceil(Math.random() * 10)}`;
        inner();
    }
});
// Для добавленых элементов после загрузки 
function Answer(btnAnswer: HTMLElement) {
    let parent: HTMLElement = btnAnswer.parentElement!;
    let parentAdd: HTMLElement = parent.parentElement!;

    let responseСomment: HTMLElement = document.createElement('div');
    let responseText: HTMLInputElement = document.createElement('input');
    let btnSendResponse: HTMLElement = document.createElement('button');

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
    btnSendResponse.addEventListener('click', () => {SendResponse(btnSendResponse, parent)});
    inner();
}
//Добавление ответа на комментарий
function SendResponse(btnSendResponse: HTMLElement, par: HTMLElement) {
    
    let stDate: Date = new Date();
    let parent: HTMLElement = btnSendResponse.parentElement!;
    let textCommentBlockParent: HTMLElement = parent.parentElement!;
    let mainBoxParent: HTMLElement = textCommentBlockParent.parentElement!;
    let commentParent: HTMLElement = mainBoxParent.parentElement!;
    let text: HTMLInputElement = parent.querySelector('#response-text')!;
    
    let responseToAComment: HTMLElement = document.createElement('div');
    let img: HTMLImageElement = document.createElement('img');
    let mainBox: HTMLElement = document.createElement('div');
    let blockNicknameDate: HTMLElement = document.createElement('div');
    let name: HTMLElement = document.createElement('p');
    let data: HTMLElement = document.createElement('p');
    let textCommentBlock: HTMLElement = document.createElement('div');
    let textResponseComment: HTMLElement = document.createElement('p');
    let blockCommentBtn: HTMLElement = document.createElement('div');
    let btnFavorites: HTMLElement = document.createElement('button');

    btnFavorites.classList.add('btn-favorites');
    btnFavorites.id = 'btn-favorites';
    btnFavorites.textContent = '❤ В избранном';
    blockCommentBtn.classList.add('block-comment-btn');
    textResponseComment.classList.add('text-response-comment');
    textCommentBlock.classList.add('text-comment-block');
    data.classList.add('data');
    data.textContent = `${stDate.getDate()}.${stDate.getMonth()+1}.${stDate.getFullYear()} ${stDate.getHours()}:${stDate.getMinutes()}`;
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
    img.src = `https://loremflickr.com/320/240?random=${Math.ceil(Math.random() * 10)}`;
    inner();
    
}
function inner() {
    let blockComment: HTMLElement = document.querySelector('#block-comment')!;
    localStorage.setItem('Commenting', blockComment.innerHTML);
}
//Изменение размера
if (window.screen.width <= 320) {
    let n: HTMLElement = document.querySelector('.name')!;
    let imgP: HTMLElement = document.createElement('div');
    let imgOs: HTMLImageElement = document.querySelector('img')!;
    imgP.append(imgOs);
    imgP.append(n);
    let div: HTMLElement = document.querySelector('.block-filling')!;
    div.prepend(imgP);
    imgP.style.display = 'flex';
    imgP.style.gap = '20px';
    let comm: NodeListOf<Element> = document.querySelectorAll('.comment');
    comm.forEach((element) => {
        let bnd: HTMLElement = element.querySelector('.block-nickname-date')!;
        let commImg: HTMLImageElement = element.querySelector('img')!;
        element.prepend(bnd);
        element.prepend(commImg);
    });
}