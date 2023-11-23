let sorular = [
    { soru: "1. Soru: 63 / 9 = ?", cevaplar: ["a) 7", "b) 9", "c) 6", "d) 5"], cevap: "a" },
    { soru: "2. Soru: Dunyanin en buyuk ulkesi hangisidir?", cevaplar: ["a) Kanada", "b) Rusya", "c) Amerika Birlesik Devletleri", "d) Cin"], cevap: "b" },
    { soru: "3. Soru: Ekvator uzerindeki su buharinin yogunlasarak yagis olusturdugu dogal olaya ne denir?", cevaplar: ["a) Serinleme", "b) Terleme", "c) Ciglenme", "d) Yagis"], cevap: "c" },
    { soru: "4. Soru: Turkiye'nin nufusu kactir?", cevaplar: ["a) 83 milyon", "b) 84 milyon", "c) 85 milyon", "d) 86 milyon"], cevap: "c" },
    { soru: "5. Soru: En buyuk gezegen hangisidir?", cevaplar: ["a) Jupiter", "b) Mars", "c) Venus", "d) Uranus"], cevap: "a" },
    { soru: "6. Soru: 6 * 7 = ?", cevaplar: ["a) 42", "b) 36", "c) 49", "d) 54"], cevap: "a" }
  ];
  
  let dogru = 0;
  let yanlis = 0;
  
  for (let i = 0; i < sorular.length; i++) {
    let cevap = prompt(sorular[i].soru + "\n" + sorular[i].cevaplar.join("\n"));
    if (cevap.toLowerCase() === sorular[i].cevap) {
      dogru++;
    } else {
      yanlis++;
    }
  }
  alert("Tebrikler! Toplam " + sorular.length + " sorudan " + dogru + " tanesini dogru, " + yanlis + " tanesini yanlis cevapladiniz.");
  