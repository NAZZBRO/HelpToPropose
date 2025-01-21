const dialogueContent = document.getElementById('dialogue-content');
const dialogueText2 = document.getElementById('dialogue-text2');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const responseButton = document.getElementById('response-button');
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const WaitForTime = document.getElementById('Waited-Her');
const responseButton2 = document.getElementById('response2-button');
const TalkNow = document.getElementById('Talk-her');
const abtFamily = document.getElementById('Family');
const PlaceLiked = document.getElementById('Place-Like');
const responseButton3 = document.getElementById('response-button3');
const responseButton4 = document.getElementById('response-button4');
const EarlyDate = document.getElementById('Date-Early');
const HerHobbies = document.getElementById('Her-Hobbies');
const responseButton5 = document.getElementById('response-button5');
const askNumber = document.getElementById('Ask-number');
const sayBye = document.getElementById('say-bye');
const responseButton6 = document.getElementById('response-button6')
const FirstDate = document.getElementById('first-date');
const KnowMore = document.getElementById('know-more');
const responseButton7 = document.getElementById('response-button7');
const ContinueTalk = document.getElementById('Continue-talk');
const ChangeTopic = document.getElementById('change-topic');
const responseButton8 = document.getElementById('response-button8');
const Kissher = document.getElementById('Kiss-Her');
const Hugher = document.getElementById('Hug-her');
const thenks = document.getElementById('than-ks');
const responsebutton9 = document.getElementById('response-button9');


function DrawImage4(){

  const img3 = new Image();
  img3.src = 'John.png';
  const x3=10;
  const y3=canvas.height/2-img.height/15;
  const W3=150;
  const H3=411;
  //canvas.height=500
  //canvas.width=650
  if (img3.complete) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(img3,x3,y3,W3,H3);
  }else{
    img3.onload = function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img3, x3, y3, W3,H3);
    };
  }
  }



  function DrawImage5(){
 
    const img4 = new Image();
    img4.src = 'Hannah.png';
    const x4=480;
    const y4=151;
    const W4=150;
    const H4=397;
    if (img4.complete) {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.drawImage(img4,x4,y4,W4,H4);
    }else{
      img4.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img4, x4, y4, W4,H4);
      };
    }
    }






const img = new Image();
img.src = 'John.png';
const imgwidth=150;
const imgheight=411;
//const imgx=10;
let x=10;
let y = canvas.height;
const targetY=canvas.height/2-img.height/15;
const speed=5;
let animating=true;
function DrawImage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img,x,y,imgwidth,imgheight);

if (y>targetY) {
  y-=speed;
}else{
  animating=false;
}
 if (animating) {
  requestAnimationFrame(DrawImage);
 }
}


function drawImage2(){
  const img2 = new Image();
  img2.src = 'angryJohn.png';
  const x2=150;
  const y2=266;
  const W2=354;
  const H2=234;
  if (img2.complete) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(img2,x2,y2,W2,H2);
  }else{
    img2.onload = function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img2, x2, y2, W2,H2);
    };
  }
  }



  const Herimg = new Image();
Herimg.src = 'Hannah.png';
const herimgW = 150;
const herimgH = 397;
let herX = canvas.width; // 650 Start from the right edge of the canvas
let herY = canvas.height / 2 - herimgH / 4; // Center the image vertically
const herTarget = 500; // Target position is just off the left edge of the canvas
const Herspeed = 3;
let animatHer = true;

function DrawImage3() {
    
   ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(Herimg, herX, herY, herimgW, herimgH);
    
    if (herX > herTarget) {
        herX -= Herspeed;
    } else {
        animatHer = false;
    }
    
    if (animatHer) {
        requestAnimationFrame(DrawImage3);
    }
}








  






const dialogueArray = [
  "There is a boy who needs your help to do something!",
  "His name is John. He is in a big problem.",
  "Will you help him?",
];

const dialogue2Array = [
  "He has a watch which can use to travel reverse in time",
  "Today he is going to propose his crush again!",
  "Do you know why I said 'again'?",
  "Because he already proposed multiple times and got rejected",
  "Every time when he resets the time it will go to the time when he met her the first time",
  "But today he is not alone.. you will help him to get accepted by her",
  "She is very sensitive, think twice before asking anything!",
  "Now onwards you will get two options to select",
  "His life will be decided through your selection.. so be careful",
  "Let's get started",
  "Oh, here she comes!"
];
const dialogue3Array = [
"John:Hi, I'm John. It's great to meet you!",
"Hannah:Hi John, I'm Hannah.How are you doing today?",
"John:I'm doing well,thanks for asking!How about you?",
"Hannah:Today is my first day in this place"
];

/*const dialogue3Array1=[
"John:Hi, I'm John. It's great to meet you!",
"John:I'm doing well,thanks for asking!How about you?"
];

const dialogue3Array2=[
"Hannah:Hi John, I'm Hannah.How are you doing today?",
"Hannah:Today is my first day in this town"
];*/

const NarratArray1 =[
  "Someone got to her first!",
  "Wait...He is just an average guy..",
  "Oh!shit its Carl,he won't get her,will he?",
  "They are laughing...seems she like him",
  "Never mind that",
  "Don't loose next chance to talk to her",
  "Great things take time"
]; 


