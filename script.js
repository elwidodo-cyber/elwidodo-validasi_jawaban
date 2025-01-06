const correctAnswers = {
  q1: 'A',
  q2: 'B',
  q3: 'C',
  q4: 'D',
  q5: 'E',
  q6: 'A',
  q7: 'B',
  q8: 'C',
  q9: 'D',
  q10: 'E',
  q11: 'A',
  q12: 'B',
  q13: 'C',
  q14: 'D',
  q15: 'E',
  q16: 'A',
  q17: 'B',
  q18: 'C',
  q19: 'D',
  q20: 'E'
};

function validateAndClearAnswers() {
  let score = 0;
  for (let i = 1; i <= 20; i++) {
      const question = document.querySelector(`input[name="q${i}"]:checked`);
      if (question && question.value === correctAnswers[`q${i}`]) {
          score++;
      }
  }
  const name = document.getElementById('name').value;
  document.getElementById('result').innerText = `Nama : ${name} ||  Nilai anda adalah  ${score}/20`;
  document.getElementById('result').style.display = 'block';
  clearAnswers();
}

function clearAnswers() {
  for (let i = 1; i <= 20; i++) {
      const question = document.querySelector(`input[name="q${i}"]:checked`);
      if (question) {
          question.checked = false;
      }
  }
  document.getElementById('name').value = '';
  document.getElementById('date').value = '';
  document.getElementById('period').value = '';
}
