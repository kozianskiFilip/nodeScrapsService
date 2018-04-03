var oracledb = require('oracledb');
var dataRow = new Object();


oracledb.getConnection(
    {
        user: "minimes_ff_wbr",
        password: "Baza0racl3appl1cs",
        connectString: "172.22.8.47/ORA"
    },
    function (err, connection)
    {
        if (err)
        {
            console.error(err);
            return;
        }
        connection.execute(
            "SELECT * FROM MACHINES@CUREMES",
            {}, //WIAZANIE ZMIENNYCH
            {//WŁAŚCIWOŚCI
                //  resultSet: true
                maxRows: 1000000
            },
            function (err, result)
            {
                if (err)
                {
                    console.error(err);
                    return;
                }

                console.log(result.rows[1]);
            });
    });

