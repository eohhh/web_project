//init.js

/**
상품코드
상품명
상품가격
평점
이미지
할인율
--회원 관련.
회원아이디
비밀번호
회원이름
권한(일반,관리자)
 */

// 상품정보, 회원정보 등 => 변수에 초기값 지정.
const productData = [
  {prodCode: 'P001', prodName: '사과', price: 2000, likeit: '40000+', image: 'food/images/apple.jpg', sale: 15},
  {prodCode: 'P002', prodName: '바나나', price: 3000, likeit: '50+', image: 'food/images/banana.jpg', sale: 10},
  {prodCode: 'P003', prodName: '복숭아', price: 4000, likeit: '10+', image: 'food/images/peach.jpg', sale: 0},
  {prodCode: 'P004', prodName: '청포도', price: 5000, likeit: '100+', image: 'food/images/grape.jpg', sale: 10}
]
const memberData = [
  {id: 'user01', pw: 1111, name: '홍길동', responsibility: 'User'},
  {id: 'user02', pw: 2222, name: '김민서', responsibility: 'User'},
  {id: 'user03', pw: 3333, name: '황주연', responsibility: 'Admin'}
]
const cartData = [
  {id: 'user01', product: 'P001', qty: 3},
  {id: 'user02', product: 'P002', qty: 4},
  {id: 'user03', product: 'P003', qty: 5},
  {id: 'user01', product: 'P002', qty: 2}
]