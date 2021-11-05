//2번 배열 거르기
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
function filterId(array) {
    const resultAperray = [];
    //const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/;

    //const remove = peoples.splice(0, 3, 'honux5');

    // 아이디에서 숫자를 제거
    for (let i = 0; i < array.length; i++) 
        array[i] = array[i].replace(/[0-9]/g, "");

    console.log(array);
    
    return array;
}
filterId(peoples)
