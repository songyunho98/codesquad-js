# Debugging
# breakpoints
• breakpoints는 코드 실행 중 내가 break 해보고 싶은 point.<br/>
• vscode에서는 코드라인 왼쪽 공백을 클릭 or 코드라인 클릭후 F9하면 빨간색점으로 breakpoint가 설정된다.<br/>
• 또는 코드에 debugger를 작성해 breakpoints를 설정 가능.<br/>
• reakpoints를 설정하고 debugging하면 break된 상황에 local,global various, call stack들을 볼 수 있다.<br/>

# watch
debugging을 할 때 watch에 + 버튼으로 표현식을 입력하면 breakpoints에서의 값들을 보여준다.<br/>
ex)<br/>
function fibonacci (n){<br/>
  if (n <2)return n ;<br/>
  const result =fibonacci (n -1)+fibonacci (n -2);<br/>
  return result ;<br/>
}
watch에 result===5 를 추가하면<br/>
result===5: false 에서 result===5가 될 때  result===5 : true 로 바뀐다.<br/>
원하는 변수값을 표현식에 입력해도 변수 값이 나온다.<br/>

# callstack
콜스택이란 ‘함수의 호출 정보가 차곡차곡 쌓여있는 스택’을 의미한다. 프로그램 내에서 코드의 실행 순서를 기록하는 자료구조인 셈이다.<br/>
콜스택 역시 스택이기 때문에 LIFO 방식으로 동작한다. 함수가 호출된 순서대로 스택에 추가되고(push)되고, 호출 순서와는 반대로 맨 마지막에 호출된 함수부터 실행되면서 스택에서 제거(pop)된다.<br/>
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