const NarratArray1_2 =[
"Later that day...",
"She is standing there alone",
"Don't miss this,it's your last chance",
"Its right time to talk"
];
const dialogueArray1_2=[
  "John:Hey,I'm John",
  "Hannah:Hi John!Im Hannah,Nice to meet you!",
  "John:Hannah,that's a beautiful name!What brings you here?",
  "Hannah:Aww,thank you,John!I'm just grabbing a coffee before work",
  "John:Yeah ,it's a great spot!I come here whenever I need a change of scenery.What do you do ,if you don't mind me asking?",
  "Hannah:Ah,that's really cool! I'm a graphic designer,so I like good atmosphere to get my creative ideas.How about you,What do you do?",
  "John:Graphic design is amazing!I've always been fascinated by how designers can bring ideas to life.I'm actually a software engineer,so i'm more on tecnical side,but i appreciate the creativity that goes into design",
  "Hannah:Wow,that's really cool!i've worked with developers on projects before,and i always impressed by their problem solving skills.What kind of projects do you usually work on?",
  "John:That's really great to here!I've mostly worked on internal tools and software for my company,but i'm looking to explore more projects in the future.maybe we can collaborate on something!",
  "Hannah:That's sound amazing!I've been wanting to work on a personal project,and having a development partner would be incredible.",
  "John:I feel like we're getting started !Would you like to grab coffee and explore more ideas together?",
  "Hannah:Absolutly!I'm free tomorrow afternoon.Would you like to meet at the new coffee shop downtown",
  "John:Great choice! Ilove that coffee shop.How about 3PM tomorrow?I'll make sure to reserve us a table by window.",
  "Hannah:Awesome,3PM sounds perfect!Thanks for taking care of the reservation,John.I'm really looking forward to it!",
  "John:Likewise,Hannah! I'm excited to continue our converationand explore more ideas together.Tomorrow 3PM it is!",
  "Hannah:Great,Thanks for the talk,John.Have a fantastic evening,see you tomorrow"

];
const NarratArray1_3 = [
  "Next day",
  "Bro its 3PM",
  "Be ready..",
  "Remember to be genuine, smile, and show your interest in her",
  "The goal is to be yourself, be friendly, and set a positive tone for your time together!"
];

const dialogueArray1_3 = [
"John:Hey, great to see you! I'm excited to chat about how my software engineering skills can mesh with your graphic design expertise.",
"Hannah:Hey, great to be here! I think our skills could mesh really well - let's chat about some possibilities.",
"John:Definitely! I'd love to hear your thoughts on how your design skills could complement my engineering expertise.",
"Hannah:I'd love to add a visual touch to your projects. Maybe we could start with a small project, like a website or app redesign?",
"John:That sounds great! I have a project in mind that could use a fresh design perspective. Let me tell you about it...",
"Hannah:Awesome, I'd love to hear about it! What kind of project is it? A website, app, or something else?",
"John:It's a web application I've been working on, a platform for booking travel. I've got the functionality down, but I think a fresh design perspective could really make it shine.",
"Hannah:That sounds like a great project! I'd love to help make it shine. Can you show me what you have so far, and we can discuss some ideas for enhancing the design and user experience?",
"John:Great! I've got a demo version set up. Let me show you the layout, and we can walk through the features together.",
"Hannah:Excellent! I'm excited to see the demo. Please go ahead and walk me through the features, and I'll provide feedback and suggestions.",
"*Shows the demo*",
"Hannah:This is great!The user dashboard is so userfriendly.I like it!"
];



const dialogueArray1_5 = [
  "John:Yeah..thats the best design i got..will you give a try in it?",
  "Hannah:Ofcourse..I will help you..but not today i will let you know when the work is finished",
  "John:Thanks for helping me..",
  "Hannah:Friends will help eachother,right?..thats what i'm doing",
  "John:Yeah friends will help eachother",
  "Hannah:So bye then..I will let you know when it's finished",
  "John:Ok then,Bye"
];

const NarratArray1_4=[
  "Bro she referred you just as a friend",
  "But don't worry about that",
  "Remember,Great Things Take Time",
  "After some days she said to meet her,work is finished",
  "Today is the day",
  "Your should let her know your feeling for her"
];

const dialogueArray1_6=[
  "John:Hai Hannah!how is you day going",
  "Hannah:It's a long day,work pressure,How is yours?",
  "John:Nothing special except this!...same as everyday",
  "Hannah:Your project design is almost finished...only remaining is to connect with the backend",
  "John:So,only my work remain now.Are you free tonight?..we can celebrate this",
  "Hannah:Oh!sorry,actually I'm having a date tonight",
  "John:Oh!That's alright..who's that lucky guy?",
  "Hannah:His name is Carl...You know him,don't you?",
  "John:Yeah,I know him......"
];



const NarratArray1_5=[
  "You was late",
  "Don't be sad bro",
  "You tried your best",
  "You'll get a better girl than her",
  "I know that hurts,but there is nothing we can do",
  "Time reseting!"
];



const dialogueArray1_4=[
"John:I've been meaning to ask, what do you like to do outside of design and work? Any fun hobbies or interests?",
"Hannah:I'm a bit of a foodie, so I enjoy trying out new recipes and cooking techniques in my free time. It's amazing how much creativity and experimentation goes into cooking, similar to design",
"John:No way, me too! I love experimenting with new flavors and ingredients. What kind of cuisine do you enjoy cooking the most? I've been getting into Korean cooking lately, the combination of flavors is amazing!",
"Hannah:No way, me too! I love experimenting with new flavors and ingredients. What kind of cuisine do you enjoy cooking the most? I've been getting into Korean cooking lately, the combination of flavors is amazing!",
"John:I know, right? The combination of sweet, spicy, and savory is addictive! I've been meaning to try my hand at making kimchi stew, have you ever made it?",
"Hannah:Kimchi stew is a favorite of mine! I make it all the time, it's so comforting and flavorful. My secret ingredient is adding a bit of ginger and garlic for extra depth. Do you have a recipe in mind or want some tips?",
"John:Love to hear more about your Korean cooking experience and secrets! What inspired your recipes?",
"Hannah:Ah, thank you for asking! I grew up watching my halmoni(grandma) cook Korean dishes, and I've experimented with her recipes over the years",
"John:Aww, that's lovely! Did you learn any cooking secrets from her?",
"Hannah:Oh, yes! She shared her famous ganjang (Korean soy sauce) recipe and the trick to making tender, juicy bulgogi beef.",
"John:Would you like to cook up some bulgogi beef together and share more of your halmoni's recipes over a meal?",
"Hannah:That sounds amazing! I'd love to cook with you and share more of my halmoni's secrets. When and where?",
"John:How about this weekend at my place? I've got all the ingredients we need, and we can make a day of it!",
"Hannah:Awesome, I'm so down! What time works best for you? And should I bring anything besides my appetite?",
"John:How about 11 am? And just your wonderful self and your halmoni's recipes - I've got everything else covered!",
"Hannah:Perfect! 11 am it is! I'll bring my halmoni's recipes and a big smile. See you then!",
"John:Me too! It's going to be a fantastic day of food, stories, and new memories. See you Saturday!",
"Hannah:Yay! I'm already counting down the hours. Bye for now, and see you Saturday!",
"John:Aww, same here! Looking forward to a fantastic Saturday. Bye for now, and see you soon!",
"Hannah:Bye for now! Take care, and get ready for a day filled with laughter, food, and halmoni's love!"
];

