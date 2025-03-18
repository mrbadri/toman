const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

const payments = {
    "entities": [
        { "id": "p1", "type": "salary", "value": 10000000, "paid_at": "2024-10-08T12:02:22Z", "status": "success", "description": "Mr. Foo's salary" },
        { "id": "p2", "type": "bonus", "value": 5000000, "paid_at": "2024-09-20T11:30:45Z", "status": "success", "description": "Performance bonus" },
        { "id": "p3", "type": "commission", "value": 2000000, "paid_at": "2024-10-05T09:15:30Z", "status": "pending", "description": null },
        { "id": "p4", "type": "transportation", "value": 150000, "paid_at": "2024-10-12T14:50:00Z", "status": "failed", "description": "Taxi reimbursement" },
        { "id": "p5", "type": "overtime", "value": 300000, "paid_at": "2024-10-18T17:45:55Z", "status": "success", "description": null },
        { "id": "p6", "type": "salary", "value": 11000000, "paid_at": "2024-09-30T08:10:12Z", "status": "success", "description": "Ms. Jane's salary" },
        { "id": "p7", "type": "bonus", "value": 4000000, "paid_at": "2024-08-30T10:50:32Z", "status": "success", "description": "Annual performance bonus" },
        { "id": "p8", "type": "commission", "value": 2500000, "paid_at": "2024-10-03T09:30:20Z", "status": "success", "description": null },
        { "id": "p9", "type": "transportation", "value": 180000, "paid_at": "2024-09-22T14:30:10Z", "status": "success", "description": "Bus allowance" },
        { "id": "p10", "type": "salary", "value": 9000000, "paid_at": "2024-09-25T07:45:55Z", "status": "success", "description": "Mr. Bar's salary" },
        { "id": "p11", "type": "commission", "value": 3000000, "paid_at": "2024-09-21T11:12:00Z", "status": "pending", "description": "Commission for Q3" },
        { "id": "p12", "type": "bonus", "value": 3500000, "paid_at": "2024-10-10T09:20:55Z", "status": "success", "description": "Project completion bonus" },
        { "id": "p13", "type": "transportation", "value": 120000, "paid_at": "2024-10-07T16:40:40Z", "status": "success", "description": "Gas reimbursement" },
        { "id": "p14", "type": "salary", "value": 9500000, "paid_at": "2024-09-28T08:00:22Z", "status": "success", "description": "Ms. John's salary" },
        { "id": "p15", "type": "bonus", "value": 2200000, "paid_at": "2024-09-15T12:50:12Z", "status": "failed", "description": "Employee of the month bonus" },
        { "id": "p16", "type": "overtime", "value": 500000, "paid_at": "2024-09-16T18:10:33Z", "status": "pending", "description": "Overtime payment" },
        { "id": "p17", "type": "salary", "value": 10500000, "paid_at": "2024-10-01T08:10:00Z", "status": "success", "description": "Mr. Doe's salary" },
        { "id": "p18", "type": "bonus", "value": 4700000, "paid_at": "2024-09-30T13:45:22Z", "status": "success", "description": "Team bonus" },
        { "id": "p19", "type": "commission", "value": 2700000, "paid_at": "2024-09-19T10:30:45Z", "status": "pending", "description": null },
        { "id": "p20", "type": "transportation", "value": 130000, "paid_at": "2024-10-02T15:50:12Z", "status": "success", "description": "Parking reimbursement" },
        { "id": "p21", "type": "salary", "value": 9800000, "paid_at": "2024-09-12T09:02:55Z", "status": "success", "description": "Mr. Sam's salary" },
        { "id": "p22", "type": "bonus", "value": 6000000, "paid_at": "2024-09-10T08:20:25Z", "status": "success", "description": "Holiday bonus" },
        { "id": "p23", "type": "commission", "value": 2400000, "paid_at": "2024-10-04T10:15:45Z", "status": "pending", "description": null },
        { "id": "p24", "type": "transportation", "value": 145000, "paid_at": "2024-09-11T15:40:00Z", "status": "failed", "description": "Taxi fare" },
        { "id": "p25", "type": "overtime", "value": 600000, "paid_at": "2024-10-09T12:25:55Z", "status": "success", "description": null },
        { "id": "p26", "type": "salary", "value": 9500000, "paid_at": "2024-09-01T08:00:00Z", "status": "success", "description": "Ms. Mary's salary" },
        { "id": "p27", "type": "bonus", "value": 4100000, "paid_at": "2024-08-31T11:45:32Z", "status": "success", "description": "Year-end bonus" },
        { "id": "p28", "type": "commission", "value": 2600000, "paid_at": "2024-09-03T14:35:20Z", "status": "success", "description": null },
        { "id": "p29", "type": "transportation", "value": 175000, "paid_at": "2024-10-05T13:45:10Z", "status": "success", "description": "Bus fare" },
        { "id": "p30", "type": "salary", "value": 8600000, "paid_at": "2024-10-08T08:15:25Z", "status": "success", "description": "Mr. Lee's salary" },
        { "id": "p31", "type": "bonus", "value": 4500000, "paid_at": "2024-09-18T12:20:15Z", "status": "success", "description": "Achievement bonus" },
        { "id": "p32", "type": "commission", "value": 2200000, "paid_at": "2024-09-23T15:55:00Z", "status": "pending", "description": null },
        { "id": "p33", "type": "transportation", "value": 140000, "paid_at": "2024-10-06T16:25:12Z", "status": "success", "description": "Gas reimbursement" },
        { "id": "p34", "type": "salary", "value": 9400000, "paid_at": "2024-09-29T07:05:35Z", "status": "success", "description": "Ms. Watson's salary" },
        { "id": "p35", "type": "bonus", "value": 2500000, "paid_at": "2024-10-11T09:30:12Z", "status": "success", "description": "Spot bonus" },
        { "id": "p36", "type": "commission", "value": 2100000, "paid_at": "2024-09-25T12:15:45Z", "status": "pending", "description": null },
        { "id": "p37", "type": "transportation", "value": 190000, "paid_at": "2024-09-24T14:50:30Z", "status": "success", "description": "Train fare" },
        { "id": "p38", "type": "salary", "value": 9900000, "paid_at": "2024-10-10T08:10:00Z", "status": "success", "description": "Ms. Olivia's salary" },
        { "id": "p39", "type": "bonus", "value": 3200000, "paid_at": "2024-09-13T11:05:00Z", "status": "success", "description": "Retention bonus" },
        { "id": "p40", "type": "commission", "value": 2300000, "paid_at": "2024-10-03T13:45:22Z", "status": "success", "description": null },
        { "id": "p41", "type": "salary", "value": 8800000, "paid_at": "2024-10-04T07:25:35Z", "status": "success", "description": "Mr. William's salary" },
        { "id": "p42", "type": "bonus", "value": 3800000, "paid_at": "2024-09-27T09:45:22Z", "status": "success", "description": "End-of-quarter bonus" },
        { "id": "p43", "type": "commission", "value": 2400000, "paid_at": "2024-10-13T14:05:00Z", "status": "pending", "description": null },
        { "id": "p44", "type": "transportation", "value": 150000, "paid_at": "2024-09-20T10:25:12Z", "status": "failed", "description": "Bus fare" },
        { "id": "p45", "type": "salary", "value": 8900000, "paid_at": "2024-09-30T08:45:00Z", "status": "success", "description": "Ms. Emma's salary" },
        { "id": "p46", "type": "bonus", "value": 4700000, "paid_at": "2024-10-02T12:55:30Z", "status": "success", "description": "Team bonus" },
        { "id": "p47", "type": "commission", "value": 2800000, "paid_at": "2024-09-16T16:25:00Z", "status": "success", "description": null },
        { "id": "p48", "type": "transportation", "value": 165000, "paid_at": "2024-09-23T13:50:12Z", "status": "success", "description": "Taxi fare" },
        { "id": "p49", "type": "salary", "value": 9200000, "paid_at": "2024-10-09T07:35:00Z", "status": "success", "description": "Mr. Miller's salary" },
        { "id": "p50", "type": "bonus", "value": 5100000, "paid_at": "2024-09-29T10:20:22Z", "status": "success", "description": "Performance bonus" }
    ]
};

