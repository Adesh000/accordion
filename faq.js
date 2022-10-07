const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];


function showFaq() {
  faqData.forEach((value) => {
    createFaq(value.question, value.answer)
  })
}

function createFaq(questionText, answerText) {
  let faq = document.createElement('div')
  faq.classList.add("faq")
  let accordianBody = document.querySelector(".accordian_body")
  accordianBody.appendChild(faq)

  let faqHeader = document.createElement("div")
  faqHeader.classList.add("faq_header")
  faq.appendChild(faqHeader)

  let h3 = document.createElement("h3")
  faqHeader.appendChild(h3)

  let btn = document.createElement("button")
  btn.classList.add("show_btn")
  faqHeader.appendChild(btn)

  let p = document.createElement("p")
  p.classList.add("hidden");
  faq.appendChild(p)

  h3.innerText = questionText;
  p.innerText = answerText;
  btn.innerText = "+";

  function btnStatusUpdate() {
    p.style.color = "white";

    if(btn.innerText == "+"){
      btn.innerText = "-";
      p.style.display = "block";
    } else {
      btn.innerText = "+";
      p.style.display = "none";
    }
  }

  btn.addEventListener("click", btnStatusUpdate);
}

showFaq();



