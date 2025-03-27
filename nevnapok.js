honapok = new Array(13);

honapok[1] = new Array("", "Fruzsina", "Ábel", "Genovéva és Benjámin", "Titusz és Leona",
    "Simon", "Boldizsár", "Attila és Ramóna", "Gyöngyvér", "Marcell",
    "Melánia", "Ágota", "Ernő", "Veronika", "Bódog", "Lóránt és Loránd",
    "Gusztáv", "Antal és Antónia", "Piroska", "Sára, Márió", "Fábián és Sebestyén",
    "Ágnes", "Vince és Artúr", "Zelma és Rajmund", "Timót", "Pál", "Vanda és Paula",
    "Angelika", "Károly és Karola", "Adél", "Martina és Gerda", "Marcella");

if (new Date().getFullYear() % 4 != 0) {
    honapok[2] = new Array("", "Ignác", "Karolina és Aida", "Balázs", "Ráhel és Csenge", "Ágota és Ingrid",
        "Dorottya és Dóra", "Tódor és Rómeó", "Aranka", "Abigél és Alex", "Elvira",
        "Bertold és Marietta", "Lívia és Lídia", "Ella és Linda", "Bálint és Valentin",
        "Kolos és Georgina", "Julianna és Lilla", "Donát és Vilté", "Bernadett", "Zsuzsanna",
        "Aladár és Álmos", "Eleonóra", "Gerzson", "Alfréd",
        "Mátyás", "Géza", "Edina", "Ákos és Bátor", "Elemér", "", "", "");
} else {
    honapok[2] = new Array("", "Ignác", "Karolina és Aida", "Balázs", "Ráhel és Csenge", "Ágota és Ingrid",
        "Dorottya és Dóra", "Tódor és Rómeó", "Aranka", "Abigél, Alex", "Elvira",
        "Bertold és Marietta", "Lívia és Lídia", "Ella és Linda", "Bálint és Valentin",
        "Kolos és Georgina", "Julianna és Lilla", "Donát", "Bernadett", "Zsuzsanna",
        "Aladár és Álmos", "Eleonóra", "Gerzson", "Alfréd",
        "Szökőnap", "Mátyás", "Géza", "Edina", "Ákos és Bátor", "Elemér", "", "");
}

honapok[3] = new Array("", "Albin", "Lujza", "Kornélia", "Kázmér", "Adorján és Adrián", "Leonóra és Inez",
    "Tamás", "Zoltán", "Franciska és Fanni", "Ildikó", "Szilárd",
    "Gergely", "Krisztián és Ajtony", "Matild", "Kristóf",
    "Henrietta", "Gertrúd és Patrik", "Sándor és Ede", "József és Bánk", "Klaudia",
    "Benedek", "Beáta és Izolda", "Emőke", "Gábor és Karina", "Irén és Irisz",
    "Emánuel", "Hajnalka", "Gedeon és Johanna", "Auguszta", "Zalán", "Árpád");

honapok[4] = new Array("", "Hugó", "Áron", "Buda, Richárd", "Izidor", "Vince", "Vilmos és Bíborka",
    "Herman", "Dénes", "Erhard", "Zsolt", "Leó és Szaniszló", "Gyula", "Ida",
    "Tibor", "Anasztázia és Tas", "Csongor", "Rudolf", "Andrea és Ilma", "Emma",
    "Tivadar", "Konrád", "Csilla és Noémi", "Béla", "György", "Márk", "Ervin",
    "Zita", "Valéria", "Péter", "Katalin és Kitti", "");

honapok[5] = new Array("", "Fülöp és Jakab", "Zsigmond", "Tímea és Irma", "Mónika és Flórián",
    "Györgyi", "Ivett és Frida", "Gizella", "Mihály", "Gergely", "Ármin és Pálma",
    "Ferenc", "Pongrác", "Szervác és Imola", "Bonifác", "Zsófia és Szonja",
    "Mózes és Botond", "Paszkál", "Erik és Alexandra", "Ivó és Milán",
    "Bernát és Felícia", "Konstantin", "Júlia és Rita", "Dezső", "Eszter és Eliza",
    "Orbán", "Fülöp és Evelin", "Hella", "Emil és Csanád", "Magdolna",
    "Janka és Zsanett", "Angéla és Petronella");