const simulateLoading = () => {
    return new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 2000) + 500));
};

const simulateError = () => {
    const random = Math.random();
    if (random < 0.2) {
        return true;
    }
    return false;
};

const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Origin", "Accept"],
    exposedHeaders: ["Content-Length", "X-Requested-With"],
    credentials: true
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Origin, Accept");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});


app.get('/payments', async (req, res) => {
    await simulateLoading();

    if (simulateError()) {
        return res.status(500).json({ error: "Internal Server Error. Please try again later." });
    }

    const { page = 1, limit = 10, search, type, status } = req.query;

    let filteredResults = payments.entities;

    if (search) {
        filteredResults = filteredResults.filter(payment =>
            payment.description && payment.description.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (type) {
        const typeArray = type.split(",");
        filteredResults = filteredResults.filter(payment => typeArray.includes(payment.type));
    }

    if (status) {
        const statusArray = status.split(",");
        filteredResults = filteredResults.filter(payment => statusArray.includes(payment.status));
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);

    const paginatedResult = filteredResults.slice(startIndex, endIndex);

    res.json({
        entities: paginatedResult,
        total: filteredResults.length,
        page: parseInt(page),
        limit: parseInt(limit)
    });
});

app.get('/payments/:id', async (req, res) => {
    await simulateLoading();

    if (simulateError()) {
        return res.status(500).json({ error: "Internal Server Error. Please try again later." });
    }

    const paymentId = req.params.id;
    const payment = payments.entities.find(p => p.id === paymentId);

    if (payment) {
        res.json(payment);
    } else {
        res.status(404).json({ error: "Payment not found" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});