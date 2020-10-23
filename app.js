const quiz = [
    {
        question: "日向坂で最もセンターの経験があるの人物は次の内どれ？",
        answers: [
            "潮 紗理菜",
            "齊藤 京子",
            "佐々木 美玲",
            "小坂 菜緒"
        ],
        correct: "小坂 菜緒"
    },{
        question: "次の人物の内、日向坂2期生なのはだれ？",
        answers: [
            "丹生 明里",
            "東村 芽依",
            "加藤 史帆 ",
            "齊藤 京子"
        ],
        correct: "丹生 明里"
    },{
        question: "次の日向坂メンバーの内、私の一推しはだれ？",
        answers: [
            "潮 紗理菜♡",
            "河田 陽菜",
            "松田 好花",
            "小坂 菜緒"
        ],
        correct: "潮 紗理菜"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
// 正解数
let score =0;


//「$」でHTMLのオブジェクトが入ってることが理解しやすい
const $button = document.getElementsByTagName("button")
let buttonLength = $button.length;


//クイズの問題文,選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}


setupQuiz();
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解!")
        score++;
    }else{
        window.alert("不正解!")
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz();
    }else{
        //問題数がもうなければこちらを実行
        window.alert("終了! あなたの正解数は" + score + "/" + quizLength +"です!");
    }
};



//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength){
    $button[handleIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handleIndex++;
}





