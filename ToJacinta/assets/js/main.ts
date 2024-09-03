const showSidebar = (toggleId: string, sidebarId: string, mainId: string): void => {
    const toggle = document.getElementById(toggleId) as HTMLElement;
    const sidebar = document.getElementById(sidebarId) as HTMLElement;
    const main = document.getElementById(mainId) as HTMLElement;

    if (toggle && sidebar && main) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('show-sidebar');
            main.classList.toggle('main-pd');
        });
    }
};

showSidebar('header-toggle', 'sidebar', 'main');

const sidebarLinks = document.querySelectorAll<HTMLAnchorElement>('.sidebar__link');

function linkColor(this: HTMLAnchorElement): void {
    sidebarLinks.forEach(l => l.classList.remove('active-link'));
    this.classList.add('active-link');
}

sidebarLinks.forEach(l => l.addEventListener('click', linkColor));
