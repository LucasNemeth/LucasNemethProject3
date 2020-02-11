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
        "./assets/reals/real3.jpg"
    ]
    const fakeImg = [
        "./assets/fakes/img1.jpg",
        "./assets/fakes/img2.jpg",
        "./assets/fakes/img3.jpg",
        "./assets/fakes/img4.jpg",
        "./assets/fakes/img5.jpg",
        "./assets/fakes/img6.jpg",
        "./assets/fakes/cat1.jpg",
        "./assets/fakes/cat2.jpg",
    ]
    let imgChance = Math.floor(Math.random() * 10);
    let randomRealImg = Math.floor(Math.random() * 8);
    let randomFakeImg = Math.floor(Math.random() * 8);

    if (imgChance >= 5) {
        $('.displayImg').attr("src", `${realImg[randomRealImg]}`);
        $('.displayImg').attr("data-auth", "real");
    } else {
        $('.displayImg').attr("src", `${fakeImg[randomFakeImg]}`);
        $('.displayImg').attr("data-auth", "fake");
    }
}

const clickEvent = () =>{
    let score = 0;    
    const dataAttr = $(this).attr("data-auth") /// NEED TO FIGURE OUT WTF "THIS" IS
    //I need to figure out how to scope THIS to a click event
    const test = $(`[data-auth=${dataAttr}]`);
    console.log(test, dataAttr)
    

    imgSource();
    
}

const myApp = () => {
    imgSource();
    
}


// const realImg = [
//     "./assets/reals/placeholder1.jpg",
//     "./assets/reals/placeholder2.jpg",
//     "./assets/reals/placeholder3.jpg",
//     "./assets/reals/real1.jpg",
//     "./assets/reals/placeholder4.jpg",
//     "./assets/reals/placeholder5.jpg",
//     "./assets/reals/real2.jpg",
//     "./assets/reals/real3.jpg"
// ]
// const randomFakeImg = "https://www.thispersondoesnotexist.com/image?";


$(function() {
    myApp();
    //gathering all the materials. 

    // d = new Date();
    index = 0;
    
    $('button').on('click', function (e){
        e.preventDefault();
        clickEvent();
    });
    // for (let index = 0; index < imgAttribute.length; imgChance++) {   
        // console.log(imgAttribute[index])    
    // }
    // const buttonElement = $('.button');
    // console.log(buttonElement)


    
    // const questions = 10;
    // let questionsAnswered=0;

    
});


//for MVP purposes. lets make it a 1 image on the page w/ two button  classes (choice real, choice fake)

//let randNum=Math.random()

// 


