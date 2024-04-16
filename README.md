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

## Install requeriments
```
pip install -r .\requeriments.txt
```
## Run server
```
py main.py
```

## Error  [WinError 32] \"dod"\
If you see this error, install Graphviz on a local (global) installation outside of the virtual environment
```
pip install graphviz
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

`POST /currencies`

    http://localhost:5000/currencies

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
    Status:200
    "isSuccess": true,
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

`POST /currencies/tree`

    http://localhost:5000/currencies/tree

Request
```
 Status:200
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
  Status:400
  {
      "error": string,
      "isSuccess": false,
      "tokens": [],
      "tree": []
  }
```
