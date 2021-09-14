import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import clientRoutes from './routes/client.js';
import expenseRoutes from './routes/expense.js';
import expensepaymentRoutes from './routes/expensepayment.js';
import appointmentRoutes from './routes/appointment.js';
import appointmentDTRoutes from './routes/appointmentdetails.js';
import categoryRoutes from './routes/category.js';
import serviceRoutes from './routes/service.js';
import serviceeeRoutes from './routes/servicees.js';
import paymentRoutes from './routes/payments.js';



const app = express();


app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());
// app.use('/clients', clientRoutes);
// app.use('/expenses', expenseRoutes);
// app.use('/expensepayments', expensepaymentRoutes);


const CONNECTION_URL = "mongodb+srv://samah:samah-123@samah.dreli.mongodb.net/SamahCenter?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true //to avoid warnings and errors in the console
}).then(() => app.listen(PORT, () =>
    console.log(`Connection is established and running on port : ${PORT}`))
).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);

// app.locals.DOLLAR_ID = 1;
// app.locals.LB_ID = 2;


app.use('/clients', clientRoutes);
app.use('/expenses', expenseRoutes);
app.use('/expensepayments', expensepaymentRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/appointmentsDT', appointmentDTRoutes);
app.use('/category', categoryRoutes);
app.use('/service', serviceRoutes);
app.use('/servicees', serviceeeRoutes);
app.use('/payment', paymentRoutes);


