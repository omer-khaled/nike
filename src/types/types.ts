export const navLinks:link[] = [
    { href: "/nike", label: "Home" },
    { href: "/nike/shop", label: "shop" },
    { href: "/nike/cart", label: "cart" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];
export type link  = {href:string,label:string};
export type statisticsTyps = {value:string,label:string}
export const statistics:statisticsTyps[] = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];
export type productType = {
    imgURL:string,
    name:string,
    price:string
}
export type serviceType = {
    imgURL:string,
    label:string,
    subtext:string
}