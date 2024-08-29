
// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9zC58RD2rPKiDTqciIhq3qY5b0NtoRPQ",
    authDomain: "sparta-10d8f.firebaseapp.com",
    projectId: "sparta-10d8f",
    storageBucket: "sparta-10d8f.appspot.com",
    messagingSenderId: "740890493301",
    appId: "1:740890493301:web:956981f7896ca6c548133c",
    measurementId: "G-6HR5DY5SVX"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let path = window.location.pathname;
let htmlName = decodeURIComponent(path.split("/").pop().split(".")[0]);
let parsedId = htmlName; 
if (htmlName == 'sub_page') {
    const urlSearch = new URLSearchParams(window.location.search);
    parsedId = urlSearch.get('id');
}

//저장데이터 불러오기(하나만)
const docRef = doc(db, "project_01", parsedId);
const docSnap = await getDoc(docRef);
let row = docSnap.data();

let img = row['img'];
let name = row['name'];
let age = row['age'];
let mbti = row['mbti'];
let habit = row['habit'];
let blog_url = row['blog_url'];
let git_url = row['git_url'];
let comment = row['comment'];

//read
$('#img').append(`<img src="${img}">`);
$('#name').append(name);
$('#age').append(age);
$('#mbti').append(mbti);
$('#habit').append(habit);
$('#blog_url').append(blog_url);
$('#git_url').append(git_url);
$('#blog_anchor').prop('href',blog_url); //a 태그를 사용할 때
$('#git_anchor').prop('href',git_url); //a 태그를 사용할 때
$('#comment').append(comment);

//form value
$('#f-img').attr('value', img);
$('#f-name').attr('value', name);
$('#f-age').attr('value', age);
$('#f-mbti').attr('value', mbti);
$('#f-habit').attr('value', habit);
$('#f-blog_url').attr('value', blog_url);
$('#f-git_url').attr('value', git_url);
$('#f-comment').attr('value', comment);

//수정하기 클릭 시
$("#upd").click(async function () {
    $('#yes').hide();
    $('#no').css('display', 'flex');

    $('#upd').hide();
    $('#del').hide();
    $('#back-home').hide();
})

//수정하기>확인 클릭 시
$("#upd-ok").click(async function () {
    let img = $('#f-img').val();
    let name = $('#f-name').val();
    let age = $('#f-age').val();
    let mbti = $('#f-mbti').val();
    let habit = $('#f-habit').val();
    let blog_url = $('#f-blog_url').val();
    let git_url = $('#f-git_url').val();
    let comment = $('#f-comment').val();

    let row = {
        'img': img,
        'name': name,
        'age': age,
        'mbti': mbti,
        'habit': habit,
        'blog_url': blog_url,
        'git_url': git_url,
        'comment': comment,
    }

    //자신에게 해당하는 데이터의 아이디를 project_01과 row사이에 넣습니다.
    await updateDoc(doc(db, 'project_01', 'Ov0Z5ToRphy3zOLEilBr'), row);
    window.location.reload();
})

//수정하기>취소 클릭 시
$("#upd-no").click(async function () {
    window.location.reload();
})

//삭제하기 클릭시
$("#del").click(async function () {
    var answer = confirm("정말 삭제하시겠습니까?");

    if (answer) {
        //자신에게 해당하는 데이터의 아이디를 project_01과 row사이에 넣습니다.
        await deleteDoc(doc(db, 'project_01', 'Ov0Z5ToRphy3zOLEilBr'));
        window.location.href = '../index.html';
    }
})

//홈으로 돌아가기 클릭시
$("#back-home").click(async function () {
    window.location.href = '../index.html';
})