const NarratArray1_6=[
  "Control yourself",
  "Be polite",
  "Now it's not like before",
  "It's in your place now",
  "Think 3 times before saying or doing anything",
  "*Knocks the door*",
  "OMG!..She is here",
  "Don't do anything stupid"
];


const dialogueArray1_7=[
  "Hannah:Hai!..am I late?",
  "John:No!..your on time,I'll get some coffee",
  "Hannah:Yeah..that will be great",
  "John:(Handing coffee)So,How was your day?",
  "Hannah:A bit boring,but here we are,ready to make it a day",
  "John:Yep..you better start cooking,I'll be your assistant",
  "Hannah:I almost forgot that,lets get started",
  "After cooking..dishes are ready to eat",
  "John:(while eating)This is the best bulgogi beef i've ever eaten",
  "Hannah:Don't lie to me",
  "John:I'm not lying,it's best,very tasty",
  "Hannah:So then ,this is the best ever review that I've got in my life",
  "John:(After eating)So whats our plan for rest of the day?Shall we go for a movie?",
  "Hannah:(Chcks phone)Oh! sorry I should go now,I had a very good experience with you,You will always be my friend",
  "John:Mee too had a great moment in my life..",
  "Hannah:(Walking towards door)Bye for today.." 
];


const dialogueArray1_8=[
  "Hannah:Oh no!(pushes him away)...I thought we were just friends...I don't know you had a thought about dating",
  "We can stop this meetings and all now..don't call me or come to meet me"
];

const NarratArray1_7=[
  "Broo what have you done?",
  "You just broke the friendship",
  "I've already told you to think before doing anything",
  "Now how you even face her",
  "You Lost",
  "Time Reseting"
];


const dialogueArray1_9=[
  "Hugging her",
  "Hannah:You should definetly come to my house one day..",
  "John:Ofcourse,I had planned that already,what about next saturday",
  "Hannah:Saturday will be great..Here is my number 1234-567-890 call when you are coming",
  "John:Yeah,sure Thank you",
  "Hannah:Ok bye",
  "John:Bye"
];

const NarratArray1_8=[
  "Well done man",
  "You did kept the friendship with her",
  "Didn't try to break",
  "Next time when you see her",
  "Be ready for anything",
  "Take the chance",
  "---Next Saturday---"
];

const dialogueArray1_10=[
  "John:Hey Hannah!,it's so nice to see you again!Thanks for having me over.",
  "Hannah:Thanks John come on in.Can I get you a drink?",
  "John:Water would be great,thanks",
  "Hannah:So,how was your week?",
  "John:It was good pretty busy with work.But I finally finished a project I was working on.so that's a relief",
  "Hannah:That sounds great!I know how good it feels to finish a big task.What do you like to do to unwind after a long week?",
  "John:I usually like to read or watch a movie.How about you?",
  "Hannah:I love reading too!I just finished a great book,I'll have to recommend it to you.",
  "John:That sounds awesome,I'd love to hear about it",
  "Hannah:It's a sci-fi novel,really thought-provoking.I think you'd enjoy it.",
  "John:Awesome,I love sci-fi!What's the book called?",
  "Hannah:It's called 'The Three-Body Problem'.Have you heard of it?",
  "John:Yeah, I've heard great things about it! I'll have to add it to my list.",
  "Hannah:Definitely do! So, what kind of music do you like?",
  "John:I'm a big fan of indie rock and alternative. How about you?",
  "Hannah:I love indie music too! We should swap playlists sometime.",
  "John:We both have an almost same hobbies..I think we should grab a coffee and talk about this",
  "Hannah:I like that..what about Monday morning?",
  "John:That would be incredible,Let's make it a regular thing - Monday morning coffee dates - sound perfect!",
  "Hannah:Monday morning coffee dates, huh? You're really trying to get me to wake up early for you, aren't you? Well, I suppose it's worth it",
  "John:Well, well, well! Look who's getting all romantic on me! I like it, though. Let's make those coffee dates a regular thing and see where the sparks fly",
  "Hannah:Entertained? That's an understatement! I'm having the time of my life. Let's keep the sparks flying and the laughter going",
  "John:Okay, I think we've kept the romance alive long enough for one day. Until next time, my friend?",
  "Hannah:Yeah, let's save some romance for next time! See you at Monday!"


];




const NarratArray2 =[
  "John:Oh by the way thank you for the talk,bye see you around",
  "Hannah:Yeah,thanks to you too!",
  "Congratz broo!",
  "You lost her",
  "Now you don't have her number and you don't know where she live...",
  "Again...Time reseting"
 ];

const dialogue4Array = [
  "John:What about your family?",
  "Hannah:I'd rather not talk about it.",
  "John:No worries,I understand",
  "Hannah:No you don't..",
  "Oh shit!you made her sad,Don't repeat it",
  "Time reseting"
];

