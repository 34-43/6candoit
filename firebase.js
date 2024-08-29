
// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
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

//템플릿 삭제. 템플릿은 bootstrap 전처리를 트리거하기 위해서 존재합니다. 디자인 변경 시, 하단의 profile_card 템플릿 리터럴(``안에 변수가 있는 문자열)도 바꿔줘야 합니다.
document.getElementById('profile_card_template').remove()

//저장데이터 불러오기
let docs = await getDocs(collection(db, "project_01"));
docs.forEach((doc) => {
    let row = doc.data();

    let name = row['name'];
    let animal = row['animal'];
    let animal_text = row['animal_text'];

    let profile_card = `<div class="d-inline-flex card border-0" style="width: 200px;" onclick="location.href='sub/${name}.html'">
                    <h3 class="m-2 text-center">${name}</h3>
                    <img class="rounded-circle img-thumbnail" style="width: 200px; height: 200px;" src="${animal}">
                    <p class="p-2 bg-body-tertiary">${animal_text}</p>
                </div>`;
    let reff_obj = document.createElement('div');
    reff_obj.innerHTML = profile_card;
    document.getElementById('profile_card_list').append(reff_obj);
});

//form 창 띄우기
$("#f-btn").click(async function () {
    $('#form-box').show();
    $('#f-btn').hide();
})
//확인 시(create)
$("#make-ok").click(async function () {
    let img = $('#f-img').val();
    let name = $('#f-name').val();
    let age = $('#f-age').val();
    let animal = $('#f-animal').val();
    let animal_text = $('#f-animal-text').val();
    let mbti = $('#f-mbti').val();
    let habit = $('#f-habit').val();
    let blog_url = $('#f-blog-url').val();
    let git_url = $('#f-git-url').val();
    let comment = $('#f-comment').val();

    let row = {
        'name': name,
        'img': img,
        'age': age,
        'animal': animal,
        'animal_text': animal_text,
        'mbti': mbti,
        'habit': habit,
        'blog_url': blog_url,
        'git_url': git_url,
        'comment': comment,
    }
    console.log(row);
    await setDoc(doc(db, "project_01", name), row);

    alert('저장 완료!');
    window.location.reload();//새로고침
})