honapok[6] = new Array("", "Tünde", "Kármen, Anita", "Klotild", "Bulcsú", "Fatime", "Norbert és Cintia",
    "Róbert", "Medárd", "Félix", "Margit és Gréta", "Barnabás", "Villő",
    "Antal és Anett", "Vazul", "Jolán és Vid", "Jusztin", "Laura és Alida",
    "Arnold és Levente", "Gyárfás", "Rafael", "Alajos és Leila", "Paulina",
    "Zoltán", "Iván", "Vilmos", "János és Pál", "László", "Levente és Irén",
    "Péter és Pál", "Pál", "");

honapok[7] = new Array("", "Tihamér, Annamária", "Ottó", "Kornél és Soma", "Ulrik", "Emese és Sarolta",
    "Csaba", "Appolónia", "Ellák", "Lukrécia", "Amália", "Nóra és Lili",
    "Izabella és Dalma", "Jenő", "Őrs és Stella", "Henrik és Roland", "Valter",
    "Endre és Elek", "Frigyes", "Emília", "Illés", "Dániel és Daniella",
    "Magdolna", "Lenke", "Kinga és Kincső", "Kristóf és Jakab", "Anna és Anikó",
    "Olga és Liliána", "Szabolcs", "Márta és Flóra", "Judit és Xénia", "Oszkár");

honapok[8] = new Array("", "Boglárka", "Lehel", "Hermina", "Domonkos és Dominika", "Krisztina",
    "Berta és Bettina", "Ibolya", "László", "Emőd", "Lőrinc",
    "Zsuzsanna és Tiborc", "Klára", "Ipoly", "Marcell", "Mária", "Ábrahám",
    "Jácint", "Ilona", "Huba", "István", "Sámuel és Hajna",
    "Menyhért és Mirjam", "Bence", "Bertalan", "Lajos és Patrícia", "Izsó",
    "Gáspár", "Ágoston", "Beatrix és Erna", "Rózsa", "Erika és Bella");

honapok[9] = new Array("", "Egyed és Egon", "Rebeka és Dorina", "Hilda", "Rozália", "Viktor és Lőrinc",
    "Zakariás", "Regina", "Mária és Adrienn", "Ádám", "Nikolett és Hunor",
    "Teodóra", "Mária", "Kornél", "Szeréna és Roxána", "Enikő és Melitta", "Edit",
    "Zsófia", "Diána", "Vilhelmina", "Friderika", "Máté és Mirella", "Móric",
    "Tekla", "Gellért és Mercédesz", "Eufrozina és Kende", "Jusztina", "Adalbert",
    "Vencel", "Mihály", "Jeromos", "");

honapok[10] = new Array("", "Malvin", "Petra", "Helga", "Ferenc", "Aurél", "Brúnó és Renáta", "Amália",
    "Koppány", "Dénes", "Gedeon", "Brigitta", "Miksa", "Kálmán és Ede", "Helén",
    "Teréz", "Gál", "Hedvig", "Lukács", "Nándor", "Vendel", "Orsolya", "Előd",
    "Gyöngyi", "Salamon", "Blanka és Bianka", "Dömötör",
    "Szabina", "Simon és Szimonetta", "Nárcisz", "Alfonz", "Farkas");

honapok[11] = new Array("", "Marianna", "Achilles", "Győző", "Károly", "Imre", "Lénárd", "Rezső",
    "Zsombor", "Tivadar", "Réka", "Márton", "Jónás és Renátó", "Szilvia",
    "Aliz", "Albert és Lipót", "Ödön", "Hortenzia és Gergő", "Jenő", "Erzsébet",
    "Jolán", "Olivér", "Cecília", "Kelemen és Klementina", "Emma", "Katalin",
    "Virág", "Virgil", "Stefánia", "Taksony", "András és Andor", "");

