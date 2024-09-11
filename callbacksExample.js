// using Async await promise become cleaner
function download(url) {
  return new Promise((resolve, reject) => {
    console.log("downloading the content from ", url);
    const content = "ABCDEF";
    reject(content);
  });
}

async function downloader() {
  try {
    const downloadResponse = await download("www.xyz.com");
    return downloadResponse;
  } catch (error) {
    console.log(error);
  }
}
downloader();
