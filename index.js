//index.js
let members = [
  {id: 'user01', pw: '1111', name: '홍길동'},
  {id: 'user02', pw: '2222', name: '김민서'},
  {id: 'user03', pw: '3333', name: '최유진'}
]
let members_json = JSON.stringify(members);
// 회원정보.
localStorage.setItem('members', members_json);


// 연습.
let name = 'hong';
localStorage.setItem('name', 'Hong');
console.log(localStorage.getItem('name'));

// json문자열.
let json = `{
  "name": "Hong",
  "age": 20
}`
// 문자열 -> 객체
let obj = JSON.parse(json);
console.log(json, obj);

// obj.name , obj.age
localStorage.setItem('friend', json);
let info = localStorage.getItem('friend');
console.log(JSON.parse(info)['age']); // parsing, 문자열에 담겨있는 json을 가지고 와서 객체로 편하게 사용, // 문자열 -> 객체


localStorage.setItem('friend2', obj);
info = localStorage.getItem('friend2');
console.log(info.name);

// 위와 반대로 자바스크립트의 객체를 문자열로.
// 객체 -> 문자열.
obj = {
  name: '홍길동',
  friends: [{
    name: '김민수',
    phone: '1111'
  },{
    name:  '박현수',
    phone: '2222'
  }]
};
json = JSON.stringify(obj); // 객체 -> 문자열.
console.log(json);
localStorage.setItem('myfriend', json);