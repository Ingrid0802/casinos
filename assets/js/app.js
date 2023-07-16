const data = [
  {
    id: 1,
    name: 'Sports Interaction Casino Review',
    casinoSource: 'assets/images/c2.png',
    freeSpins: 20,
    firstDepositPercentage: 200,
    bonusDeposit: 250,
    FS: 250,
    isNew: true,
    ratings: 4.4,
    code: 'WELCOME',
    games: 'Slots, keno, Scratch, Cards, Bingo',
    maxCash: 100,
  },

  {
    id: 2,
    name: '21 Dukes Casino Review',
    casinoSource: 'assets/images/c1.png',
    freeSpins: 20,
    firstDepositPercentage: 200,
    bonusDeposit: 250,
    FS: 250,
    isNew: false,
    ratings: 4.4,
    code: 'al doilea cod',
    games: 'keno, Scratch, Bingo',
    maxCash: 99999,
  },

  {
    id: 3,
    name: 'AC Casino Review',
    casinoSource: 'assets/images/c4.png',
    freeSpins: 50,
    firstDepositPercentage: 200,
    bonusDeposit: 250,
    FS: '',
    isNew: true,
    ratings: 3.2,
    code: 'al treilea cod',
    games: 'Bingo',
    maxCash: 251,
  },

  {
    id: 4,
    name: 'All Irish Casino Review',
    casinoSource: 'assets/images/c3.png',
    freeSpins: 50,
    firstDepositPercentage: 100,
    bonusDeposit: 70,
    FS: 70,
    isNew: false,
    ratings: 4.5,
    code: 'al patrulea cod',
    games: 'Bingo, Slots',
    maxCash: 55,
  },

  {
    id: 5,
    name: 'All Irish Casino Review',
    casinoSource: 'assets/images/c4.png',
    freeSpins: 100,
    firstDepositPercentage: 100,
    bonusDeposit: 70,
    FS: 70,
    isNew: false,
    ratings: 2.4,
    code: 'al patrulea cod',
    maxCash: 55,
  },

  {
    id: 6,
    name: '21 Dukes Casino Review',
    casinoSource: 'assets/images/c1.png',
    freeSpins: 20,
    firstDepositPercentage: 200,
    bonusDeposit: 250,
    FS: 250,
    isNew: false,
    ratings: 3.4,
    code: 'al doilea cod',
    games: 'keno, Scratch, Bingo',
    maxCash: 99999,
  },

  {
    id: 7,
    name: 'AC Casino Review',
    casinoSource: 'assets/images/c3.png',
    freeSpins: 50,
    firstDepositPercentage: 200,
    bonusDeposit: 250,
    FS: '',
    isNew: true,
    code: 'al treilea cod',
    games: 'Bingo',
    maxCash: 251,
  },
];

const total = document.querySelector('.total-casinos');
const overlay = document.querySelector('.overlay-dim');
const container = document.querySelector('.container');
let casinosNumber = 4;
let startIndex = 0;

total.innerHTML = data.length > 0 ? `${data.length} Casinos` : 'No Casinos';

const isFSBonus = (valueFS) => {
  if (valueFS) {
    return true;
  }
  return false;
};

const isNew = (card, data) => {
  if (data.isNew) {
    const newCasinoLabel = document.createElement('span');
    newCasinoLabel.textContent = 'NEW';
    card.append(newCasinoLabel);
    newCasinoLabel.classList.add('new-casino-label');
  }
};

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return rect.top + window.scrollY;
}

const freeSpinsHandler = (freeSpins, data) => {
  freeSpins.addEventListener('click', () => {
    const popUps = [...document.querySelectorAll('.pop-up')];
    popUps.forEach((popUp) => {
      if (
        data.id.toString() === popUp.getAttribute('id').slice(-1).toString()
      ) {
        overlay.classList.remove('hide-pop-up');
        freeSpins.style.backgroundColor = '#daecfe';
        let value = getOffset(freeSpins);
        popUp.style.top = value + 'px';
        popUp.classList.remove('hide-pop-up');
      }
    });
  });
};

