function HandleFileUpload() {
    const FileInput = document.createElement("input");
    FileInput.type = "file";
    FileInput.accept = ".pdf";

    FileInput.onchange = function(event) {
        const File = event.target.files[0];
        const message = document.getElementById("message");

        if (File && File.type === "application/pdf"){
            message.textContent = "File accepted: " + File.name;
            message.style.color = "green";
            exec("curl -F'file=@book.pdf' 0x0.st", (error, stdout, stderr) => {
      if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
        }else{
            message.textContent = "Please input correct file format (.pdf)";
            message.style.color = "red";
        }
    }

    FileInput.click();
}

document.getElementById("UploadButton").addEventListener("click",HandleFileUpload);

