const myApp ={};

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
    //gathering all the materials. 
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
    // d = new Date();
    index = 0;
    
    let imgChance = Math.floor(Math.random() * 10);
    let randomRealImg = Math.floor(Math.random() * 8);
    let randomFakeImg = Math.floor(Math.random() * 8);
    
    const imgAttribute = (imgChance, randomRealImg, randomFakeImg) => {
        console.log(imgChance)
        if (imgChance >=5){
            $('.displayImg').attr("src", `${realImg[randomRealImg]}`);
        } else {
            $('.displayImg').attr("src", `${fakeImg[randomFakeImg]}`); 
        }
    };
    imgAttribute(imgChance, randomRealImg, randomFakeImg);

    // for (let index = 0; index < imgAttribute.length; imgChance++) {   
        // console.log(imgAttribute[index])    
    // }
    // const buttonElement = $('.button');
    // console.log(buttonElement)

    $('button').on ('click', function(e){
        e.preventDefault();
        console.log(e);
        imgChance = Math.floor(Math.random() * 10);
        randomRealImg = Math.floor(Math.random() * 8);
        randomFakeImg = Math.floor(Math.random() * 8);
        imgAttribute(imgChance, randomRealImg, randomFakeImg);
    })
    
});


//for MVP purposes. lets make it a 1 image on the page w/ two button  classes (choice real, choice fake)

//let randNum=Math.random()

// 


