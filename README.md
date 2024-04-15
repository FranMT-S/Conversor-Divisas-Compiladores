# Backend
The server runs by default localhost:5000 

## Dependencies
```
pip install  virtualenv
pip install ply
```
Create Virtual Enviroment
```
python -m virtualenv venv
.\venv\scripts\activate
```
# inner virtual enviroment
```
pip install -r .\requeriments.txt
```

## Endpoints

```TokenCurrency: "dolares"|"euros"|"lempiras"|"quetzales"|"librasesterlinas"|"balboas"|"yen"|"rupias"```  
```TokenCurrencyUpper: "DOLARES"|"EUROS"|"LEMPIRAS"|"QUETZALES"|"LIBRASESTERLINAS"|"BALBOAS"|"YEN"|"RUPIAS"```
```
token: {
        "position": number,
        "type": TokenCurrencyUpper,
        "value": "TokenCurrency"
       }
```

`POST /currency`

    http://localhost:5000/currency

Request
```
  {
    "cur_input":TokenCurrency,
    "cur_output":TokenCurrency,
    "value":number
  }
```

Response
```
{
    "isSuccess": boolean,
    "result": number,
    "tokens":token[],
    "tree": [
        [
            "currency",
            TokenCurrency
        ],
        [
            "value",
            number
        ],
        [
            "currency",
            TokenCurrency
        ]
    ]
}
```

`POST /currency/tree`

    http://localhost:5000/currency/tree

Request
```
  {
    "cur_input":TokenCurrency,
    "cur_output":TokenCurrency,
    "value":number
  }
```

Response
Image
```
    Status: 200 OK
    Connection: close
    Content-Type: image/png
    
```

Errors Response
```
  {
      "error": string,
      "isSuccess": false,
      "tokens": [],
      "tree": []
  }
```
