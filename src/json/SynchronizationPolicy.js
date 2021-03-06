export const SynchronizationPolicy = {
    "Synchronization Policy": {
        "Version": "VERA Demo Env - 0.0.0.2",
        "Locations": [
            {
                "System": "JIRA",
                "Name": "Tx3 Demo Jira Server",
                "Server": "http://jira-demo.tx3services.com:8080",
                "Service Account": "test_vera",
                "Service Password": "x2kwtrR5cZ/jdjdhjghdkjuyliuy9A=",
                "Urls": {
                    "Browser": "http://jira-demo.tx3services.com:8080/browse/{Key}",
                    "API": "http://jira-demo.tx3services.com:8080/rest/api/2/issue/{Issue ID}"
                }
            },
            {
                "System": "JIRA",
                "Name": "Tx3 JIRA Test Server",
                "Server": "http://tx3-jira-test.eastus.cloudapp.azure.com:8080/",
                "Service Account": "emailtesting@tx3services.com",
                "Service Password": "HVeTrBgQokjhgjmhgmnjhsnrty5667O8OkPqtKMp0RNedH9q+sm+nU0Kkr/Q==",
                "Urls": {
                    "Browser": "http://tx3-jira-test.eastus.cloudapp.azure.com:8080/browse/{Key}",
                    "API": "http://tx3-jira-test.eastus.cloudapp.azure.com:8080/rest/api/2/issue/{Issue ID}"
                }
            },
            {
                "System": "qTest",
                "Name": "Tricentis qTest Alcon Server",
                "Server": "https://kmdeva.qtestnet.com",
                "Urls": {
                    "Browser": "https://kmdeva.qtestnet.com/p/{Project ID}/portal/project#key={Key}",
                    "API": "https://kmdeva.qtestnet.com/api/v3/projects/{Project ID}/{Item Type}s/{Entity ID}"
                },
                "Service Account": "hfarris@tx3services.com",
                "Service Password": "jtbHVV67667657RzYZrJvfhgjhjhgdjhgdjhgdjhgdjhgjghFt1bM=",
                "qTest Name": "kmdeva"
            },
            {
                "System": "qTest",
                "Name": "Tx3 qTest Cloud Server",
                "Server": "https://tx3.qtestnet.com",
                "Urls": {
                    "Browser": "https://tx3.qtestnet.com/p/{Project ID}/portal/project#key={Key}",
                    "API": "https://tx3.qtestnet.com/api/v3/projects/{Project ID}/{Item Type}s/{Entity ID}"
                },
                "Service Account": "jberek@tx3services.com",
                "Service Password": "xVFmav0KADFwwqR5gnjgfhgfhst565465645sghgaaTjlLwmZRKA=",
                "qTest Name": "tx3"
            },
            {
                "System": "JIRA",
                "Name": "Jira Cloud",
                "Server": "https://tx3.atlassian.net",
                "Service Account": "emailtesting@tx3services.com",
                "Service Password": "HVeTrBgQ78IgawcfCn9O8OkPqtKM/Qp0RNedH9q+sm+nU76765765hthsrthgtwyw45s4hQ==",
                "Urls": {
                    "Browser": "https://tx3.atlassian.net/browse/{Key}",
                    "API": "https://tx3.atlassian.net/rest/api/2/issue/{Issue ID}"
                }
            },
            {
                "System": "JIRA",
                "Name": "Jira Cloud - Mnghe",
                "Server": "https://mnghe.atlassian.net",
                "Service Account": "emailtesting@tx3services.com",
                "Service Password": "dGba/evvbNmfxtrGeaXuQ3zRweFO2fdXdQdbeHgc5HzXsvpisBaNyXcH0FAsclmKKpiOrR/4DqS/fWJ0Jr5mSA==",
                "Urls": {
                    "Browser": "https://mnghe.atlassian.net/browse/{Key}",
                    "API": "https://mnghe.atlassian.net/rest/api/2/issue/{Issue ID}"
                }
            },
            {
                "System": "VERA",
                "Name": "Tx3 VERA Demo Server",
                "Server": "https://vera-demo.tx3services.com",
                "Urls": {
                    "Browser": "https://vera-demo.tx3services.com:8443/details/",
                    "API": "https://vera-demo.tx3services.com/rest/"
                },
                "Service Account": "",
                "Service Password": ""
            }
        ]
    }
}
