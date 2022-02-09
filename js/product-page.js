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