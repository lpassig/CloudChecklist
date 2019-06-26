import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import logo from "./1200x630wa.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
require("icheck");

Survey.StylesManager.applyTheme("bootstrap");

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

var azure = require('azure-storage');
var connectionString = "DefaultEndpointsProtocol=https;AccountName=mysurvey;AccountKey=GnKhWIl8u6T6vrk6TUYmM3S6/2I7jwiJX5H/Im5WlXtkV3txUpoKIHz9ECNWd5OuFXmkxFDGpPxDbTgpJZBNHg==;EndpointSuffix=core.windows.net"

var tableService = azure.createTableService(connectionString);

/*
const CosmosClient = require('@azure/cosmos').CosmosClient;
const endpoint = "https://mysurv.documents.azure.com:443/";
const primaryKey = "1VtNHoTzkE8ZZvpqGMUiYLVHDap63Q89mg12ZgBRU3M6O33VOZUpLfHiRtTcV5EGomdP52UsO9VKJBVE6SNocw==";
const databaseId = "MySurvey";
const collectionId = "surveydata";

const masterKey = primaryKey;
const containerId = collectionId;

const client = new CosmosClient({ endpoint: endpoint, auth: { masterKey: masterKey } });

async function createFamilyItem(itemBody) {
  await client.database(databaseId).container(containerId).items.upsert(itemBody);
  console.log(`Created family item with id:\n${itemBody.id}\n`);
};
*/

function S4() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
  }
