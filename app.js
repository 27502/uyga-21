const foydalanuvchilar = []; // Foydalanuvchilar ro'yxati

function royxatdanOtish() {
    try {
        const ism = prompt("Ismingizni kiriting (kamida 1 ta belgi):");
        if (!ism || ism.length < 1) throw "Ism kamida 1 ta belgidan iborat bo'lishi kerak.";

        const foydalanuvchiNomi = prompt("Foydalanuvchi nomingizni kiriting (kamida 4 ta belgi):");
        if (!foydalanuvchiNomi || foydalanuvchiNomi.length < 4)
            throw "Foydalanuvchi nomi kamida 4 ta belgidan iborat bo'lishi kerak.";

        const parol = prompt("Parolingizni kiriting (kamida 6 ta belgi):");
        if (!parol || parol.length < 6) throw "Parol kamida 6 ta belgidan iborat bo'lishi kerak.";

        // Foydalanuvchini ro'yxatga qo'shish
        foydalanuvchilar.push({ ism, foydalanuvchiNomi, parol });
        alert("Ro'yxatdan muvaffaqiyatli o'tildi!");
    } catch (xato) {
        alert(`Ro'yxatdan o'tishda xato: ${xato}`);
    }
}

function tizimgaKirish() {
    try {
        const foydalanuvchiNomi = prompt("Foydalanuvchi nomingizni kiriting:");
        const parol = prompt("Parolingizni kiriting:");

        // Foydalanuvchini qidirish
        const foydalanuvchi = foydalanuvchilar.find(
            (user) => user.foydalanuvchiNomi === foydalanuvchiNomi && user.parol === parol
        );

        if (!foydalanuvchi) throw "Foydalanuvchi nomi yoki parol noto'g'ri.";

        alert(`Xush kelibsiz, ${foydalanuvchi.ism}!`);
    } catch (xato) {
        alert(`Tizimga kirishda xato: ${xato}`);
    }
}

// Asosiy dastur tsikli
while (true) {
    const tanlov = prompt("1 - Ro'yxatdan o'tish\n2 - Tizimga kirish\n3 - Chiqish\nTanlovingizni kiriting:");
    if (tanlov === "1") {
        royxatdanOtish();
    } else if (tanlov === "2") {
        tizimgaKirish();
    } else if (tanlov === "3") {
        alert("Dasturdan chiqildi.");
        break;
    } else {
        alert("Noto'g'ri tanlov! Qaytadan urinib ko'ring.");
    }
}

