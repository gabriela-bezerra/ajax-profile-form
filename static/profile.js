function submitProfile(evt) {
  evt.preventDefault();

  const dataInputs = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
  };

  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(dataInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('#profiles').insertAdjacentHTML('beforeend', ` <li>${jsonData.fullname} the ${jsonData.occupation} is ${jsonData.age}</li>`,);
    });

}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
