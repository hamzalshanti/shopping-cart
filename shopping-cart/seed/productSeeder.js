const Product = require('../models/productModel');
//const db = require('mongoose');
//db.connect('mongodb://localhost:27017/shopping');
const products = [
    {
        imagePath: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F91b0C2YNSrL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FHobbit-J-R-Tolkien%2Fdp%2F054792822X&tbnid=SvAL1onsgG9JpM&vet=12ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygBegUIARCnAQ..i&docid=o3BHpSl7-sU2aM&w=1653&h=2560&q=books%20cover&ved=2ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygBegUIARCnAQ',
        title: 'Gothic Video',
        description: 'Awesome Game',
        price: 150
    },
    {
        imagePath: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmarketplace.canva.com%2FEAD7YH8bebE%2F1%2F0%2F251w%2Fcanva-white-bold-text-thriller-mystery-book-cover-CejxvxrTCyg.jpg&imgrefurl=https%3A%2F%2Fwww.canva.com%2Fbook-covers%2Ftemplates%2Fthriller%2F&tbnid=8qy-mB68LH5_9M&vet=12ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygDegUIARCtAQ..i&docid=V-NRsPVfpYJXjM&w=251&h=400&q=books%20cover&ved=2ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygDegUIARCtAQ',
        title: 'Dont go there',
        description: 'lets started and go wrriten a fully discription',
        price: 87
    },
    {
        imagePath: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fthejohnfox.com%2Fwp-content%2Fuploads%2F2019%2F09%2FThe-Book-of-You.jpg&imgrefurl=https%3A%2F%2Fthejohnfox.com%2F2019%2F09%2F30-best-book-cover-designers%2F&tbnid=HxiXI0SSw4oOIM&vet=12ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygRegUIARDLAQ..i&docid=yH8Za6-2vpbBNM&w=225&h=337&q=books%20cover&ved=2ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygRegUIARDLAQ',
        title: 'Book of You',
        description: 'Its relly Awsome!!',
        price: 5.7
    },
    {
        imagePath: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fjbrary.com%2Fwp-content%2Fuploads%2F2018%2F03%2Fthe-dress-and-the-girl.jpg&imgrefurl=https%3A%2F%2Fjbrary.com%2F2018-picture-books-cover-appeal%2F&tbnid=oXK7E1stsk3yAM&vet=12ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygLegUIARC_AQ..i&docid=6asukP6W_EbE6M&w=604&h=744&q=books%20cover&ved=2ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygLegUIARC_AQ',
        title: 'Find awsome girl',
        description: 'check out the girl',
        price: 57
    },
    {
        imagePath: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fzhitkov%2Fzhitkov1711%2Fzhitkov171100008%2F90660148-book-cover-creative-funny-concept-man-rolling-big-brain-fiction-or-non-fiction-genre-mid-century-sty.jpg&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fphoto_90660148_stock-vector-book-cover-creative-funny-concept-man-rolling-big-brain-fiction-or-non-fiction-genre-mid-century-sty.html&tbnid=kNR15dAPAbw1gM&vet=12ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygtegUIARCOAg..i&docid=ZIMHDp7yJN_YoM&w=919&h=1300&q=books%20cover&ved=2ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygtegUIARCOAg',
        title: 'Tellect',
        description: 'Push your brain for good',
        price: 99.8
    },
    {
        imagePath: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn2.penguin.com.au%2Fcovers%2Foriginal%2F9780718193911.jpg&imgrefurl=https%3A%2F%2Fwww.penguin.com.au%2Fbooks%2Fladybird-a-cover-story-500-iconic-covers-from-the-ladybird-archives-9780718193911&tbnid=iVUHcuxKO0hYJM&vet=12ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygqegUIARCHAg..i&docid=ZljmhwTVwctEwM&w=1340&h=2067&q=books%20cover&ved=2ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygqegUIARCHAg',
        title: 'Hush',
        description: 'hush is reely nicve for gettin food from super market',
        price: 77.5
    },
    {
        imagePath: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.designforwriters.com%2Fwp-content%2Fuploads%2F2017%2F10%2Fdesign-for-writers-book-cover-tf-2-a-million-to-one.jpg&imgrefurl=https%3A%2F%2Fwww.designforwriters.com%2Fbook-cover-design%2F&tbnid=DpVKHmP3IWQHGM&vet=12ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygeegUIARDsAQ..i&docid=5lDXrUyP8nyODM&w=384&h=600&q=books%20cover&ved=2ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygeegUIARDsAQ',
        title: 'A Million To One',
        description: 'How to become a big milloner',
        price: 66.5
    },
    {
        imagePath: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.publishersweekly.com%2Fimages%2Fdata%2FARTICLE_PHOTO%2Fphoto%2F000%2F064%2F64927-1.JPG&imgrefurl=https%3A%2F%2Fwww.publishersweekly.com%2Fpw%2Fby-topic%2Fauthors%2Fpw-select%2Farticle%2F81006-book-cover-redesign-boston-my-blissful-winter-memories-of-the-1980s.html&tbnid=h8VgjRAk1dsjtM&vet=12ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygZegUIARDhAQ..i&docid=vyowSyehoDAJ8M&w=600&h=938&q=books%20cover&ved=2ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygZegUIARDhAQ',
        title: 'Bosten',
        description: 'a product will fire tody',
        price: 885
    },
    {
        imagePath: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81pA6-hv%2B2L.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FInstitute-Novel-Stephen-King%2Fdp%2F1982110562&tbnid=gqNnuAwJ214zTM&vet=12ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygVegUIARDTAQ..i&docid=G2n0A8-lAWggpM&w=1400&h=2128&q=books%20cover&ved=2ahUKEwiW5ZOD_cDrAhUGUhoKHWaiDUgQMygVegUIARDTAQ',
        title: 'Stephen king',
        description: 'truth story and nice',
        price: 24
    },
];


// Product.create(products).then( data => {
//     db.disconnect();
//     console.log('add done ..');
// }).catch(err => console.log(err.message));