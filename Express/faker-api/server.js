const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.name.findName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.cityName();
        this.state = faker.address.city();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

app.get("/api/users/new", (req, res) => {
    let newUser = new User();

    res.json({result: newUser});
})

app.get("/api/companies/new", (req, res) => {
    let newCompany = new Company();

    res.json({result: newCompany});
})

app.get("/api/user/company", (req, res) => {
    let newUser = new User();
    let newCompany = new Company();

    res.json({result: newUser, newCompany});
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );