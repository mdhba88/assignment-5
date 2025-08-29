Question: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer to the question:
=> document.getElementById("idName")
১। এটি যে এলিমেন্ট এর ভিতরে id name দেওয়া হয় সেই element কে শো করে। আর যদি একই নাম একাধিক লিমিমেন্ট এর ভেতর দেওয়া হয় সেক্ষেত্রে প্রথম এলিমেন্ট কে ফেরত দিবে।

উদাহরণ:
let anyVar = document.getElementById("myId");

২। যখন এখানে আইডি নাম দেওয়া হবে কিন্তু সেটা যদি এলিমেন্টের ভিতরে খুঁজে না পাই সে ক্ষেত্রে null রিটার্ন করবে।

=> document.getElementsByClassName("className")
১। এটি যে এলিমেন্ট এর ভিতরে class name দেওয়া হয় সেই element কেই শো করবে। আর যদি একই নাম একাধিক এলিমেন্টে দেওয়া হয় সেক্ষেত্রে এই নাম যতগুলো এলিমেন্ট এর ভিতরে খুঁজে পাবে সবগুলো এলিমেন্টকেই শো করবে। সেক্ষেত্রে আলাদা কোন এলিমেন্ট কে ধরতে চাইলে ইনডেক্স নাম্বার ব্যবহার করতে হবে।

উদাহরণ:
let anyVar = document.getElementsByClassName("myClass");
console.log(items); // সব এলিমেন্টকে ফেরত দিবে। (যদি একাধিক এলিমেন্টের ভিতরে একই ক্লাস নাম দেওয়া হয়)
console.log(items[0]); // প্রথম element কে ফেরত দিবে। (যদি একাধিক এলিমেন্টের ভিতরে একই ক্লাস নাম দেওয়া হয়)

২। যখন এখানে আইডি নাম দেওয়া হবে কিন্তু সেটা যদি এলিমেন্টের ভিতরে খুঁজে না পাই সে ক্ষেত্রে একটা খালি array রিটার্ন করবে।

