const subscribeButton = document.querySelector('.subscribe');
const dismissButton = document.querySelector('.dismiss-button');
const input = document.querySelector('input');
const submissionForm = document.querySelector('.submission-form');
const successState = document.querySelector('.success-state');
const invalidEmailWarning = document.querySelector('.invalid-email-warning');
const emailSent = document.querySelector('.email-sent');

input.focus();

const stringVerification = function (stringParam) {
  const indexOfa = stringParam.indexOf('@');
  const indexOfDot = stringParam.indexOf('.');
  const beforeAinput = stringParam.slice(0, indexOfa);
  const betweenDotAndA = stringParam.slice(indexOfa, indexOfDot);

  if (
    stringParam.endsWith('.com') &&
    stringParam.includes('@') &&
    betweenDotAndA.length > 1 &&
    beforeAinput.length >= 1 &&
    !stringParam.includes(' ')
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
  const string = input.value.trim();

  if (stringVerification(string)) {
    console.log(string);
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
