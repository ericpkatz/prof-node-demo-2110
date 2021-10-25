const group = (items, fn)=> {
  /*
  const result = {};
  items.forEach((item)=> {
    const key = fn(item);
    if(!result[key]){
      result[key] = [];
    }
    result[key].push(item);
  });

  return result;
  */
  return items.reduce((acc, item)=> {
    const key = fn(item);
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
};
let grouped = group([1, 2, 3], (i)=> i % 2 ? 'odd' : 'even');

console.log(grouped);//{ odd: [ 1, 3 ], even: [ 2 ] }

//grouped = group([1, 2, 3], (i)=> i >= 2 ? 'gte 2' : 'lt2');
//console.log(grouped);

//{ lt2: [ 1 ], 'gte 2': [ 2, 3 ] }
//grouped = group(['a', 'b', 1, 2, 3],(i) => typeof i === 'number' ? 'numbers' : 'not numbers');
//console.log(grouped);//{ 'not numbers': [ 'a', 'b' ], numbers: [ 1, 2, 3 ] }
