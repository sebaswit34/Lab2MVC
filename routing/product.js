const fileSystem = require("fs");
const { STATUS_CODE } = require("../constants/statusCode");
const express = require("express");
const path = require("path");

const router = express.Router();

const renderAddProductPage = (response) => {
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>Shop - Add product</title></head>");
    response.write("<body>");
    response.write("<h1>Add product</h1>");
    response.write("<form action='/product/add' method='POST'>");
    response.write(
        "<br /><label>Name<br /><input type='text' name='name'></label>"
    );
    response.write(
        "<br /><label>Description<br /><input type='text' name='description'></label>"
    );
    response.write("<br /><button type='submit'>Add</button>");
    response.write("</form>");
    response.write(
        "<nav><a href='/'>Home</a><br /><a href='/product/new'>Newest product</a><br /><a href='/logout'>Logout</a></nav>"
    );
    response.write("</body>");
    response.write("</html>");

    return response.end();
};


const addNewProduct = (request, response) => {
    const body = [];
    request.on("data", (chunk) => {
        body.push(chunk);
    });
    request.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        const formData = parsedBody.split("&").map((entry) => {
            const [key, value] = entry.split("=");

            return `${key}: ${decodeURIComponent(value)}`;
        });

        fileSystem.writeFile(
            "product.txt",
            `${formData[0]}, ${formData[1]}`,
            (err) => {
                response.statusCode = STATUS_CODE.FOUND;
                response.setHeader("Location", "/product/new");
                return response.end();
            }
        );
    });
};


const renderNewProductPage = (response) => {
    fileSystem.readFile("./product.txt", "utf-8", (err, data) => {
        response.setHeader("Content-Type", "text/html");
        response.write("<html>");
        response.write("<head><title>Shop - Newest product</title></head>");
        response.write("<body>");
        response.write("<h1>Newest product</h1>");
        response.write(
            "<nav><a href='/'>Home</a><br /><a href='/product/add'>Add product</a><br /><a href='/logout'>Logout</a></nav>"
        );

        if (err) {
            response.write("<br /><div>No new products available.</div>");
        } else {
            response.write(`<br /><div>New product data: ${data}</div>`);
        }

        response.write("</body>");
        response.write("</html>");
        return response.end();
    });
};


router.get("/add", (req, res) => {
    renderAddProductPage(res);
});

router.post("/add", (req, res) => {
    addNewProduct(req, res);
});

router.get("/new", (req, res) => {
    renderNewProductPage(res);
});

module.exports =  router;