const dialogueArray4_1=[
  "Oh shit!you made her sad,Don't repeat it",
  "Time reseting"
];
const dialogue5Array = [
"John:Did you liked this place?",
"Hannah:Yeah I really like it,the food are amazing!",
"John:Totally agree, the food are great. Have you tried Special Appam mix?",
"Hannah:Yeah,i love their Special Appam mix.it's my favorite here.",
"John:Oh shit!It's my favorite too,Have you tried with beef mix",
"Hannah:No,I haven't,But that's sounds great,i'll have to try it next time"
];
const dialogue6Array =[
"John:May be we can go for that",
"Ohh shit...Tooooo Faaast!..First you should impress her",
"Hannah:Oh!no,I don't think so,I'm good this way!",
"NOTE:If you run so quick it might be offside",
"Time reseting"
];


const dialogue7Array =[
"John:What are your hobbies?",
"Hannah:I'm really into hiking and outdoor activities. I love exploring new trails.",
"John:I'm a big hiker too! What's your favorite trail you've hiked?",
"Hannah:I love hiking in the Nilgiris. My favorite trail is probably the trek to the top of Doddabetta in Ooty, Tamil Nadu. The views of the surrounding hills are stunning",
"John:I also love Nilgiris. My favorite trail is top of Tadiandamol in Coorg, Karnataka. It's a great workout and the views are amazing!",
"Hannah:Oh,Then we should go for hiking sometime.",
"John:Yeah,Ofcourse!"
];


const dialogueArray8=[
  "John:Can I get your number so we can plan a hike or adventure together soon?",
  "Hannah:Yeah, that sounds great! My number is 123-456-7890.",
  "John:Awesome, I'll text you soon to grab coffee or plan a hike.",
  "Hannah:Awesome, me too! Talk to you soon"
];
const messageArray1 =[
  "After Some days you texted her",
  "John:Hey Hannah, it was great meeting you! How's your day going?",
  "Hannah:Hey, yeah, all good. You?",
  "John:All good? That's a bit boring! Let's make it more interesting. What's your favorite way to spice up a Monday?",
  "Hannah:Haha, yeah, Mondays can be tough! Coffee usually helps me survive",
  "John:Absolutely! Coffee is the ultimate Monday motivator. Do you have a favorite coffee spot or a favorite brew at home?",
  "Hannah:Ooh, I'm so glad you asked! I have a favorite coffee shop just around the corner from my place. They make the best lattes!"
];
const NarratArray3=[
    "John:Where are you from,actually?",
    "Hannah:I'm from Kerala",
    "John:Oh!Kerala,God's own country..I love that place,what makes you get out of there?",
    "Hannah:Yeah that's a nice place,but lack of oppotunities and excess amount of applicants",
    "John:Oh so you are here for work..what kind of work?..lets check can I help you or not",
    "Hannah:Really?...That will be great..I got degree in graphic designing",
    "John:Oh seriosly?I'm working on a company as cybersecurity analyst..Now there is an interview going on for front-end developer..I'll talk to manager about you",
    "Hannah:That will be so helpful to me",
    "John:It's alright,I will be there if you need any help",
    "Hannah:Thank you for the talk,I'll let you know,when I'm coming",
    "John:Ok bye..."
];
//first date
  const messageArray2=[
  "John:That sounds amazing! I'd love to join you for a latte sometime. Maybe we can even make it a regular Monday morning thing?",
  "Hannah:Aww, that would be incredible! I'd love to share my favorite coffee spot with you. Let's make it a regular thing - Monday morning coffee dates sound perfect!",
  "John:Monday morning coffee dates, huh? You're really trying to get me to wake up early for you, aren't you? Well, I suppose it's worth it",
  "Hannah:You're right, it's worth it to spend time with you. And who knows, maybe our Monday morning coffee dates will become the highlight of our week",
  "John:Well, well, well! Look who's getting all romantic on me! I like it, though. Let's make those coffee dates a regular thing and see where the sparks fly",
  "Hannah:Oh, you're loving the romance, huh? Well, I'm glad I can keep you entertained. Let's keep the sparks flying, indeed!",
  "John:Entertained? That's an understatement! I'm having the time of my life. Let's keep the sparks flying and the laughter going",
  "Hannah:Okay, I think we've kept the romance alive long enough for one day. Until next time, my friend?",
  "John:Yeah, let's save some romance for next time! See you at Monday!"
];

const NarratArray4 = [
  "It's monday",
  "You know what's special today?",
  "Bro..it's your first date!",
  "No tension...Be calm and cool",
  "Use words carefully",
  "You can do it..",
  "All the best"
];









let currentIndex1=0,currentIndex2=0,currentIndex3=0,
currentIndex4=0,currentIndex5=0,currentIndex6=0,
currentIndex7=0,currentIndex8=0,currentIndex9=0,
currentIndex10=0,currentIndex11=0,currentIndex12=0,
currentIndex13=0,currentIndex14=0,currentIndex15=0,
currentIndex16=0,currentIndex17=0,currentIndex18=0,
currentIndex19=0,currentIndex20=0,currentIndex21=0,
currentIndex22=0,currentIndex23=0,currentIndex24=0,
currentIndex25=0,currentIndex26=0,currentIndex27=0,
currentIndex28=0,currentIndex29=0,currentIndex30=0;

function typeText(text, index, callback) {
  if (index < text.length) {
     dialogueText2.innerHTML += text.charAt(index);
        setTimeout(() => typeText(text, index + 1, callback), 40); // Adjust the delay as needed
    } else {
        setTimeout(callback, 500); // Adjust the delay before clearing the text
    }
}

