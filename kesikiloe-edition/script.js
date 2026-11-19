/*
  THE KESIKILOE EDITION — CONTENT & IMAGE SETTINGS
  1) Put your photographs in the images/ folder.
  2) Change a filename below if your photo has a different name.
  3) Edit the text in CONTENT. Keep the quotation marks and commas.
*/
const IMAGES = {
  cover: "images/cover.jpeg",
  solo1: "images/kesikiloe-01.jpeg",
  solo2: "images/kesikiloe-02.jpeg",
  solo3: "images/kesikiloe-03.jpeg",
  solo4: "images/kesikiloe-04.jpeg",
  aura1: "images/aura-01.jpeg",
  aura2: "images/aura-02.jpeg",
  aura3: "images/aura-03.jpeg",
  brother1: "images/brother-01.jpeg",
  brother2: "images/brother-02.jpeg",
  brother3: "images/brother-03.jpeg"
};

const CONTENT = {
  introduction: "I made this as a reminder of the beauty you carry,both in what the world sees and in the little things that make you who you are. I hope each page gives you a reason to smile, appreciate yourself a little more and see just how much there is to celebrate about you. Sometimes we don't see ourselves the way others do, so here's a little glimpse of you through my eyes.",
  girl1: "Something I hope you never overlook about yourself is the kind of person you are. You're passionate, considerate and have such a sweet heart. I notice the way you care, the thoughtfulness in the little things, and a strength in you that I hope you never underestimate. And beyond your beauty, I hope you always appreciate the kindness and goodness you carry within you. ❤️",
  girl2: "Ma’Mokoena. ❤️",
  sister: "The selfies and memories you share say a lot about the bond you have.It's clear how much your little sister means to you and what a special big sister you are. I know you miss your little girl, and I hope you get to see her soon.I'm sure she's doing well, keeping up with her schoolwork and growing into someone who'll keep making you proud. ❤️",
  brother: "I still remember the first time I saw you with your brother. I wanted to approach you,but hesitated because I thought he was your older brother. 😂Little did I know he was actually the younger brother who loved disturbing your peace with loud music in the house. I know he'll be proud of you for taking this step towards independence. And with the example you set as his big sister, he'll always have someone to look up to.",
  brother2: "And by the way, I haven't forgotten about those girls' numbers your brother wanted that day we first met. I'm still working on it. 😂",
  letter: "I remember the first time. And I mean all the first times. 🥲 I remember the day I met you, dressed in a white school jersey, grey sweatpants and black flip-flops that belonged to your dad. Your butterfly locs looked so pretty on you, although how could they not? You had this bright smile and the most welcoming eyes that I honestly could have just stared at. Well, I did stare, and you must have noticed because, as you were passing, you looked in my direction for a split second. That was all the opportunity I needed to greet you. I said, hello and you said, hello  🙂 Isn't that crazy? Someone I have come to care about so deeply, and it all started with a simple hello. I asked you ukuthi unjani, you said you were good, asked how I was, and that was pretty much the end of our little exchange. I watched you walk back home, and honestly, that could have been the last of it. I even waited outside, checking every now and then to see if you'd come out again, but you never did. 😔 Mxm, uyabhora yaz. But! We both know how that night ended. 🙂 I'm not going to lie, I got home so excited to text you. 😭 I remember the first time I came to pick you up. You were nervous, I was nervous, and McDonald's was a disaster. 🥲 I even had to drive you back home just in time for you to fetch Ora from crèche. And I remember that first attempt at kissing you... Yoh. 😭😭 Let's just agree to forget about that particular first. 😂 I could go on about all the firsts, but we'd be here forever, so let me get to the point of this letter. 🙂 I just want you to know that I see you. Beyond your beautiful eyes, your bright smile and your glowing skin, I see the person you are. You're not just a pretty face. You're strong, passionate, considerate and kind. You're someone who has had her share of difficult moments, but I admire that you still make room for the things that excite you, the things you're looking forward to and the little plans you have for yourself. Whether it's getting excited about a bikini 😝 or imagining how you'll decorate your own place one day, I hope you never lose that part of yourself. I genuinely hope life brings you the things your heart has been wishing for. The opportunities, the happiness, the experiences, the little wins and the bigger dreams too. I hope you get to experience more of the things that make you excited about life, and that you never feel like you have to settle for less than what you deserve. If there's someone I'll always be rooting for, it's you. ❤️ And one more thing: I hope you never underestimate how lovely you are to have around. You're genuinely such a fun person to be around. You have your own little ways, your humour, your random moments and a personality that makes even the simplest moments enjoyable. You're cool, you're easy to laugh with, and there's just something about being around you that I appreciate. I hope you know that you're a blessing to the people who get to have you in their lives, and I'm grateful that I get to know you the way I do. I hope that whenever you come back to this little page, you remember just how much there is to appreciate about yourself. Not just the things people compliment you on, but the little things that make you, you. Keep being you, Kesikiloe Morai. There's so much more goodness I hope life has waiting for you."
};

const CAPTIONS = {
  solo1: "Tomboy entle kanje??!",
  solo2: "Yohh Nkosiyam 😍",
  solo3: "Ngwanyana wa mo’Sotho 🖤",
  solo4: "Ke nale taste neh? 😂",
  aura1: "I've got a feeling she's going to grow up loving lip liner just as much as you do.",
  aura2: "Oratile. ❤️",
  aura3: "You two look so pretty here. 🥹",
  brother1: "Amo",
  brother2: "🥹❤️",
  brother3: "🤞🏽🖤"
};

// Populate text placeholders from the editable content above.
document.querySelectorAll("[data-copy]").forEach((el) => {
  const key = el.dataset.copy;
  if (CONTENT[key]) el.textContent = CONTENT[key];
});
document.querySelectorAll("[data-caption]").forEach((el) => {
  const key = el.dataset.caption;
  if (CAPTIONS[key]) el.textContent = CAPTIONS[key];
});

// Load images. Missing files become clear, intentional placeholders—not broken icons.
document.querySelectorAll("img[data-image]").forEach((img) => {
  const key = img.dataset.image;
  img.src = IMAGES[key];
  img.addEventListener("error", () => {
    img.removeAttribute("src");
    img.classList.add("image-placeholder");
    img.setAttribute("role", "img");
    img.setAttribute("aria-label", "Photograph placeholder: " + key);
  }, { once: true });
});

// Mobile chapter navigation.
const menuToggle = document.getElementById("menuToggle");
const chapterNav = document.getElementById("chapterNav");
menuToggle.addEventListener("click", () => {
  const open = chapterNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.querySelector("span").textContent = open ? "−" : "＋";
});
chapterNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    chapterNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector("span").textContent = "＋";
  });
});

// Reading progress indicator.
const progress = document.getElementById("progress");
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const amount = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = amount + "%";
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// Gentle reveal on scroll, with reduced-motion support.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealTargets = document.querySelectorAll(".photo-card, .chapter-heading, .family-intro, .intro-copy, .letter-wrap, .closing, .girl-note, .girl-copy, .brother-note");
if (!reduceMotion && "IntersectionObserver" in window) {
  revealTargets.forEach((el) => el.classList.add("reveal"));
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => observer.observe(el));
}
