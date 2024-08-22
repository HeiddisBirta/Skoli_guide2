const displayAlertOnButtonClick = () => {
  const button = document.querySelector('button');
  button.addEventListener('click', (event) => {
    alert('You have tickets now!');
  });
};

displayAlertOnButtonClick();
