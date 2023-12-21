const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

// 직각 삼각형 검증 함수
const isRightTriangle = (a, b, c) => {
    square(a) + square(b) === square(c);
}

isRightTriangle(3, 4, 5);