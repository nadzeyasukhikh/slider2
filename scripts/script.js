const root = document.querySelector(".root");
const posts_div = document.createElement("div");
const btn_div = document.createElement("div");
const text_content = document.createElement("div");
posts_div.classList.add("post_div");
btn_div.classList.add("btn_div");
text_content.classList.add("text_content");

const buttonNames = [
  "1О компании",
  "2О компании",
  "3О компании",
  "4О компании",
  "5О компании",
  "6О компании",
];

const loremTexts = [
  "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.<br>",
  "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
  "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
];

text_content.innerHTML = loremTexts[0].repeat(10);

buttonNames.forEach((name, index) => {
  const button = document.createElement("button");
  button.textContent = name;
  button.addEventListener("click", (event) => {
    btn_div
      .querySelectorAll("button")
      .forEach((btn) => btn.classList.remove("active"));
    if (index === 0) {
      text_content.innerHTML = loremTexts[index].repeat(10);
    } else {
      text_content.textContent = loremTexts[index];
    }
    event.target.classList.add("active")
  });
  btn_div.append(button);
});

posts_div.append(btn_div, text_content);
root.append(posts_div);



const img_icons = [
    "https://gagaru.club/uploads/posts/2023-02/1676951773_gagaru-club-p-samie-krasivie-goroda-gretsii-vkontakte-13.jpg",
    "https://www.aviabileti.by/blog/wp-content/uploads/2014/09/athens.jpg",
    "https://www.grecomap.com/images/greek-articles/tourism/299_naberezhnye-grecii-1.jpg",
    "https://w.forfun.com/fetch/47/47267b9a74af697e30f967a59e4e4b0f.jpeg"
]

const img_container = document.createElement("div");
img_container.classList.add("img_container");

const icons_content = document.createElement("img");
icons_content.src = img_icons[0];
icons_content.classList.add("icons_content");

const icons_div = document.createElement("div");
icons_div.classList.add("icons_div");

img_icons.forEach((iconUrl) => {
    const img = document.createElement("img");
    img.src = iconUrl;
    img.classList.add("icon");

    img.addEventListener("click", () => {
        icons_content.src = iconUrl;
    });

    icons_div.append(img); 
});

img_container.append(icons_content, icons_div);
root.append(img_container);
