let data = `first,last,address,age
Loretta,Andrews,1172 Zozvo Plaza,31
Kyle,Lopez,1242 Gagka Extension,57
Virgie,Greene,1495 Sogor Pass,37
Lily,May,1514 Sahob Grove,59
Roy,Morales,1544 Vebbic Place,53
Alex,Harper,1573 Uzahu Boulevard,51
Lawrence,Stanley,712 Dejfo Point,50
Jackson,Brooks,1799 Wehu Highway,65
Agnes,Chandler,1850 Wume Grove,18
Bertha,Abbott,1431 Cuggu Boulevard,24
Garrett,Estrada,462 Popaz Pass,36
Agnes,Huff,1184 Odote Highway,53
Adelaide,Hayes,384 Guad Terrace,52
Mina,Lyons,20 Zaprac Junction,52
Jason,Tate,1601 Sapu Road,32
May,Graham,1510 Vuobu Drive,64
Ophelia,Bowen,102 Taav Plaza,25
Estelle,McGee,1131 Uhar Mill,46
Nannie,Kelly,956 Okudu Lane,18
Garrett,Brock,1127 Edulec Place,35
Rosalie,Robbins,1223 Eftek View,18
Wesley,Johnston,1708 Ekiri Avenue,42
Birdie,Jacobs,703 Nate Court,41
Alejandro,Hines,1868 Ippe Parkway,48
Calvin,Benson,1498 Diblum Boulevard,25
Dominic,Paul,1747 Igpo Lane,47
Violet,Miles,623 Uwhi Parkway,25
Evan,Hampton,876 Timob Parkway,46
Alan,Barrett,95 Kibte Point,50
Hallie,Yates,1252 Jawto View,52
Sophie,Hogan,1717 Navof Street,18
Sam,Dixon,1649 Vejo View,38
Adam,Carroll,861 Vowev Trail,47
Alexander,Jennings,197 Visjuh Junction,54
Lina,Garrett,1363 Zabjof Plaza,63
Rosie,Barker,839 Zobuw View,37
Dollie,Moore,107 Cotip Terrace,38
Connor,Webb,1053 Solug Key,49
Elnora,Bass,1902 Lalav Highway,54
Nannie,Myers,241 Ahiwe Avenue,23
Thomas,Hudson,151 Soksuv Point,54
Carrie,Tran,184 Ubutar Heights,43
Violet,Ramirez,701 Cejpa Key,55
Lora,Little,1026 Jujok Heights,55
Linnie,Stewart,1463 Kihi Place,61
Jeremiah,Cook,1493 Vafa Pass,46
Ronnie,Wright,910 Mager Way,25
Josie,Walsh,320 Leddi Ridge,40
Patrick,Webster,922 Octug Road,63
Alfred,Hoffman,1739 Fonig View,47 `

let rawDataArray = data.split('\n');
let titleArray = rawDataArray[0].split(',');

let finalArray = [];
for(let i = 1; i < rawDataArray.length; i++) {
    let onePersonData = rawDataArray[i].split(',');
    let formatted = {};
    for(let j = 0; j < titleArray.length; j++) {
        formatted[`${titleArray[j]}`] = onePersonData[j];
    }
    finalArray.push(formatted)
}