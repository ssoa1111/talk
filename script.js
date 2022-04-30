// 게임에 참가 할 사람 수를 담는 변수
const number = prompt('몇 명이 참가하나요?');
// input값을 감지하기 위함
const inputSelect = document.querySelector('input');
// 확인버튼
const submitBtn = document.querySelector('button');
// 입력한 값을 보여줌
const showText = document.querySelector('#word');
// 사람의 순서를 나타내기 위함
const orderNum = document.querySelector('#order');


let word;
let newWord;

// 게임에 참가하는 순서를 나타내는 함수
const orderNum__comfirm = (order)=>{
    // 태그에 입력된 수를 숫자로 변환
    const Num = Number(order.textContent);
    if(Num == number){
        order.textContent = 1;
    }else{
        order.textContent = Num + 1;
    }
}

// 버튼을 클릭하였을 때
submitBtn.addEventListener('click', ()=> {
    // 제시어가 없거나 현재 값이 맞을 때
    if(!word || word[word.length-1] === newWord[0]){
        // 입력한 내용을 현재 값에 담고 나타냄
        word = newWord;
        showText.innerHTML += `<div>제시어 : ${word}</div>`;
        
        // 게임에 참가하는 순서를 나타내는 함수
        orderNum__comfirm(orderNum);
        showText.scrollTo(0, showText.offsetHeight);
    }else{
        alert('올바른 단어가 아닙니다');
    }
});

// input상자에서 enter를 눌렀을 때
inputSelect.onkeyup = (e) =>{
    if(e.keyCode == 13){
        // 제시어가 없거나 현재 값이 맞을 때
        if(!word || word[word.length-1] === newWord[0]){
            // 입력한 내용을 현재 값에 담고 나타냄
            word = newWord;
            showText.innerHTML += `<div>제시어 : ${word}</div>`;
            
            // 게임에 참가하는 순서를 나타내는 함수
            orderNum__comfirm(orderNum);
            showText.scrollTo(0, showText.offsetHeight);
        }else{
            alert('올바른 단어가 아닙니다');
        }
    }
}

// input의 변화 값을 가져옴 
inputSelect.addEventListener('change', (e)=>{
    // 변화 값을 새로운 변수에 담음
    newWord = e.target.value;
    // input의 값 초기화
    e.target.value ='';
    // input 포커스
    inputSelect.focus();
})

