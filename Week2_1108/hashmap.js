function hashmapfunction() {
    this.map = new Object();

    //put(String key, String value) 키-값을 추가한다.
    hashmapfunction.prototype.put = function(key, value) {
        this.map[key] = value;
    };
    //remove(String key) 해당 키에 있는 값을 삭제한다.
    hashmapfunction.prototype.remove = function(key) {
        delete this.map[key];
    };
    //containsKey(String) 해당 키가 존재하는지 판단해서 Bool 결과를 리턴한다.
    hashmapfunction.prototype.containsKey = function(key) {
        return key in this.map;
    };
    hashmapfunction.prototype.containsKey = function(key) {
        return key in this.map;
    };
    //get(String) 해당 키와 매치되는 값을 찾아서 리턴한다.
    hashmapfunction.prototype.get = function(key) {
        return this.map[key];
    };
    //isEmpty() 비어있는 맵인지 Bool 결과를 리턴한다.
    hashmapfunction.prototype.isEmpty = function() {
        return Object.keys(this.map).length === 0;
    };
    //keys() 전체 키 목록을 [String] 배열로 리턴한다.
    hashmapfunction.prototype.keys = function() {
        return Object.keys(this.map);
    };
    //replace(String key, String value) 키-값으로 기존 값을 대체한다.
    hashmapfunction.prototype.replace = function(key, value) {
        this.map[key] = value;
    };
    hashmapfunction.prototype.values = function () {
        const values = [];
        for (const key in this.map) {
          values.push(this.map[key]);
        }
        return values;
      };
    //size() 전체 아이템 개수를 리턴한다.
    hashmapfunction.prototype.size = function() {
        var count = 0;
        for(const key in this.map) {
            count++;
        }
        return count;
    };
    //clear() 전체 맵을 초기화한다.
    hashmapfunction.prototype.clear = function() {
        for(const key in this.map) {
            delete this.map[key];
        }
    };
}

//결과
const cMap = new hashmapfunction();
cMap.put('Jun', '01012345678'); //추가
cMap.put('Julie', '01098765432'); //추가
cMap.put('Delpy', '01034567890'); //추가
cMap.put('Bowen', '01078901234'); //추가
console.log('keys() : ', cMap.keys()); //[ 'Jun', 'Julie', 'Delpy', 'Bowen' ]
console.log('values() : ', cMap.values()); //[ '01012345678', '01098765432', '01034567890', '01078901234' ]

cMap.remove("Bowen");
console.log('keys() : ', cMap.keys()); //[ 'Jun', 'Julie', 'Delpy' ]
console.log('values() : ', cMap.values()); //[ '01012345678', '01098765432', '01034567890' ]

console.log('containsKey("song")', cMap.containsKey('song')); //false
console.log('containsKey("Jun")', cMap.containsKey('Jun'));  //true

cMap.isEmpty("Jun");
console.log('isEmpty() : ', cMap.isEmpty()); //값이 들어있으면 false

cMap.replace("Delpy", "Song");
console.log('get("Delpy") : ', cMap.get('Delpy')); //Delpy -> Song
console.log('size() : ', cMap.size()); //4
cMap.clear();
console.log(cMap.keys()); //초기화[]
