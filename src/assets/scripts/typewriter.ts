const messages: string[] = [
  'Welcome, stranger!',
  'I break things. I build things. Sometimes they work.',
  "This site? It's more personal than professional — like my dotfiles.",
  'If you found this page, congratulations! You’ve officially wasted more time than most people do online.',
  'I use Arch, btw (Im lying)',
  'This site looks like a mess? Perfect, you’re in the right place.',
  'Don’t worry, you’re not lost, this is exactly where the internet forgets about you.',
  'If you’re reading this, you probably should be working.',
  'Click around! We promise it won’t get any better, but at least it’s something to do.',
  'This site was built with love, sweat, and a healthy dose of procrastination.',
  'Thanks for stopping by. Your boredom is my entertainment.',
  'Please, take your time. It’s not like anyone else is waiting for you.',
  'If you’re still here, you must really love disappointment.',
  'Feel free to pretend this site is worth your time.',
  'This is exactly what the internet was made for: wasting time.',
  'If you’re reading this, you’re either very bored or very lost.',
  'Warning: prolonged exposure to this site may cause existential dread.',
  'You clicked. Congratulations. You’re officially part of the problem.',
  'Thanks for visiting. I hope your therapist knows about this.',
  'You thought it was another message, but it was me, Dio!',
  'Not all who wander are lost, but you definitely are.',
  'Keep scrolling, maybe you’ll find something interesting... or not.',
  'Your secrets are safe with me. I wasn’t even listening anyway.',
  'Error 404: Your motivation not found.',
  'You’ve officially wasted more time on this site than it took to build it.',
  'Ok, you win. I ran out of ideas. You’ve seen every message in this part of the site. Are you happy with that waste of time?',
];

function typeEffect(): void {
  const el = document.getElementById('typed');
  if (!el) return;
  const element = el as HTMLElement;

  let messageIndex = 0;
  let charIndex = 0;

  function _type(target: HTMLElement): void {
    const current = messages[messageIndex];
    if (charIndex < current.length) {
      target.textContent = (target.textContent ?? '') + current.charAt(charIndex);
      charIndex++;
      window.setTimeout(() => _type(target), 50);
    } else {
      window.setTimeout(() => {
        target.textContent = '';
        charIndex = 0;
        messageIndex = (messageIndex + 1) % messages.length;
        _type(target);
      }, 2000);
    }
  }

  _type(element);
}

export function startTyping(): void {
  window.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(typeEffect, 1000);
  });
}
