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