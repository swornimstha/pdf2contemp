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
        }else{
            message.textContent = "Please input correct file format (.pdf)";
            message.style.color = "red";
        }
    }

    FileInput.click();
}

document.getElementById("UploadButton").addEventListener("click",HandleFileUpload);
