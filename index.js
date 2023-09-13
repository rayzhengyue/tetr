// const dateString = '20230202';
// const year = dateString.substr(0, 4);
// const month = dateString.substr(4, 2);
// const day = dateString.substr(6, 2);
// const formattedDate = `${year}/${month}/${day}`;
// console.log(formattedDate);


// let str = 'ABC123';
// str = str.replace(/([a-zA-Z])([0-9])/g, '$1 $2');
// console.log(str); // 输出 'ABC 123'


//  async function getData(){
//   return new Promise((re,rj)=>{
//     setTimeout(() => {
//         console.log(2);
//         re(true);
//     }, 2000);
//   })
// }

// async function sss(){
//     console.log(1);
//     await getData();
//     console.log(3);
// }
// sss();


// const obj={
//   name:'123',
//   age:11,
//   obj2:{

//   }
// };
// console.log(obj.obj2?.test);

// const arr = ['1Y','2Y','1M','1W','2M','2W'];

// arr.sort((a, b) => {
//   const aVal = getValue(a);
//   const bVal = getValue(b);
  
//   if (aVal < bVal) {
//     return -1;
//   }
  
//   if (aVal > bVal) {
//     return 1;
//   }
  
//   return 0;
// });

// console.log(arr); // ['1W', '2W', '1M', '2M', '1Y', '2Y']

// function getValue(str) {
//   const num = parseInt(str.slice(0, -1));
//   const unit = str.slice(-1);
  
//   switch (unit) {
//     case 'W':
//       return num * 1;
//     case 'M':
//       return num * 4;
//     case 'Y':
//       return num * 52;
//     default:
//       return 0;
//   }
// }

// 定义两个日期字符串
// var date1Str = '2022/06/20';
// var date2Str = '2022/07/05';

// 将日期字符串转换为日期对象
// var date1 = new Date(date1Str);
// var date2 = new Date(date2Str);

// 计算时间差（单位：毫秒）
// var timeDiff = Math.abs(date2.getTime() - date1.getTime());

// 将时间差转换为天数
// var daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
// console.log(daysDiff);
// 根据天数判断区间
// var weeksDiff = 0;
// if (daysDiff >= 7 && daysDiff < 14) {
//   weeksDiff = 1;
// } else if (daysDiff >= 14 && daysDiff < 21) {
//   weeksDiff = 2;
// }

// 输出结果
// console.log('两个日期之间相差 ' + weeksDiff + ' 个礼拜');

// function checkString(input) {
//   // 使用正则表达式检查字符串是否只包含数字或破折号
//   var regex = /^[0-9\-]+$/;
  
//   if (regex.test(input)) {
//     console.log("正确");
//   } else {
//     console.log("错误");
//   }
// }
// checkString('-')

// function createArrays() {
//   let a='01';
//   // console.log(Number(a.split('')[0]));
//   let arr1 = new Array(10).fill('0').map((_, index) => index.toString());
//   console.log(arr1);
  

// }


// createArrays();

// let a=[{b:123,c:111},{b:456,c:111}]; let aaa=a.map((item)=>item.b); console.log(aaa);

// const a = ['20220505','20220101','20220101','20220707'];

// const b = a.filter((item,i)=>a.indexOf(item)===i);
// console.log(b);

// const asd = new Date('2023/07/17');
// console.log(asd);
// let myArray = [
//     { catogory: 0, catogoryContent: 1 },
//     { catogory: 0, catogoryContent: 0 },
//     { catogory: 1, catogoryContent: 0 },
//     { catogory: 0, catogoryContent: 2 },
//     { catogory: 1, catogoryContent: 2 },
//     { catogory: 1, catogoryContent: 1 },
//     // 可以繼續加入更多物件
//   ];
//   function customSort(a, b) {
//     if (a.catogory < b.catogory) {
//       return -1;
//     } else if (a.catogory > b.catogory) {
//       return 1;
//     } else {
//       // 若catogory相同，再按照catogoryContent進行排序
//       return a.catogoryContent - b.catogoryContent;
//     }
//   }
  
  // 使用sort方法進行排序
//   myArray.sort(customSort);

//   console.log(myArray);

// function removeDuplicates(arr) {
//     const seen = {};
//     return arr.filter((item) => {
//       const key = item.catogory + '-' + item.catogoryContent;
//       if (!seen[key]) {
//         seen[key] = true;
//         return true;
//       }
//       return false;
//     });
//   }
  
  // 範例使用：
  // const originalArray = [
  //   { catogory: 0, catogoryContent: 1 },
  //   { catogory: 1, catogoryContent: 2 },
  //   { catogory: 0, catogoryContent: 1 },
  //   { catogory: 2, catogoryContent: 3 },
  // ];
  
  // const deduplicatedArray = removeDuplicates(originalArray);
  // console.log(deduplicatedArray);


  // let a = '12,234,567.00';
  // let b = a.replace(/,/g, '');
  // let c =b.split('.');
  // let d = c[1] === '00' ? '' : parseFloat(b);
  // console.log( d);
  // function checkPriceEmpty(price) {
  //   return price==='' || price === '-';
  // }
  // console.log(checkPriceEmpty('-'));

  const a =[
    {docId:'2014A'},
    {docId:'2011A'}
  ]
  const b =a.sort((a,b)=>{
    return a.docId.localeCompare(b.docId)
  })
  console.log(b);
