class FixedHeader {
    constructor () {
        this.siteHeader = document.querySelector('.site-header');
        this.event();
    }

    event () {
        window.addEventListener('scroll', () => this.showHeader())
    }

    showHeader () {
        if (window.scrollY > 300) {
            this.siteHeader.classList.add('site-header__visible')
        } else {
            this.siteHeader.classList.remove('site-header__visible')
        }
    }
}

export default FixedHeader;