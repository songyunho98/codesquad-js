//2번 배열 거르기
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
function filterId(array) {
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/;

    //const remove = peoples.splice(0, 3, 'honux5');
    
    // 특수 기호 포함 요소 제거
    for (let i = 0; i < array.length; i++) {
        if (regExp.test(array[i])) {
            array.splice(i, 1);
            i--;
        }
    }

    // 아이디에서 숫자를 제거
    for (let i = 0; i < array.length; i++) 
        array[i] = array[i].replace(/[0-9]/g, "");

    console.log(array);
    
    return array;
}
filterId(peoples)
