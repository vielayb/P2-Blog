const widgetBtn = document.querySelector("#upload_widget");
widgetBtn.addEventListener('click', function () {
    window.cloudinary.createUploadWidget({
        cloudName: 'dom1gkn9c',
        uploadPreset: 'ml_default'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
        }
    }
    ) .open();
})

