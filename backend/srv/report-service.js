const cds = require("@sap/cds");

module.exports = async function (srv) {
  const db = await cds.connect.to("db");

  srv.on("getKPI", async (req) => {
    const { region, from, to } = req.data;

    const result = await SELECT.from("reporting.SalesData")
      .columns("SUM(sales) as totalSales", "SUM(quantity) as totalQuantity")
      .where({ region })
      .and(`date >=`, from)
      .and(`date <=`, to);

    return result[0];
  });
};
