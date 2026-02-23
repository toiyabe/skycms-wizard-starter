(function () {
  const storageType = document.getElementById("storageType");
  const providerHelp = document.getElementById("providerHelp");

  if (!storageType || !providerHelp) {
    return;
  }

  const messages = {
    AzureBlob:
      'Azure Blob format: <code>DefaultEndpointsProtocol=https;AccountName=youraccount;AccountKey=yourkey</code>',
    AmazonS3:
      'Amazon S3 format: <code>Bucket=your-bucket;Region=us-east-1;KeyId=ACCESS_KEY;Key=SECRET_KEY;</code>',
    CloudflareR2:
      'Cloudflare R2 format: <code>AccountId=account-id;Bucket=bucket-name;KeyId=ACCESS_KEY;Key=SECRET_KEY;</code>'
  };

  function updateMessage() {
    providerHelp.innerHTML = messages[storageType.value] || messages.AzureBlob;
  }

  storageType.addEventListener("change", updateMessage);
  updateMessage();
})();
