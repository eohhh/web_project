// member.js
// localStorage에서 members 정보를 가지고 와야함.
let members = [];
members = JSON.parse(localStorage.getItem('members'));
console.log(members);
// members의 값을 활용해서 tbody 영역의 html작성.
members.forEach(function (elem, idx, ary) {
  document.querySelector('#list').innerHTML += makeRow(elem);
});

// id, pw, name 속성을 활용해서 tr>td*3을 만들어주는 함수.
function makeRow(item = {}) {
  let str = ''; // tr>td*3
  str += '<tr>';
  for (let prop in item) { // str += '<td>' + elem[prop] + '</td>'; 이 3번 반복. (members에 있는 값만큼.)
    str += '<td>' + item[prop] + '</td>';
  }
  str += '</tr>';
  return str; // 생성된 tr>td*3을 반환.
}

// form.submit 이벤트.
document.forms.addMember.addEventListener('submit', function (e) { // submit이벤트가 발생하면 function.
  e.preventDefault(); // submit 차단.
  let id = document.querySelector('input[name="user_id"]').value;
  let pw = document.querySelector('input[name="user_pw"]').value;
  let name = document.querySelector('input[name="user_name"]').value;

  let newItem = makeRow({id, pw, name});
  document.querySelector('#list').innerHTML += newItem;

  // localStorage에 저장.
  members.push({id, pw, name});
  localStorage.setItem('members', JSON.stringify(members));
})