class App extends Component {
  json = {
    "pages": [
     {
      "name": "Use Case",
      "elements": [
       {
        "type": "panel",
        "name": "Use Case Description1",
        "elements": [
         {
          "type": "radiogroup",
          "name": "question1",
          "title": "How would you classify your use case or workload?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "PoC or Prototype"
           },
           {
            "value": "item2",
            "text": "MVP"
           },
           {
            "value": "item3",
            "text": "Pilot or Product"
           }
          ]
         },
         {
          "type": "comment",
          "name": "question2",
          "visible": false,
          "visibleIf": "{question1} = \"item1\"",
          "title": "Please enter a short description of what you want to proof/test!",
          "isRequired": true
         },
         {
          "type": "comment",
          "name": "question3",
          "visibleIf": "{question1} = \"item2\"",
          "title": "Please enter a short description of what you want to deliver!",
          "isRequired": true
         },
         {
          "type": "comment",
          "name": "question4",
          "visible": false,
          "visibleIf": "{question1} = \"item3\"",
          "title": "Please enter a short description of the final/ongoing product!",
          "isRequired": true
         }
        ],
        "title": "Use Case Description"
       }
      ]
     },
     {
      "name": "Rate your use case or workload!",
      "elements": [
       {
        "type": "panel",
        "name": "panel4",
        "elements": [
         {
          "type": "rating",
          "name": "question5",
          "title": "Rate the complexity of your use case or workload!",
          "isRequired": true,
          "rateMax": 4
         },
         {
          "type": "rating",
          "name": "question6",
          "title": "Rate the risk of your use case or workload!",
          "isRequired": true,
          "rateMax": 4
         },
         {
          "type": "dropdown",
          "name": "question8",
          "title": "Rate the business criticality of your use case or workload!",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Business Supporting (1)"
           },
           {
            "value": "item2",
            "text": "Business Core (2)"
           },
           {
            "value": "item3",
            "text": "Business Essential (3)"
           },
           {
            "value": "item4",
            "text": "Mission Critical (4)"
           }
          ]
         }
        ],
        "title": "Rate your use case or workload! (1 Lowest / 4 Highest)"
       }
      ],
      "visibleIf": "{question1} <> \"item1\""
     },
     {
      "name": "Migration / Service Model",
      "elements": [
       {
        "type": "panel",
        "name": "panel1",
        "elements": [
         {
          "type": "html",
          "name": "question51",
          "html": "<img src=\"https://mysurvey.blob.core.windows.net/pictures/MigrationTriggers.png\" width=\"958\" height=\"408\">"
         },
         {
          "type": "radiogroup",
          "name": "question7",
          "title": "Name your trigger:",
          "isRequired": true,
          "hasOther": true,
          "choices": [
           {
            "value": "item1",
            "text": "Datacenter contract expiry"
           },
           {
            "value": "item2",
            "text": "Quickly integrate acquisitions"
           },
           {
            "value": "item3",
            "text": "Urgent capacity needs"
           },
           {
            "value": "item4",
            "text": "Software and hardware refresh"
           },
           {
            "value": "item6",
            "text": "Compliance"
           },
           {
            "value": "item7",
            "text": "Application innovation"
           },
           {
            "value": "item8",
            "text": "Software end of support"
           }
          ],
          "otherText": "Other"
         }
        ],
        "title": "What is your Migration driver or trigger?"
       },
       {
        "type": "panel",
        "name": "panel5",
        "elements": [
         {
          "type": "html",
          "name": "question52",
          "html": "<img src=\"https://mysurvey.blob.core.windows.net/pictures/MigrationApproach.png\" width=\"958\" height=\"408\">"
         },
         {
          "type": "radiogroup",
          "name": "question53",
          "title": "Whats your migration strategy?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "(Retain)"
           },
           {
            "value": "item2",
            "text": "Rehost"
           },
           {
            "value": "item3",
            "text": "Refactor"
           },
           {
            "value": "item4",
            "text": "Rearchitect"
           },
           {
            "value": "item5",
            "text": "Rebuild"
           },
           {
            "value": "item6",
            "text": "Replace"
           },
           {
            "value": "item7",
            "text": "Retire"
           },
           {
            "value": "item8",
            "text": "Hybrid"
           }
          ],
          "otherText": "Hybrid"
         },
         {
          "type": "checkbox",
          "name": "question11",
          "title": "What service model do you what choose? (Multiple choices allowed)",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Infrastructure as a Service (IaaS)"
           },
           {
            "value": "item2",
            "text": "Platform as a Service (PaaS)"
           },
           {
            "value": "item4",
            "text": "Cloud Native (e.g. Serverless)"
           },
           {
            "value": "item3",
            "text": "Software as a Service (SaaS)"
           }
          ]
         }
        ],
        "title": "What is your migration strategy?"
       },
       {
        "type": "panel",
        "name": "panel6",
        "elements": [
         {
          "type": "radiogroup",
          "name": "question54",
          "title": "Do you want to see how MS did it?",
          "choices": [
           {
            "value": "item1",
            "text": "Yes"
           },
           {
            "value": "item2",
            "text": "No"
           }
          ]
         },
         {
          "type": "html",
          "name": "question55",
          "visibleIf": "{question54} = \"item1\"",
          "html": "<img src=\"https://mysurvey.blob.core.windows.net/pictures/Slide1.PNG\" width=\"958\" height=\"558\">"
         },
         {
          "type": "html",
          "name": "question58",
          "visibleIf": "{question54} = \"item1\"",
          "html": "<img src=\"https://mysurvey.blob.core.windows.net/pictures/Slide2.PNG\" width=\"958\" height=\"558\">"
         },
         {
          "type": "html",
          "name": "question57",
          "visibleIf": "{question54} = \"item1\"",
          "html": "<img src=\"https://mysurvey.blob.core.windows.net/pictures/Slide3.PNG\" width=\"958\" height=\"558\">"
         },
         {
          "type": "html",
          "name": "question56",
          "visibleIf": "{question54} = \"item1\"",
          "html": "<img src=\"https://mysurvey.blob.core.windows.net/pictures/Slide4.PNG\" width=\"958\" height=\"558\">"
         }
        ],
        "title": "Case Study"
       }
      ],
      "title": "Migration / Service Model"
     },
     {
      "name": "Accountability",
      "elements": [
       {
        "type": "text",
        "name": "question10",
        "title": "Name of the Business Unit/Group",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "question12",
        "title": "Name the (Business) Application/Use Case Sponsor (Enter the mail address!)",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "question13",
        "title": "Name the (Technical) Application/Use Case Owner  (Enter the mail address!)",
        "isRequired": true
       },
       {
        "type": "radiogroup",
        "name": "question18",
        "title": "Who is implementing the solution?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Internal Implementation Team"
         },
         {
          "value": "item2",
          "text": "External Implementation Team"
         },
         {
          "value": "item3",
          "text": "Mixed Implementation Team"
         }
        ]
       }
      ],
      "title": "Accountability",
      "description": "Tell us more about the team behind the use case or product.\n"
     },
     {
      "name": "Commercial/Billing",
      "elements": [
       {
        "type": "text",
        "name": "question14",
        "title": "Cost Center",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "question17",
        "title": "Name of the billing contact (Enter the mail address!)",
        "isRequired": true
       }
      ],
      "title": "Commercial/Billing",
      "description": "Make sure internal billing has been clarified."
     },
     {
      "name": "Responsibility",
      "elements": [
       {
        "type": "panel",
        "name": "Be aware of the following!",
        "elements": [
         {
          "type": "html",
          "name": "question16",
          "html": "<h4 style=\"color: #5e9ca0;\">Cloud Design Pattern</h4>\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/architecture/patterns/\">Visit the Cloud Design Patterns</a><br>\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/architecture/guide/design-principles/\">Visit the 10 design principles for Azure applications</a>\n\n<h4 style=\"color: #5e9ca0;\">Cloud Security Requirements</h4>\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/security/security-best-practices-and-patterns\">Visit the Azure security best practices and patterns</a><br>\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/security/security-white-papers/\">Visit the Azure Security white papers</a>\n\n<h4 style=\"color: #5e9ca0;\">External/regulatory compliance requirements</h4>\n<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/security/blueprints/pcidss-iaaswa-overview\">Visit the IaaS PCI DSS Sample App</a>"
         },
         {
            "type": "signaturepad",
            "name": "sign",
            "title": "I acknowlege! (Sign here)"
        }
        ],
        "title": "Be aware of the following!"
       }
      ],
      "visibleIf": "{question1} <> \"item1\"",
      "title": "Responsibility ",
      "description": "Make sure the e.g. application owners are aware their responsibilities in the cloud."
     },
     {
      "name": "Data Lifecylce Management",
      "elements": [
       {
        "type": "dropdown",
        "name": "question19",
        "title": "Rate the data criticality of your use case or workload!",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Non-business (1)"
         },
         {
          "value": "item2",
          "text": "Public (2)"
         },
         {
          "value": "item3",
          "text": "General (3)"
         },
         {
          "value": "item4",
          "text": "Confidential (4)"
         },
         {
          "value": "item5",
          "text": "Highly confidential (5)"
         }
        ]
       },
       {
        "type": "dropdown",
        "name": "question21",
        "title": "Where is your data hosted?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "EU"
         },
         {
          "value": "item2",
          "text": "China"
         },
         {
          "value": "item3",
          "text": "US"
         },
         {
          "value": "item4",
          "text": "Canada"
         },
         {
          "value": "item5",
          "text": "Worldwide"
         }
        ],
        "otherText": "Other"
       },
       {
        "type": "radiogroup",
        "name": "question20",
        "title": "Is your data GDPR relevant?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question45",
        "title": "How do you do Backup and Recovery?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Managed Service/concept by CCoE"
         },
         {
          "value": "item2",
          "text": "Self Management Approach"
         }
        ]
       }
      ],
      "visibleIf": "{question1} <> \"item1\"",
      "title": "Data Lifecylce Management",
      "description": "Make sure there was a data classification."
     },
     {
      "name": "Connectivity",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question22",
        "title": "No Connection required",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "No Connection required (Island solution)"
         },
         {
          "value": "item2",
          "text": "Connection required"
         }
        ]
       },
       {
        "type": "panel",
        "name": "panel2",
        "elements": [
         {
          "type": "text",
          "name": "question23",
          "title": "Name system(s) that connection is required to!",
          "isRequired": true
         },
         {
          "type": "dropdown",
          "name": "question24",
          "title": "Name the highest business criticality of all connected system!",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Business Supporting (1)"
           },
           {
            "value": "item2",
            "text": "Business Core (2)"
           },
           {
            "value": "item3",
            "text": "Business Essential (3)"
           },
           {
            "value": "item4",
            "text": "Mission Critical (4)"
           }
          ]
         },
         {
          "type": "radiogroup",
          "name": "question25",
          "title": "Name your preferred connection method",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "VPN - Connection (Azure to On premise) "
           },
           {
            "value": "item2",
            "text": "ExpressRoute - Connection (Azure to On premise)"
           },
           {
            "value": "item3",
            "text": "Peering - Connection (Azure to Azure)"
           }
          ]
         }
        ],
        "visible": false,
        "visibleIf": "{question22} = \"item2\""
       }
      ],
      "title": "Connectivity",
      "description": "Make sure the connectivity requirements are set."
     },
     {
      "name": "Security",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question26",
        "title": "Monitoring and Logging approach",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Managed Service/concept by CCoE"
         },
         {
          "value": "item2",
          "text": "Self Management Approach"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question9",
        "title": "Threat and vulnerability management approach",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Managed Service/concept by CCoE"
         },
         {
          "value": "item2",
          "text": "Self Management Approach"
         }
        ]
       },
       {
        "type": "panel",
        "name": "Encryption approach",
        "elements": [
         {
          "type": "radiogroup",
          "name": "question27",
          "visibleIf": "{question19} contains \"item3\" or {question19} contains \"item2\" or {question19} contains \"item1\" or {question8} contains \"item1\" or {question8} contains \"item2\"",
          "title": "Key Management (Azure Managed)",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Managed Service/concept by CCoE"
           },
           {
            "value": "item2",
            "text": "Self Management Approach"
           }
          ]
         },
         {
          "type": "radiogroup",
          "name": "question62",
          "visibleIf": "{question19} contains \"item5\" or {question19} contains \"item4\" or {question8} contains \"item3\" or {question8} contains \"item4\"",
          "title": "Key Management (Bring Your Own Key - BYOK)",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Managed Service/concept by CCoE"
           },
           {
            "value": "item2",
            "text": "Self Management Approach"
           }
          ]
         },
         {
          "type": "radiogroup",
          "name": "question50",
          "title": "At Rest (e.g. AzureStorage, SQL)",
          "visibleIf": "{question19} contains \"item3\" or {question19} contains \"item4\" or {question19} contains \"item5\"",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Managed Service/concept by CCoE"
           },
           {
            "value": "item2",
            "text": "Self Management Approach"
           }
          ]
         },
         {
          "type": "radiogroup",
          "name": "question28",
          "title": "In Transit (e.g. HTTPS) ",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Managed Service/concept by CCoE"
           },
           {
            "value": "item2",
            "text": "Self Management Approach"
           }
          ]
         },
         {
          "type": "radiogroup",
          "name": "question29",
          "visibleIf": "{question19} contains \"item5\" or {question19} contains \"item4\" or {question8} contains \"item4\"",
          "title": "In Use (e.g. Confidential Computing)",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Managed Service/concept by CCoE"
           },
           {
            "value": "item2",
            "text": "Self Management Approach"
           }
          ]
         }
        ],
        "title": "Encryption approach"
       }
      ],
      "visibleIf": "{question1} <> \"item1\"",
      "title": "Security",
      "description": "Different requirements based on data and business criticality (Philosophy: Trust but Control)"
     },
     {
      "name": "Identity Access Management",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question30",
        "title": "Who is implementing/developing the solution?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Internal Implementation Team"
         },
         {
          "value": "item2",
          "text": "External Implementation Team"
         },
         {
          "value": "item3",
          "text": "Mixed Implementation Team"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question32",
        "title": "Who is administrating the solution?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Internal Implementation Team"
         },
         {
          "value": "item2",
          "text": "External Implementation Team"
         },
         {
          "value": "item3",
          "text": "Mixed Implementation Team"
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "question31",
        "title": "Circle of end users (Multiplice choices allowed!)",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Internal"
         },
         {
          "value": "item2",
          "text": "External - Business 2 Customer (B2C)"
         },
         {
          "value": "item3",
          "text": "External - Business 2 Business (B2B)"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question33",
        "title": "Azure RBAC Approach",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Managed Service/concept by CCoE"
         },
         {
          "value": "item2",
          "text": "Self Management Approach"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question15",
        "title": "Application Access and Authorization Approach",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Managed Service/concept by CCoE"
         },
         {
          "value": "item2",
          "text": "Self Management Approach"
         }
        ]
       }
      ],
      "visibleIf": "{question1} <> \"item1\"",
      "title": "Identity Access Management",
      "description": "Make sure the baseline for IAM is set."
     },
     {
      "name": "Additional questions based on your input!",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question43",
        "visibleIf": "{question1} != \"item1\" and {question11} contains \"item1\"",
        "title": "Which tool do you use for OS Hardening?",
        "hasOther": true,
        "choices": [
         {
          "value": "item1",
          "text": "DSC"
         },
         {
          "value": "item2",
          "text": "Chef"
         },
         {
          "value": "item3",
          "text": "Puppet"
         },
         {
          "value": "item4",
          "text": "Ansible"
         },
         {
          "value": "item5",
          "text": "CCoE Service Offering"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question44",
        "visibleIf": "{question1} != \"item1\" and {question11} contains \"item1\"",
        "title": "Which tool do you use for Configuration Management?",
        "hasOther": true,
        "choices": [
         {
          "value": "item1",
          "text": "DSC"
         },
         {
          "value": "item2",
          "text": "Chef"
         },
         {
          "value": "item3",
          "text": "Puppet"
         },
         {
          "value": "item4",
          "text": "Ansible"
         },
         {
          "value": "item5",
          "text": "CCoE Service Offering"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question40",
        "visibleIf": "{question1} != \"item1\" and {question11} contains \"item1\"",
        "title": "Which tool do you use for Patch Management?",
        "hasOther": true,
        "choices": [
         {
          "value": "item1",
          "text": "WSUS"
         },
         {
          "value": "item2",
          "text": "Azure Update Management"
         },
         {
          "value": "item5",
          "text": "CCoE Service Offering"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question41",
        "visibleIf": "{question11} contains \"item1\" or {question11} contains \"item2\"",
        "title": "What kind of CIDR (IP-Adressbock) range do you need?",
        "hasOther": true,
        "choices": [
         {
          "value": "item1",
          "text": "/24"
         },
         {
          "value": "item2",
          "text": "/26"
         },
         {
          "value": "item3",
          "text": "/27"
         },
         {
          "value": "item4",
          "text": "/28"
         },
         {
          "value": "item5",
          "text": "N/A"
         }
        ]
       }
      ],
      "visibleIf": "{question11} contains \"item1\" or {question11} contains \"item2\"",
      "title": "Additional questions based on your input!"
     },
     {
      "name": "Outcome/Next Steps:",
      "elements": [
       {
        "type": "panel",
        "name": "panel3",
        "elements": [
         {
          "type": "html",
          "name": "question34",
          "visibleIf": "{question20} = \"item1\"",
          "html": "<h3 style=\"color: #5e9ca0;\">Involve Legal and Compliance Team due to GDPR!</h3> Find more here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://gdpr.eu/checklist/\">Link</a>"
         },
         {
          "type": "html",
          "name": "question39",
          "visibleIf": "{question26} = \"item2\"",
          "html": "<h3 style=\"color: #5e9ca0;\">Write an Monitoring and Logging concept!</h3> Find more here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/security/security-management-and-monitoring-overview\">Link</a> and here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/security/azure-log-audit\">Link</a>"
         },
         {
          "type": "html",
          "name": "question49",
          "visibleIf": "{question1} != \"item1\" and {question40} notempty and {question40} != \"item5\" and {question11} anyof [\"item1\",\"item2\"]",
          "html": "<h3 style=\"color: #5e9ca0;\">Write an OS Management (Patching) concept!</h3> Find more here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/security/azure-security-iaas\">Link</a>"
         },
         {
          "type": "html",
          "name": "question60",
          "visibleIf": "{question1} != \"item1\" and {question44} notempty and {question44} != \"item5\" and {question11} anyof [\"item1\",\"item2\"]",
          "html": "<h3 style=\"color: #5e9ca0;\">Write an OS Management (Configuration Management) concept!</h3>  Find more here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/security/azure-security-iaas\">Link</a>"
         },
         {
          "type": "html",
          "name": "question59",
          "visibleIf": "{question1} != \"item1\" and {question43} notempty and {question43} != \"item5\" and {question11} anyof [\"item1\",\"item2\"]",
          "html": "<h3 style=\"color: #5e9ca0;\">Write an OS Management (OS Hardening) concept!</h3> Find more here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/security/azure-security-iaas\">Link</a>"
         },
         {
          "type": "html",
          "name": "question42",
          "visibleIf": "{question9} = \"item2\"",
          "html": "<h3 style=\"color: #5e9ca0;\">Write a threat and vulnerability management concept!</h3> Find more here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/security/azure-threat-detection\">Link</a>"
         },
         {
          "type": "html",
          "name": "question46",
          "visibleIf": "{question33} = \"item2\"",
          "html": "<h3 style=\"color: #5e9ca0;\">Write an Azure RBAC concept!</h3> Find more here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/architecture/cloud-adoption/governance/resource-consistency/governance-multiple-teams?view=tfs-2017#resource-management-model\">Link</a>"
         },
         {
          "type": "html",
          "name": "question47",
          "visibleIf": "{question45} = \"item2\"",
          "html": "<h3 style=\"color: #5e9ca0;\">Write an Backup and Recovery concept!</h3> Find more here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://blogs.technet.microsoft.com/tangent_thoughts/2015/10/09/azure-dr-options/\">Link</a>"
         },
         {
          "type": "html",
          "name": "question48",
          "visibleIf": "{question15} = \"item2\"",
          "html": "<h3 style=\"color: #5e9ca0;\">Write an Access and Authorization concept!</h3> Find more here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/security/abstract-develop-secure-apps\">Link</a>"
         },
         {
          "type": "html",
          "name": "question38",
          "visibleIf": "{question50} = \"item2\"",
          "html": "<h3 style=\"color: #5e9ca0;\">Write an encryption AT REST concept!</h3> Find more here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/architecture/cloud-adoption/decision-guides/encryption/\">Link</a> and here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/security/security-azure-encryption-overview\">Link</a>"
         },
         {
          "type": "html",
          "name": "question36",
          "visibleIf": "{question28} = \"item2\"",
          "html": "<h3 style=\"color: #5e9ca0;\">Write an encryption IN TRANSIT concept!</h3> Find more here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/security/azure-security-technical-capabilities#secure-your-application\">Link</a>"
         },
         {
          "type": "html",
          "name": "question35",
          "visibleIf": "{question29} = \"item2\"",
          "html": "<h3 style=\"color: #5e9ca0;\">Write an encryption IN USE concept!</h3> Find more here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://azure.microsoft.com/en-us/solutions/confidential-compute/\">Link</a>"
         },
         {
          "type": "html",
          "name": "question61",
          "visibleIf": "{question27} = \"item2\"",
          "html": "<h3 style=\"color: #5e9ca0;\">Write a Key Management concept!</h3> Find more here: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.microsoft.com/en-us/azure/security/security-azure-encryption-overview\">Link</a>"
         },
         {
          "type": "rating",
          "name": "question37",
          "title": "How would you rate this guide?"
         }
        ],
        "title": "What do you need to do?"
       }
      ],
      "title": "Outcome/Next Steps:",
      "description": "What does the team need to do next? "
     }
    ],
    "showTitle": false,
    "completedHtml": "<p><h4>Thank you for telling us about your use case!</h4></p><p>The Cloud Center of Excellence will be in touch using the following email-addresses : <b>{question12}</b> and <b>{question12}</b>"
   };

  onValueChanged(result) {
    console.log("value changed!");
  } 
   
  onComplete(result) {
    console.log("Complete! " + result);
    
    var guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();

    var entGen = azure.TableUtilities.entityGenerator;
    
    var myJSON = JSON.stringify(result.data);
    var entity = {
      PartitionKey: entGen.String(guid),
      RowKey: entGen.String('row1'),
      myJSON
    }
    tableService.insertEntity('mytable', entity, function(error, result, response) {
      if (!error) {
        // result contains the ETag for the new entity
      }
    });
    // createFamilyItem(JSON.stringify(result.data))
  }
  

  render() {
    Survey.Survey.cssType = "bootstrap";
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Cloud Checklist<br/>Version 0.1</h1>
        </div>
        <div className="surveyjs">
          {/*If you want to show survey, uncomment the line below*/}
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
        </div>
        <p className="App-intro">
          For feedback and ideas connect with me on Twitter: <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lennoert">@lennoert</a>
        </p>
      </div>
    );
  }
}

export default App;
