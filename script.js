const subscribeButton = document.querySelector('.subscribe');
const dismissButton = document.querySelector('.dismiss-button');
const input = document.querySelector('input');
const submissionForm = document.querySelector('.submission-form');
const successState = document.querySelector('.success-state');
const invalidEmailWarning = document.querySelector('.invalid-email-warning');
const emailSent = document.querySelector('.email-sent');

input.focus();

const hasConsecutiveDots = function (username) {
  for (const [i, char] of [...username].entries()) {
    if (char === '.') {
      if (username[i] === username[i + 1]) {
        return true;
      }
    }
  }
  return false;
};

const countAtSignOcurrences = function (stringParam) {
  count = 0;
  for (const char of stringParam) {
    if (char == '@') count++;
  }
  return count;
};

const stringVerification = function (stringParam) {
  const atSignIndex = stringParam.indexOf('@');
  const afterusername = stringParam.slice(atSignIndex);
  const username = stringParam.slice(0, atSignIndex);
  const firstLetter = stringParam[0];

  if (
    countAtSignOcurrences(stringParam) === 1 &&
    !hasConsecutiveDots(username) &&
    stringParam.endsWith('.com') &&
    !stringParam.includes(' ') &&
    afterusername.length > 5 &&
    username.length > 0 &&
    firstLetter !== '.'
  ) {
    return true;
  } else {
    return false;
  }
};

const showWarning = function () {
  invalidEmailWarning.classList.remove('hidden');
  input.classList.add('invalid');
};

const resetEmail = function () {
  invalidEmailWarning.classList.add('hidden');
  input.classList.remove('invalid');
  input.value = '';
};

subscribeButton.addEventListener('click', () => {
  const string = input.value.trim().toLowerCase();

  if (stringVerification(string)) {
    submissionForm.classList.add('hidden');
    successState.classList.remove('hidden');
    emailSent.innerHTML = string;
  } else {
    showWarning();
  }
});
dismissButton.addEventListener('click', () => {
  submissionForm.classList.remove('hidden');
  successState.classList.add('hidden');
  resetEmail();
});
