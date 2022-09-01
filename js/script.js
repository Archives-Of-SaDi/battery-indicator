const percentage = document.querySelector('.percentage');
const percent = document.querySelector('.percent');
const isCharging = document.querySelector('.isCharging');

navigator.getBattery().then((battery) => {
  function updateLevelInfo() {
    percentage.style.width = battery.level * 100 + '%';
    percent.innerHTML = battery.level * 100 + '%';
  }

  function getCharging() {
    isCharging.innerHTML = battery.charging
      ? 'Your device is charging'
      : 'Your device is not charging';
  }

  function updateAllInfo() {
    updateLevelInfo();
    getCharging();
  }

  battery.addEventListener('levelchange', () => {
    updateLevelInfo();
  });

  battery.addEventListener('chargingchange', () => {
    getCharging();
  });

  updateAllInfo();
});
