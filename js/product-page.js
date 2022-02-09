var pageBody = document.getElementById('page-body');

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    if (tabName === "AboutProduct") {
        document.getElementById('insi').style.display = "flex";
    } else {
        document.getElementById('insi').style.display = "none";
    }

    tabcontent = document.getElementsByClassName("product-panel__tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active-tab", "");
    }
    tablinks = document.getElementsByClassName("product-panel__tab-menu-header-item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).className += " active-tab";

    //evt.currentTarget.className += " active";
    document.getElementById(tabName + "_btn").className += " active";
}

function openPopup(popupName, shadowLevel) {
    document.getElementById('shadow-background').style.display = "block";
    document.getElementById('shadow-background').style.zIndex = shadowLevel;

    pageBody.className = pageBody.className.replace(" html_scrollbar_inactive", "");
    pageBody.className += " html_scrollbar_inactive";
    document.getElementById(popupName).className += " show";
}

function closeAllPopup() {
    document.getElementById('shadow-background').style.display = "none";
    pageBody.className = pageBody.className.replace(" html_scrollbar_inactive", "");

    var tabcontent = document.getElementsByClassName("product-popup");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" show", "");
    }
}

function closePopup(popupName, shadowLevel = -1) {
    if (shadowLevel === -1) {
        document.getElementById('shadow-background').style.display = "none";
        pageBody.className = pageBody.className.replace(" html_scrollbar_inactive", "");
    }

    document.getElementById('shadow-background').style.zIndex = shadowLevel;

    var element = document.getElementById(popupName);
    element.className = element.className.replace(" show", "");
}

// drag and drop

document.addEventListener("DOMContentLoaded", () => {
    let dropField = document.getElementById('drop-field');
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropField.addEventListener(eventName, preventDefaults, false)
    })

    dropField.addEventListener('drop', handleDrop, false)
});

function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
}

function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files

    handleFiles(files);
}

function handleFiles(files) {
    files = [...files]
    files.forEach(appendFile)
}

// convert file to html structure and paste it into gallery
function appendFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
        let image = document.createElement('img')
        image.src = reader.result

        image.onload = function() {
            // check image format
            if (file.type != "image/png" || this.width < 800 || this.height < 600) {
                showUploadError();
            } else {
                 // init structure
                image.classList += "product-popup__list-photo-image";
                document.getElementById('photo-gallery-list').appendChild(img)
            }
        }
    }
}

function showUploadError() {
    var errorSpan = document.getElementById('upload-image-error');
    errorSpan.style.display = "block";
}