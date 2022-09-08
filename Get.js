//Listado de Fletes
router.get('/api/freights',(req, res) => {
    var idOwner = req.query.idOwner;
	var idLang = req.query.idLang;
    let sql = "CALL spGetFreightList(" + idOwner + "," + idLang + ");"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log("/api/freights");
    });
  });

//Listado de Fletes en Ruta
router.get('/api/freights/route',(req, res) => {
  var idOwner = req.query.idOwner;
  let sql = "CALL spGetFreightsOnRoute(" + idOwner + ");"
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
    console.log("/api/freights/route");
  });
});

//Rastreo flete
router.get('/api/freight/tracking',(req, res) => {
    var idType = req.query.idType;
	var idShipment = req.query.idShipment;
    let sql = "CALL spGetFreightLog(" + idType + "," + idShipment + ");"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log("/api/freight/tracking");
    });
  });
  
//Flete por ID
router.get('/api/freight/id',(req, res) => {
    var id = req.query.id;
    var idType = req.query.idType;
	var sapConnected = req.query.sapConnected;
    let sql = "CALL spGetFreightById (" + id + "," + idType + "," + sapConnected + ");"
    let query = conn.query(sql, (err, results) => {
      if(err) {
		  res.json({status: 400, 
	            data: null, 
				message: err});
	  }	  
	  else{
		  res.json({status: 200, 
	            data: {freight: results[0]}, 
				message: ""});
	  }		  
      console.log("/api/freight/id");
    });
  });
