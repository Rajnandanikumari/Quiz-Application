const question = [
    {
        'question':"How many sizes of headers are available in HTML by default?",
         'a': "5",
         'b': "1",
         'c': "3",
         'd': "6",
        'correct':"d",
    },
{
        'question':"What are the types of lists available in HTML?",
         'a':"Ordered,Unordered Lists.",
         'b':"Bulleted,Numbered Lists.",
         'c':"Named,Unnamed Lists.",
         'd':"None of the Above.",
          'correct':"b",
},
{
        'question':"How to create an ordered list in HTML" ,
        'a': "ul",
        'b': "ol", 
        'c': "href", 
        'd': "b",
         'correct':"b",
    },
        {
        'question': "HTML files are saved by default with the extension?",
        'a':"html", 
        'b':"h", 
        'c':"ht", 
        'd':"None of the above",
        'correct':"b",
    },
        {
        'question': "we enclose HTML tags within?",
        'a':"{}",
        'b':"<>",
        'c':"!!", 
        'd':"None of the above",
        'correct': "b",
       },
       {
        'question':"What is effect of the <b> tag? ",
        'a':"It converts the within it to bold font.", 
        'b':"It is used to write black-colored font.", 
        'c':"It is used to change the font Size .",
        'd':"None of the above.",
        'correct': "b",

        
    }
]

let index=0;
let total=question.length;
let right = 0,
    wrong = 0;
// let correct = 0;
// let  incorrect = 0;
//let   total = question.length;
const quesBox =  document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = ()=>{
     if(index == total){
       return endQuiz()
    }
     reset();

    
    // if(index === total){
    //    return quizEnd()
    // }
   // reset();
    const data = question[index];
   // console.log(data)
    quesBox.innerHTML = `${index+1}) ${data.question}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b; 
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
 
}

const submitQuiz =()=>{
    const data = question[index];
    const ans = getAnswer()
    console.log(ans,data.correct)
    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
// document.getElementById("btn1").addEventListener("click", previous);
 const previous =()=>{
//     // const data = question[index];
//     // const ans = getAnswer() 
    if(index>0){
        index--;
        loadQuestion();
      
//     // if(ans === data.correct){
//     //     right++;
//     // }else{
//     //     wrong++;
//     // }
    }else{
        console.log("You are on the first question");
     }
    };

const next = ()=>{
    if(index<total-1){
        index++;
        loadQuestion();
    }else{
        console.log("You are on the last question");
     }
    };

// }
//     loadQuestion();
//     return;
// }

const getAnswer = ()=>{
    let answer;
     optionInputs.forEach((input)=>{
        if(input.checked){
            answer=input.value;
           // console.log(input.value);
        //      console.log("yes")
        //  }else{
        //      console.log("no")
          }
        }
     )
     return answer;
    }



 // const submitQuiz = ()=>{
//     const data = question[index];
//  }
 //   const ans = getAnswer()
//     if(ans === data.correct){
//         right++;
//     }else{
//         wrong++;
//     }
//     index++;
//     loadQuestion();
//     return;
//  }

//  const getAnswer = ()=>{
//     optionInputs.forEach(
//         (input)=>{
//             if(input.checked){
//                 return input.value;
//                 //console.log(input.value);
//             //    console.log("yes") 
//             // }else{
//             //     console.log("no")
//             // } 
//             }
//         }
//     )
//  }

 const reset = ()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false;
                
            }
    )
 }
 loadQuestion();

 const endQuiz = ()=>{
    document.getElementById("box").innerHTML =`
    <h3>Thanku </h3>
    <h2>${right}/${total} are correct</h2>`}
//     <h2> ${right}/${total} are correct </h2>`
//  }
// //     const data = question[index];
// //     if(ans == data.correct){
// //          correct++;
// //     }else{
// //         incorrect++;
// //     }
// //     index++;
// //     loadQuestion();

// // }

// // document.querySelector(".submit").addEventListener(
// //     "click",
// //     function(){
// //         submitQuiz();
// //     }
// // )
// // const getAnswer = () => {
// //     let ans;
// //     optionInputs.forEach(
// //         (inputE1) => {
// //             if (inputE1.checked) {
// //                 ans = inputE1.value;
// //             }
// //         }
// //     )
// //     return ans;
// // }

// // const quizEnd = () => {
// //     document.getElementsByClassName("container")[0].innerHTML = `
// //     <div class="col">
// //     <h3 class="w-180"> Hii, you've scored ${correct}/${total} </h3>
// //     </div>`;
// // }

//  loadQuestion(); 