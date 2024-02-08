function main() {
  let titleBar = document.querySelector('.fixwidth .block tbody tr td p font');
  let video = document.querySelector('video source');

  if (titleBar === undefined || video === undefined) return;

  let title =
      document.querySelector('.fixwidth .block tbody tr td p font').textContent;
  if (title.includes('普')) title = title.split('普')[0];

  let videoUrl = video.getAttribute('src');

  const downloadLink = document.createElement('a');
  downloadLink.setAttribute('class', 'downloadLink');
  downloadLink.setAttribute('target', '_blank');
  downloadLink.setAttribute('type', 'application/octet-stream');
  downloadLink.setAttribute('href', videoUrl);
  downloadLink.setAttribute('download', title);
  downloadLink.innerText = '下載';

  titleBar.appendChild(downloadLink);
}

main();
