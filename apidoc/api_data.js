define({ "api": [  {    "type": "get",    "url": "/",    "title": "Ping the server",    "name": "Basic_Ping",    "group": "Ping",    "version": "0.1.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n Hello, World!",          "type": "json"        }      ]    },    "filename": "./index.js",    "groupTitle": "Ping"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p> "          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./apidoc/main.js",    "group": "_Users_elf_Desktop_Github_MissionBit_Fall_2015_apidoc_main_js",    "groupTitle": "_Users_elf_Desktop_Github_MissionBit_Fall_2015_apidoc_main_js",    "name": ""  }] });