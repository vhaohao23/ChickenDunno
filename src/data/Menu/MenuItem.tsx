export interface MenuItem {
    id: number;
    name: string;
    vietnameseName: string;
    description: string;
    price: number;
    image: string;
    category: string;
    quantity?: number;
}

export const menuItems: MenuItem[] = [
    {
        id: 1,
        name: "Vietnamese Chicken Pho",
        vietnameseName: "Phở Gà",
        description: "Traditional Vietnamese rice noodle soup with chicken, herbs, and aromatic broth",
        price: 12.99,
        image: "https://cdn.tgdd.vn/2021/09/CookProduct/1200(3)-1200x676-2.jpg",
        category: "Main Courses",
    },
    {
        id: 2,
        name: "Chicken Spring Rolls",
        vietnameseName: "Gỏi Cuốn Gà",
        description: "Fresh rice paper rolls with chicken, vegetables, herbs, and peanut sauce",
        price: 8.99,
        image: "https://cdn.tgdd.vn/2020/11/CookRecipe/Avatar/goi-cuon-thit-ga-don-gian-thumbnail-1.jpg",
        category: "Appetizers",
    },
    {
        id: 3,
        name: "Vietnamese Chicken Banh Mi",
        vietnameseName: "Bánh Mì Gà",
        description: "Crispy baguette with grilled chicken, pickled vegetables, herbs, and special sauce",
        price: 7.99,
        image: "https://th.bing.com/th/id/OIP.WGitxa0UqJiAQhRhiPx0RgHaE8?cb=thvnextc1&rs=1&pid=ImgDetMain",
        category: "Banh Mi",
    },
    {
        id: 4,
        name: "Chicken Vermicelli Bowl",
        vietnameseName: "Bún Gà",
        description: "Rice vermicelli with grilled chicken, fresh herbs, and fish sauce dressing",
        price: 11.99,
        image: "https://imvoyager.com/wp-content/uploads/2017/10/pho-chicken.jpg",
        category: "Main Courses",
    },
    {
        id: 5,
        name: "Chicken Sticky Rice",
        vietnameseName: "Xôi Gà",
        description: "Sticky rice with chicken, mung bean, and crispy shallots",
        price: 9.99,
        image: "https://visa2asia.com/wp-content/uploads/2022/11/xoi-wrapped-in-banana-leaves.jpg",
        category: "Rice Dishes",
    },
    {
        id: 6,
        name: "Chicken Lemongrass",
        vietnameseName: "Gà Xào Sả Ớt",
        description: "Stir-fried chicken with lemongrass, chili, and Vietnamese herbs",
        price: 13.99,
        image: "https://bing.com/th?id=OSK.020120db91a29dc3c3f1fe921719133b",
        category: "Main Courses",
    },
    {
        id: 7,
        name: "Chicken Curry",
        vietnameseName: "Cà Ri Gà",
        description: "Vietnamese-style chicken curry with coconut milk, potatoes, and baguette",
        price: 14.99,
        image: "https://i.ytimg.com/vi/xySE3CCA1Kk/maxresdefault.jpg",
        category: "Main Courses",
    },
    {
        id: 8,
        name: "Chicken Salad",
        vietnameseName: "Gỏi Gà",
        description: "Fresh chicken salad with cabbage, herbs, and fish sauce dressing",
        price: 10.99,
        image: "https://bing.com/th?id=OSK.07b3b347e137258bf308afa690b231b2",
        category: "Appetizers",
    },
    {
        id: 9,
        name: "chicken rice",
        vietnameseName: "Cơm gà xối mỡ",
        description: "Fresh chicken salad with cabbage, herbs, and fish sauce dressing",
        price: 10.99,
        image: "https://topchuan.com/wp-content/uploads/2023/04/Com-Ga-Xoi-Mo-77-1.jpg",
        category: "Rice Dishes",
    },
    {
        id: 10,
        image: "https://th.bing.com/th/id/OIP.Kjj3UmR4KHAwIjUXS2UCGwHaHa?cb=thvnextc1&rs=1&pid=ImgDetMain",
        vietnameseName: "Trà sữa kem trứng",
        description: "Fresh chicken salad with cabbage, herbs, and fish sauce dressing",
        name: "Egg cream milk tea",
        price: 149.0,
        category: "Desserts",
    },
    {
        id: 11,
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5307ef37224391.57397a56d79da.jpg",
        name: "Cocacola",
        vietnameseName: "Coca cola",
        description: "Fresh chicken salad with cabbage, herbs, and fish sauce dressing",
        price: 149.0,
        category: "Desserts",
    },
    {
        id: 12,
        image: "https://afamilycdn.com/2018/9/6/nuoc-chanh-lanh-giup-giam-can1-15362312461921071861296.jpg",
        name: "Lemon drink",
        description: "Fresh chicken salad with cabbage, herbs, and fish sauce dressing",
        vietnameseName: "Nước chanh",
        price: 149.0,
        category: "Desserts",
    },
];