honapok[12] = new Array("", "Elza", "Melinda és Vivien", "Ferenc és Olívia", "Borbála és Barbara", "Vilma",
    "Miklós", "Ambrus", "Mária", "Natália", "Judit", "Árpád", "Gabriella",
    "Luca és Otília", "Szilárda", "Valér", "Etelka és Aletta", "Lázár és Olimpia",
    "Auguszta", "Viola", "Teofil", "Tamás", "Zéno", "Viktória", "Ádám és Éva",
    "Eugénia", "István", "János", "Kamilla",
    "Tamás és Tamara", "Dávid", "Szilveszter");

    const birthdays = [
        { name: "Bakos Dominik", date: "2007-11-20" },
        { name: "Chlebik Krisztofer", date: "2007-09-28" },
        { name: "Debreczeni Michael", date: "2006-11-07" },
        { name: "Farkas Máté", date: "2007-05-10" },
        { name: "Földi Roland", date: "2008-02-13" },
        { name: "Garaba Kornél", date: "2008-07-22" },
        { name: "Gyurik Áron", date: "2007-08-03" },
        { name: "Halmai Valentin", date: "2006-09-25" },
        { name: "Nagy Álmost Botond", date: "2008-01-18" },
        { name: "Pintér Gergő", date: "2007-11-05" },
        { name: "Rátkai Krisztián", date: "2007-01-06" },
        { name: "Tóth Mór", date: "2008-08-09" }
    ];

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function calculateAge(birthDate) {
        const today = new Date();
        const birthYear = parseInt(birthDate.split('-')[0]);
        const currentYear = today.getFullYear();
        return currentYear - birthYear - 1;
    }
    
    function getBirthdayInfo(selectedDate) {
        const [year, month, day] = selectedDate.split('-').map(Number);
        const formattedDate = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const birthdayMatches = birthdays.filter(person => person.date.endsWith(formattedDate));
        if (birthdayMatches.length > 0) {
            let message = "";
            birthdayMatches.forEach(person => {
                const age = calculateAge(person.date);
                message += `${person.name} születésnapja van, és ${age} éves! `;
            });
            return message;
        }
        return null;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const nameInput = document.getElementById('nev');
        const searchButton = document.getElementById('keres');
        const currentButton = document.getElementById('current');
        const dateInput = document.getElementById('datum');
        const resultBox = document.getElementById('resultBox');
        const birthdayDiv = document.getElementById('szuletesnap');
        const birthdaySelect = document.getElementById('szuletesnapInput'); // Új select elem
    
        const currentDate = getCurrentDate();
        dateInput.value = currentDate;
    
        displayResult(getNamesByDate(currentDate));
        updateBirthdayMessage();
    
        // Feltölti a születésnap választót a birthdays tömbből
        birthdays.forEach(person => {
            const option = document.createElement('option');
            option.value = person.date;
            option.textContent = `${person.name} (${person.date})`;
            birthdaySelect.appendChild(option);
        });
    
        function updateBirthdayMessage() {
            const selectedDate = dateInput.value;
            const birthdayMessage = getBirthdayInfo(selectedDate);
            if (birthdayMessage) {
                birthdayDiv.textContent = birthdayMessage;
            } else {
                birthdayDiv.textContent = '';
            }
        }
    
        searchButton.addEventListener('click', () => {
            const name = nameInput.value.trim();
            if (name) {
                const date = getDateByName(name);
                if (date) {
                    dateInput.value = date;
                    displayResult(getNamesByDate(date));
                    updateBirthdayMessage();
                } else {
                    displayResult(null);
                }
            }
        });
    
        currentButton.addEventListener('click', () => {
            const currentDate = getCurrentDate();
            dateInput.value = currentDate;
            displayResult(getNamesByDate(currentDate));
            updateBirthdayMessage();
        });
    
        dateInput.addEventListener('change', () => {
            const selectedDate = dateInput.value;
            displayResult(getNamesByDate(selectedDate));
            updateBirthdayMessage();
        });
    
        birthdaySelect.addEventListener('change', () => {
            const selectedDate = birthdaySelect.value;
            if (selectedDate) {
                dateInput.value = selectedDate;
                displayResult(getNamesByDate(selectedDate));
                updateBirthdayMessage();
            } else {
                dateInput.value = '';
                displayResult(null);
                birthdayDiv.textContent = '';
            }
        });
    });

    function displayResult(names) {
        const resultBox = document.getElementById('resultBox');
        if (!names) {
            resultBox.textContent = 'Nincs találat.';
            return;
        }
        const nameList = names.split(' és ');
        if (nameList.length > 1) {
            resultBox.textContent = `A névnaphoz tartozó név/nevek: ${names}.`;
        } else {
            resultBox.textContent = `A névnap: ${names}.`;
        }
    }
    
    function getDateByName(name) {
        const currentYear = new Date().getFullYear();
        for (let month = 1; month < honapok.length; month++) {
            for (let day = 1; day < honapok[month].length; day++) {
                const names = honapok[month][day];
                if (names && names.includes(name)) {
                    const formattedMonth = String(month).padStart(2, '0');
                    const formattedDay = String(day).padStart(2, '0');
                    return `${currentYear}-${formattedMonth}-${formattedDay}`;
                }
            }
        }
        return null;
    }

    function getNamesByDate(date) {
        const [year, month, day] = date.split('-').map(Number);
        if (honapok[month] && honapok[month][day]) {
            return honapok[month][day];
        }
        return null;
    }
