$(function() {
    let index= Math.floor(Math.random() * 4);
    let randomImg = "https://www.thispersondoesnotexist.com/image?";
    $('.firstImg').attr("src",``);
    $('.secondImg').attr("src", "")

    let firstImg = [
        randomImg,
        randomImg,
        randomImg,
        randomImg,
        randomImg
        // "./assets/reals/placeholder3.jpg",
        // "./assets/reals/real1.jpg",
        // randomImg,
        // "../assets/reals/real2.jpg"
    ]
    let secondImg = [
        // randomImg,
        // randomImg,
        // randomImg,
        // randomImg,
        // randomImg
        "../assets/reals/placeholder1.jpg",
        randomImg,
        randomImg,
        "../assets/reals/placeholder4.jpg",
        randomImg
    ]

    // let index;
    function changeImage() {
        // const img = $('content1','content2').$('img')[0]
        // img.src = firstImg[index] , secondImg[index];
        $('.firstImg').attr("src", `${firstImg[index]}`);
        $('.secondImg').attr("src", `${secondImg[index]}`);
        // index++;
        console.log(index);
    }
    $('.button1').on('click', function(){
        changeImage();
        console.log(changeImage)
    })
    $('.button2').on('click', function () {
        changeImage();
    })
    
});