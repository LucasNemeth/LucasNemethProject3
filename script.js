let currentImg;
let score= 0;
let questions = 10;
let questionsAnswered=0;

const imgSource = () => {
    //keeping our image arrays. we can re-use these whenever we want.    i hope
    const realImg = [
        "./assets/reals/placeholder1.jpg",
        "./assets/reals/placeholder2.jpg",
        "./assets/reals/placeholder3.jpg",
        "./assets/reals/real1.jpg",
        "./assets/reals/placeholder4.jpg",
        "./assets/reals/placeholder5.jpg",
        "./assets/reals/real2.jpg",
        "./assets/reals/real3.jpg",
        "./assets/reals/real4.jpg",
        "./assets/reals/real5.jpg"
    ]
    const fakeImg = [
        "./assets/fakes/img1.jpg",
        "./assets/fakes/img2.jpg",
        "./assets/fakes/img3.jpg",
        "./assets/fakes/img4.jpg",
        "./assets/fakes/img5.jpg",
        "./assets/fakes/img6.jpg",
        "./assets/fakes/img7.jpg",
        "./assets/fakes/img8.jpg",
        "./assets/fakes/cat1.jpg",
        "./assets/fakes/cat2.jpg",
    ]
    let imgChance = Math.floor(Math.random() * 10);
    let randomRealImg = Math.floor(Math.random() * 10);
    let randomFakeImg = Math.floor(Math.random() * 10);
// 
// .attr("alt", "Woman with glasses in blazer")
//     .attr("alt", "woman smiling in the sunlight")
//     .attr("alt", "Man with glasses in a dress shirt")
//     .attr("alt", "Man with beard and wide brimmed hat")
//     .attr("alt",
//         "Woman smiling in front of yellow background")
//     .attr("alt", "Woman with glasses and ponytail")
//     .attr("alt", "smiling man with glasses walking outside")
//     .attr("alt", "bald man with mustache")
//     .attr("alt", "composer, Richard D James")
//     .attr("alt", "a screaming black cat")
    if (imgChance >= 5) {
        $('.displayImg').attr("src", `${realImg[randomRealImg]}`);
        $('.displayImg').attr("data-auth", "real");
        currentImg="real";
        
    } else {
        $('.displayImg').attr("src", `${fakeImg[randomFakeImg]}`);
        $('.displayImg').attr("data-auth", "fake");
        currentImg="fake";
    }
}



const clickEvent = function(e){
    e.preventDefault();
    questionsAnswered++;
    questions--;
    const dataAttr = $(this).attr("data-auth"); 
    if (currentImg===dataAttr){    
        score++;
        let htmlToAppend = `<h3>score: ${score}/10</h3>`;
            $('h3').html(htmlToAppend)     
    } else{
    }
    console.log(questions, questionsAnswered)

    endOfQuiz();

    imgSource();
    
}

const endOfQuiz =function(){
    if (questionsAnswered === 10){
        $('img').hide();
        $('button').hide();
        let endText =`
            <h3>Congratulations you  got a score of ${score}/10</h3>
            <button><a ${href="#", id="tryAgain"}>try again</a></button>
        `
            $('h3').html(endText)
            
        $('button').on('click', function(){
            location.reload()
        })
        if (score===10){
            if (confirm("Congratulations for a perfect score! Are you sure you're not a robot? Press ok to confirm")) {
                txt = "I am definitely a human being.";
            } else {
                txt = "Beep Boop!";
            } 
        }
    }   
}


const myApp = () => {
    imgSource();
    
}



$(function() {
    myApp();

    index = 0;
    
    $('button').on('click', clickEvent);
  
});


