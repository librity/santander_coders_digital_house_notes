function solution(A) {
  let answer = 1;
  A = A.filter(x => x > 0).sort((x, y) => x - y);

  for (var i = 0; i < A.length; i++) {
    if (answer < A[i]) {
      return answer;
    }

    answer = A[i] + 1;
  }

  return answer;
}

// _________________________________

function solution(ranks) {
  let answer = 0;
  let superior;
  ranks = ranks.sort((x, y) => x - y);

  ranks.forEach((rank, index) => {
    superior = rank + 1;
    if (ranks.includes(superior)) {
      answer += 1;
    }
  });

  return answer;
}

ranks = [0, 0, 0, 2, 2, 3, 3, 3, 4];
solution(ranks);
[11, 10, 10, 10, 10, 8, 8, 7, 6, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 1, 0];
[4, 3, 1, 0, 0, 0];
[4, 4, 3, 3, 1, 0];
[4, 2, 0];

for (var a = [], i = 0; i < 20; ++i) a[i] = i;

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp,
    current,
    top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  return array;
}

a = shuffle(a);

// _________________________________

function solution(A) {
  let max = 0;
  let negatives=0;
  let current;

  A.forEach((v1, i1) => {
    A.forEach((v2, i2) => {
      for (let aux = i1; aux <= i2; aux++) {

      }
    });
  });

  return max;
}

A = [-8, 3, 0, 5, -3, 12];
solution(A);
A = [1, 2, -3, 4, 5, -6];
A = [-1, 2, 1, 2, 0, 2, 1, -3, 4, 3, 0, -1];
A = [-1, 1, 1, -1];

