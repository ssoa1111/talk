# JAVASCRIPT 로 끝말잇기 게임 만들기


## Number 메소드
문자열로 된 숫자를 숫자 값으로 나타낼 수 있습니다.
> Num(변수)

## 논리연산자
논리연산자를 통해 참일 경우 코드를 실행시킬 수 있습니다.
```javascript
!word || word[word.length-1] === newWord[0]
```

## scrollTo 메소드
원하는 요소의 스크롤을 이동시킬 수 있습니다.
> document.scrollTo(x,y)
```javascript
text.scrollTo(0, text.offsetHeight);
```

## click 이벤트
addEventListener를 통해 요소에 click이벤트를 부여할 수 있습니다.
> 요소.addEventListener('click',function)
```javascript
    submitBtn.addEventListener('click', ()=> {
    compareValue(word, newWord, showText);
});
```

## change 이벤트
addEventListener를 통해 요소의 변화되는 값을 감지할 수 있습니다.
> 요소.addEventListener('change',function)
```javascript
inputSelect.addEventListener('change', (e)=>{
    // 변화 값을 새로운 변수에 담음
    newWord = e.target.value;
    // input의 값 초기화
    e.target.value ='';
    // input 포커스
    inputSelect.focus();
})
```

## onkeyup 메소드
키가 떼어졌을 때 코드를 실행시킬 수 있습니다.
```javascript
inputSelect.onkeyup = (e) =>{
    if(e.keyCode == 13){
        compareValue(word, newWord, showText);
    }
}
```