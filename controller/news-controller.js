// import News from '../model/news.js';
import axios from 'axios';

var today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let day1 = (today.getDate() - 15 + 28) % 28;
console.log("day1 is " + day1);
var setMonth = (today.getMonth() + 1)
if (day1 > today.getDate()) {
    setMonth = today.getMonth();
}
// console.log(setMonth);
let date1 = today.getFullYear() + '-' + setMonth + '-' + day1;
// console.log(date);
// console.log(date1);
// var dateTime = date + ' ' + time;
const url = `https://newsapi.org/v2/everything?q=apple&from=${date1}&to=${date}&sortBy=popularity&apiKey=356800ee65934fd3b1b6e9b871d7388d`;

// this is call back function and acts as an api for the frontend
export const getNews = async (request, response) => {
    try {
        const respon = await axios.get(url);
        // console.log(respon.data);
        response.send(respon.data);
    } catch (error) {
        console.log(error);
        return response.status(500).json(error);
    }
}

// const fetchNews = async () => {
//     try {
//         return await axios.get(url);
//     } catch (error) {
//         console.error(error);
//     };
// }