=> document.querySelector("selector")
১। এখানে সিএসএস সিলেক্টর ব্যবহার করে এলিমেন্টকে ধরা হয়, যেমন (#id, .class, tag, attribute ইত্যাদি)। সিএসএস সিলেক্টরের ভিতরে যদি একাধিক আইটেম থাকে সেক্ষেত্রে এটা শুধুমাত্র প্রথম element কে রিটার্ন করে।

উদাহরণ:
let firstItem = document.querySelector(".list-item");

২। যদি element না পাওয়া যায় তাহলে null রিটার্ন দিবে।

=> document.querySelectorAll("selector")
১। এখানে সিএসএস সিলেক্টর ব্যবহার করে এলিমেন্টকে ধরা হয়, যেমন (#id, .class, tag, attribute ইত্যাদি)। সিএসএস সিলেক্টরের ভিতরে যদি একাধিক আইটেম থাকে সেক্ষেত্রে এটা NodeList আকারে ফেরত দেয়। সেক্ষেত্রে আলাদা কোন এলিমেন্ট কে ধরতে চাইলে ইনডেক্স নাম্বার ব্যবহার করতে হবে।

উদাহরণ:
let allItems = document.querySelectorAll(".list-item");
console.log(allItems);

২। যদি element না পাওয়া যায় তাহলে খালি নোডলিস্ট রিটার্ন দিবে।

Question: How do you create and insert a new element into the DOM?

Answer to the question:
১️। DOM(Document Object Model) এ নতুন element তৈরি করতে document.createElement("tagName") ব্যবহার করা হয়।

উদাহরণ:
let newDiv = document.createElement("div");

২️। DOM(Document Object Model) এ element insert করতে appendChild() ব্যবহার করা হয়।

উদাহরণ:
let container = document.getElementById("container");
container.appendChild(newDiv); // container এর শেষে যোগ হবে।

Question: What is Event Bubbling and how does it work?

Answer to the question:
Event Bubbling: Event Bubbling হলো একটা প্রক্রিয়া যেখানে কোনো child element-এ event চালালে, সেটা প্রথমে সেই element-এ কাজ করবে, তারপর তার parent element এ event দেওয়া থাকলে ধাপে ধাপে সেই parent element এ কাজ করবে। তারপর তার grandparent element এ event দেওয়া থাকলে ধাপে ধাপে সেই grandparent element এ কাজ করবে। এভাবে event নিচ থেকে ওপরের দিকে উঠতে থাকে বা উপরের দিকে ছড়ায়।

বাবল যেভাবে কাজ করে:
উদাহরণ:
HTML কোড:

<body>
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
</body>

Javascript কোড:
document.body.addEventListener("click", function () {
alert("Body clicked!");
});

document.getElementById("parent").addEventListener("click", function() {
alert("Parent div clicked!");
});

document.getElementById("child").addEventListener("click", function() {
alert("Child button clicked!");
});

এখানে যখন button এ ক্লিক করা হবে তখন প্রথমে button (child) এ event চলবে। তারপর event বাবল হয়ে parent div এ যাবে এবং তার event চলবে। তারপর আবার বাবল হয়ে body তে যাবে এবং সেটার event চলবে। ফলে ৩টা alert একটার পর একটা দেখাবে। আবার যদি ইভেন্ট শুধুমাত্র বাটনে থাকে প্যারেন্ট ডিভে তার প্যারেন্ট বডিতে না থাকে সে ক্ষেত্রে বাবল হবে ঠিকই কিন্তু কোন প্রতিক্রিয়া দেখাবে না। অর্থাৎ নিচ থেকে উপরের দিকে বাবল হয়ে যাবে কিন্তু কোন প্রতিক্রিয়া দেখাবে না।

Question: What is Event Delegation in JavaScript? Why is it useful?

Answer to the question:
Event Delegation: Event Delegation হলো একটা parent element এ event বসিয়ে তার ভিতরে থাকা child element এর উপরে ওই একই ইভেন্ট কাজ করানোর জন্য ব্যবহার করি। অর্থাৎ যেখানে সরাসরি প্রতিটা child element এ আলাদা event না বসিয়ে, শুধু parent element এ event বসিয়ে এর মাধ্যমে সব child এও একই event দিয়ে নিয়ন্ত্রণ করে।

Event Delegation কাজ করে: যখন কোনো child element-এ event ঘটে, সেটা parent পর্যন্ত বাবল হয়ে যায়।
তাহলে parent থেকে চেক করলেই বোঝা যায় কোন child এ event ঘটেছে।

উদাহরণ:

HTML code:

<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>

javascript code:
const menuParent = document.getElementById("menu");

menuParent.addEventListener("click", function () {
menuParent.style.backgroundColor = "orange";
}

Event Delegation উপকারীতাঃ
১। কোড ছোট হয় এবং পারফরম্যান্স ভালো হয়: প্রতিটা child element এ আলাদা event না বসিয়ে parent element এ একটা event বসিয়ে child element এ একই event রান করানো যায়। যে কারণেই কোড ছোট হয় পারফরম্যান্স ভালো থাকে।
২। Dynamic elements handle করা যায়: পরে যদি নতুন child (যেমন নতুন li) DOM এ যোগ করা হয়, তার মধ্যেও ইভেন কাজ করানো যায়।
৩। Code clean হয় এবং মেন্টেন করার সহজ হয়: অনেক ছোট ও maintainable কোড লেখা যায়।

What is the difference between preventDefault() and stopPropagation() methods?

Answer to the question:-
=> event.preventDefault()
এই মেথডটি কোন অটোমেটিকভাবে সেট হয়ে থাকা কাজকে বন্ধ করার জন্য ব্যবহার হয়।

উদাহরণ:
<a href="https://google.com" id="googleLink">Go to Google</a>

const goLink = document.getElementById("googleLink");

goLink.addEventListener("click", function (e) {
e.preventDefault();
});

এখানে সাধারণত লিংকে ক্লিক করলে গুগলে চলে যেত।
কিন্তু preventDefault() দেওয়ায় ডিফল্ট কাজ অর্থাৎ google পেজে যাওয়া বন্ধ হয়ে যাবে।

=> event.stopPropagation()
এই মেথডটি event bubbling/capturing বন্ধ করার জন্য ব্যবহার করা হয়। মানে কোন চাইল্ড এলিমেন্টে ইভেন্ট সেট করলে সেটা আর parent element এর দিকে যাবে না।

উদাহরণ:
HTML code:

<div id="parentUl" style="width: 50vh; height: 20vh; background-color: green; display: flex; align-items: center; justify-content: center;">
  <button id="childBtn">Button</button>
</div>

javascript code:
const parentElement = document.getElementById("parentUl");
parentElement.addEventListener("click", function () {
alert("Parent Click");
});

const childElement = document.getElementById("childBtn");
childElement.addEventListener("click", function (event) {
event.stopPropagation(); // event propagation method applying
alert("Child Click");
});

এখানে button এ ক্লিক করলে শুধু "Child clicked!" alert আসবে কিন্তু Parent এর alert আর কাজ করবে না, কারণ বাবলিং বন্ধ হয়ে গেছে।
