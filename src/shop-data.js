const SHOP_DATA = [
    {
        title: 'Hats',
        items: [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                price: 25,
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 18,
            },
            {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                price: 35,
            },
            {
                id: 4,
                name: 'Grey Brim',
                imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                price: 25,
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                price: 18,
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 14,
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                price: 18,
            },
            {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                price: 14,
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                price: 16,
            },
        ],
    },
    {
        title: 'Sneakers',
        items: [
            {
                id: 10,
                name: 'Adidas NMD',
                imageUrl: 'https://sneakernews.com/wp-content/uploads/2017/11/adidas-nmd-r1-primeknit-pitch-black-foot-locker-eu.jpg?w=780&h=550&crop=1',
                price: 220,
            },
            {
                id: 11,
                name: 'Adidas Yeezy',
                imageUrl: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F09%2Fadidas-yeezy-boost-350-v2-jade-ash-hq2060-release-info-1.jpg?q=75&w=800&cbr=1&fit=max',
                price: 280,
            },
            {
                id: 12,
                name: 'Black Converse',
                imageUrl: 'https://d2ob0iztsaxy5v.cloudfront.net/product/192470/1924707070m7_zm.jpg',
                price: 110,
            },
            {
                id: 13,
                name: 'Nike White AirForce',
                imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1d317a3b-b511-454f-a940-b931125ee25f/air-force-1-shadow-shoes-mN8Glx.png',
                price: 160,
            },
            {
                id: 14,
                name: 'Nike Red High Tops',
                imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/61dbf236-68d4-45d0-83c6-cf1c25582809/dunk-high-older-shoes-5g3xvG.png',
                price: 160,
            },
            {
                id: 15,
                name: 'Nike Brown High Tops',
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/oktc8rwsjw7st7scvqrd/air-force-1-high-07-shoe-9sScXs.png',
                price: 160,
            },
            {
                id: 16,
                name: 'Air Jordan Limited',
                imageUrl: 'http://cdn.shopify.com/s/files/1/0473/6965/0340/products/bc048445433296cbf5b58b97d1a114408811c978_DQ8422_300_Nike_Air_Jordan_1_Low_SE_Malachite_Fire_Red_Black_Taxi_os_2_eb63b486-fcfb-41d7-8a1c-dea53e069387_1200x1200.jpg?v=1668500948',
                price: 190,
            },
            {
                id: 17,
                name: 'Timberlands',
                imageUrl: 'https://images-cdn.ubuy.co.in/633b30f90f980922314aebf5-men-x27-s-classic-boot-ankle.jpg',
                price: 200,
            },
        ],
    },
    {
        title: 'Jackets',
        items: [
            {
                id: 18,
                name: 'Black Jean Shearling',
                imageUrl: 'https://5.imimg.com/data5/NM/LX/MY-42532489/mens-black-jacket-500x500.jpg',
                price: 125,
            },
            {
                id: 19,
                name: 'Blue Jean Jacket',
                imageUrl: 'https://diamu.com.bd/wp-content/uploads/2021/11/chelsea-i96-anthem-jacket-21-22.jpg',
                price: 90,
            },
            {
                id: 20,
                name: 'Grey Jean Jacket',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0607/0765/products/CGRBlueGhost1_1_800x.jpg?v=1661421469',
                price: 90,
            },
            {
                id: 21,
                name: 'Brown Shearling',
                imageUrl: 'https://www.rendez-vous-store.com/wp-content/uploads/2022/10/rdv_mackintosh_11-1-scaled.jpg',
                price: 165,
            },
            {
                id: 22,
                name: 'Tan Trench',
                imageUrl: 'https://assets.vogue.com/photos/6217f163406599cdba655e06/1:1/w_2667,h_2667,c_limit/slide_%20(3).jpg',
                price: 185,
            },
        ],
    },
    {
        title: 'Womens',
        items: [
            {
                id: 23,
                name: 'Blue Tanktop',
                imageUrl: 'https://images.bestsellerclothing.in/data/vm/30-may-2022/150440201_g1.jpg?width=397&height=526&mode=fill&fill=blur&format=auto',
                price: 25,
            },
            {
                id: 24,
                name: 'Floral Blouse',
                imageUrl: 'https://m.media-amazon.com/images/I/81Fhl+JaD-L._UL1500_.jpg',
                price: 20,
            },
            {
                id: 25,
                name: 'Floral Dress',
                imageUrl: 'https://i.pinimg.com/736x/d7/19/18/d71918731f82bbbf3b8d1e4a125b1c61.jpg',
                price: 80,
            },
            {
                id: 26,
                name: 'Red Dots Dress',
                imageUrl: 'https://cdn.shopify.com/s/files/1/1018/4207/products/6d33a2e0_1_1445x.jpg?v=1599976345',
                price: 80,
            },
            {
                id: 27,
                name: 'Striped Sweater',
                imageUrl: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10135565/2019/12/17/6bf0ded8-4630-4ee8-9c2a-03c2594e237e1576568272919-Mast--Harbour-Women-Black--Peach-Coloured-Striped-Sweater-87-1.jpg',
                price: 45,
            },
            {
                id: 28,
                name: 'Yellow Track Suit',
                imageUrl: 'http://cdn.shopify.com/s/files/1/0528/3079/8018/products/WhatsAppImage2021-02-25at4.20.43PM_1200x1200.jpg?v=1614250854',
                price: 135,
            },
            {
                id: 29,
                name: 'White Blouse',
                imageUrl: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20414366/2022/10/16/501ec253-6771-45ec-b767-824b703cb8d71665865817330StudioShringaarWhiteSolidSareeBlouse1.jpg',
                price: 20,
            },
        ],
    },
    {
        title: 'Mens',
        items: [
            {
                id: 30,
                name: 'Camo Down Vest',
                imageUrl: 'http://cdn.shopify.com/s/files/1/0259/6401/products/ProspectorPufferVest-Camo_Modle1_1200.jpg?v=1663361872',
                price: 325,
            },
            {
                id: 31,
                name: 'Floral T-shirt',
                imageUrl: 'https://cdn.shopify.com/s/files/1/0752/6435/products/0E4A5082.jpg?v=1663857189',
                price: 20,
            },
            {
                id: 32,
                name: 'Black & White Longsleeve',
                imageUrl: 'https://images.bewakoof.com/t1080/men-s-plain-full-sleeve-t-shirt-pack-of-2-black-white-274396-1655833987-2.jpg',
                price: 25,
            },
            {
                id: 33,
                name: 'Pink T-shirt',
                imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20210310/Atmx/6047cbc57cdb8c1f145d4c30/-1117Wx1400H-460849878-pink-MODEL.jpg',
                price: 25,
            },
            {
                id: 34,
                name: 'Jean Long Sleeve',
                imageUrl: 'https://sc01.alicdn.com/kf/HTB1jeE_HFXXXXXzXXXXq6xXFXXXV/223627520/HTB1jeE_HFXXXXXzXXXXq6xXFXXXV.jpg_.webp',
                price: 40,
            },
            {
                id: 35,
                name: 'Burgundy T-shirt',
                imageUrl: 'https://www.basskya.com/wp-content/uploads/2021/04/mens_burgundy_t_shirt_front-min.jpg',
                price: 25,
            },
        ],
    },
];

export default SHOP_DATA;