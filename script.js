$(function() {
    let index= Math.floor(Math.random() * 20);

        d=new Date();
    
    // let index=0;
    let randNum=Math.random();
    let randomImg = "https://www.thispersondoesnotexist.com/image?";
    $('.displayImg').attr("src", randomImg + d.getTime());
    // $('.secondImg').attr("src", randomImg + d.getTime())



    let realImg = [
        "/assets/reals/real2.jpg",
        "/assets/reals/placeholder1.jpg",
        "/assets/reals/real1.jpg",
        "/assets/reals/real3.jpeg.jpg",
        "/assets/reals/placeholder5.jpg"
    ]

    

    function changeImage() {
        // const img = $('content1','content2').$('img')[0]
        // img.src = firstImg[index] , secondImg[index];
        index++;
        $('.displayImg').attr("src", `${displayImg[index]}`);
        // $('.secondImg').attr("src", `${secondImg[index]}`);
        // $('.firstImg')
        // $('.firstImg').html(`<img class="firstImg" id="content1" src="https://www.thispersondoesnotexist.com/image" alt=""></img>`);
        // console.log(index);
    }
    $('.realButton').on('click', function () {
        changeImage(randNum);
   } );
    $('.fakeButton').on('click', function () {
        changeImage(randNum);
    })
    
});

    let fakeImg= (randomImg());

    if (index < 10){
        $('displayImg') = realImg();
    } else {
        $('displayImg') = fakeImg();
    }


//for MVP purposes. lets make it a 1 image on the page w/ two button  classes (choice real, choice fake)
//let randNum=Math.random()