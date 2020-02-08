$(function() {
    let randomImg = "https://www.thispersondoesnotexist.com/image";
    $('.firstImg').attr("src","https://www.thispersondoesnotexist.com/image");
    $('.secondImg').attr("src", "https://www.thispersondoesnotexist.com/image")


    let firstImg = [
        randomImg,
        "../assets/reals/real1.jpg",
        "../assets/reals/real3.jpeg.jpg",
        randomImg,
        "../assets/reals/real2.jpg"
    ]
    let secondImg = [
        "../assets/reals/placeholder1.jpg",
        randomImg,
        randomImg,
        "../assets/reals/placeholder4.jpg",
        randomImg
    ]
});