const createCard = () => {
  for (let i = startIndex; i < casinosNumber; i++) {
    const card = document.createElement('div');
    card.classList.add('card');

    const casinoImg = document.createElement('img');
    casinoImg.setAttribute('src', data[i].casinoSource);
    casinoImg.classList.add('card-paddings');
    card.append(casinoImg);

    const cardDetails1Container = document.createElement('div');
    cardDetails1Container.classList.add('card-details1');
    card.append(cardDetails1Container);

    const casinoTitle = document.createElement('p');
    casinoTitle.classList.add('card-p-color');
    casinoTitle.textContent = data[i].name;
    cardDetails1Container.append(casinoTitle);

    const cardDetails1Rating = document.createElement('div');
    cardDetails1Rating.classList.add('card-details1-ratings');
    cardDetails1Container.append(cardDetails1Rating);

    const americanFlag = document.createElement('img');
    americanFlag.classList.add('card-flag-dimension');
    americanFlag.setAttribute('src', 'assets/images/american_flag.png');
    cardDetails1Rating.append(americanFlag);

    const ratings = document.createElement('span');
    ratings.classList.add('points');
    ratings.textContent = data[i].ratings || 0;
    cardDetails1Rating.append(ratings);

    let noStars = Math.round(data[i].ratings);

    if (ratings.textContent.toString() === '0') {
      for (let i = 0; i < 5; i++) {
        const starImg2 = document.createElement('img');
        starImg2.classList.add('star');
        starImg2.setAttribute('src', 'assets/images/star_rounded2.png');
        cardDetails1Rating.append(starImg2);
      }
    }

    for (let i = 0; i < noStars; i++) {
      const starImg = document.createElement('img');
      starImg.classList.add('star');
      starImg.setAttribute('src', 'assets/images/star_rounded.png');
      cardDetails1Rating.append(starImg);
    }
    for (let i = 0; i < 5 - noStars; i++) {
      const starImg2 = document.createElement('img');
      starImg2.classList.add('star');
      starImg2.setAttribute('src', 'assets/images/star_rounded2.png');
      cardDetails1Rating.append(starImg2);
    }

    const cardDetails2 = document.createElement('div');
    cardDetails2.classList.add('card-details2');
    card.append(cardDetails2);

    const freeSpins = document.createElement('p');
    freeSpins.classList.add('card-details2-p-format');
    freeSpins.classList.add('card-details2-free-spins');
    freeSpins.setAttribute('id', `free-spins-${i + 1}`);
    freeSpins.textContent = ` ${data[i].freeSpins} Free Spins`;
    cardDetails2.append(freeSpins);

    const bonus = document.createElement('p');
    bonus.classList.add('card-details2-p-format');
    bonus.textContent = `${data[i].bonusDeposit}% First deposit bonus ${
      isFSBonus(data[i].FS) ? '+' : ' '
    } ${data[i].FS} ${isFSBonus(data[i].FS) ? 'FS' : ' '}`;

    const visitButton = document.createElement('a');
    visitButton.textContent = 'VISIT';
    card.append(visitButton);

    cardDetails2.append(bonus);

    container.append(card);
    isNew(card, data[i]);

    freeSpinsHandler(freeSpins, data[i]);
  }
};

const closePopUpHandler = (closePopUp, popUpContainer, data) => {
  closePopUp.addEventListener('click', () => {
    popUpContainer.classList.add('hide-pop-up');
    const freeSpins = [
      ...document.querySelectorAll('.card-details2-free-spins'),
    ];
    freeSpins.forEach((freeSpin) => {
      if (
        data.id.toString() === freeSpin.getAttribute('id').slice(-1).toString()
      ) {
        freeSpin.style.backgroundColor = '#f3f3f3';
        overlay.classList.add('hide-pop-up');
      }
    });
  });
};

const popUpCodeHandler = (popUpCode, popUpContainer) => {
  popUpCode.addEventListener('click', () => {
    document.execCommand('copy');
  });

  popUpCode.addEventListener('copy', (e) => {
    e.preventDefault();
    if (e.clipboardData) {
      e.clipboardData.setData('text/plain', popUpCode.textContent);
      const popUpCopyMessage = document.createElement('div');
      popUpCopyMessage.innerHTML =
        '<span class="checkmark-color">&#10003;</span> Code copied to clipboard';
      popUpCopyMessage.classList.add('pop-up-copy-message');
      popUpContainer.append(popUpCopyMessage);
      console.log(event.clipboardData.getData('text'));
      setTimeout(() => {
        popUpCopyMessage.classList.add('hide-pop-up');
      }, 3000);
    }
  });
};

