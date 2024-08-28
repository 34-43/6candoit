
// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
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

//저장데이터 불러오기
let docs = await getDocs(collection(db, "project_01"));
docs.forEach((doc) => {
    console.log(doc);
    let row = doc.data();
    console.log(row);

    document.getElementById('profile_card_template').remove()
    
    let name = row['name'];
    let url_name = "Kimjihye";
    let img_src = row['img'];
    let description = row['comment'];
    let profile_card = `<div class="d-inline-flex card border-0" style="width: 200px;" onclick="location.href='sub/${name}.html'">
                    <h3 class="m-2 text-center">${name}</h3>
                    <img class="rounded-circle img-thumbnail" style="width: 200px; height: 200px;" src="${img_src}">
                    <p class="p-2 bg-body-tertiary">${description}</p>
                </div>`;
    let reff_obj = document.createElement('div');
    reff_obj.innerHTML = profile_card;
    document.getElementById('profile_card_list').append(reff_obj);

    // let img = row['img'];
    // let name = row['name'];
    // let age = row['age'];
    // let mbti = row['mbti'];
    // let habit = row['habit'];
    // let blog_url = row['blog_url'];
    // let git_url = row['git_url'];
    // let comment = row['comment'];

    // //read
    // $('#img').append(`<img src="${img}">`);
    // $('#name').append(name);
    // $('#age').append(age);
    // $('#mbti').append(mbti);
    // $('#habit').append(habit);
    // $('#blog_url').append(blog_url);
    // $('#git_url').append(git_url);
    // $('#comment').append(comment);

    // //form value
    // $('#f-img').attr('value', img);
    // $('#f-name').attr('value', name);
    // $('#f-age').attr('value', age);
    // $('#f-mbti').attr('value', mbti);
    // $('#f-habit').attr('value', habit);
    // $('#f-blog_url').attr('value', blog_url);
    // $('#f-git_url').attr('value', git_url);
    // $('#f-comment').attr('value', comment);
});

// //수정하기 클릭 시
// $("#upd").click(async function () {
//     $('#yes').hide();
//     $('#no').css('display', 'flex');

//     $('#upd').hide();
//     $('#del').hide();
// })

// //확인 클릭 시
// $("#upd-ok").click(async function () {
//     let img = $('#f-img').val();
//     let name = $('#f-name').val();
//     let age = $('#f-age').val();
//     let mbti = $('#f-mbti').val();
//     let habit = $('#f-habit').val();
//     let blog_url = $('#f-blog_url').val();
//     let git_url = $('#f-git_url').val();
//     let comment = $('#f-comment').val();

//     let row = {
//         'img': img,
//         'name': name,
//         'age': age,
//         'mbti': mbti,
//         'habit': habit,
//         'blog_url': blog_url,
//         'git_url': git_url,
//         'comment': comment,
//     }

//     await updateDoc(doc(db, 'project_01', 'name'), row);
//     window.location.reload();
// })

// //취소 클릭 시
// $("#upd-no").click(async function () {
//     window.location.reload();
// })

// //삭제하기 클릭시
// $("#del").click(async function () {
//     var answer = confirm("정말로 삭제하시겠습니까?");

//     if (answer) {
//         await deleteDoc(doc(db, 'project_01', 'name'));
//         window.location.reload();
//         //window.location.href = '/';
//     }
// })