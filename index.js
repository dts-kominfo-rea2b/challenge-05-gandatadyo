const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (nameTemp, nextStep) => {
  let listData = nextStep(nameTemp)
  let listDataSorted = []
  for (const i in listData) {
    listDataSorted.push(`${parseInt(i) + 1}. ${listData[i]}`)
  }
  return listDataSorted;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (listName) => {
  listName.sort()
  let listData = []
  for (const i in listName) {
    listData.push(listName[i])
  }
  return listData;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (listName) => {
  listName.sort().reverse()
  let listData = []
  for (const i in listName) {
    listData.push(listName[i])
  }
  return listData;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