function updateDialogue() {
 
    if (currentIndex1 < dialogueArray.length) {
        dialogueText2.innerHTML = ''; // Clear previous dialogue
        const dialogueText = document.createElement('p');
        dialogueContent.appendChild(dialogueText);

        typeText(dialogueArray[currentIndex1], 0, () => {
            currentIndex1++;
            setTimeout(updateDialogue, 10); // Delay before showing the next dialogue
        });
    } else {
      responseButton.style.display = 'block'; // Show response button
    }
}



  /*function removePreviousDialogue() {
    const previousDialogue = dialogueContent.querySelector('p');
    if (previousDialogue) {
      previousDialogue.remove();
    }
  }*/


  function showDialogue2() {
    
    dialogueText2.innerHTML = ''; // Clear previous dialogues
  responseButton.style.display = 'none';  //Hide response button
  if (currentIndex2 < dialogue2Array.length) {
    if (currentIndex2==10) {
      DrawImage3();
    }
    typeText(dialogue2Array[currentIndex2],0,() =>{
    currentIndex2++;
    setTimeout(showDialogue2,10);
    });
   } else {
    
     //dialogueText2.innerHTML='';
     responseButton2.style.display='inline-block';
     
   }
  }
  
  // Event listeners for buttons
  yesButton.addEventListener('click', () => {
    showDialogue2();
    
  });
  


  noButton.addEventListener('click', () => {
    
    dialogueContent.innerHTML='';
    drawImage2();
    dialogueText2.innerText = "Then, get the fuck out.";
    responseButton.style.display='none';
  });


  
  WaitForTime.addEventListener('click', () => {  //probability 2

    dialogueContent.innerHTML='';
    responseButton2.style.display='none';
    const handleDialogue14 =() => {
       if (currentIndex14 < NarratArray1.length) {
        dialogueText2.innerText='';
        DrawImage4();
       typeText(NarratArray1[currentIndex14],0,()=>{
      currentIndex14++;
      setTimeout(handleDialogue14,10);
       });
       }else {
       
        TalkAgain();
       }
    };
    handleDialogue14();
    
  });


  function TalkAgain(){
   
    dialogueContent.innerHTML='';
    //dialogueText2.innerText='';
   const handleDialogue15=() => {
    if (currentIndex15 < NarratArray1_2.length) {
      dialogueText2.innerText='';
      typeText(NarratArray1_2[currentIndex15],0,()=>{
        currentIndex15++;
        setTimeout(handleDialogue15,10);
      });
    }else{
     SecondChanceToTalk();
    }
   };

   handleDialogue15();
  }


  function SecondChanceToTalk(){
   
    dialogueContent.innerHTML='';
   
    const handleDialogue16=() => {
      if (currentIndex16 < dialogueArray1_2.length) {
        if (currentIndex16%2==0) {
          DrawImage4();
          dialogueText2.innerText='';
        typeText(dialogueArray1_2[currentIndex16],0,()=>{
          currentIndex16++;
          setTimeout(handleDialogue16,10);
        });
        }else if (currentIndex16%2==1) {
          DrawImage5();
          dialogueText2.innerText='';
        typeText(dialogueArray1_2[currentIndex16],0,()=>{
          currentIndex16++;
          setTimeout(handleDialogue16,10);
        });
        }
      }else{
      
      SecondMeetPrepare();

      }
    };
    handleDialogue16();
  }

function SecondMeetPrepare(){
  
 dialogueContent.innerHTML='';
  const handleDialogue17 = () => {
    if (currentIndex17 < NarratArray1_3.length) {
      DrawImage4();
      dialogueText2.innerText='';
           typeText(NarratArray1_3[currentIndex17],0,()=>{
            currentIndex17++;
            setTimeout(handleDialogue17,10);
           });

    }else{
     
      SecondMeet();

    }
  };
  handleDialogue17();
}


function SecondMeet(){
 
  //dialogueText2.innerHTML='';
  const handleDialogue18 =() => {
    if (currentIndex18 < dialogueArray1_3.length) {
     if (currentIndex18%2==0) {
      DrawImage4();
      dialogueText2.innerText='';
      typeText(dialogueArray1_3[currentIndex18],0,() =>{
       currentIndex18++;
       setTimeout(handleDialogue18,10);
      });
     }else if (currentIndex18%2==1) {
      DrawImage5();
      dialogueText2.innerText='';
      typeText(dialogueArray1_3[currentIndex18],0,() =>{
       currentIndex18++;
       setTimeout(handleDialogue18,10);
      });
     }
    }else{
    
      ChangeOrContinue();
    }
  };
  handleDialogue18();
}

function ChangeOrContinue(){
  
  dialogueText2.innerText='';
  dialogueContent.innerHTML='';
  responseButton7.style.display='inline-block';
  //topic changed to food 
  ChangeTopic.addEventListener('click',()=>{
    responseButton7.style.display='none';
    currentIndex1=0;
   const handleDialogue19=() => {
    if(currentIndex19 < dialogueArray1_4.length) {
     if (currentIndex19%2==0) {
      DrawImage4();
      dialogueText2.innerText='';
      typeText(dialogueArray1_4[currentIndex19],0,()=>{
        currentIndex19++;
        setTimeout(handleDialogue19,10);
      });
     }else  if (currentIndex19%2==1) {
      DrawImage5();
      dialogueText2.innerText='';
      typeText(dialogueArray1_4[currentIndex19],0,()=>{
        currentIndex19++;
        setTimeout(handleDialogue19,10);
      });
     }
    }else{
      InYourHouse();

    }
   };
   handleDialogue19();
  });

//continue with job related
ContinueTalk.addEventListener('click',()=>{
 
  responseButton7.style.display='none';
  //dialogueText2.innerText='';
const handleDialogue25 = ()=>{
if (currentIndex25<dialogueArray1_5.length) {
  if (currentIndex25%2==0) {
    DrawImage4();
    dialogueText2.innerText='';
    typeText(dialogueArray1_5[currentIndex25],0,()=>{
      currentIndex25++;
      setTimeout(handleDialogue25,10);
    });
  }else if (currentIndex25%2==1) {
    DrawImage5();
    dialogueText2.innerText='';
    typeText(dialogueArray1_5[currentIndex25],0,()=>{
      currentIndex25++;
      setTimeout(handleDialogue25,10);
    });
  }
}else{
  JustasFriend();
}
  

};
  handleDialogue25();
});



}

