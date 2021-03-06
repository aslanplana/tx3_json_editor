export const ApprovalPolicy ={
    "Approval Policy":
        {
            "Version": "Tx3 Demo 1.0.0.1",
            "Schema":
                {
                    "ID": "http://tx3services.com/schemas/0/0/approval-policy.json",
                    "Major": "0",
                    "Minor": "0"
                },
            "Approval Groups": [
                "Business",
                "Quality",
                "Technical"
            ],
            "Route Templates": [
                {
                    "Name": "GxP Defect Approval",
                    "Rank": "1",
                    "Record Types": [ "Defect" ],
                    "Levels": [
                        {
                            "Name": "Level 1",
                            "Approvers": [ "Business", "Technical" ]
                        },
                        {
                            "Name": "Level 2",
                            "Approvers": [ "Quality" ]
                        }
                    ],
                    "Constraints": [
                        {
                            "Type": "Field Is One Of",
                            "Name": "GxP",
                            "Values": ["Y"]
                        }
                    ]
                },
                {
                    "Name": "Defect Approval",
                    "Rank": "1",
                    "Record Types": [ "Defect" ],
                    "Levels": [
                        {
                            "Name": "Level 1",
                            "Approvers": [ "Business", "Technical" ]
                        }
                    ]
                },
                {
                    "Name": "GxP Story Approval",
                    "Rank": "1",
                    "Record Types": [ "Story" ],
                    "Levels": [
                        {
                            "Name": "Level 1",
                            "Approvers": [ "Business", "Technical" ]
                        },
                        {
                            "Name": "Level 2",
                            "Approvers": [ "Quality" ]
                        }
                    ],
                    "Constraints": [
                        {
                            "Type": "Field Is One Of",
                            "Name": "GxP",
                            "Values": ["Y"]
                        }
                    ]
                },            {
                    "Name": "Story Approval",
                    "Rank": "1",
                    "Record Types": [ "Story" ],
                    "Levels": [
                        {
                            "Name": "Level 1",
                            "Approvers": [ "Business", "Technical" ]
                        }
                    ]
                },
                {
                    "Name": "Issue Approval",
                    "Rank": "1",
                    "Record Types": [ "Issue" ],
                    "Levels": [
                        {
                            "Name": "Level 1",
                            "Approvers": [ "Business", "Technical" ]
                        }
                    ]
                },
                {
                    "Name": "GxP Test Run Approval",
                    "Rank": "1",
                    "Record Types": [
                        "Test Run",
                        "XRay Execution"
                    ],
                    "Levels": [
                        {
                            "Name": "Level 1",
                            "Approvers": [ "Business", "Technical" ]
                        },
                        {
                            "Name": "Level 2",
                            "Approvers": [ "Quality" ]
                        }
                    ],
                    "Constraints": [
                        {
                            "Type": "Field Is One Of",
                            "Name": "GxP",
                            "Values": ["Y"]
                        }
                    ]
                },
                {
                    "Name": "Test Run Approval",
                    "Rank": "1",
                    "Record Types": [
                        "Test Run",
                        "XRay Execution"
                    ],
                    "Levels": [
                        {
                            "Name": "Level 1",
                            "Approvers": [ "Business", "Technical" ]
                        }
                    ]
                },
                {
                    "Name": " GxP Test Case Approval",
                    "Rank": "1",
                    "Record Types": [
                        "Test Case",
                        "XRay Test",
                        "XRay Scenario",
                        "XRay Generic Test",
                        "XRay Manual Test",
                        "XRay Pre-Condition"
                    ],
                    "Levels": [
                        {
                            "Name": "Level 1",
                            "Approvers": [ "Technical", "Business" ]
                        },
                        {
                            "Name": "Level 2",
                            "Approvers": ["Quality"]
                        }
                    ],
                    "Constraints": [
                        {
                            "Type": "Field Is One Of",
                            "Name": "GxP",
                            "Values": ["Y"]
                        }
                    ]
                },
                {
                    "Name": " Test Case Approval",
                    "Rank": "1",
                    "Record Types": [
                        "Test Case",
                        "XRay Test",
                        "XRay Scenario",
                        "XRay Generic Test",
                        "XRay Manual Test",
                        "XRay Pre-Condition"
                    ],
                    "Levels": [
                        {
                            "Name": "Level 1",
                            "Approvers": [ "Technical", "Business" ]
                        }
                    ]
                },
                {
                    "Name": "Default Route Template",
                    "Rank": "99",
                    "Record Types": [  "General" ],
                    "Levels": [
                        {
                            "Name": "Level 1",
                            "Approvers": [ "Business" ]
                        }
                    ]
                }
            ]
        }
}
