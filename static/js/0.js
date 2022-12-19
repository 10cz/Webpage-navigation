const form = document.getElementById('search-form');
const searchEngine = document.getElementById('search-engine');
const timeDisplay = document.getElementById('time-display');

// 保存上一次选择的搜索引擎
const selectedEngine = localStorage.getItem('selectedEngine');
if (selectedEngine) {
  searchEngine.value = selectedEngine;
}

// 搜索功能
form.addEventListener('submit', event => {
  event.preventDefault();

  // 获取搜索关键词和搜索引擎
  const keyword = document.getElementById('search-keyword').value;
  const engine = searchEngine.value;

  // 根据搜索引擎跳转到相应的网站并搜索
  let url;
  if (engine === 'baidu') {
    url = `https://www.baidu.com/s?wd=${keyword}`;
  } else if (engine === 'bing') {
    url = `https://www.bing.com/search?q=${keyword}`;
  } else if (engine === 'google') {
    url = `https://www.google.com/search?q=${keyword}`;
  }
  window.location.href = url;

  // 保存当前选择的搜索引擎
  localStorage.setItem('selectedEngine', engine);
});
