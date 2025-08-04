import pfp1 from "/src/assets/img/propstfake.gif";
import tenna from "/src/assets/img/tenna.gif";

    document.addEventListener('DOMContentLoaded', () => {
      const avatar = document.getElementById('avatar');
      if (!avatar) return;

      const originalSrc = pfp1.src;
      const newSrc = tenna.src;

      let isChanged = false;
      let revertClicks = 0;

      avatar.addEventListener('click', () => {
        if (!isChanged) {
          avatar.src = newSrc;
          isChanged = true;
          revertClicks = 0;
        } else {
          revertClicks++;
          if (revertClicks >= 3) {
            avatar.src = originalSrc;
            isChanged = false;
            revertClicks = 0;
          }
        }
      });
    });