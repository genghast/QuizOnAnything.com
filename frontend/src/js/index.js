import { store, retrieve } from "./localData";
import { renderQuizCard } from "./view";
import { scoreCount, verifyAllAnswered } from "./score";
import { getQuizObj } from "./server";

// index.html
const topicInput = document.querySelector("#topic-input");
const inputContainer = document.querySelector(".topic-options");
// quiz-instructions.html
const topicEntry = document.querySelector(".quiz-topic-entry");

// quiz.html
const quizCard = document.querySelector(".quizCard");
const questionContent = document.querySelector(".question-content");

// score.html
const infoCard = document.querySelector(".infoCard");

// loading.html
const main00 = document.querySelector(".main00");

if (topicInput) {
    topicInput.addEventListener("keyup", async function (event) {
        if (event.keyCode === 13) {
            const topic = event.target.value;

            if (topic.length !== 0) {
                event.target.value = "";
                store("current", topic);
                topicInput.parentElement.innerHTML = `
                <img src="./img/ZKZg.gif" alt="loading..." height="30px"/>
                <br>
                <div class="text">
                    Generating a personiliezed quiz for you...
                </div>`;
                const quiz_obj = await getQuizObj({ topic: topic });
                store(topic, quiz_obj["questions"]);
                location.href = "./quiz-instruction.html";
            }
        }
    });
}

if (main00) {
    console.log("here");
    const current = retrieve("current");
    console.log(current);
    console.log(retrieve(current));
}

if (topicEntry) {
    topicEntry.innerHTML = retrieve("current");
    console.log(retrieve(retrieve("current")));
    // store('current', retrieve('current'))
}

if (quizCard) {
    // render 1st question
    const current = retrieve("current");
    let categoryObj = retrieve(current);

    if (!retrieve(`currentQNO-${current}`)) {
        store(`currentQNO-${current}`, 0);
    }
    renderQuizCard(
        quizCard,
        retrieve(current)[retrieve(`currentQNO-${current}`)]
    );

    quizCard.addEventListener("click", function (event) {
        if (event.target.parentElement.classList.contains("options")) {
            // update data
            categoryObj[retrieve(`currentQNO-${current}`)]["answered"] =
                event.target.innerText;
            store(current, categoryObj);
            // update ui for option div
            renderQuizCard(
                quizCard,
                retrieve(current)[retrieve(`currentQNO-${current}`)]
            );
        }
    });

    quizCard.addEventListener("click", function (event) {
        if (event.target.classList.contains("prev")) {
            if (retrieve(`currentQNO-${current}`) > 0) {
                store(
                    `currentQNO-${current}`,
                    retrieve(`currentQNO-${current}`) - 1
                );
                renderQuizCard(
                    quizCard,
                    retrieve(current)[retrieve(`currentQNO-${current}`)]
                );
            }
        }
        if (event.target.classList.contains("next")) {
            if (retrieve(`currentQNO-${current}`) < 9) {
                store(
                    `currentQNO-${current}`,
                    retrieve(`currentQNO-${current}`) + 1
                );
                renderQuizCard(
                    quizCard,
                    retrieve(current)[retrieve(`currentQNO-${current}`)]
                );
            }
        }
        if (verifyAllAnswered(retrieve(current))) {
            quizCard.querySelector(
                ".navigationBtns"
            ).innerHTML = `<button class="prev">Previous Question</button>
                         <a href="./score.html"
                         ><button class="next">Submit</button></a
                     >
                     <button class="next">Next</button>`;
        }
    });
}

if (infoCard) {
    infoCard.querySelector(".total-correct").innerText = scoreCount(
        retrieve("current")
    );
    infoCard.querySelector(".total-incorrect").innerText =
        10 - scoreCount(retrieve("current"));
    infoCard.querySelector(".total-marks").innerText =
        scoreCount(retrieve("current")) * 10;
}

if (main00) {
}