function InYourHouse(){
 
  const handleDialogue20 = () => {
    if (currentIndex20 < NarratArray1_6.length) {
     dialogueText2.innerText='';
     typeText(NarratArray1_6[currentIndex20],0,()=>{
      currentIndex20++;
      setTimeout(handleDialogue20,10);
     });
    }else{
      
      EnterHouse();
    }
  };
  handleDialogue20();
}

function EnterHouse(){
  
  const handleDialogue21=() => {
  
    if (currentIndex21 < dialogueArray1_7.length) {
     if (currentIndex21%2==0) {
      DrawImage5();
      dialogueText2.innerText='';
      typeText(dialogueArray1_7[currentIndex21],0,()=>{
        currentIndex21++;
        setTimeout(handleDialogue21,10);
      });
     }else if (currentIndex21%2==1) {
      DrawImage4();
      dialogueText2.innerText='';
      typeText(dialogueArray1_7[currentIndex21],0,()=>{
        currentIndex21++;
        setTimeout(handleDialogue21,10);
      });
     }
    }else{
      
      KissOrHug();
    }
  };
  handleDialogue21();
}


function KissOrHug(){
responseButton8.style.display='inline-block';
Kissher.addEventListener('click',()=>{
  responseButton8.style.display='none';
const handleDialogue29= () => {
  if (currentIndex29 < dialogueArray1_8.length) {
   if (currentIndex29%2==0) {
    DrawImage5();
    dialogueText2.innerText='';
    typeText(dialogueArray1_8[currentIndex29],0,()=>{
      currentIndex29++;
      setTimeout(handleDialogue29,10);
    });
   }else if (currentIndex29%2==1) {
    DrawImage4();
    dialogueText2.innerText='';
    typeText(dialogueArray1_8[currentIndex29],0,()=>{
      currentIndex29++;
      setTimeout(handleDialogue29,10);
    });
   }
  }else{
    
    const handleDialogue30=() => {
      if (currentIndex30 < NarratArray1_7.length) {
        dialogueText2.innerText='';
       DrawImage4();
       typeText(NarratArray1_7[currentIndex30],0,()=>{
        currentIndex30++;
        setTimeout(handleDialogue30,10);
       });
      }else{
       
        askToResart();
      }
    };
    handleDialogue30();
  }
};
handleDialogue29();
});



Hugher.addEventListener('click',()=>{
responseButton8.style.display='none';
currentIndex1=0;
const handleDialogue23 = () => {
  if (currentIndex23 < dialogueArray1_9.length) {
   if(currentIndex23%2==0){
    dialogueText2.innerText='';
    DrawImage4();
    typeText(dialogueArray1_9[currentIndex23],0,()=>{
      currentIndex23++;
      setTimeout(handleDialogue23,10);
    });
   }
   else  if(currentIndex23%2==1){
    dialogueText2.innerText='';
    DrawImage5();
    typeText(dialogueArray1_9[currentIndex23],0,()=>{
      currentIndex23++;
      setTimeout(handleDialogue23,10);
    });
   }



  }else{
   
   const handleDialogue22 = () => {
      if (currentIndex22 < NarratArray1_8.length) {
       dialogueText2.innerText='';
       typeText(NarratArray1_8[currentIndex22],0,()=>{
        currentIndex22++;
        setTimeout(handleDialogue22,10);
       });
      }else{
        
        afterHugHer();

      }
    };
    handleDialogue22();
   
  }
};
handleDialogue23();

});

}


function afterHugHer(){
  
  const handleDialogue24=() => {
    if (currentIndex24 < dialogueArray1_10.length) {
    if (currentIndex24%2==0) {
      DrawImage4();
      dialogueText2.innerText='';
      typeText(dialogueArray1_10[currentIndex24],0,()=>{
        currentIndex24++;
        setTimeout(handleDialogue24,10);
      });
    }else if(currentIndex24%2==1) {
      DrawImage5();
      dialogueText2.innerText='';
      typeText(dialogueArray1_10[currentIndex24],0,()=>{
        currentIndex24++;
        setTimeout(handleDialogue24,10);
      });
    }
    }else{
     realDate();
    }
  };
  handleDialogue24();

}










function JustasFriend(){
const handleDialogue26 = () => {
  if (currentIndex26 < NarratArray1_4.length) {
    dialogueText2.innerText='';
   DrawImage4();
   typeText(NarratArray1_4[currentIndex26],0,()=>{
    currentIndex26++;
    setTimeout(handleDialogue26,10);
   });
  }else{
    
    ThatDay();
  }
};
handleDialogue26();
}


