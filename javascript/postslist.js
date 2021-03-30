function open1(author,heading,content) {
    const url = `../html/post.html?heading=${encodeURIComponent(heading.innerText)}&author=${encodeURIComponent(author.innerText)}&content=${encodeURIComponent(content.innerText)}`;
    window.location.href = url;
}