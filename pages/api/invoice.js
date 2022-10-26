const Xendit = require('xendit-node');

const x = new Xendit({
  secretKey:
    'xnd_development_XZOlxBJZBcQ722ZbUteissPxjt0EU94qcA40zERr3gTAAGi09uSanvnvQTxs7vz',
});

export default async function handler(req, res) {
  const { Invoice } = x;
  const invoiceSpecificOptions = {};
  const i = new Invoice(invoiceSpecificOptions);

  const invoice = await i.createInvoice({
    externalID: 'dasdef21q3rdf3q2f',
    payerEmail: 'stanley@xendit.co',
    description: 'Invoice for Shoes Purchase',
    amount: 100000,
  });

  console.log(invoice);
  res.status(200).json({ invoice });
}
