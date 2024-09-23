function sumFor(list:number[]) :number {
  let sum:number = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(sumFor([1, 2, 3, 4]));

function sumWhile(list:number[]): number {
  let i:number = 0;
  let sum:number = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(sumWhile([1, 2, 3, 4]));

function sumRecursion(list:number[]): number {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1));
}

console.log(sumRecursion([1, 2, 3, 4]));

function sumTheFunctionalWay(list:number[]):number {
  let result:number = 0;
  result = list.reduce((acc, cur) => acc + cur, 0);
  return result;
}

console.log(sumTheFunctionalWay([1, 2, 3, 4]));
