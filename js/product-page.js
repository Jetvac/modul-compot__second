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

function openPopup(popupName) {
    document.getElementById(popupName).className += " show";
    }

    function closeAllPopup() {
    var tabcontent = document.getElementsByClassName("product-popup");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" show", "");
    }
}

function closePopup(popupName) {
    var element = document.getElementById(popupName);
    element.className = element.className.replace(" show", "");
}