const createPopUp = () => {
  data.forEach((data, index) => {
    const popUpContainer = document.createElement('div');

    popUpContainer.classList.add('pop-up');
    popUpContainer.classList.add('hide-pop-up');
    popUpContainer.setAttribute('id', `pop-up-${index + 1}`);

    const closePopUp = document.createElement('div');
    closePopUp.classList.add('pop-up-close');
    closePopUp.textContent = 'x';
    popUpContainer.append(closePopUp);

    const popUpTitle = document.createElement('p');
    popUpTitle.classList.add('pop-up-title');
    popUpTitle.textContent = `${data.freeSpins || ''} Free Spins at ${
      data.name || 'unavailable casino'
    } `;
    popUpContainer.append(popUpTitle);

    const popUpCode = document.createElement('p');
    popUpCode.classList.add('pop-up-code');
    popUpCode.textContent = data.code || 'no code available';
    popUpContainer.append(popUpCode);

    const popUpDetailsGrid = document.createElement('div');
    popUpDetailsGrid.classList.add('pop-up-details-grid-container');

    const firstDivPopUpDetailsGrid = document.createElement('div');
    popUpDetailsGrid.append(firstDivPopUpDetailsGrid);

    const gamesAllowed = document.createElement('p');
    gamesAllowed.textContent = 'Games Allowed:';
    gamesAllowed.classList.add('grid-pop-up-left-column');

    const gamesAllowedDiv = document.createElement('div');
    gamesAllowedDiv.append(gamesAllowed);

    const listedGamesAllowedDiv = document.createElement('div');
    listedGamesAllowedDiv.textContent = `${data.games || 'no games'}`;
    listedGamesAllowedDiv.classList.add('grid-pop-up-right-column');

    firstDivPopUpDetailsGrid.append(gamesAllowedDiv);

    const maxCashContainer = document.createElement('div');
    const maxCash = document.createElement('p');
    maxCash.textContent = 'Max cash out:';
    maxCash.classList.add('grid-pop-up-left-column');
    maxCashContainer.append(maxCash);

    const maxCashValue = document.createElement('div');
    maxCashValue.textContent = `$${data.maxCash || 'no cash'}`;
    maxCashValue.classList.add('grid-pop-up-right-column');

    const minDepositContainer = document.createElement('div');
    const minDeposit = document.createElement('p');
    minDeposit.textContent = 'Min deposit:';
    minDeposit.classList.add('grid-pop-up-left-column');
    minDepositContainer.append(minDeposit);

    const minDepositValue = document.createElement('div');
    minDepositValue.textContent = 'FREE';
    minDepositValue.classList.add('grid-pop-up-right-green');

    popUpDetailsGrid.append(firstDivPopUpDetailsGrid);
    popUpDetailsGrid.append(listedGamesAllowedDiv);
    popUpDetailsGrid.append(maxCashContainer);
    popUpDetailsGrid.append(maxCashValue);
    popUpDetailsGrid.append(minDepositContainer);
    popUpDetailsGrid.append(minDepositValue);

    popUpContainer.append(popUpDetailsGrid);

    container.append(popUpContainer);

    popUpCodeHandler(popUpCode, popUpContainer);
    closePopUpHandler(closePopUp, popUpContainer, data);
  });
};

const createLoadMoreButton = () => {
  const loadMoreButton = document.createElement('button');
  loadMoreButton.textContent = 'Load More Casinos (+5)';
  loadMoreButton.classList.add('load-more-btn');
  container.append(loadMoreButton);
};

createPopUp();
createCard();
createLoadMoreButton();

const button = document.querySelector('.load-more-btn');

button.addEventListener('click', (e) => {
  e.preventDefault();

  casinosNumber += 4;
  startIndex += 4;
  if (startIndex > data.length) {
    startIndex = data.length;
  }
  if (casinosNumber > data.length) {
    casinosNumber = data.length;
    button.remove();
    createCard();
  } else {
    createCard();
    button.remove();
  }
});
