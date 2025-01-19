const navbar = document.querySelector('.navbar');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
navbar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    console.log(entries)
    navbar.classList.toggle('sticking')
});

navObserver.observe(scrollWatcher)