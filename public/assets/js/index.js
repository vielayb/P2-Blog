
//Widget for uploading pictures
function showUploadWidget() { cloudinary.openUploadWidget({    
    cloudName: "<dom1gkn9c>",    
    uploadPreset: "<ml_default>",    
    sources: [
    "local",
    "google_drive",
    "dropbox",
    "camera",
    "image_search",
    "instagram",
    "facebook"
    ],
    googleApiKey: "<image_search_google_api_key>",
        showAdvancedOptions: true,
        cropping: true,
        multiple: false,
        defaultSource: "local",
        styles: {
            palette: {
                window: "#FFFFFF",
                windowBorder: "#90A0B3",
                tabIcon: "#0078FF",
                menuIcons: "#5A616A",
                textDark: "#000000",
                textLight: "#FFFFFF",
                link: "#0078FF",
                action: "#FF5A00",
                inactiveTabIcon: "#0E2F5A",
                error: "#F44235",
                inProgress: "#0078FF",
                complete: "#20B832",
                sourceBg: "#E4EBF1"
            },
            fonts: { 
                default: {
                    active: true
                }
            }
        }
    }, 
    (err, info) => {
        if (!err) {
            console.log("Upload Widget event - ", info);
        }  
    }); 
}