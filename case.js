const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const namHienTai = new Date().getFullYear();

const namMoi = new Date(`January 01 ${namHienTai + 1} 00:00:00`);

// Update countdown time
function coundown() {
    const tgHienTai = new Date();
    const tgConLai = namMoi - tgHienTai;

    const d = Math.floor(tgConLai / 1000 / 60 / 60 / 24);
    const h = Math.floor(tgConLai / 1000 / 60 / 60) % 24;
    const m = Math.floor(tgConLai / 1000 / 60) % 60;
    const s = Math.floor(tgConLai / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(coundown, 1000);
