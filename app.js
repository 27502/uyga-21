{
    const foydalanuvchilar = [];


function royxatdanOtish(ism, foydalanuvchiNomi, parol) {
    try {
       
        if (ism.length < 1) throw "Ism kamida 1 ta belgidan iborat bo'lishi kerak.";
        if (foydalanuvchiNomi.length < 4) throw "Foydalanuvchi nomi kamida 4 ta belgidan iborat bo'lishi kerak.";
        if (parol.length < 6) throw "Parol kamida 6 ta belgidan iborat bo'lishi kerak.";

        foydalanuvchilar.push({ ism, foydalanuvchiNomi, parol });
        console.log("Ro'yxatdan muvaffaqiyatli o'tildi!");
    } catch (xato) {
        console.error("Ro'yxatdan o'tishda xato:", xato);
    }
}


function tizimgaKirish(foydalanuvchiNomi, parol) {
    try {

        const foydalanuvchi = foydalanuvchilar.find(
            (user) => user.foydalanuvchiNomi === foydalanuvchiNomi && user.parol === parol
        );

        if (!foydalanuvchi) throw "Foydalanuvchi nomi yoki parol noto'g'ri.";

        console.log(`Xush kelibsiz, ${foydalanuvchi.ism}!`);
    } catch (xato) {
        console.error("Tizimga kirishda xato:", xato);
    }
}


royxatdanOtish("Ali", "ali123", "parol123"); 
tizimgaKirish("ali123", "parol123"); 
tizimgaKirish("ali123", "xatoParol"); 

} 