let users = [
  {
    firstName: "Jhon",
    lastName: "Doe",
    age: 40,
    mail: "jhon.doe@example.com",
    address: "USA",
    phone: "555-785-99-68",
    birthDate: "01.01.2000",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    mail: "alice.smith@example.com",
    address: "Canada",
    phone: "555-123-45-67",
    birthDate: "15.05.1992",
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    age: 45,
    mail: "bob.johnson@example.com",
    address: "UK",
    phone: "555-987-65-43",
    birthDate: "28.08.1977",
  },
  // Additional People
  {
    firstName: "Eva",
    lastName: "Brown",
    age: 28,
    mail: "eva.brown@example.com",
    address: "Germany",
    phone: "555-456-78-90",
    birthDate: "10.11.1994",
  },
  {
    firstName: "Daniel",
    lastName: "Clark",
    age: 35,
    mail: "daniel.clark@example.com",
    address: "Australia",
    phone: "555-234-56-78",
    birthDate: "03.04.1987",
  },
  {
    firstName: "Sophia",
    lastName: "Taylor",
    age: 25,
    mail: "sophia.taylor@example.com",
    address: "France",
    phone: "555-876-54-32",
    birthDate: "22.09.1996",
  },
  {
    firstName: "Ryan",
    lastName: "Miller",
    age: 32,
    mail: "ryan.miller@example.com",
    address: "New Zealand",
    phone: "555-789-01-23",
    birthDate: "18.07.1989",
  },
  {
    firstName: "Olivia",
    lastName: "Ward",
    age: 29,
    mail: "olivia.ward@example.com",
    address: "Spain",
    phone: "555-321-09-87",
    birthDate: "12.12.1992",
  },
  {
    firstName: "Liam",
    lastName: "Carter",
    age: 36,
    mail: "liam.carter@example.com",
    address: "Italy",
    phone: "555-567-89-01",
    birthDate: "09.06.1986",
  },
  {
    firstName: "Emma",
    lastName: "Baker",
    age: 31,
    mail: "emma.baker@example.com",
    address: "Brazil",
    phone: "555-012-34-56",
    birthDate: "25.03.1991",
  },
];

for (let i = 0; i < users.length; i++) {
  document.getElementById("tableBody").innerHTML += `
        <tr>
        <td>${users[i].firstName}</td>
        <td>${users[i].lastName}</td>
        <td>${users[i].age}</td>
        <td>${users[i].mail}</td>
        <td>${users[i].address}</td>
        <td>${users[i].phone}</td>
        <td>${users[i].birthDate}</td>
        </tr>
        `;
}
