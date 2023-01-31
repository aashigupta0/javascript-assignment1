(function createtable() {

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);


document.getElementById('body').appendChild(table);
const row_1 = document.createElement('tr');
const heading_1 = document.createElement('th');
heading_1.innerHTML = "Name";
const heading_2 = document.createElement('th');
heading_2.innerHTML = "Age";
const heading_3 = document.createElement('th');
heading_3.innerHTML = "DOB";
const heading_4 = document.createElement('th');
heading_4.innerHTML = "Email";
const heading_5 = document.createElement('th');
heading_5.innerHTML = "Company";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
thead.appendChild(row_1);


const row_2 = document.createElement('tr');
const row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "Jack";
const row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "15";
const row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "01/01/2008";
const row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "jack@gmail.com";
const row_2_data_5 = document.createElement('td');
row_2_data_5.innerHTML = "Google";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
row_2.appendChild(row_2_data_5);
tbody.appendChild(row_2);


const row_3 = document.createElement('tr');
const row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "Ryan";
const row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "17";
const row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "31/01/2006";
const row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = "ryan@gmail.com";
const row_3_data_5 = document.createElement('td');
row_3_data_5.innerHTML = "Netflix";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
row_3.appendChild(row_3_data_5);
tbody.appendChild(row_3);

const row_4 = document.createElement('tr');
const row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "Adam";
const row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "22";
const row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "01/02/2001";
const row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = "adam@gmail.com";
const row_4_data_5 = document.createElement('td');
row_4_data_5.innerHTML = "Meta";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
row_4.appendChild(row_4_data_5);
tbody.appendChild(row_4);

const row_5 = document.createElement('tr');
const row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "Tom";
const row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = "19";
const row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = "07/02/2004";
const row_5_data_4 = document.createElement('td');
row_5_data_4.innerHTML = "tom@gmail.com";
const row_5_data_5 = document.createElement('td');
row_5_data_5.innerHTML = "Youtube";

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);
row_5.appendChild(row_5_data_5);
tbody.appendChild(row_5);

  })();