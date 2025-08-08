// Dropdown menu
const homeMenuItem = document.getElementById("main");
const submenuWrapper = document.querySelector(".submenu__main");
const subMenuItems = document.querySelectorAll(".submenu__item");
const body = document.querySelector("body");

export function navMenu() {
    function hiddenElement() {
        submenuWrapper.style.display = 'none';
        submenuWrapper.style.visibility = 'hidden';
        submenuWrapper.style.zIndex = '-1';
        submenuWrapper.style.opacity = '0';
        submenuWrapper.style.transition = 'all 0.3s ease';
        homeMenuItem.classList.remove('active');
    }

    function closeDropdownsOnBodyClick() {
        body.addEventListener("click", function (event) {
            event.stopPropagation();
            hiddenElement();
        });
    }

    function closeDropdownsOnSubMenuItemClick() {
        subMenuItems.forEach(subMenuItem => {
            subMenuItem.addEventListener("click", function (event) {
                event.stopPropagation();
                hiddenElement();
            });
        });
    }

    function visibleElement(effect, element) {
        element.style.transition = effect;
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.zIndex = '1';
    }

    function initializeDropdownMenu() {
        let enterTimeout, leaveTimeout;

        function openDropdownOnNavMenuItemClick() {
            homeMenuItem.addEventListener('click', function (event) {
                event.stopPropagation();
                clearTimeout(enterTimeout);
                submenuWrapper.style.display = 'block';
                enterTimeout = setTimeout(() => {
                    visibleElement('all 0.3s ease', submenuWrapper);
                    homeMenuItem.classList.add('active');
                }, 100);
            });
        }

        function openDropdownOnNavMenuItemHover() {
            homeMenuItem.addEventListener('mouseenter', function () {
                clearTimeout(enterTimeout);
                submenuWrapper.style.display = 'block';
                homeMenuItem.classList.add('active');
                enterTimeout = setTimeout(() => {
                    visibleElement('all 0.5s ease', submenuWrapper);
                }, 100);
            });
        }

        function closeDropdownOnNavMenuItemHover() {
            homeMenuItem.addEventListener('mouseleave', function () {
                clearTimeout(leaveTimeout);
                submenuWrapper.style.transition = 'all 0.3s ease';
                submenuWrapper.style.opacity = '0';
                submenuWrapper.style.visibility = 'hidden';
                submenuWrapper.style.zIndex = '-1';
                homeMenuItem.classList.remove('active');
                leaveTimeout = setTimeout(() => {
                    submenuWrapper.style.display = 'none';
                }, 100);
            });
        }

        openDropdownOnNavMenuItemClick();
        openDropdownOnNavMenuItemHover();
        closeDropdownOnNavMenuItemHover();
    }

    function closeDropdownsOnScroll() {
        window.addEventListener('scroll', function (event) {
            event.stopPropagation();
            hiddenElement();
        });
    }

    closeDropdownsOnBodyClick();
    closeDropdownsOnSubMenuItemClick();
    initializeDropdownMenu();
    closeDropdownsOnScroll();
}