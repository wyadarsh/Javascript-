//switch case:jab ek value ko multiple condition se check krna hota h.
//syntax :
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month=3;
// switch (month) {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case executed");
//         break;
// }

/*agar break nhi hota to jaha pe bhi key ka value match hojata uske baad shara code exxecute hojayega
except default*/


const month="march";
switch (month) {
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case executed");
        break;
}

//
