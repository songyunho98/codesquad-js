# Debugging
# breakpoints
• breakpoints는 코드 실행 중 내가 break 해보고 싶은 point.<br/>
• vsc에서는 코드라인 왼쪽 공백을 클릭 or 코드라인 클릭후 F9하면 빨간색점으로 breakpoint가 설정된다.<br/>
• 또는 코드에 debugger를 작성해 breakpoints를 설정 가능.<br/>
• reakpoints를 설정하고 debugging하면 break된 상황에 local,global various, call stack들을 볼 수 있다.<br/>

# watch
debugging을 할 때 watch에 + 버튼으로 표현식을 입력하면 breakpoints에서의 값들을 보여준다.<br/>
ex)<br/>
function fibonacci (n ){<br/>
  if (n <2 )return n ;<br/>
  const result =fibonacci (n -1 )+fibonacci (n -2 );<br/>
  return result ;<br/>
}
watch에 result===5 를 추가하면<br/>
result===5: false 에서 result===5가 될 때  result===5 : true 로 바뀐다.<br/>
원하는 변수값을 표현식에 입력해도 변수 값이 나온다.<br/>

# callstack
콜스택은 인터프리터가 중척으로 함수들이 호출될때 to keep track of its place in script  위한 매커니즘이다.<br/>
어떤함수가 현재 실행되고있고, 어떤함수 안에서 어떤함수가 호출돼 있는지 추적할 수 있게 해준다.<br/>
스크립트에서 함수가 실행되면 함수를 추가하고 끝나면 콜스택에서 제거합니다.<br/>
이 콜스택에 할당량보다 초과해서 들어가게 되면 stack overflow error  발생<br/>
ex)<br/>
function firstFunc() {<br/>
  secondFunc();<br/>
  console.log("first");<br/>
}<br/>

function secondFunc() {<br/>
  thirdFunc();<br/>
  console.log("second");<br/>
}<br/>

function thirdFunc() {<br/>
  console.log("third");<br/>
}<br/>

firstFunc();<br/>
1. firstFunc()호출, 빈 callstack생성 callstack에 firstFunc() 들어감<br/>
2. secondFunc() 호출, callstack에 secondFunc() 들어감<br/>
3. thirdFunc() 호출, callstack에 thirdFunc() 들어감<br/>
4. console.log("third"); callstack에서 thirdFunc()제거<br/>
5. console.log("second"); callstack에서 secondFunc()제거<br/>
6. console.log("first"); callstack에서 firstFunc()제거<br/>

callstack 확인하기 편리한 console.log<br/>
console.log (new Error ().stack );<br/>
# Step over / Step into / Step out

continue (resume)<br/>
다음 breakpoint로 이동한다.<br/>

•Step over<br/>
(breakpoint라인에서)다음 라인으로 이동한다.<br/>
다음 라인이 함수일 경우 그 함수 내부로는 이동하지 않고 바로 실행한다.<br/>
•Step into<br/>
step over 와 같이 다음 라인으로 이동한다.<br/>
다음 라인이 함수 일경우 그 함수 안으로 들어가서 함수내부의 동작 한줄한줄 지나간다.<br/>
•Step out<br/>
현재 함수의 나머지 부분을 실행시키고 함수의 리턴이 완료된곳에서 멈춘다.<br/>
step into로 함수로 들어간 뒤 바로 return으로 넘어가고싶을 때 사용하면 유용하다.<br/>