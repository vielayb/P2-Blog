let image; 
async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_url,
            image
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

const widgetBtn = document.querySelector("#upload_widget");
widgetBtn.addEventListener('click', function () {
    window.cloudinary.createUploadWidget({
        cloudName: 'dom1gkn9c',
        uploadPreset: 'ml_default'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            console.log(result.info.public_id);
            document.querySelector('#upLoad').src = result.info.url;
            image = result.info.url;
        }
    }
    ) .open();
})

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);