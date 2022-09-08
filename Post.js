router.post('/api/freight',(req, res) => {
    var idOwner = req.body.idOwner;
	var idCompany = req.body.idCompany;
	var idType = req.body.idType;
	var idFreight = req.body.idFreight;
	var deliveryDate = req.body.deliveryDate;
	var orderNumber = req.body.orderNumber;
	var idTransportist = req.body.idTransportist;
	var idDriver = req.body.idDriver;
	var idVehicle = req.body.idVehicle;
	var idOrigin = req.body.idOrigin;
	var idOriginAddress = req.body.idOriginAddress;
	var idCustomer = req.body.idCustomer;
	var idCustomerAddress = req.body.idCustomerAddress;
	var idShipment = req.body.idShipment;	
    let sql = "CALL spAddFreight(" + idOwner + "," + idCompany + "," + idType + ",'" + idFreight + "','" + deliveryDate + "','" + orderNumber + "'," + idTransportist + "," + idDriver + "," + idVehicle + "," + idOrigin + "," + idOriginAddress + "," + idCustomer + "," + idCustomerAddress + "," + idShipment + ");"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
	  console.log("/api/freight");
    });
  });
