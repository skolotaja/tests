/* funkcija nolasa formā ievadītās vērtības un 
ja ievadīto malu garumi ir lielāki par 0, 
tad funkcija atgriež vērtības `m1, m2, m3`, 
pretējā gadījumā atgriež `False`
*/

function nolasa() {
  const malas = document.getElementsByClassName("mala");
  const m1 = parseFloat(mala1.value);
  const m2 = parseFloat(mala2.value);
  const m3 = parseFloat(mala3.value);
  if (m1 > 0 && m2 > 0 && m3 > 0) {
    console.log({ m1, m2, m3 });
    return { m1, m2, m3 };
  } else {
    console.log(false);
    return false;
  }
}
//perimetra aprēķināšana
function perimeter(m1, m2, m3) {
  const p = m1 + m2 + m3;
  console.log(p);
  return p;
  // Vajag atgriezt izrēķināto perimetru
}
//šeit no pusperimetra var aprēķināt laukumu
function laukums(m1, m2, m3) {
  const pusper = perimeter(m1, m2, m3) / 2;
  let tlaukums = Math.sqrt(
    pusper * ((pusper - m1) * (pusper - m2) * (pusper - m3))
  );
  console.log(tlaukums);
  return tlaukums;
}
// Funkcija, kura pārbauda, vai eksistē trijstūris ar nolasītajām malām
function irTrijsturis(m1, m2, m3) {
  // pārbauda, vai izpildās trijstūra nevienādība
  // atgriež true vai false
  if (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m1 + m2) {
    return true;
  } else {
    return false;
  }
}
function rezultats() {
  const m = nolasa();
  m1 = m.m1; m2 = m.m2; m3 = m.m3;
  console.log(m1, m2, m3);
  if (!nolasa()) {
    t = "Nekorekti ievaddati, trijstūra malu vērtībām ir jābūt lielākām par 0";
  } else {    
    if (irTrijsturis(m1,m2,m3)==false){
      t="Trijstūris neeksistē, jo jebkuru 2 malu garumu summai ir jābūt lielākai par trešo malu!";    
    } else {      
      t = "Trijstūris ar malu garumiem " + m1 +", " + m2 + " un " + m3 + " eksistē. "
      if (m1==m2 && m2==m3){
        t+="Tas ir vienādmalu trijstūris. "
      } else {
      if (m1==m2 || m2==m3 || m1==m3){
        t+="Tas ir vienādsānu trijstūris. "
      }
    }
    const p = perimeter(m1, m2, m3);
    const s = Math.round( laukums(m1, m2, m3) * 100) / 100;     
    t += "<br>Perimetrs ir " + p + " un laukums ir " + s + ".";
  } 
  }
  console.log(t);  
  return t;
}

  

function izvadaTekstu() {
  // jāizsauc funkcija rezultats()
  const teksts = rezultats();
  // elementā ar id "izvade" izvada tekstu
  console.log(teksts);
  const sakne = document.getElementById("izvade");
  const raksti = document.createElement("p");
  raksti.innerHTML = teksts;
  sakne.appendChild(raksti);
}