function ThatDay(){
  
 const handleDialogue27=() => {
  if (currentIndex27 < dialogueArray1_6.length) {
   if (currentIndex27%2==0) {
    DrawImage4();
    dialogueText2.innerText='';
    typeText(dialogueArray1_6[currentIndex27],0,()=>{
      currentIndex27++;
      setTimeout(handleDialogue27,10);
    });
   }else if (currentIndex27%2==1) {
    DrawImage5();
    dialogueText2.innerText='';
    typeText(dialogueArray1_6[currentIndex27],0,()=>{
      currentIndex27++;
      setTimeout(handleDialogue27,10);
    });
   }
  }else{
    
   const handleDialogue28= () => {
    if (currentIndex28 < NarratArray1_5.length) {
         DrawImage4();
         dialogueText2.innerText='';
         typeText(NarratArray1_5[currentIndex28],0,()=>{
          currentIndex28++;
          setTimeout(handleDialogue28,10);
         });
    }else{
    
      askToResart();
    }
    
   };
    handleDialogue28();
  }

 };
 handleDialogue27();
}













  



 
TalkNow.addEventListener('click', () => {
  // Hide response button and draw images
  responseButton2.style.display = 'none';
  DrawImage5();
  DrawImage4();

  const handleDialogue = () => {
      if (currentIndex3 < dialogue3Array.length) {
         if (currentIndex3%2==0) {
          DrawImage4();
          dialogueText2.innerHTML = '';
          console.log("c3 "+currentIndex3);
          typeText(dialogue3Array[currentIndex3], 0, () => {
              currentIndex3++;
              setTimeout(handleDialogue, 10);
          });
         }
         else if (currentIndex3%2==1) {
          console.log('drawing her');
          DrawImage5();
          dialogueText2.innerHTML = '';
          console.log("c3 "+currentIndex3);
          typeText(dialogue3Array[currentIndex3], 0, () => {
              currentIndex3++;
              setTimeout(handleDialogue, 10);
          });
         }
           } else {
          famOrplace();
      }
  };

  handleDialogue();
});


  function famOrplace() {
    dialogueText2.innerHTML='';
    responseButton3.style.display = 'block';
    abtFamily.addEventListener('click',() => {
      dialogueContent.innerHTML='';
      responseButton3.style.display='none';
     const handleDialogue4 = () =>{

      if (currentIndex4 < dialogue4Array.length) {
        // console.log(currentIndex4%2);
        if (currentIndex4 % 2 == 0) {
         DrawImage4();
         dialogueText2.innerText='';
         typeText(dialogue4Array[currentIndex4], 0, () => {
           currentIndex4++;
           setTimeout(handleDialogue4,10);
       });
      
        }
        else if (currentIndex4 % 2 == 1) {
         if (currentIndex4==4 || currentIndex4==5) {
         dialogueText2.innerText='';
         typeText(dialogue4Array[currentIndex4],0,()=>{
           currentIndex4++;
           setTimeout(handleDialogue4,10);
       });
         }
         else {
          DrawImage5();
         dialogueText2.innerText='';
         typeText(dialogue4Array[currentIndex4],0,()=>{
           currentIndex4++;
           setTimeout(handleDialogue4,10);
       });
         }
      
        }
         
       }else{
         askToResart();
       }

     }
     handleDialogue4();
        
      

    });
    responseButton3.style.display='block';
    PlaceLiked.addEventListener('click',() =>{
      dialogueContent.innerHTML='';
      responseButton3.style.display='none';
      const handleDialogue5 = ()=>{

        if (currentIndex5 < dialogue5Array.length) {
         if (currentIndex5%2==0) {
          dialogueText2.innerText='';
          DrawImage4();
          typeText(dialogue5Array[currentIndex5],0,()=>{
            currentIndex5 ++;
            setTimeout(handleDialogue5,10);

          })
         
         }
         else if (currentIndex5%2==1) {
          dialogueText2.innerText='';
          DrawImage5();
          typeText(dialogue5Array[currentIndex5],0,()=>{
            currentIndex5++;
          setTimeout(handleDialogue5,10);
          });
          
         }
        }else{
          nextStep();
          
        }

      };

      handleDialogue5();
       
     
    });
     }




     function nextStep(){
      dialogueText2.innerText='';
       responseButton4.style.display='inline-block';
       EarlyDate.addEventListener('click',() => {
        dialogueContent.innerHTML='';
        responseButton4.style.display='none';
     
        const handleDialogue6=()=>{

          if (currentIndex6 < dialogue6Array.length) {
            if (currentIndex6!=2) {
              dialogueText2.innerText='';
              DrawImage4();
              typeText(dialogue6Array[currentIndex6],0,()=>{
                currentIndex6++;
                setTimeout(handleDialogue6,0);
               });
            }
            else if (currentIndex6==2) {
              dialogueText2.innerText='';
              DrawImage5();
              typeText(dialogue6Array[currentIndex6],0,()=>{
                currentIndex6++;
                setTimeout(handleDialogue6,0);
               });
            }
            
          }else{
  
            askToResart();
          }

        };
          
       handleDialogue6();

       });

       responseButton4.style.display='inline-block';
      HerHobbies.addEventListener('click',()=>{
        dialogueContent.innerHTML='';
        responseButton4.style.display='none';

        const handleDialogue7=()=>{

          if (currentIndex7 < dialogue7Array.length) {
            if (currentIndex7%2==0) {
              dialogueText2.innerText='';
              DrawImage4();
              typeText(dialogue7Array[currentIndex7],0,()=>{
                currentIndex7++;
                setTimeout(handleDialogue7,10);
              });
            }else if (currentIndex7%2==1) {
              dialogueText2.innerText='';
              DrawImage5();
              typeText(dialogue7Array[currentIndex7],0,()=>{
                currentIndex7++;
                setTimeout(handleDialogue7,10);
              });
            }
            
          }else{
           stageTwo();
          }
        }
         handleDialogue7();
       
      });

     }

     
     function stageTwo(){
      responseButton5.style.display='inline-block';
      askNumber.addEventListener('click',() =>{
        dialogueContent.innerHTML='';
        responseButton5.style.display='none';
        const handleDialogue8 = ()=>{
          if (currentIndex8 < dialogueArray8.length) {
          if (currentIndex8%2==0) {
            dialogueText2.innerText='';
            DrawImage4();
            typeText(dialogueArray8[currentIndex8],0,()=>{
              currentIndex8++;
              setTimeout(handleDialogue8,10);
             });
          }else if(currentIndex8%2==1){
            dialogueText2.innerText='';
            DrawImage5();
            typeText(dialogueArray8[currentIndex8],0,()=>{
              currentIndex8++;
              setTimeout(handleDialogue8,10);
             });
          }
          
          }else{
          
           GotPhoneNum();
          }

        };
         handleDialogue8();
       

      })

      responseButton5.style.display='inline-block';
      sayBye.addEventListener('click',()=>{
        responseButton5.style.display='none';
        dialogueContent.innerHTML='';
      
        const handleDialogue9=()=>{

          if (currentIndex9 < NarratArray2.length) {
           if (currentIndex9==1) {
            DrawImage5();
            dialogueText2.innerText='';
            typeText(NarratArray2[currentIndex9],0,()=>{
             currentIndex9++;
             setTimeout(handleDialogue9,10);
            });
           }else if (currentIndex9!=1) {
            DrawImage4();
            dialogueText2.innerText='';
            typeText(NarratArray2[currentIndex9],0,()=>{
             currentIndex9++;
             setTimeout(handleDialogue9,10);
            });
           }
           
          }else{

            askToResart();
          }

        };
          handleDialogue9();
        
      });

     }


     function GotPhoneNum(){
      dialogueText2.innerText='';
       const handleDialogue10 =()=>{
        if (currentIndex10 < messageArray1.length) {
          if (currentIndex10%2==1 || currentIndex10==0) {
            DrawImage4();
            dialogueText2.innerText='';
          typeText(messageArray1[currentIndex10],0,()=>{
            currentIndex10++;
            setTimeout(handleDialogue10,10);
          });
          } else if (currentIndex10%2==0) {
            DrawImage5();
            dialogueText2.innerText='';
          typeText(messageArray1[currentIndex10],0,()=>{
            currentIndex10++;
            setTimeout(handleDialogue10,10);
          });
          } 
            
          
        }else{
          DateOrKnowmore();
        }

       };

       handleDialogue10();
        
     
     }
  
     function DateOrKnowmore(){
      dialogueText2.innerText='';
      responseButton6.style.display='inline-block';
      FirstDate.addEventListener('click',() =>{
      responseButton6.style.display='none';
      dialogueContent.innerHTML='';
      
      const handleDialogue11=()=>{


        if (currentIndex11 < messageArray2.length) {
          if (currentIndex11%2==0) {
            DrawImage4();
            dialogueText2.innerText='';
          typeText(messageArray2[currentIndex11],0,()=>{
            currentIndex11++;
            setTimeout(handleDialogue11,10);
          });
          }else if (currentIndex11%2==1) {
            DrawImage5();
            dialogueText2.innerText='';
          typeText(messageArray2[currentIndex11],0,()=>{
            currentIndex11++;
            setTimeout(handleDialogue11,10);
          });
          }
        }else{
     
         realDate();
        }
      
      };    
     handleDialogue11();
      });


      KnowMore.addEventListener('click',()=>{
        responseButton6.style.display='none';
        dialogueContent.innerHTML='';
        const handleDialogue12=()=>{
          if (currentIndex12 < NarratArray3.length) {
           if (currentIndex12%2==0) {
            DrawImage4();
            dialogueText2.innerText='';
            typeText(NarratArray3[currentIndex12],0,()=>{
             currentIndex12++;
             setTimeout(handleDialogue12,10);
            });
           }else if (currentIndex12%2==1) {
            DrawImage5();
            dialogueText2.innerText='';
            typeText(NarratArray3[currentIndex12],0,()=>{
             currentIndex12++;
             setTimeout(handleDialogue12,10);
            });
           }
          }else{
             realDate();
            
          }
        };
          
      handleDialogue12();

      });
     }
    


