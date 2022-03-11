const dataNilaiSantri = [5, 9, 6, 7, 9, 8, 10, 7, 8];

document.write("Data Nilai Santri : " + dataNilaiSantri + "<br>");
document.write(
  "Data Nilai Santri setelah diurutkan : " +
    dataNilaiSantri.sort(function (a, b) {
      return a - b;
    }) +
    "<br><br>"
);

// Mean
function cariMean() {
  let total = 0;
  let mean;

  for (let i = 0; i < dataNilaiSantri.length; i++) {
    total += dataNilaiSantri[i];
    mean = total / dataNilaiSantri.length;
  }
  return mean;
}

document.write("Mean : " + cariMean() + "<br>");

// Median
function cariMedian() {
  dataNilaiSantri.sort(function (a, b) {
    return a - b;
  });

  if (dataNilaiSantri.length % 2 == 0) {
    x = dataNilaiSantri / 2;
    median = x + dataNilaiSantri.length / 2 + 1;
  } else {
    median = (dataNilaiSantri.length + 1) / 2;
  }

  return dataNilaiSantri[median];
}

document.write("Median : " + cariMedian() + "<br>");

// modus dari angka
function cariModus() {
  dataNilaiSantri.sort(function (a, b) {
    return a - b;
  });

  var modus = [],
    count = [],
    maxIndex = 0,
    i,
    number;

  for (i = 0; i < dataNilaiSantri.length; i += 1) {
    number = dataNilaiSantri[i];
    count[number] = (count[number] || 0) + 1;

    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modus.push(Number(i));
      }
    }

  return modus;
}

document.write("Modus : " + cariModus() + "<br>");

// Simpangan Baku
function cariSimpanganBaku() {
  const n = dataNilaiSantri.length;
  const mean = dataNilaiSantri.reduce((a, b) => a + b) / n;

  return Math.sqrt(
    dataNilaiSantri.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) /
      n
  );
}

document.write("Simpangan Baku : " + cariSimpanganBaku().toFixed(3));
