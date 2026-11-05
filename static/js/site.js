(() => {
  const clock = document.querySelector('#central-time');
  if (!clock) return;

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  const updateClock = () => {
    const now = new Date();
    clock.dateTime = now.toISOString();
    clock.textContent = `${formatter.format(now).toLowerCase()} ct`;
  };

  updateClock();
  window.setInterval(updateClock, 1000);
})();