function realDate(){
    dialogueContent.innerHTML='';
    dialogueText2.innerText='';
    
    const handleDialogue13=()=>{

      if (currentIndex13 < NarratArray4.length) {
        dialogueText2.innerText='';
       typeText(NarratArray4[currentIndex13],0,()=>{
        currentIndex13++;
        setTimeout(handleDialogue13,10);
       });
      
      }else{
        GoingForDate();

      }


    };
    handleDialogue13();
     
   
}

function GoingForDate() {

    dialogueText2.innerHTML='';
    dialogueText2.innerText='';
    const handleDialogue31 = ()=>{

      


    };
    handleDialogue31();

}











  function askToResart(){        //want to try again
    dialogueContent.innerHTML='';
   dialogueText2.innerText='';
    const question = document.getElementById('try-again');
    drawImage2();
    question.style.display='block';
     // question.innerText="Do you want to try again?";

    const yesButton2=document.getElementById('button-yes');
    responsebutton9.style.display='block';
    yesButton2.addEventListener('click',() =>{
      responsebutton9.style.display='none';
      question.style.display='none';
   
  startAgain();
    });

    const noButton2 = document.getElementById('button-no');
    responsebutton9.style.display='block';
    noButton2.addEventListener('click',() =>{
      responsebutton9.style.display='none';
      dialogueText2.innerHTML='';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
     question.style.display='none';
     thenks.style.display='block';


     
    
      
    });

   // dialogueContent.appendChild(question);
    //dialogueContent.appendChild(yesButton2);
    //dialogueContent.appendChild(noButton2);
  }


  function startAgain(){
    currentIndex1=0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    dialogueContent.innerHTML='';
   dialogueText2.innerText='';
    responseButton.style.display='none';
    responseButton2.style.display='none';
    updateDialogue();
  }



/*
  function drawOnCanvas(){
    ctx.fillStyle = 'blue';
    ctx.fillRect(50,50,100,100);
  }
    */
  
  
  
  // Initial update of dialogue when the page loads

  const ClickToBegin = document.getElementById('Clickbegin');
  const StartButton = document.getElementById('StartButton');
  ClickToBegin.style.display='inline-block';
  StartButton.addEventListener('click',()=>{
    ClickToBegin.style.display='none';
    //DateOrKnowmore();
   DrawImage();
  updateDialogue();//KissOrHug();   
   // showDialogue2();
   
  });