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
    const randomFakeImg = "https://www.thispersondoesnotexist.com/image?";

    d = new Date();

    let imgChance = Math.floor (Math.random() * 10);

    let randomRealImg = Math.floor(Math.random() * 8);

    const imgAttribute = () => {
        if (imgChance >= 5){
        $('.displayImg').attr("src", `${realImg[randomRealImg]}`);
    } else {
        $('.displayImg').attr("src", randomFakeImg + d.getTime()); 
    }
};
    imgAttribute();

    $('button').on ('click', function(){
        imgAttribute();
    })
});
//for MVP purposes. lets make it a 1 image on the page w/ two button  classes (choice real, choice fake)

//let randNum=Math.random()

// 


