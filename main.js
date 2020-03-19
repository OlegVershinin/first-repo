const rectangle = (a, b, char='*', line = '', lt = '\n') => {
    for (let i = 0; i < b; ++i) {
      for (let k = 1; k < a; ++k) line += char;
      line += char+lt;
  }
  return line;
}

let width  = prompt("задайте ширину прямоугольника");
let height = prompt("задайте высоту прямоугольника");
console.log(rectangle(width, height));

const rect_empty = (a, b, char='*', space = ' ', line = '', lt = '\n') => {
  // рисуем верхнюю линию
  for (let i = 0; i < a; ++i) line += char;
    line += lt;
  // если высота больше 2-х
  if (b > 2) {
    for (let i = 0; i < b - 2; ++i) {
      line += char;
      for (let k = 0; k < a - 2; ++k) line += space;
      line += char+lt;
    }
  }
  // рисуем нижнюю линию
  if (b > 1)
    for (let i = 0; i < a; ++i) line += char;
  
  return line;
}

let w  = prompt("задайте ширину прямоугольника");
let h = prompt("задайте высоту прямоугольника");
console.log(rect_empty(w, h));


const sosceles_triangle = (h, char = '#', is_empty = '', space = ' ', lt = '\n') => {
  let num_spaces,
      num_chars,
      spaces,
      chars,
      line = is_empty;

  for (let l = 1; l <= h; ++l) {
    
    num_spaces = h-l;
    spaces = is_empty;
    for (let i = 0; i < num_spaces; ++i) spaces += space;

    num_chars = l * 2 - 1;
    chars = is_empty;
    for (let i = 0; i < num_chars; ++i) chars += char;
    
    line += spaces + chars + lt;
  }
  return (line); 
}

let hst  = prompt("задайте высоту треугольника");
console.log(sosceles_triangle(hst));

const right_triangle = (h, chars = '', char = '◣', lt = '\n') => {
  for (let l = 1; l <= h; l++) {
    for (let i = 0; i < l-1; i++) chars += char;
    chars += lt;
  }
 return (chars);
}

let hrt  = prompt("задайте высоту треугольника");
console.log(right_triangle(hrt));


const isPalindrome = (str) => {
  let strReverse = str.split('').reverse().join('');
  if (strReverse == str) {
    return 'Это полиндром !'
  } else {
    return 'Это не полиндром...'
  }
}

let str  = prompt("введите строку для проверки на полиндром");
console.log(isPalindrome(str));
