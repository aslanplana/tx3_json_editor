export const RecordsManagementPolicySchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "Records Management Policy": {
            "type": "object",
            "properties": {
                "Version": {
                    "type": "string"
                },
                "Schema": {
                    "type": "object",
                    "properties": {
                        "ID": {
                            "type": "string"
                        },
                        "Major": {
                            "type": "string"
                        },
                        "Minor": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "ID",
                        "Major",
                        "Minor"
                    ]
                },
                "Record Types": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "Name": {
                                "type": "string"
                            },
                            "Definitions": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "Systems": {
                                            "type": "array",
                                            "items": {
                                                    "type": "string"
                                                }

                                        },
                                        "Aliases": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "Policy Field": {
                                                        "type": "string"
                                                    },
                                                    "System Field": {
                                                        "type": "string"
                                                    }
                                                },
                                                "required": [
                                                    "Policy Field",
                                                    "System Field"
                                                ]
                                            }

                                        },
                                        "Item Types": {
                                            "type": "array",
                                            "items": {"type": "string"}

                                        },
                                        "Singular Name": {"type": "string"},
                                        "Plural Name": {"type": "string"},
                                        "Ownership Description": {"type": "string"},
                                        "Content Originator": {"type": "string"}
                                    },
                                    "required": [
                                        "Systems",
                                        "Aliases",
                                        "Item Types",
                                        "Singular Name",
                                        "Plural Name",
                                        "Ownership Description",
                                        "Content Originator"
                                    ]
                                }

                            },
                            "Fields": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "Name": {
                                            "type": "string"
                                        },
                                        "Is Data": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "Name",
                                        "Is Data"
                                    ]
                                },

                            }

                        }
                    },
                    "required": [
                        "Name",
                        "Definitions",
                        "Fields"
                    ]
                },

            }
        },
        "required": [
            "Version",
            "Schema",
            "Record Types"
        ]
    }
}
